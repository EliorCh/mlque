// ============================================================
// אפליקציית תרגול למבחן · מבוא ללמידת מכונה ומדעי הנתונים
// ============================================================

const STORAGE_KEY = 'mlds_state';

const TOPIC_TAG_CLASS = {
  python: 'app',
  pandas: 'trans',
  stats: 'net',
  inference: 'link',
  regression: 'sec',
  classification: 'gen',
  neural: 'app',
  clustering: 'net'
};

// ============================================================
// State management
// ============================================================

const State = {
  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : { history: [], marked: [] };
    } catch (e) {
      return { history: [], marked: [] };
    }
  },

  save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  },

  addExamResult(result) {
    const state = this.load();
    state.history.unshift({
      date: Date.now(),
      score: result.score,
      total: result.total,
      correct: result.correct,
      wrongIds: result.wrongIds,
      byTopic: result.byTopic
    });
    if (state.history.length > 50) state.history = state.history.slice(0, 50);
    this.save(state);
  },

  toggleMarked(questionId) {
    const state = this.load();
    const idx = state.marked.indexOf(questionId);
    if (idx >= 0) state.marked.splice(idx, 1);
    else state.marked.push(questionId);
    this.save(state);
    return state.marked.includes(questionId);
  },

  isMarked(questionId) {
    return this.load().marked.includes(questionId);
  }
};

// ============================================================
// Exam session
// ============================================================

const Exam = {
  session: null,
  timerInterval: null,

  // mode: 'full' (14 q, 150 min - כמבנה המבחן האמיתי) or 'sample' (7 q, 75 min)
  // format: 'mcq' (אמריקאי) or 'open' (פתוח - כתיבה חופשית + ציון עצמי)
  start(mode = 'full', format = 'mcq') {
    const size = mode === 'sample' ? 7 : 14;
    const minutes = mode === 'sample' ? 75 : 150;

    // pick questions, weighted toward different topics
    const byTopic = {};
    QUESTIONS.forEach(q => {
      if (!byTopic[q.topic]) byTopic[q.topic] = [];
      byTopic[q.topic].push(q);
    });

    const selected = [];
    Object.values(byTopic).forEach(arr => shuffle(arr));

    const topics = Object.keys(byTopic);
    const perTopic = Math.floor(size / topics.length);
    const remainder = size - perTopic * topics.length;

    topics.forEach((topic, i) => {
      const count = perTopic + (i < remainder ? 1 : 0);
      selected.push(...byTopic[topic].slice(0, count));
    });

    if (selected.length < size) {
      const allShuffled = shuffle([...QUESTIONS]);
      for (const q of allShuffled) {
        if (selected.length >= size) break;
        if (!selected.includes(q)) selected.push(q);
      }
    }

    shuffle(selected);
    // resolveVariant: calculation questions get random numbers per session
    const questions = selected.slice(0, size).map(resolveVariant);

    // Build per-session option-order permutations. optionOrders[i][p] = the
    // original position in q.options that should be displayed at slot p.
    // This means: every time the user takes the exam, the option order is
    // different, so they can't memorize "the answer is always א".
    const optionOrders = questions.map(q => {
      const perm = q.options.map((_, idx) => idx);
      shuffle(perm);
      return perm;
    });

    this.session = {
      mode,
      format,
      size,
      questions,
      optionOrders,
      answers: new Array(size).fill(null), // stored as ORIGINAL indices
      openAnswers: new Array(size).fill(''), // free-text answers in open format
      selfGrades: new Array(size).fill(null), // 0-5 self grades (open format)
      flagged: new Set(),
      currentIdx: 0,
      startTime: Date.now(),
      duration: minutes * 60 * 1000,
    };

    this.show();
    this.startTimer();
  },

  show() {
    showView('exam');
    this.renderNav();
    this.renderQuestion();
  },

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.updateTimer();
    }, 1000);
    this.updateTimer();
  },

  updateTimer() {
    if (!this.session) return;
    const elapsed = Date.now() - this.session.startTime;
    const remaining = this.session.duration - elapsed;
    const timerEl = document.getElementById('exam-timer');

    if (remaining <= 0) {
      timerEl.textContent = '00:00';
      timerEl.classList.add('critical');
      this.submit(true);
      return;
    }

    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    timerEl.textContent = `${pad(mins)}:${pad(secs)}`;

    if (remaining < 5 * 60 * 1000) {
      timerEl.classList.remove('warning');
      timerEl.classList.add('critical');
    } else if (remaining < 15 * 60 * 1000) {
      timerEl.classList.add('warning');
      timerEl.classList.remove('critical');
    }
  },

  renderNav() {
    const nav = document.getElementById('exam-nav');
    nav.innerHTML = `
      <div class="exam-nav-title">ניווט בין שאלות</div>
      <div class="exam-nav-grid">
        ${this.session.questions.map((q, i) => `
          <button class="q-nav-btn ${(this.session.format === 'open' ? this.session.openAnswers[i].trim() !== '' : this.session.answers[i] !== null) ? 'answered' : ''} ${i === this.session.currentIdx ? 'current' : ''} ${this.session.flagged.has(i) ? 'flagged' : ''}" data-idx="${i}">
            ${i + 1}
          </button>
        `).join('')}
      </div>
      <div class="exam-nav-legend">
        <div class="legend-row"><div class="legend-dot answered"></div>נענתה</div>
        <div class="legend-row"><div class="legend-dot current"></div>נוכחית</div>
        <div class="legend-row"><div class="legend-dot"></div>טרם נענתה</div>
      </div>
    `;
    nav.querySelectorAll('.q-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.session.currentIdx = parseInt(btn.dataset.idx);
        this.renderNav();
        this.renderQuestion();
      });
    });
  },

  renderQuestion() {
    const q = this.session.questions[this.session.currentIdx];
    const selectedOriginal = this.session.answers[this.session.currentIdx]; // stored as ORIGINAL index
    const isFlagged = this.session.flagged.has(this.session.currentIdx);
    const perm = this.session.optionOrders[this.session.currentIdx];
    const size = this.session.size;

    // Map original-index back to display position
    let selectedDisplay = -1;
    if (selectedOriginal !== null) selectedDisplay = perm.indexOf(selectedOriginal);

    const points = Math.round(100 / size);

    document.getElementById('exam-progress').innerHTML =
      `שאלה <span class="ltr">${this.session.currentIdx + 1}</span> / <span class="ltr">${size}</span>`;

    document.getElementById('exam-question').innerHTML = `
      <div class="question-card">
        <div class="question-header">
          <div>
            <span class="question-number">שאלה <span class="ltr">${this.session.currentIdx + 1}</span> · <span class="ltr">${points}</span> נקודות</span>
          </div>
          <button class="question-flag ${isFlagged ? 'active' : ''}" data-action="flag">
            ${isFlagged ? '★ מסומנת' : '☆ סמן לחזרה'}
          </button>
        </div>
        <span class="topic-tag ${TOPIC_TAG_CLASS[q.topic]}">${TOPIC_NAMES[q.topic]} · ${q.subtopic}</span>
        <div class="question-text">${renderQuestionBody(q)}</div>
        ${this.session.format === 'open' ? `
        <div class="open-answer-area">
          <label class="open-answer-label">התשובה שלך (תוצג לצד הפתרון בשלב הבדיקה):</label>
          <textarea id="open-answer-input" class="open-answer-input" rows="5"
            placeholder="כתבו כאן את התשובה - פלט, חישוב, הסבר...">${this.session.openAnswers[this.session.currentIdx]}</textarea>
        </div>` : `
        <div class="options-list">
          ${perm.map((origIdx, displayIdx) => `
            <button class="option-item ${selectedDisplay === displayIdx ? 'selected' : ''}" data-display="${displayIdx}" data-orig="${origIdx}">
              <span class="option-letter">${'אבגדה'[displayIdx]}.</span>
              <span class="option-text">${renderRich(q.options[origIdx])}</span>
            </button>
          `).join('')}
        </div>`}
        <div class="question-footer">
          <button class="btn-secondary" data-action="prev" ${this.session.currentIdx === 0 ? 'disabled' : ''}>
            → קודמת
          </button>
          <span class="question-source">מקור: ${q.source}</span>
          <button class="btn-secondary" data-action="next" ${this.session.currentIdx === size - 1 ? 'disabled' : ''}>
            הבאה ←
          </button>
        </div>
      </div>
    `;

    // Open format: persist free-text answer as the user types
    const openInput = document.getElementById('open-answer-input');
    if (openInput) {
      openInput.addEventListener('input', () => {
        this.session.openAnswers[this.session.currentIdx] = openInput.value;
      });
      openInput.addEventListener('blur', () => this.renderNav());
    }

    // Store the user's choice as the ORIGINAL option index (so submit can
    // compare directly to q.correctIndex without any further translation)
    document.querySelectorAll('.option-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const orig = parseInt(btn.dataset.orig);
        this.session.answers[this.session.currentIdx] = orig;
        this.renderNav();
        this.renderQuestion();
      });
    });

    document.querySelector('[data-action="flag"]')?.addEventListener('click', () => {
      if (this.session.flagged.has(this.session.currentIdx)) {
        this.session.flagged.delete(this.session.currentIdx);
      } else {
        this.session.flagged.add(this.session.currentIdx);
      }
      this.renderNav();
      this.renderQuestion();
    });

    document.querySelector('[data-action="prev"]')?.addEventListener('click', () => {
      if (this.session.currentIdx > 0) {
        this.session.currentIdx--;
        this.renderNav();
        this.renderQuestion();
      }
    });

    document.querySelector('[data-action="next"]')?.addEventListener('click', () => {
      if (this.session.currentIdx < size - 1) {
        this.session.currentIdx++;
        this.renderNav();
        this.renderQuestion();
      }
    });

    renderMath();
  },

  submit(timeUp = false) {
    const isOpen = this.session.format === 'open';
    if (!timeUp) {
      const unanswered = isOpen
        ? this.session.openAnswers.filter(a => !a.trim()).length
        : this.session.answers.filter(a => a === null).length;
      if (unanswered > 0) {
        if (!confirm(`יש ${unanswered} שאלות לא ענויות. להמשיך עם הסיום?`)) return;
      }
    }

    clearInterval(this.timerInterval);

    if (isOpen) {
      this.showSelfGrading();
      return;
    }

    const size = this.session.size;
    const mode = this.session.mode;

    // calculate results
    let correct = 0;
    const wrongIds = [];
    const byTopic = {};

    this.session.questions.forEach((q, i) => {
      if (!byTopic[q.topic]) byTopic[q.topic] = { correct: 0, total: 0 };
      byTopic[q.topic].total++;
      if (this.session.answers[i] === q.correctIndex) {
        correct++;
        byTopic[q.topic].correct++;
      } else {
        wrongIds.push(q.id);
      }
    });

    const score = Math.round(correct * (100 / size));
    const result = { mode, size, score, total: 100, correct, wrongIds, byTopic, questions: this.session.questions, answers: this.session.answers };

    State.addExamResult(result);
    this.showResults(result);
    this.session = null;
  },

  // ---------- Open-format: self-grading (בדיקה עצמית 0-5 לכל שאלה) ----------
  showSelfGrading() {
    showView('results');
    const s = this.session;
    const container = document.getElementById('results-container');

    const gradedCount = () => s.selfGrades.filter(g => g !== null).length;
    const currentScore = () => {
      const sum = s.selfGrades.reduce((a, g) => a + (g || 0), 0);
      return Math.round((sum / (5 * s.size)) * 100);
    };

    container.innerHTML = `
      <div class="results-header">
        <div class="results-title">בדיקה עצמית - מבחן פתוח</div>
        <p class="grading-instructions">לכל שאלה: השוו את התשובה שכתבתם לפתרון, ודרגו מ-<span class="ltr">0</span> (לא קרוב בכלל) עד <span class="ltr">5</span> (תשובה מלאה). כמו מחוון אמיתי - היו כנים עם עצמכם.</p>
        <div class="grading-progress" id="grading-progress"></div>
      </div>
      <div class="grading-list">
        ${s.questions.map((q, i) => `
          <div class="grading-item" id="grade-item-${i}">
            <div class="question-meta">
              <span class="review-q-num">שאלה ${i + 1} · ${TOPIC_NAMES[q.topic]}</span>
            </div>
            <div class="question-text">${renderQuestionBody(q)}</div>
            <div class="answer-compare">
              <div class="answer-box student">
                <div class="answer-box-title">התשובה שלך:</div>
                <div class="answer-box-body">${s.openAnswers[i].trim() ? renderRich(s.openAnswers[i]) : '<em>לא נענתה</em>'}</div>
              </div>
              <div class="answer-box official">
                <div class="answer-box-title">הפתרון:</div>
                <div class="answer-box-body">
                  <div class="official-correct">${renderRich(q.options[q.correctIndex])}</div>
                  <div class="official-expl">${renderRich(q.explanation)}</div>
                </div>
              </div>
            </div>
            <div class="grade-row">
              <span class="grade-label">כמה קרובה התשובה שלך?</span>
              <div class="grade-btns">
                ${[0,1,2,3,4,5].map(g => `
                  <button class="grade-btn ${s.selfGrades[i] === g ? 'chosen' : ''}" data-gidx="${i}" data-grade="${g}">${g}</button>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="results-actions">
        <button class="btn-primary" id="finish-grading" disabled>סיים בדיקה והצג ציון</button>
      </div>
    `;

    const updateProgress = () => {
      document.getElementById('grading-progress').innerHTML =
        `דורגו <span class="ltr">${gradedCount()}</span> / <span class="ltr">${s.size}</span> · ציון נוכחי: <span class="ltr">${currentScore()}</span>`;
      document.getElementById('finish-grading').disabled = gradedCount() < s.size;
    };
    updateProgress();

    container.querySelectorAll('.grade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.dataset.gidx);
        s.selfGrades[i] = parseInt(btn.dataset.grade);
        document.querySelectorAll(`#grade-item-${i} .grade-btn`).forEach(b => b.classList.remove('chosen'));
        btn.classList.add('chosen');
        updateProgress();
      });
    });

    document.getElementById('finish-grading').addEventListener('click', () => {
      this.finishSelfGrading();
    });

    renderMath();
    window.scrollTo(0, 0);
  },

  finishSelfGrading() {
    const s = this.session;
    const wrongIds = [];
    const byTopic = {};
    let sum = 0;

    s.questions.forEach((q, i) => {
      const g = s.selfGrades[i] || 0;
      sum += g;
      if (!byTopic[q.topic]) byTopic[q.topic] = { correct: 0, total: 0 };
      byTopic[q.topic].total++;
      byTopic[q.topic].correct += g / 5; // partial credit per topic
      if (g <= 2) wrongIds.push(q.id); // feed weakness tracking
    });

    const score = Math.round((sum / (5 * s.size)) * 100);
    const correct = Math.round(sum / 5);
    const result = {
      mode: s.mode, format: 'open', size: s.size, score, total: 100,
      correct, wrongIds, byTopic,
      questions: s.questions, answers: s.answers,
      selfGrades: s.selfGrades.slice(), openAnswers: s.openAnswers.slice()
    };

    State.addExamResult(result);
    this.showResults(result);
    this.session = null;
  },

  showResults(result) {
    showView('results');
    const container = document.getElementById('results-container');
    const size = result.size || 20;

    let scoreClass = 'fail';
    let summaryText = 'יש לעבוד יותר. נסה תרגול לפי נושא.';
    if (result.score >= 90) { scoreClass = 'pass'; summaryText = 'מצוין! אתה מוכן למבחן.'; }
    else if (result.score >= 75) { scoreClass = 'pass'; summaryText = 'יפה מאוד. חזור על השאלות שטעית בהן.'; }
    else if (result.score >= 60) { scoreClass = 'average'; summaryText = 'עברת! אך יש מקום לשיפור.'; }

    const isOpen = result.format === 'open';
    const modeLabel = (result.mode === 'sample' ? 'מבחן לדוגמה' : 'מבחן מלא') + (isOpen ? ' · פורמט פתוח' : '');

    container.innerHTML = `
      <div class="results-header">
        <div class="results-title">ציון ${modeLabel}</div>
        <div class="results-score ${scoreClass}">${result.score}</div>
        <div class="results-summary">${summaryText}</div>
      </div>

      <div class="results-stats">
        ${isOpen ? `
        <div class="results-stat">
          <div class="results-stat-value">${result.selfGrades.reduce((a,g)=>a+(g||0),0)}/${5*size}</div>
          <div class="results-stat-label">נקודות (ציון עצמי)</div>
        </div>
        <div class="results-stat">
          <div class="results-stat-value">${result.selfGrades.filter(g=>g===5).length}</div>
          <div class="results-stat-label">תשובות מלאות (5)</div>
        </div>
        <div class="results-stat">
          <div class="results-stat-value">${result.wrongIds.length}</div>
          <div class="results-stat-label">חלשות (0-2) - נכנסו למעקב</div>
        </div>` : `
        <div class="results-stat">
          <div class="results-stat-value">${result.correct}/${size}</div>
          <div class="results-stat-label">תשובות נכונות</div>
        </div>
        <div class="results-stat">
          <div class="results-stat-value">${size - result.correct}</div>
          <div class="results-stat-label">טעויות</div>
        </div>
        <div class="results-stat">
          <div class="results-stat-value">${result.wrongIds.length === 0 ? '✓' : Math.round(result.correct / size * 100) + '%'}</div>
          <div class="results-stat-label">אחוז הצלחה</div>
        </div>`}
      </div>

      <div class="results-by-topic">
        <h3>פילוח לפי נושא</h3>
        ${Object.entries(result.byTopic).map(([topic, data]) => {
          const pct = data.total > 0 ? (data.correct / data.total * 100) : 0;
          return `
            <div class="topic-result">
              <div class="topic-result-name" style="color: ${TOPIC_COLORS[topic]}">${TOPIC_NAMES[topic]}</div>
              <div class="topic-result-bar">
                <div class="topic-result-bar-fill" style="width: ${pct}%; background: ${TOPIC_COLORS[topic]}"></div>
              </div>
              <div class="topic-result-score">${Math.round(data.correct * 10) / 10}/${data.total}</div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="results-actions">
        <button class="btn-primary" data-action="restart-exam">מבחן חדש</button>
        <button class="btn-secondary" data-action="back-home">חזרה לדף הבית</button>
      </div>

      <h2 class="results-review-title">סקירת השאלות</h2>
      ${result.questions.map((q, i) => {
        if (isOpen) {
          const g = result.selfGrades[i] || 0;
          const status = g >= 4 ? 'correct' : (g <= 2 ? 'incorrect' : 'unanswered');
          return `
            <details class="review-question ${status}">
              <summary class="review-q-header">
                <span class="review-q-num">שאלה ${i + 1} · ${TOPIC_NAMES[q.topic]}</span>
                <span class="review-q-status ${status}">ציון עצמי: ${g}/5</span>
              </summary>
              <div style="margin-top: 12px;">
                <div class="review-q-text">${renderQuestionBody(q)}</div>
                <div class="answer-compare">
                  <div class="answer-box student">
                    <div class="answer-box-title">התשובה שלך:</div>
                    <div class="answer-box-body">${(result.openAnswers[i]||'').trim() ? renderRich(result.openAnswers[i]) : '<em>לא נענתה</em>'}</div>
                  </div>
                  <div class="answer-box official">
                    <div class="answer-box-title">הפתרון:</div>
                    <div class="answer-box-body">${renderRich(q.options[q.correctIndex])}</div>
                  </div>
                </div>
                <div class="explanation">
                  <div class="explanation-label">הסבר</div>
                  <div class="explanation-body">${renderRich(q.explanation)}</div>
                </div>
              </div>
            </details>
          `;
        }
        const userAns = result.answers[i];
        const isCorrect = userAns === q.correctIndex;
        const isUnanswered = userAns === null;
        const status = isUnanswered ? 'unanswered' : (isCorrect ? 'correct' : 'incorrect');
        const statusText = isUnanswered ? 'לא נענתה' : (isCorrect ? '✓ נכון' : '✗ טעות');

        return `
          <details class="review-question ${status}">
            <summary class="review-q-header">
              <span class="review-q-num">שאלה ${i + 1} · ${TOPIC_NAMES[q.topic]}</span>
              <span class="review-q-status ${status}">${statusText}</span>
            </summary>
            <div style="margin-top: 12px;">
              <div class="review-q-text">${renderQuestionBody(q)}</div>
              <div class="options-list" style="margin-top: 16px;">
                ${q.options.map((opt, oi) => {
                  let cls = '';
                  if (oi === q.correctIndex) cls = 'correct';
                  else if (oi === userAns && oi !== q.correctIndex) cls = 'incorrect';
                  return `
                    <div class="option-item ${cls}" style="cursor: default;">
                      <span class="option-letter">${'אבגדה'[oi]}.</span>
                      <span class="option-text">${renderRich(opt)}</span>
                    </div>
                  `;
                }).join('')}
              </div>
              <div class="explanation">
                <div class="explanation-label">הסבר</div>
                <div class="explanation-body">${renderRich(q.explanation)}</div>
              </div>
            </div>
          </details>
        `;
      }).join('')}
    `;

    renderMath();
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  exit() {
    if (this.session && confirm('האם לצאת מהמבחן? התשובות לא יישמרו.')) {
      clearInterval(this.timerInterval);
      this.session = null;
      showView('home');
      renderHome();
    }
  }
};

// ============================================================
// Practice mode
// ============================================================

const Practice = {
  filters: { topics: new Set() },

  show() {
    showView('practice');
    this.renderFilters();
    this.renderQuestions();
  },

  renderFilters() {
    const container = document.getElementById('topic-filters');
    const topics = Object.keys(TOPIC_NAMES);
    container.innerHTML = topics.map(topic => `
      <button class="filter-chip ${this.filters.topics.has(topic) ? 'active' : ''}" 
              data-topic="${topic}"
              style="--chip-color: ${TOPIC_COLORS[topic]}">
        ${TOPIC_NAMES[topic]}
      </button>
    `).join('');

    container.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const topic = chip.dataset.topic;
        if (this.filters.topics.has(topic)) this.filters.topics.delete(topic);
        else this.filters.topics.add(topic);
        this.renderFilters();
        this.renderQuestions();
      });
    });
  },

  getFiltered() {
    if (this.filters.topics.size === 0) return QUESTIONS;
    return QUESTIONS.filter(q => this.filters.topics.has(q.topic));
  },

  renderQuestions() {
    // resolveVariant: calculation questions show random numbers each render
    const filtered = this.getFiltered().map(resolveVariant);
    this.resolved = {};
    filtered.forEach(q => { this.resolved[q.id] = q; });
    document.getElementById('filter-summary').textContent = `${filtered.length} שאלות`;

    const container = document.getElementById('practice-questions');
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⌕</div>
          <h3>אין שאלות תואמות</h3>
          <p>נסה לבחור נושא אחר</p>
        </div>`;
      return;
    }

    container.innerHTML = filtered.map((q, i) => this.renderPracticeQuestion(q, i)).join('');

    container.querySelectorAll('.option-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const qId = parseInt(btn.closest('[data-qid]').dataset.qid);
        const oIdx = parseInt(btn.dataset.option);
        const card = btn.closest('.practice-question');

        // disable all options
        card.querySelectorAll('.option-item').forEach((opt, i) => {
          opt.disabled = true;
          const q = this.resolved?.[qId] || QUESTIONS.find(qq => qq.id === qId);
          if (i === q.correctIndex) opt.classList.add('correct');
          else if (i === oIdx && i !== q.correctIndex) opt.classList.add('incorrect');
        });

        // show explanation
        const expBlock = card.querySelector('.explanation');
        if (expBlock) expBlock.style.display = 'block';

        renderMath();
      });
    });

    container.querySelectorAll('[data-action="flag"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qId = parseInt(btn.dataset.qid);
        const nowMarked = State.toggleMarked(qId);
        btn.classList.toggle('active', nowMarked);
        btn.textContent = nowMarked ? '★ מסומנת' : '☆ סמן לחזרה';
        showToast(nowMarked ? 'השאלה סומנה' : 'הסימון הוסר');
      });
    });

    renderMath();
  },

  renderPracticeQuestion(q, idx) {
    const isMarked = State.isMarked(q.id);
    return `
      <div class="practice-question" data-qid="${q.id}">
        <div class="practice-q-header">
          <div class="practice-q-meta">
            <span class="topic-tag ${TOPIC_TAG_CLASS[q.topic]}">${TOPIC_NAMES[q.topic]} · ${q.subtopic}</span>
            <span>מקור: ${q.source}</span>
          </div>
          <button class="question-flag ${isMarked ? 'active' : ''}" data-action="flag" data-qid="${q.id}">
            ${isMarked ? '★ מסומנת' : '☆ סמן לחזרה'}
          </button>
        </div>
        <div class="question-text">${renderQuestionBody(q)}</div>
        <div class="options-list">
          ${q.options.map((opt, i) => `
            <button class="option-item" data-option="${i}">
              <span class="option-letter">${'אבגדה'[i]}.</span>
              <span class="option-text">${renderRich(opt)}</span>
            </button>
          `).join('')}
        </div>
        <div class="explanation" style="display: none;">
          <div class="explanation-label">הסבר · התשובה הנכונה: ${'אבגדה'[q.correctIndex]}</div>
          <div class="explanation-body">${renderRich(q.explanation)}</div>
        </div>
      </div>
    `;
  }
};

// ============================================================
// Browse view
// ============================================================

const Browse = {
  show() {
    showView('browse');
    const container = document.getElementById('browse-content');

    // Group by TOPIC in the 5-layer order (Application → Transport → Network → Link),
    // then security and general. Within each topic, sub-group by subtopic.
    const topicOrder = ['python', 'pandas', 'stats', 'inference', 'regression', 'classification', 'neural', 'clustering'];
    const byTopic = {};
    // resolveVariant: גם במאגר, שאלות החישוב מוצגות עם נתונים מתחלפים (לא תמיד גרסת המבחן)
    QUESTIONS.map(resolveVariant).forEach(q => {
      if (!byTopic[q.topic]) byTopic[q.topic] = {};
      const sub = q.subtopic || '—';
      if (!byTopic[q.topic][sub]) byTopic[q.topic][sub] = [];
      byTopic[q.topic][sub].push(q);
    });

    container.innerHTML = topicOrder
      .filter(topic => byTopic[topic])
      .map(topic => {
        const subs = byTopic[topic];
        const totalCount = Object.values(subs).reduce((n, arr) => n + arr.length, 0);
        const color = TOPIC_COLORS[topic];
        return `
          <h2 class="browse-topic-header" style="--topic-color: ${color}">
            <span class="browse-topic-name">${TOPIC_NAMES[topic]}</span>
            <span class="browse-topic-count">${totalCount} שאלות</span>
          </h2>
          ${Object.entries(subs).map(([sub, qs]) => `
            <div class="browse-subtopic">
              <h3 class="browse-subtopic-header"><span class="ltr">${sub}</span> <span class="browse-subtopic-count">· ${qs.length}</span></h3>
              ${qs.map(q => `
                <details class="practice-question browse-item-card" data-qid="${q.id}">
                  <summary class="browse-summary">
                    <span class="browse-summary-text">${renderQuestionBody(q)}</span>
                    <span class="browse-summary-source">${q.source}</span>
                  </summary>
                  <div class="browse-details">
                    <div class="options-list">
                      ${q.options.map((opt, i) => `
                        <div class="option-item ${i === q.correctIndex ? 'correct' : ''}" style="cursor: default;">
                          <span class="option-letter">${'אבגדה'[i]}.</span>
                          <span class="option-text">${renderRich(opt)}</span>
                        </div>
                      `).join('')}
                    </div>
                    <div class="explanation">
                      <div class="explanation-label">הסבר · התשובה הנכונה: ${'אבגדה'[q.correctIndex]}</div>
                      <div class="explanation-body">${renderRich(q.explanation)}</div>
                    </div>
                  </div>
                </details>
              `).join('')}
            </div>
          `).join('')}
        `;
      }).join('');

    renderMath();
  }
};

// ============================================================
// Marked questions view
// ============================================================

const Marked = {
  show() {
    showView('marked');
    const state = State.load();
    // resolveVariant: calculation questions show random numbers each render
    const markedQs = QUESTIONS.filter(q => state.marked.includes(q.id)).map(resolveVariant);

    // also get questions user got wrong recently
    const wrongIds = new Set();
    state.history.slice(0, 5).forEach(h => h.wrongIds?.forEach(id => wrongIds.add(id)));
    const wrongQs = QUESTIONS.filter(q => wrongIds.has(q.id) && !state.marked.includes(q.id)).map(resolveVariant);
    this.resolved = {};
    [...markedQs, ...wrongQs].forEach(q => { this.resolved[q.id] = q; });

    const container = document.getElementById('marked-content');

    if (markedQs.length === 0 && wrongQs.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">★</div>
          <h3>אין שאלות מסומנות</h3>
          <p>במצב תרגול לפי נושא, סמן שאלות בכוכב כדי שיופיעו כאן.</p>
        </div>`;
      return;
    }

    let html = '';
    if (markedQs.length > 0) {
      html += `<h2 style="font-size: 20px; font-weight: 700; margin-bottom: 16px;">שאלות שסימנת (${markedQs.length})</h2>`;
      html += markedQs.map(q => Practice.renderPracticeQuestion(q, 0)).join('');
    }
    if (wrongQs.length > 0) {
      html += `<h2 style="font-size: 20px; font-weight: 700; margin-top: 32px; margin-bottom: 16px;">טעויות אחרונות (${wrongQs.length})</h2>`;
      html += wrongQs.map(q => Practice.renderPracticeQuestion(q, 0)).join('');
    }
    container.innerHTML = html;

    // attach handlers (same as Practice)
    container.querySelectorAll('.option-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const qId = parseInt(btn.closest('[data-qid]').dataset.qid);
        const oIdx = parseInt(btn.dataset.option);
        const card = btn.closest('.practice-question');
        card.querySelectorAll('.option-item').forEach((opt, i) => {
          opt.disabled = true;
          const q = Marked.resolved?.[qId] || QUESTIONS.find(qq => qq.id === qId);
          if (i === q.correctIndex) opt.classList.add('correct');
          else if (i === oIdx && i !== q.correctIndex) opt.classList.add('incorrect');
        });
        const expBlock = card.querySelector('.explanation');
        if (expBlock) expBlock.style.display = 'block';
        renderMath();
      });
    });

    container.querySelectorAll('[data-action="flag"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qId = parseInt(btn.dataset.qid);
        const nowMarked = State.toggleMarked(qId);
        btn.classList.toggle('active', nowMarked);
        btn.textContent = nowMarked ? '★ מסומנת' : '☆ סמן לחזרה';
        if (!nowMarked) {
          setTimeout(() => Marked.show(), 200); // refresh list
        }
      });
    });

    renderMath();
  }
};

// ============================================================
// Utilities
// ============================================================

// Some calculation/encryption questions carry a `variants` array — the same
// question with different numbers (all hand-verified). Picking one at random
// per session forces the user to actually compute instead of memorizing the
// answer. Returns a resolved copy (base question counts as one of the versions).
function resolveVariant(q) {
  if (!q.variants || q.variants.length === 0) return q;
  const pick = Math.floor(Math.random() * (q.variants.length + 1));
  if (pick === 0) return q; // the original exam version
  const v = q.variants[pick - 1];
  return {
    ...q, ...v,
    explanation: v.explanation + "\n\n(הערה: הנתונים בגרסה זו שונו מהמבחן המקורי לצורך תרגול - הדרך והנוסחאות זהות.)"
  };
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============================================================
// Open questions (original exam format: think, then reveal)
// ============================================================

const OpenQ = {
  topic: 'all',

  show() {
    this.render();
    showView('open');
  },

  render() {
    const topics = ['all', ...new Set(OPEN_QUESTIONS.map(q => q.topic))];
    document.getElementById('open-filters').innerHTML = topics.map(t => `
      <button class="filter-chip ${this.topic === t ? 'active' : ''}" data-open-topic="${t}">
        ${t === 'all' ? 'כל הנושאים' : TOPIC_NAMES[t]}
      </button>`).join('');

    const items = OPEN_QUESTIONS.filter(q => this.topic === 'all' || q.topic === this.topic);
    document.getElementById('open-content').innerHTML = items.map((q, i) => `
      <div class="practice-question open-question" data-oid="${q.id}">
        <div class="question-meta">
          <span class="topic-tag ${TOPIC_TAG_CLASS[q.topic]}">${TOPIC_NAMES[q.topic]} · שאלה פתוחה</span>
        </div>
        <div class="question-text">${renderRich(q.question)}</div>
        <button class="btn-primary open-reveal-btn" data-oid="${q.id}">הצג תשובה</button>
        <div class="explanation hidden" id="open-ans-${q.id}">
          <div class="explanation-title">הפתרון:</div>
          <div class="explanation-body">${renderRich(q.answer)}</div>
        </div>
      </div>`).join('') || '<p>אין שאלות בנושא זה.</p>';

    document.querySelectorAll('[data-open-topic]').forEach(btn => {
      btn.addEventListener('click', () => { this.topic = btn.dataset.openTopic; this.render(); });
    });
    document.querySelectorAll('.open-reveal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ans = document.getElementById('open-ans-' + btn.dataset.oid);
        const hidden = ans.classList.toggle('hidden');
        btn.textContent = hidden ? 'הצג תשובה' : 'הסתר תשובה';
        if (typeof renderMath === 'function') renderMath();
      });
    });
    renderMath();
  }
};

function pad(n) { return String(n).padStart(2, '0'); }

// Format chooser: American (MCQ) vs Open (free text + self grading)
function showFormatChooser(mode) {
  const old = document.getElementById('format-chooser');
  if (old) old.remove();
  const overlay = document.createElement('div');
  overlay.id = 'format-chooser';
  overlay.className = 'chooser-overlay';
  overlay.innerHTML = `
    <div class="chooser-card">
      <h3>באיזה פורמט לתרגל?</h3>
      <button class="chooser-option" data-format="mcq">
        <span class="chooser-option-title">אמריקאי</span>
        <span class="chooser-option-desc">5 אפשרויות לכל שאלה, בדיקה אוטומטית מיידית.</span>
      </button>
      <button class="chooser-option" data-format="open">
        <span class="chooser-option-title">פתוח - כמו במבחן האמיתי</span>
        <span class="chooser-option-desc">כותבים תשובה חופשית; בסיום משווים לפתרון ומדרגים כל שאלה <span class="ltr">0-5</span> - הציון מחושב מהדירוג העצמי.</span>
      </button>
      <button class="chooser-cancel">ביטול</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelectorAll('.chooser-option').forEach(btn => {
    btn.addEventListener('click', () => { overlay.remove(); Exam.start(mode, btn.dataset.format); });
  });
  overlay.querySelector('.chooser-cancel').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
}

function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById('view-' + name).classList.remove('hidden');
  window.scrollTo(0, 0);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.add('hidden'), 2000);
}

// Wrap LTR-direction text fragments so RTL bidi behaves with Hebrew.
// Critical: math formulas like "DevRTT = (1-β)·DevRTT + β·|SampleRTT|"
// must stay as ONE continuous LTR run. If we break them at operators like
// =, +, -, the Hebrew bidi algorithm scrambles the fragments.
// Also: trailing sentence-ending punctuation (?, !, .) is moved OUT of
// the LTR span so it sits at the proper end of the Hebrew sentence
// rather than at the right edge of the LTR run.
function renderText(text) {
  if (!text) return '';
  // escape HTML
  text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const inner = "[A-Za-z0-9_\\-+=:;/\\\\.,()\\[\\]{}@#$%^&*'\"`~?!|\u00B7\u00B1\u00D7\u00F7\u00B0\u2030\u0370-\u03FF\u2070-\u209F\u2200-\u22FF\u2190-\u21FF]";
  const start = "[A-Za-z0-9\u0370-\u03FF]";
  const open = "[\\(\\[\\{]?";
  const piece = `${open}${start}${inner}*`;
  const gap = `[ ]+(?:[=+\\-*/×÷·|\u00B1][ ]+)?`;
  const re = new RegExp(`(${piece}(?:${gap}${piece})*)`, 'g');

  text = text.replace(re, m => {
    // Wrap a single LTR run, moving boundary punctuation that belongs to
    // the surrounding Hebrew OUT of the span:
    //  - trailing sentence enders / separators (? ! . , ; :)
    //  - UNBALANCED closing brackets at the end ("93%)" -> span "93%" + ")")
    //  - UNBALANCED opening brackets at the start ("(A" -> "(" + span "A")
    // Balanced brackets - print(x), [85, 87, 95] - stay inside.
    const wrapLtr = (run) => {
      let core = run, head = '', tail = '';
      // trailing
      while (core.length) {
        const ch = core[core.length - 1];
        if (/[?!.,;:]/.test(ch)) { tail = ch + tail; core = core.slice(0, -1); continue; }
        if (ch === ')' && (core.match(/\)/g) || []).length > (core.match(/\(/g) || []).length) {
          tail = ch + tail; core = core.slice(0, -1); continue;
        }
        if (ch === ']' && (core.match(/\]/g) || []).length > (core.match(/\[/g) || []).length) {
          tail = ch + tail; core = core.slice(0, -1); continue;
        }
        break;
      }
      // leading unbalanced openers
      while (core.length) {
        const ch = core[0];
        if (ch === '(' && (core.match(/\(/g) || []).length > (core.match(/\)/g) || []).length) {
          head += ch; core = core.slice(1); continue;
        }
        if (ch === '[' && (core.match(/\[/g) || []).length > (core.match(/\]/g) || []).length) {
          head += ch; core = core.slice(1); continue;
        }
        break;
      }
      if (!core) return run;
      if (!/[A-Za-z0-9\u0370-\u03FF]/.test(core)) return run;
      return `${head}<span class="ltr">${core}</span>${tail}`;
    };

    let out = '';
    let rest = m;

    // List markers ("1. " / "3) ") stay OUTSIDE the span - plain digits +
    // period render correctly in RTL flow (digit right, period to its
    // left), while inside an LTR span the marker jumps to the wrong side
    // of the following English word ("ChatGPT .1").
    const marker = rest.match(/^(\d+[.)])(\s+)/);
    if (marker) {
      out += marker[1] + marker[2];
      rest = rest.slice(marker[0].length);
      if (!rest) return out.trimEnd() + ' ';
    } else if (/^\d+[.)]$/.test(rest)) {
      // bare marker ("1." followed by Hebrew) - plain digits render
      // correctly in RTL (digit right, period to its left)
      return rest;
    }

    // "label: value" runs - e.g. "טבלת Z: Z(0.925) = 1.44" matched as
    // "Z: Z(0.925) = 1.44" - must break at the colon, otherwise the whole
    // run renders as one LTR box and the Hebrew label visually detaches.
    // Split on ": " only at bracket depth 0.
    const segments = [];
    let depth = 0, seg = '';
    for (let i = 0; i < rest.length; i++) {
      const ch = rest[i];
      if (ch === '(' || ch === '[') depth++;
      if (ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
      if (ch === ':' && depth === 0 && rest[i + 1] === ' ') {
        segments.push(seg); seg = ''; i++; // skip the space
        continue;
      }
      seg += ch;
    }
    segments.push(seg);

    out += segments.map(s => s ? wrapLtr(s) : '').join(': ');
    return out;
  });

  // line breaks
  text = text.replace(/\n/g, '<br>');
  return text;
}

// Rich renderer: supports ``` code fences ``` anywhere in the text.
// Code segments render as LTR monospace blocks (readable Python);
// everything else goes through the regular bidi-aware renderText.
function renderRich(text) {
  if (!text) return '';
  // Program-output options: multi-line where every line is either
  // Hebrew-free output (True / [85, 87, 95] / 0.5) or a numbered
  // "N: ..." result line. Render as one consistent LTR block so
  // numbering and alignment never zigzag between lines.
  const t = String(text);
  if (!t.includes('```') && t.includes('\n')) {
    const lines = t.split('\n').filter(l => l.trim());
    const hebrewFree = l => !/[\u0590-\u05FF]/.test(l);
    const numbered = l => /^\s*\d+\s*:/.test(l);
    if (lines.length >= 2 && (lines.every(hebrewFree) || lines.every(numbered))) {
      const esc = lines.map(l =>
        l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      ).join('\n');
      return `<span class="output-lines" dir="ltr">${esc}</span>`;
    }
  }
  const parts = t.split('```');
  let html = '';
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) {
      // code segment - escape and preserve as-is
      const code = parts[i]
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/^\n+|\n+$/g, '');
      html += `<pre class="code-block" dir="ltr">${code}</pre>`;
    } else {
      html += renderText(parts[i]);
    }
  }
  return html;
}

// Render a question body that may include a data table after the main text.
// If q.dataTable is set, render it as an HTML table. If q.questionEnd is
// also set, render that text after the table (so the table sits between
// the intro text and the actual question).
function renderQuestionBody(q) {
  let html = renderRich(q.question);
  if (q.dataTable) {
    const t = q.dataTable;
    html += '<table class="data-table">';
    if (t.headers && t.headers.length) {
      html += '<thead><tr>' + t.headers.map(h => `<th>${renderText(h)}</th>`).join('') + '</tr></thead>';
    }
    if (t.rows && t.rows.length) {
      html += '<tbody>';
      for (const row of t.rows) {
        html += '<tr>' + row.map(cell => `<td>${renderText(String(cell))}</td>`).join('') + '</tr>';
      }
      html += '</tbody>';
    }
    html += '</table>';
  }
  if (q.questionEnd) {
    html += '<div class="question-end">' + renderRich(q.questionEnd) + '</div>';
  }
  return html;
}

function renderMath() {
  if (typeof renderMathInElement === 'function') {
    document.querySelectorAll('.question-text, .option-text, .explanation-body').forEach(el => {
      try { renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      }); } catch (e) {}
    });
  }
}

// ============================================================
// Home rendering
// ============================================================

function renderHome() {
  const state = State.load();
  const statsEl = document.getElementById('hero-stats');

  let bestScore = state.history.length > 0 ? Math.max(...state.history.map(h => h.score)) : null;
  let attempts = state.history.length;
  let marked = state.marked.length;

  statsEl.innerHTML = `
    <div class="hero-stat">
      <div class="hero-stat-value">${QUESTIONS.length}</div>
      <div class="hero-stat-label">שאלות במאגר</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-value">${attempts}</div>
      <div class="hero-stat-label">מבחנים שעברת</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-value">${bestScore !== null ? bestScore : '–'}</div>
      <div class="hero-stat-label">הציון הגבוה</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-value">${marked}</div>
      <div class="hero-stat-label">שאלות מסומנות</div>
    </div>
  `;

  renderWeakSection(state);
}

// Aggregate per-topic accuracy across all attempts and surface the weakest
// topics. Hidden if the user hasn't taken any exam yet.
function renderWeakSection(state) {
  const container = document.getElementById('weak-section');
  if (!container) return;

  if (!state.history || state.history.length === 0) {
    container.classList.add('hidden');
    return;
  }

  const totals = {};
  for (const h of state.history) {
    if (!h.byTopic) continue;
    for (const [topic, data] of Object.entries(h.byTopic)) {
      if (!totals[topic]) totals[topic] = { correct: 0, total: 0 };
      totals[topic].correct += data.correct;
      totals[topic].total += data.total;
    }
  }

  const topicRows = Object.entries(totals)
    .filter(([, d]) => d.total >= 2) // need at least 2 attempts to be meaningful
    .map(([topic, d]) => ({
      topic,
      pct: Math.round(d.correct / d.total * 100),
      stat: `${d.correct}/${d.total}`
    }))
    .sort((a, b) => a.pct - b.pct);

  // Show topics below 70% accuracy, up to 4 of them
  const weak = topicRows.filter(r => r.pct < 70).slice(0, 4);

  if (weak.length === 0) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = `
    <h2>נושאים שכדאי לחזק</h2>
    <div class="weak-section-subtitle">לפי הביצועים שלך במבחנים האחרונים — דיוק מתחת ל־<span class="ltr">70%</span></div>
    <div class="weak-list">
      ${weak.map(r => `
        <div class="weak-item">
          <div class="weak-item-topic">${TOPIC_NAMES[r.topic] || r.topic}</div>
          <div class="weak-item-stat"><span class="ltr">${r.pct}%</span> דיוק · <span class="ltr">${r.stat}</span></div>
          <div class="weak-item-bar"><div class="weak-item-bar-fill" style="width: ${r.pct}%"></div></div>
        </div>
      `).join('')}
    </div>
  `;
}

// ============================================================
// Event delegation
// ============================================================

document.addEventListener('click', (e) => {
  const action = e.target.closest('[data-action]')?.dataset.action;
  if (!action) return;

  switch (action) {
    case 'start-exam':
    case 'restart-exam':
      showFormatChooser('full');
      break;
    case 'start-sample-exam':
      showFormatChooser('sample');
      break;
    case 'submit-exam':
      Exam.submit();
      break;
    case 'exit-exam':
      Exam.exit();
      break;
    case 'open-practice':
      Practice.show();
      break;
    case 'open-browse':
      Browse.show();
      break;
    case 'open-marked':
      Marked.show();
      break;
    case 'open-open':
      OpenQ.show();
      break;
    case 'back-home':
      showView('home');
      renderHome();
      break;
  }
});

// Init
window.addEventListener('DOMContentLoaded', () => {
  renderHome();
});
