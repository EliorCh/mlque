// ============================================================
// מאגר שאלות · מבוא ללמידת מכונה ומדעי הנתונים (פרופ׳ ראיד סעאבנה · ד"ר אלה רבינוביץ)
// מבוסס על 11 מבחנים אמיתיים 2023-2025 + מבחן חזרה + תרגולים
// ============================================================

window.TOPIC_NAMES = {
  python: "יסודות פייתון",
  pandas: "NumPy ו-Pandas",
  stats: "סטטיסטיקה והתפלגות נורמלית",
  inference: "רווחי סמך והסקה",
  regression: "רגרסיה לינארית ולוגיסטית",
  classification: "סיווג והערכת מודלים",
  neural: "רשתות נוירונים ו-Gradient Descent",
  clustering: "אשכולות, PCA ו-Scaling"
};

window.TOPIC_COLORS = {
  python: "#7c6fb0",
  pandas: "#4a7fb5",
  stats: "#3d9970",
  inference: "#c0764a",
  regression: "#b05a7a",
  classification: "#2a9d8f",
  neural: "#8a6d3b",
  clustering: "#5b8a72"
};

window.QUESTIONS = [
  {
    "id": 1,
    "topic": "python",
    "subtopic": "רשימות ו-set",
    "source": "מבחן 2023 סמסטר א' מועד א' + תרגול",
    "question": "מה הפלט של ביצוע הקוד הבא?\n```from typing import List\n\ndef function(param: List[int]):\n    return list(set([item for item in param if param.count(item) > 1]))\n\nlst = [1, 2, 1, 2, 3, 4, 5, 1, 1, 2, 5, 6, 7, 8, 9, 9]\nprint(function(lst))```",
    "options": [
      "[1, 2, 5, 9]",
      "[3, 4, 6, 7, 8]",
      "[1, 1, 1, 2, 2, 5, 9, 9]",
      "תתקבל שגיאת ריצה",
      "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    ],
    "correctIndex": 0,
    "explanation": "ה-list comprehension אוסף כל איבר שמספר המופעים שלו ברשימה גדול מ-1 (param.count(item) > 1).\n\nהאיברים עם יותר ממופע אחד:\n1 מופיע 4 פעמים, 2 מופיע 3 פעמים, 5 מופיע פעמיים, 9 מופיע פעמיים.\n\nהמרה ל-set מסירה כפילויות, ולכן הפלט: [1, 2, 5, 9].\n\nבמילים: התוכנית מדפיסה את כל הערכים בעלי יותר ממופע אחד ברשימת הקלט. שימו לב שהאפשרות עם [3, 4, 6, 7, 8] היא בדיוק ההפך - הערכים שמופיעים פעם אחת בלבד (== 1 במקום > 1).",
    "variants": [
      {
        "question": "מה הפלט של ביצוע הקוד הבא?\n```from typing import List\n\ndef function(param: List[int]):\n    return list(set([item for item in param if param.count(item) > 1]))\n\nlst = [4, 7, 4, 7, 2, 9, 4, 9, 3]\nprint(function(lst))```",
        "options": [
          "[4, 4, 4, 7, 7, 9, 9]",
          "תתקבל שגיאת ריצה",
          "[4, 7, 9]",
          "[2, 3]",
          "[2, 3, 4, 7, 9]"
        ],
        "correctIndex": 2,
        "explanation": "האיברים עם יותר ממופע אחד:\n4 מופיע 3 פעמים, 7 מופיע פעמיים, 9 מופיע פעמיים.\n\n2 ו-3 מופיעים פעם אחת בלבד ולכן אינם נכללים.\n\nלאחר set - ללא כפילויות: [4, 7, 9]."
      }
    ]
  },
  {
    "id": 2,
    "topic": "python",
    "subtopic": "רשימות ו-set",
    "source": "מבחן 2024 סמסטר א' מועד א' + תרגול",
    "question": "מה הפלט של ביצוע הקוד הבא?\n```from typing import List\n\ndef myfunc(param: List[int]):\n    res = [item for item in param if param.count(item) == 1]\n    return list(set(res))\n\nlst = [1, 2, 1, 2, 3, 4, 5, 1, 1, 2, 5, 6, 7, 8, 9, 9]\nprint(myfunc(lst))```",
    "options": [
      "תתקבל שגיאת ריצה",
      "[1, 2, 5, 9]",
      "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
      "[3, 4, 6, 7, 8]",
      "[]"
    ],
    "correctIndex": 3,
    "explanation": "כאן התנאי הוא param.count(item) == 1 - איברים שמופיעים פעם אחת בלבד.\n\nבדיקת מופעים:\n1 מופיע 4 פעמים, 2 מופיע 3 פעמים, 5 ו-9 מופיעים פעמיים - נפסלים.\n3, 4, 6, 7, 8 מופיעים פעם אחת בדיוק.\n\nהפלט: [3, 4, 6, 7, 8].\n\nבמילים: התוכנית מדפיסה רשימה עם איברי lst אשר מופיעים ב-lst פעם אחת בלבד. זו השאלה ה'משלימה' של שאלת ה-count(item) > 1 שהופיעה במועד אחר - שימו לב היטב לתנאי!",
    "variants": [
      {
        "question": "מה הפלט של ביצוע הקוד הבא?\n```from typing import List\n\ndef myfunc(param: List[int]):\n    res = [item for item in param if param.count(item) == 1]\n    return list(set(res))\n\nlst = [5, 3, 5, 8, 1, 3, 6, 5, 1]\nprint(myfunc(lst))```",
        "options": [
          "[6, 8]",
          "[5, 3, 1]",
          "[8, 6, 5]",
          "[1, 3, 5]",
          "תתקבל שגיאת ריצה"
        ],
        "correctIndex": 0,
        "explanation": "מופעים: 5 מופיע 3 פעמים, 3 מופיע פעמיים, 1 מופיע פעמיים - נפסלים.\n8 ו-6 מופיעים פעם אחת בדיוק.\n\nהפלט: [6, 8]."
      }
    ]
  },
  {
    "id": 3,
    "topic": "python",
    "subtopic": "מילונים ו-zip",
    "source": "מבחן 2023 סמסטר א' מועד א' + תרגול",
    "question": "מה הפלט של ביצוע הקוד הבא?\n```dictionary = dict()\nabc = 'abcdefghijklmnopqrstuvwxyz'\nfor e1, e2 in zip(abc, reversed(abc)):\n    dictionary[e1] = e2\n\ndef function(inp1, inp2, d):\n    for c1, c2 in zip(inp1, inp2):\n        if d[c1] != c2:\n            return False\n    return True\n\na = 'data'\nb = 'atad'\nc = 'wzgz'\nprint(function(a, b, dictionary))\nprint(function(b, c, dictionary))\nprint(function(a, c, dictionary))```",
    "options": [
      "True\nTrue\nTrue",
      "True\nFalse\nFalse",
      "False\nTrue\nFalse",
      "False\nFalse\nTrue",
      "False\nFalse\nFalse"
    ],
    "correctIndex": 3,
    "explanation": "המילון ממפה כל אות לאות 'המראה' שלה מסוף האלפבית: a→z, b→y, c→x, d→w, ... t→g.\n\nהפונקציה בודקת האם המחרוזת השנייה מתקבלת מהראשונה על ידי החלפת כל אות באות המראה שלה.\n\nבדיקה 1: function('data', 'atad')\nd→w אבל התו המקביל הוא a - לא שווה - False\n\nבדיקה 2: function('atad', 'wzgz')\na→z אבל התו המקביל הוא w - False\n\nבדיקה 3: function('data', 'wzgz')\nd→w תואם, a→z תואם, t→g תואם, a→z תואם - True\n\nבמילים: התוכנית בודקת אם המחרוזת השנייה בנויה כך שכל אות מהראשונה מוחלפת באות בעלת אותו מספר סידורי מסוף ה-abc (למשל b תוחלף ב-y)."
  },
  {
    "id": 4,
    "topic": "python",
    "subtopic": "מילונים ומפתחות",
    "source": "מבחן 2023 סמסטר א' מועד א' + תרגול",
    "question": "נתונים שני קטעי קוד - A ו-B.\n```### A\nimport random\ndictionary = dict()\nfor i in range(10):\n    # random.sample(c, N) selects a random sample of size N from c\n    sample = list(random.sample(range(100), i+1))\n    dictionary[sample] = len(sample)\n\n### B\nimport random\ndictionary = dict()\nfor i in range(10):\n    sample = tuple(random.sample(range(100), i+1))\n    dictionary[sample] = len(sample)```\nמה יקרה בהרצת קטעי הקוד?",
    "options": [
      "שני קטעי הקוד לא יעברו קומפילציה",
      "קטע קוד A יסתיים בהצלחה ו-B יסתיים בשגיאת ריצה",
      "שני קטעי הקוד יסתיימו בשגיאת ריצה",
      "קטע קוד B יסתיים בהצלחה ו-A יסתיים בשגיאת ריצה",
      "שני קטעי הקוד יסתיימו בהצלחה (ללא הודעות שגיאה)"
    ],
    "correctIndex": 3,
    "explanation": "ההבדל היחיד: ב-A המפתח הוא list וב-B המפתח הוא tuple.\n\nמפתח במילון פייתון חייב להיות hashable (בלתי ניתן לשינוי).\nlist הוא mutable ולכן אינו hashable - ניסיון להשתמש בו כמפתח גורר:\nTypeError: unhashable type: 'list'\n\ntuple הוא immutable ולכן hashable - B יעבוד בהצלחה.\n\nזהו עיקרון חשוב: מפתחות מילון חוקיים - מחרוזות, מספרים, tuples. מפתחות לא חוקיים - רשימות, מילונים, sets."
  },
  {
    "id": 5,
    "topic": "python",
    "subtopic": "mutable מול immutable",
    "source": "מבחן 2023 סמסטר ב' מועד א' + תרגול",
    "question": "נתונים ארבעה קטעי קוד:\n```import numpy as np\n\n#--------- 1 ---------\ngrades = np.array([75, 77, 85])\ngrades_with_bonus = grades + 10\nprint(grades_with_bonus)\n\n#--------- 2 ---------\ngrades = [75, 77, 85]\ngrades_with_bonus = [g+10 for g in grades]\nprint(grades_with_bonus)\n\n#--------- 3 ---------\ngrades = (75, 77, 85)\nfor i in range(len(grades)):\n    grades[i] += 10\nprint(grades)\n\n#--------- 4 ---------\ngrades = [75, 77, 85]\nfor i in range(len(grades)):\n    grades[i] += 10\nprint(grades)```\nמה יודפס כתוצאה מהרצת כל אחד מהקטעים?",
    "options": [
      "1: [85, 87, 95]\n2: הודעת שגיאה\n3: (85, 87, 95)\n4: הודעת שגיאה",
      "1: [85 87 95]\n2: [85, 87, 95]\n3: (85, 87, 95)\n4: [85, 87, 95]",
      "1: הודעת שגיאה\n2: [85, 87, 95]\n3: הודעת שגיאה\n4: [85, 87, 95]",
      "כל ארבעת הקטעים ידפיסו [85, 87, 95]",
      "1: [85 87 95]\n2: [85, 87, 95]\n3: הודעת שגיאה\n4: [85, 87, 95]"
    ],
    "correctIndex": 4,
    "explanation": "קטע 1: חיבור סקלר למערך numpy הוא פעולה וקטורית - כל איבר גדל ב-10. פלט: [85 87 95] (ללא פסיקים - כך numpy מדפיס).\n\nקטע 2: list comprehension יוצר רשימה חדשה. פלט: [85, 87, 95].\n\nקטע 3: grades הוא tuple - מבנה immutable. הנסיון לבצע השמה grades[i] += 10 גורר:\nTypeError: 'tuple' object does not support item assignment\n\nקטע 4: רשימה היא mutable - השמה לפי אינדקס חוקית. פלט: [85, 87, 95].\n\nנקודה שחוזרת במבחנים: ההבחנה בין tuple (immutable) לרשימה (mutable), וההבדל בין פלט numpy (רווחים) לפלט רשימה (פסיקים)."
  },
  {
    "id": 6,
    "topic": "python",
    "subtopic": "העברת פרמטרים לפונקציה",
    "source": "מבחן 2024 סמסטר א' מועד ב'",
    "question": "נתונים ארבעה קטעי קוד. מה יודפס בכל אחד מהם?\n\n### א\n```def make_update(variable):\n    variable.append(100)\n\ndata_science_grades = [75, 87]\nmake_update(data_science_grades)\nprint(data_science_grades)```\n### ב\n```def make_update(variable):\n    variable = [75, 87, 80]\n    variable.append(100)\n\ndata_science_grades = [75, 87]\nmake_update(data_science_grades)\nprint(data_science_grades)```\n### ג\n```def make_update(variable):\n    variable[0] = variable[0] + 3\n\ndata_science_grades = (75, 87)\nmake_update(data_science_grades)\nprint(data_science_grades)```\n### ד\n```def make_update(variable):\n    variable[0] = variable[0] + 3\n\ndata_science_grades = [75, 87]\nmake_update(data_science_grades)\nprint(data_science_grades)```",
    "options": [
      "א: הודעת שגיאה\nב: [75, 87]\nג: (75, 87)\nד: [78, 87]",
      "א: [75, 87, 100]\nב: [75, 87]\nג: הודעת שגיאה\nד: [78, 87]",
      "א: [75, 87, 100]\nב: [75, 87, 100]\nג: הודעת שגיאה\nד: [78, 87]",
      "א: [75, 87, 100]\nב: [75, 87, 80, 100]\nג: (78, 87)\nד: [78, 87]",
      "א: [75, 87]\nב: [75, 87]\nג: הודעת שגיאה\nד: [75, 87]"
    ],
    "correctIndex": 1,
    "explanation": "א: הפונקציה מקבלת הפניה (reference) לרשימה המקורית. append משנה את האובייקט עצמו - הרשימה המקורית מתעדכנת: [75, 87, 100].\n\nב: השורה variable = [75, 87, 80] יוצרת אובייקט חדש ומנתקת את השם variable מהרשימה המקורית. ה-append פועל על האובייקט החדש שנזרק בסוף הפונקציה. הרשימה המקורית לא השתנתה: [75, 87].\n\nג: tuple הוא immutable - השמה לתא גוררת שגיאה:\nTypeError: 'tuple' object does not support item assignment\n\nד: השמה לתא ברשימה (mutable) משנה את האובייקט המקורי: [78, 87].\n\nהעיקרון: השמה לשם פרמטר (=) מנתקת את הקשר לאובייקט המקורי; שינוי דרך האובייקט (append, השמה לאינדקס) משפיע על המקור - אם הוא mutable."
  },
  {
    "id": 7,
    "topic": "python",
    "subtopic": "העברת פרמטרים לפונקציה",
    "source": "מבחן 2024 סמסטר א' מועד א'",
    "question": "מה הפלט של ביצוע קטע הקוד הבא?\n```def modify_fruits(fruits, fruit):\n    fruits.append(\"pineapple\")\n    fruits = [\"grape\", \"mango\", \"peach\"]\n    fruit = \"golden \" + fruit\n\nsummer_fruit = \"apricot\"\nmy_favorite_fruits = [\"apple\", \"cherries\", \"watermelon\"]\nmodify_fruits(my_favorite_fruits, summer_fruit)\nprint(my_favorite_fruits)\nprint(summer_fruit)```",
    "options": [
      "['grape', 'mango', 'peach']\napricot",
      "['apple', 'cherries', 'watermelon', 'pineapple']\napricot",
      "['apple', 'cherries', 'watermelon', 'pineapple']\ngolden apricot",
      "['grape', 'mango', 'peach']\ngolden apricot",
      "['apple', 'cherries', 'watermelon']\napricot"
    ],
    "correctIndex": 1,
    "explanation": "שלב אחר שלב בתוך הפונקציה:\n\nfruits.append(\"pineapple\"):\nמשנה את הרשימה המקורית (mutable, מועברת כהפניה) - my_favorite_fruits מקבלת את pineapple.\n\nfruits = [\"grape\", \"mango\", \"peach\"]:\nיוצרת רשימה חדשה מקומית - מנתקת את השם fruits מהרשימה המקורית. לא משפיעה על המקור.\n\nfruit = \"golden \" + fruit:\nמחרוזות הן immutable - נוצרת מחרוזת חדשה מקומית. summer_fruit המקורית לא משתנה.\n\nלכן הפלט:\n['apple', 'cherries', 'watermelon', 'pineapple']\napricot"
  },
  {
    "id": 8,
    "topic": "python",
    "subtopic": "לולאות ואלגוריתמים",
    "source": "מבחן 2023 סמסטר א' מועד ב'",
    "question": "מה הפלט של קטע הקוד הבא?\n```def function(x, y):\n    if x > y: result = x\n    else: result = y\n    while(True):\n        if((result % x == 0) and (result % y == 0)):\n            out = result\n            break\n        result += 1\n    return out\n\nnum1 = 7\nnum2 = 6\nprint(function(num1, num2))```",
    "options": [
      "13",
      "42",
      "7",
      "1",
      "84"
    ],
    "correctIndex": 1,
    "explanation": "הפונקציה מתחילה מהגדול מבין השניים (7) ומעלה את result ב-1 עד שהוא מתחלק גם ב-x וגם ב-y.\n\nהמספר הראשון שמתחלק גם ב-7 וגם ב-6 הוא:\n7·6 = 42 (כי 6 ו-7 זרים - אין להם מחלק משותף)\n\nבמילים: התוכנית מחשבת את הכפולה המשותפת הקטנה ביותר (LCM) של שני הקלטים.",
    "variants": [
      {
        "question": "מה הפלט של קטע הקוד הבא?\n```def function(x, y):\n    if x > y: result = x\n    else: result = y\n    while(True):\n        if((result % x == 0) and (result % y == 0)):\n            out = result\n            break\n        result += 1\n    return out\n\nnum1 = 4\nnum2 = 6\nprint(function(num1, num2))```",
        "options": [
          "24",
          "12",
          "10",
          "2",
          "6"
        ],
        "correctIndex": 1,
        "explanation": "הפונקציה מחשבת את הכפולה המשותפת הקטנה ביותר (LCM).\n\nהכפולות של 6: 6, 12, 18...\n12 מתחלק גם ב-4 וגם ב-6 - זו הכפולה המשותפת הקטנה ביותר.\n\nשימו לב: 24 = 4·6 היא כפולה משותפת אבל לא הקטנה ביותר, כי ל-4 ול-6 יש מחלק משותף (2)."
      }
    ]
  },
  {
    "id": 9,
    "topic": "python",
    "subtopic": "לולאות ואלגוריתמים",
    "source": "מבחן 2023 סמסטר א' מועד ב'",
    "question": "מה הפלט של קטע הקוד הבא?\n```def test_condition(num: int):\n    result = 0\n    original = num\n    while num != 0:\n        digit = num % 10\n        result = result * 10 + digit\n        num = int(num/10)\n    if result == original:\n        return True\n    return False\n\nprint(test_condition(755))\nprint(test_condition(756))\nprint(test_condition(757))```",
    "options": [
      "True\nTrue\nFalse",
      "False\nTrue\nFalse",
      "False\nFalse\nTrue",
      "False\nFalse\nFalse",
      "True\nFalse\nTrue"
    ],
    "correctIndex": 2,
    "explanation": "הפונקציה בונה את המספר ההפוך: בכל סיבוב היא שולפת את ספרת האחדות (num % 10) ומצמידה אותה ל-result.\n\n755 הפוך: 557. שונה מ-755 - False\n756 הפוך: 657. שונה מ-756 - False\n757 הפוך: 757. זהה - True\n\nבמילים: התוכנית בודקת אם הקלט הוא מספר פלינדרום (רצף ספרות זהה בשני הכיוונים).",
    "variants": [
      {
        "question": "מה הפלט של קטע הקוד הבא?\n```def test_condition(num: int):\n    result = 0\n    original = num\n    while num != 0:\n        digit = num % 10\n        result = result * 10 + digit\n        num = int(num/10)\n    if result == original:\n        return True\n    return False\n\nprint(test_condition(1221))\nprint(test_condition(1231))\nprint(test_condition(404))```",
        "options": [
          "True\nFalse\nFalse",
          "False\nFalse\nTrue",
          "True\nTrue\nFalse",
          "True\nFalse\nTrue",
          "False\nTrue\nFalse"
        ],
        "correctIndex": 3,
        "explanation": "הפונקציה בודקת פלינדרום (המספר שווה להיפוך שלו):\n\n1221 הפוך: 1221 - True\n1231 הפוך: 1321 - False\n404 הפוך: 404 - True"
      }
    ]
  },
  {
    "id": 10,
    "topic": "python",
    "subtopic": "map ו-filter",
    "source": "מבחן 2024 סמסטר א' מועד א'",
    "question": "להלן תיעוד של פונקציית map() בפייתון:\nmap(function, iterable) מפעילה את הפונקציה על כל איבר; אם מועברים כמה iterables, הפונקציה מקבלת איבר מקביל מכל אחד.\n\nמה יודפס כתוצאה מהרצת הפקודות הבאות?\n```nums = [1, 2, 3, 4, 5]\nprint(list(map(lambda n: 2*n, nums)))\n\ndef myfunc(a, b):\n    return a + b\n\nresult = map(myfunc, (1, 2, 3), (3, 2, 1))\nprint(list(result))\n\nresult = map(myfunc, (\"apple\", \"banana\", \"cherry\"), (\"orange\", \"lemon\", \"plum\"))\nprint(list(result))```",
    "options": [
      "[2, 4, 6, 8, 10]\n[4, 4, 4]\n['appleorange', 'bananalemon', 'cherryplum']",
      "[2, 4, 6, 8, 10]\n[1, 2, 3, 3, 2, 1]\nשגיאת ריצה",
      "[2, 4, 6, 8, 10]\n[6, 4, 2]\n['appleorange', 'bananalemon', 'cherryplum']",
      "[2, 4, 6, 8, 10]\n[4, 4, 4]\n['apple orange', 'banana lemon', 'cherry plum']",
      "[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]\n[4, 4, 4]\n['appleorange', 'bananalemon', 'cherryplum']"
    ],
    "correctIndex": 0,
    "explanation": "פקודה 1: הכפלת כל איבר ב-2: [2, 4, 6, 8, 10].\n\nפקודה 2: map עם שני iterables מפעילה את myfunc על זוגות מקבילים:\n1+3=4, 2+2=4, 3+1=4 - הפלט [4, 4, 4].\n\nפקודה 3: חיבור מחרוזות הוא שרשור (ללא רווח):\n'apple'+'orange' = 'appleorange' וכן הלאה.\n\nהפלט: ['appleorange', 'bananalemon', 'cherryplum']."
  },
  {
    "id": 11,
    "topic": "python",
    "subtopic": "map ו-filter",
    "source": "מבחן 2025 סמסטר א' מועד ב'",
    "question": "להלן קטע מתיעוד הפונקציה filter() בפייתון:\nfilter(function, iterable) מחזירה את האיברים שעבורם הפונקציה מחזירה True.\n\nמה יודפס לאחר הרצת קטעי הקוד הבאים (אם באחד מהם תודפס הודעת שגיאה יש לציין זאת)?\n```numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nprint(list(filter(lambda x: x%3==0, numbers)))\n\nnumbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7]\nprint(list(filter(lambda x: numbers.count(x)==4, numbers)))\n\nnumbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7]\nprint([x if numbers.count(x)==1 for x in numbers])```",
    "options": [
      "[0, 3, 6, 9]\n[]\nהודעת שגיאה",
      "[3, 6, 9]\nהודעת שגיאה\nהודעת שגיאה",
      "[3, 6, 9]\n[]\n[1, 3, 5, 7]",
      "[3, 6, 9]\n[2, 2, 4, 4, 6, 6]\n[1, 3, 5, 7]",
      "[3, 6, 9]\n[]\nהודעת שגיאה"
    ],
    "correctIndex": 4,
    "explanation": "קטע 1: מסנן כפולות של 3 מתוך 1..10: [3, 6, 9].\n\nקטע 2: אין אף ערך שמופיע 4 פעמים (המקסימום הוא 2 מופעים) - הפלט רשימה ריקה [].\n\nקטע 3: התחביר [x if condition for x in numbers] אינו חוקי!\nב-list comprehension תנאי סינון נכתב בסוף: [x for x in numbers if condition].\nהצורה x if ... דורשת else (ביטוי תנאי). לכן - SyntaxError.\n\nלעומת זאת הצורה התקינה שהופיעה באותו מבחן:\n[y[0] for y in zip(numbers, [numbers.count(x) for x in numbers]) if y[1]==2]\nמחזירה [2, 2, 4, 4, 6, 6] - האיברים שמופיעים פעמיים."
  },
  {
    "id": 12,
    "topic": "python",
    "subtopic": "מחרוזות ומילונים",
    "source": "מבחן 2025 סמסטר ב' מועד ב'",
    "question": "נתון קטע הקוד הבא:\n```def function(param: str):\n    d = dict()\n    for c in param:\n        current = d.get(c, 0)\n        d[c] = current + 1\n    intermediate = sorted(d, key=d.get, reverse=True)\n    out = intermediate[0] if intermediate[0]!=' ' else intermediate[1]\n    return out\n\ntext = 'a sample sentence for testing'\nprint(function(text))\ntext = 'what will be printed???'\nprint(function(text))```",
    "options": [
      "a\nt",
      "s\nw",
      "רווח\nרווח",
      "e\n?",
      "תתקבל שגיאת ריצה"
    ],
    "correctIndex": 3,
    "explanation": "הפונקציה סופרת מופעים של כל תו במילון, ממיינת את התווים לפי שכיחות בסדר יורד, ומחזירה את התו השכיח ביותר - אלא אם הוא רווח, ואז את השני בתור.\n\nמחרוזת 1: 'a sample sentence for testing'\nהתו השכיח ביותר הוא רווח (4 מופעים), אבל הוא נפסל. אחריו: e מופיע 5 פעמים - למעשה e הוא השכיח ביותר (5) עוד לפני הרווח. הפלט: e\n\nמחרוזת 2: 'what will be printed???'\n? מופיע 3 פעמים, רווח 3 פעמים, t מופיע 3 פעמים... בפועל במיון sorted עם reverse=True התו ? ממוקם ראשון מבין בעלי השכיחות המקסימלית. הפלט: ?\n\nבמילים: התוכנית מדפיסה את התו השכיח ביותר במחרוזת (לא כולל רווח)."
  },
  {
    "id": 13,
    "topic": "python",
    "subtopic": "מבני נתונים",
    "source": "מבחן 2023 סמסטר ב' מועד א'",
    "question": "נתון קטע הקוד הבא:\n```data_structure = [[] for _ in range(5)]\n\ndef insert(data_structure, key, value):\n    data_structure[(lambda x: x % len(data_structure))(key)].append(value)\n\ninsert(data_structure, 10, 'language')\ninsert(data_structure, 26, 'communication')\ninsert(data_structure, 20, 'algebra')\ninsert(data_structure, 8,  'data science')\ninsert(data_structure, 21, 'physical education')\ninsert(data_structure, 21, 'arts')```\nאיזה מבנה נתונים הקוד מממש, ומה יכיל התא באינדקס 1 לאחר ההרצה?",
    "options": [
      "טבלת ערבול (hash table); התא באינדקס 1 יכיל: language, algebra",
      "עץ בינארי; התא באינדקס 1 יהיה ריק",
      "מחסנית (stack); התא באינדקס 1 יכיל: language בלבד",
      "טבלת ערבול (hash table); התא באינדקס 1 יכיל: communication, physical education, arts",
      "תור (queue); התא באינדקס 1 יכיל: communication בלבד"
    ],
    "correctIndex": 3,
    "explanation": "הקוד מממש טבלת ערבול (hash table) פשוטה: פונקציית הערבול היא key % 5, וכל תא הוא 'שרשרת' (רשימה) שאוספת התנגשויות.\n\nחישוב האינדקסים:\n10 % 5 = 0 - language לתא 0\n26 % 5 = 1 - communication לתא 1\n20 % 5 = 0 - algebra לתא 0 (התנגשות עם language)\n8 % 5 = 3 - data science לתא 3\n21 % 5 = 1 - physical education לתא 1\n21 % 5 = 1 - arts לתא 1\n\nמבנה סופי:\n0: language, algebra\n1: communication, physical education, arts\n2: ריק\n3: data science\n4: ריק"
  },
  {
    "id": 14,
    "topic": "python",
    "subtopic": "מחרוזות",
    "source": "מבחן 2024 סמסטר א' מועד ב'",
    "question": "נתון קטע הקוד הבא:\n```def compute_metric(text):\n    return len(set(text.split()))/len(text.split())\n\ntext = \"from the north of the country to the south, demonstrators clashed with police, blocked roads and marched with flags\"\nprint(compute_metric(text))```\nמה מודדת הפונקציה compute_metric ומה יודפס עבור המחרוזת הנתונה (19 מילים, מתוכן 16 ייחודיות)?",
    "options": [
      "מספר המילים הכפולות בטקסט; יודפס 3",
      "יחס המילים הייחודיות מכלל המילים (מדד גיוון לקסיקלי); יודפס בקירוב 0.8421",
      "מספר המשפטים בטקסט; יודפס 1",
      "אורך המילה הממוצע בטקסט; יודפס בקירוב 5.2",
      "יחס האותיות הייחודיות מכלל האותיות; יודפס בקירוב 0.15"
    ],
    "correctIndex": 1,
    "explanation": "text.split() מפצל את הטקסט למילים לפי רווחים - 19 מילים.\nset(...) משאיר רק מילים ייחודיות - 16 (המילים the ו-with חוזרות).\n\nהיחס: 16/19 = 0.8421\n\nזהו מדד גיוון לקסיקלי (type-token ratio): כמה מהמילים בטקסט הן ייחודיות. ערך קרוב ל-1 = טקסט מגוון; ערך נמוך = הרבה חזרות.\n\nהערה מהמבחן המקורי: כשמוסיפים לטקסט מילים חוזרות (of the country פעם נוספת) המדד יורד - במבחן חושב 16/22 = 0.72, כאשר סימני פיסוק צמודים למילה נחשבו כחלק ממנה."
  },
  {
    "id": 15,
    "topic": "python",
    "subtopic": "מחרוזות",
    "source": "מבחן 2025 סמסטר ב' מועד ב'",
    "question": "נתונה הרשימה הבאה עם שנות לידה של סטודנטים:\n```birth_year = [2004, 1997, 2001, 2001, 2003, 2004, 2000]```\nרוצים להדפיס ערכים ייחודיים (ללא חזרות) מהרשימה, תוך שמירה על סדר האיברים המקורי. נניח למטרת השאלה כי המבנה set אינו שומר על סדר האיברים.\n\nהפלט הצפוי:\n2004\n1997\n2001\n2003\n2000\n\nאיזה קטע קוד מבצע את הנדרש בצורה נכונה?",
    "options": [
      "for i in range(len(birth_year)):\n    print(birth_year[i])",
      "for y in birth_year:\n    if birth_year.count(y) == 1:\n        print(y)",
      "seen = []\nfor y in birth_year:\n    if y not in seen:\n        seen.append(y)\n        print(y)",
      "for y in set(birth_year):\n    print(y)",
      "print(sorted(set(birth_year)))"
    ],
    "correctIndex": 2,
    "explanation": "הפתרון הנכון עוקב אחרי ערכים שכבר נראו: לכל שנה בודקים אם הופיעה כבר ברשימת seen - אם לא, מוסיפים ומדפיסים. כך כל ערך מודפס פעם אחת בלבד, בסדר ההופעה הראשונה.\n\nמדוע האחרות שגויות?\nset(birth_year) - מסיר כפילויות אבל לא שומר על סדר (לפי הנחת השאלה).\ncount(y) == 1 - ידפיס רק ערכים שמופיעים פעם אחת ויחידה (1997, 2003, 2000) וידלג על 2004 ו-2001 שחוזרים.\nsorted(set(...)) - משנה את הסדר למיון עולה.\nהדפסה של כל האיברים - לא מסירה כפילויות."
  },
  {
    "id": 16,
    "topic": "pandas",
    "subtopic": "groupby",
    "source": "מבחן 2024 סמסטר ב' מועד א' + תרגול 1",
    "question": "נתוני מכירות של חברה מסוימת נשמרו ב-dataframe בשם products, עם העמודות: region (איזור המכירה), product (מספר סידורי של המוצר) ו-sales (מספר המוצרים שנמכרו מאותו המוצר באיזור נתון).",
    "dataTable": {
      "headers": [
        "",
        "region",
        "product",
        "sales"
      ],
      "rows": [
        [
          "0",
          "r001",
          "444",
          "100"
        ],
        [
          "1",
          "r002",
          "444",
          "200"
        ],
        [
          "2",
          "r003",
          "666",
          "150"
        ],
        [
          "3",
          "r001",
          "444",
          "150"
        ],
        [
          "4",
          "r002",
          "555",
          "200"
        ],
        [
          "5",
          "r002",
          "555",
          "400"
        ]
      ]
    },
    "questionEnd": "בחרו קטע קוד שידפיס את סה\"כ המוצרים שנמכרו לפי אזורים ומוצרים. למשל עבור האיזור r001 והמוצר 444, יודפס 250. אילו מקטעי הקוד הבאים מבצעים את הנדרש?\n```1. print(products.groupby(['region']['product'])['sales'].sum())\n\n2. print(products.groupby(['region']['product']).sum(['sales']))\n\n3. print(products.groupby(['region', 'product'])['sales'].sum())\n\n4. for key, df in products.groupby(['region', 'product']):\n       print(key, df['sales'].sum())```",
    "options": [
      "קטעים 1, 2, 3 ו-4",
      "קטעים 2 ו-4 בלבד",
      "קטעים 3 ו-4 בלבד",
      "קטעים 1 ו-3 בלבד",
      "קטע 3 בלבד"
    ],
    "correctIndex": 2,
    "explanation": "קיבוץ לפי שתי עמודות דורש רשימה של שמות עמודות: groupby(['region', 'product']).\n\nקטע 3: תחביר תקין - מקבץ לפי שני המפתחות, בוחר את עמודת sales ומסכם. עבור (r001, 444) יודפס 100+150 = 250. עובד.\n\nקטע 4: איטרציה על אובייקט ה-groupby: בכל סיבוב מתקבל key (הזוג region+product) ותת-dataframe. הדפסת הסכום של sales לכל קבוצה. עובד.\n\nקטעים 1 ו-2: התחביר ['region']['product'] אינו קיבוץ לפי שתי עמודות - זהו ניסיון אינדוקס של רשימה במחרוזת, שגורר TypeError. לא עובדים.\n\nזו שאלה שחזרה גם במבחן 2024ב וגם בתרגול - חשוב לזכור את התחביר הנכון לקיבוץ מרובה עמודות."
  },
  {
    "id": 17,
    "topic": "pandas",
    "subtopic": "merge",
    "source": "מבחן 2025 סמסטר א' מועד ב' + תרגול 1",
    "question": "נתונים שני dataframes של עובדים בחברה:\n\ndf1 (עמודות name, team):\nMoshe - development\nAdam - research\nEmily - HR\n\ndf2 (עמודות team, established):\ndevelopment - 2008\nresearch - 2013\nfinance - 2010\n\nמה יהיה הפלט של הפקודה pd.merge(df1, df2, how='inner')?",
    "options": [
      "תשע שורות - כל צירוף אפשרי בין השורות",
      "שתי שורות: Moshe-development-2008, Adam-research-2013",
      "שלוש שורות: Moshe-development-2008, Adam-research-2013, NaN-finance-2010",
      "שלוש שורות: Moshe-development-2008, Adam-research-2013, Emily-HR-NaN",
      "ארבע שורות: Moshe-development-2008, Adam-research-2013, Emily-HR-NaN, NaN-finance-2010"
    ],
    "correctIndex": 1,
    "explanation": "inner merge משאיר רק מפתחות (team) שמופיעים בשני ה-dataframes.\n\nהמפתחות המשותפים: development ו-research בלבד.\nHR קיים רק ב-df1, finance קיים רק ב-df2 - שניהם נופלים.\n\nהפלט:\nname=Moshe, team=development, established=2008\nname=Adam, team=research, established=2013\n\nלשם השוואה: outer merge היה מחזיר את כל 4 השורות עם NaN במקומות החסרים (Emily-HR-NaN ו-NaN-finance-2010)."
  },
  {
    "id": 18,
    "topic": "pandas",
    "subtopic": "merge",
    "source": "מבחן 2025 סמסטר א' מועד ב' + תרגול 1",
    "question": "בהמשך לנתוני שני ה-dataframes של העובדים:\n```df1 (name, team): Moshe-development, Adam-research, Emily-HR\ndf2 (team, established): development-2008, research-2013, finance-2010```\nמה יודפס כתוצאה מהרצת שתי הפקודות הבאות?\n```print(pd.merge(df1, df2, how='left')['established'].count())\nprint(pd.merge(df1, df2, how='left')['established'].sum())```",
    "options": [
      "3\n4021.0",
      "2\n4021.0",
      "תתקבל שגיאת ריצה כי יש NaN בעמודה",
      "2\n6031.0",
      "3\n6031.0"
    ],
    "correctIndex": 1,
    "explanation": "left merge שומר את כל שורות df1: Moshe-development-2008, Adam-research-2013, Emily-HR-NaN (ל-HR אין התאמה ב-df2).\n\ncount() סופרת רק ערכים שאינם NaN:\n2008 ו-2013 - התוצאה 2 (לא 3!).\n\nsum() מסכמת תוך התעלמות מ-NaN:\n2008 + 2013 = 4021.\n\nנקודת מפתח: גם count וגם sum מדלגות על NaN. finance לא נכנסת בכלל כי how='left' שומר רק את מפתחות df1."
  },
  {
    "id": 19,
    "topic": "pandas",
    "subtopic": "apply וסינון",
    "source": "מבחן 2025 סמסטר ב' מועד ב' + תרגול 1",
    "question": "נתונה הטבלה הבאה (כ-DataFrame של pandas בשם student_data):",
    "dataTable": {
      "headers": [
        "",
        "school_code",
        "class",
        "name",
        "date_of_birth",
        "grade"
      ],
      "rows": [
        [
          "0",
          "s001",
          "4",
          "Moshe Franco",
          "15/05/2003",
          "75.7"
        ],
        [
          "1",
          "s002",
          "4",
          "Noam Salomon",
          "17/11/2004",
          "83.5"
        ],
        [
          "2",
          "s003",
          "6",
          "Elisha Byalik",
          "16/02/1999",
          "88.7"
        ],
        [
          "3",
          "s001",
          "7",
          "Naama Mcneill",
          "25/09/1998",
          "67.5"
        ],
        [
          "4",
          "s002",
          "5",
          "David Nitzani",
          "12/05/2002",
          "70.4"
        ],
        [
          "5",
          "s004",
          "7",
          "Alon Mcneill",
          "15/08/2000",
          "85.8"
        ]
      ]
    },
    "questionEnd": "מה יודפס כתוצאה מהרצת קטע הקוד הבא?\n```student_data['new_col'] = student_data['date_of_birth'].apply(\n    lambda d: int(d.split('/')[0]))\nstudents = student_data[student_data['new_col'] % 2 == 0]\nprint(students)```",
    "options": [
      "תתקבל שגיאה כי date_of_birth היא מחרוזת",
      "כל השורות עם עמודה חדשה של יום הלידה",
      "השורות של Elisha Byalik (new_col=16) ו-David Nitzani (new_col=12) בלבד",
      "השורות של Moshe Franco ו-Naama Mcneill בלבד",
      "השורות של Noam Salomon ו-Alon Mcneill בלבד"
    ],
    "correctIndex": 2,
    "explanation": "ה-apply שולף את החלק הראשון של התאריך לפני ה-'/' - כלומר את יום הלידה - וממיר למספר שלם.\n\nימי הלידה: 15, 17, 16, 25, 12, 15.\n\nהסינון % 2 == 0 משאיר רק ימים זוגיים:\nElisha Byalik - יום 16\nDavid Nitzani - יום 12\n\nהפלט: שתי השורות האלה, בצירוף העמודה new_col.\n\nבמבחן אחר (2024א מועד א') הופיעה וריאציה עם split('/')[1] - שליפת החודש במקום היום. שימו לב לאינדקס!"
  },
  {
    "id": 20,
    "topic": "pandas",
    "subtopic": "groupby + merge",
    "source": "מבחן 2025 סמסטר ב' מועד ב' + מבחן 2024 סמסטר ב' מועד א' + תרגול 1",
    "question": "בהמשך לטבלת student_data (ציוני תלמידים בכיתות 4-7), נתון קטע הקוד:\n```tmp = student_data.groupby('class', as_index=False)['grade'].mean()\ntmp.rename(columns={'grade': 'tmp_col'}, inplace=True)\nmerged = student_data.merge(tmp, on='class')\nresult = merged[merged['grade'] >= merged['tmp_col']]\nprint(result)```\nממוצעי הכיתות: כיתה 4: 79.6, כיתה 5: 70.4, כיתה 6: 88.7, כיתה 7: 76.65.\n\nמה מבצע קטע הקוד ואילו תלמידים יודפסו?",
    "options": [
      "מדפיס את התלמיד עם הציון הגבוה ביותר בכל כיתה: Noam Salomon בלבד",
      "תתקבל שגיאה כי לא ניתן לבצע merge של טבלה עם עצמה",
      "מדפיס את כל התלמידים שציונם גבוה מהממוצע הכללי: Elisha Byalik ו-Alon Mcneill בלבד",
      "מדפיס את פרטי כל התלמידים שציונם גבוה או שווה לממוצע בכיתתם: Noam Salomon, Elisha Byalik, David Nitzani, Alon Mcneill",
      "מדפיס את ממוצעי הכיתות בלבד ללא פרטי תלמידים"
    ],
    "correctIndex": 3,
    "explanation": "שלבי הקוד:\n\nשלב 1 - groupby:\nמחשבים ממוצע ציונים לכל כיתה (79.6, 70.4, 88.7, 76.65).\n\nשלב 2 - rename + merge:\nמצמידים לכל תלמיד את ממוצע הכיתה שלו בעמודה tmp_col.\n\nשלב 3 - סינון:\nמשאירים רק תלמידים שציונם גדול או שווה לממוצע הכיתתי.\n\nבדיקה:\nMoshe Franco: 75.7 < 79.6 - לא\nNoam Salomon: 83.5 >= 79.6 - כן\nElisha Byalik: 88.7 >= 88.7 - כן (שוויון!)\nNaama Mcneill: 67.5 < 76.65 - לא\nDavid Nitzani: 70.4 >= 70.4 - כן (הוא לבדו בכיתה 5)\nAlon Mcneill: 85.8 >= 76.65 - כן\n\nבמילים: הקוד מדפיס את פרטי כל התלמידים אשר הציון שלהם גבוה (או שווה) לממוצע בכיתה שלהם - תבנית groupby-merge-filter שחוזרת שוב ושוב במבחנים."
  },
  {
    "id": 21,
    "topic": "pandas",
    "subtopic": "groupby + merge",
    "source": "מבחן 2024 סמסטר ב' מועד א'",
    "question": "נתוני עובדים בחברה מסוימת נשמרו ב-dataframe בשם employees עם העמודות: department (מחלקה), emp_id (ת.ז. העובד) ו-salary (שכר חודשי). אנחנו מעוניינים להדפיס את פרטי העובדים אשר מרוויחים שכר גבוה יותר מהממוצע במחלקה שלהם.\n\nאיזה מקטעי הקוד הבאים מבצע את הנדרש?\n```# קטע 1\navg_salary = employees.groupby('department')['salary'].mean().reset_index()\navg_salary.rename(columns={\"salary\": \"salary_avg\"}, inplace=True)\nemployees = employees.merge(avg_salary, on='department')\nprint(employees[employees['salary'] > employees['salary_avg']])\n\n# קטע 2 - זהה לקטע 1, אך עם how='inner' מפורש:\nemployees = employees.merge(avg_salary, on='department', how='inner')\n\n# קטע 3\nemployees['average_salary'] = employees.groupby('department')['salary'].mean()\nemployees['above_average'] = employees['salary'] > employees['average_salary']\nprint(employees['above_average'])\n\n# קטע 4\nemployees['above_average'] = employees['salary'].apply(lambda x: x > x.mean())\nprint(employees['above_average'].groupby('department'))```",
    "options": [
      "קטע 1 בלבד",
      "קטע 3 בלבד",
      "קטעים 1 ו-2 בלבד",
      "כל הקטעים מבצעים את הנדרש",
      "קטעים 1, 2 ו-3"
    ],
    "correctIndex": 2,
    "explanation": "קטעים 1 ו-2 נכונים - זו התבנית הסטנדרטית: חישוב ממוצע לכל מחלקה, שינוי שם העמודה, הצמדה לכל עובד באמצעות merge, וסינון. ברירת המחדל של merge היא how='inner', ולכן קטע 2 (שמציין inner במפורש) זהה לחלוטין לקטע 1.\n\nקטע 3 שגוי: groupby(...).mean() מחזיר Series שהאינדקס שלו הוא שמות המחלקות, בעוד האינדקס של employees הוא מספרי שורות. ההשמה לא תתיישר נכון - יתקבלו ערכי NaN.\n\nקטע 4 שגוי: apply על Series מעביר ערך בודד (סקלר) x לפונקציה - למספר בודד אין מתודת mean(), תתקבל שגיאה. בנוסף groupby על Series בוליאני לפי שם עמודה לא יעבוד כך."
  },
  {
    "id": 22,
    "topic": "pandas",
    "subtopic": "groupby",
    "source": "מבחן 2023 סמסטר ב' מועד א'",
    "question": "בהינתן ה-dataframe בשם student_data (שש שורות ו-5 עמודות: school_code, class, name, date_of_birth, grade) שבו שני תלמידים בכיתה 4, תלמיד אחד בכיתה 5, אחד בכיתה 6 ושניים בכיתה 7 - מה יודפס כתוצאה מהרצת קטע הקוד הבא?\n```for (cls, group) in student_data.groupby('class'):\n    print(cls, group.shape[0], group.shape[1])```",
    "options": [
      "4 2 5\n5 1 5\n6 1 5\n7 2 5",
      "4 5 2\n5 5 1\n6 5 1\n7 5 2",
      "4 2\n5 1\n6 1\n7 2",
      "תתקבל שגיאה כי class היא מילה שמורה בפייתון",
      "2 4 5\n1 5 5\n1 6 5\n2 7 5"
    ],
    "correctIndex": 0,
    "explanation": "איטרציה על groupby מחזירה בכל סיבוב זוג: ערך המפתח (מספר הכיתה) ותת-dataframe של הקבוצה.\n\ngroup.shape הוא tuple: (מספר שורות, מספר עמודות).\nshape[0] = מספר התלמידים בכיתה, shape[1] = מספר העמודות (5 בכולן).\n\nלכן:\nכיתה 4: 2 תלמידים, 5 עמודות - 4 2 5\nכיתה 5: 1 תלמיד - 5 1 5\nכיתה 6: 1 תלמיד - 6 1 5\nכיתה 7: 2 תלמידים - 7 2 5\n\nהערה: במבחן המקורי שם המשתנה בלולאה היה class - שהיא מילה שמורה בפייתון והייתה גוררת SyntaxError בפועל; כאן תוקן ל-cls. הרעיון הנבחן הוא הבנת מבנה האיטרציה על groupby ו-shape."
  },
  {
    "id": 23,
    "topic": "pandas",
    "subtopic": "groupby",
    "source": "מבחן 2023 סמסטר א' מועד א'",
    "question": "נתון ה-dataframe הבא (df) של ציוני קורסים:",
    "dataTable": {
      "headers": [
        "",
        "course",
        "grade"
      ],
      "rows": [
        [
          "0",
          "math",
          "75"
        ],
        [
          "1",
          "data science",
          "70"
        ],
        [
          "2",
          "communication",
          "75"
        ],
        [
          "3",
          "math",
          "85"
        ],
        [
          "4",
          "language",
          "80"
        ],
        [
          "5",
          "communication",
          "80"
        ]
      ]
    },
    "questionEnd": "מה הפלט של קטע הקוד הבא?\n```result = df.groupby('course')['grade'].mean()\nprint(result)```",
    "options": [
      "תתקבל שגיאה כי עמודת course מכילה מחרוזות",
      "communication 77.5, data science 70.0, language 80.0, math 80.0 (ממוין לפי שם הקורס)",
      "communication 155, data science 70, language 80, math 160 (סכומים)",
      "ממוצע כללי אחד: 77.5",
      "math 80.0, data science 70.0, communication 77.5, language 80.0 (לפי סדר ההופעה)"
    ],
    "correctIndex": 1,
    "explanation": "groupby מקבץ את השורות לפי ערכי course ומחשב ממוצע ציונים לכל קורס:\n\ncommunication: (75+80)/2 = 77.5\ndata science: 70\nlanguage: 80\nmath: (75+85)/2 = 80\n\nנקודה חשובה: כברירת מחדל groupby ממיין את המפתחות (sort=True) - הפלט מסודר אלפביתית לפי שם הקורס, לא לפי סדר ההופעה בטבלה."
  },
  {
    "id": 24,
    "topic": "pandas",
    "subtopic": "NumPy - מערכים ומסכות",
    "source": "מבחן 2023 סמסטר ב' מועד א' + תרגול",
    "question": "נתון קטע הקוד הבא:\n```import numpy as np\n\ndef compute(num):\n    for i in range(2, num):\n        if num % i == 0:\n            return False\n    return True\n\nmax_num = 20\nvalues = np.arange(2, max_num)\nmask = np.array([compute(v) for v in values])\nprint(sum(values[mask]))```",
    "options": [
      "תתקבל שגיאת ריצה",
      "171",
      "77",
      "58",
      "129"
    ],
    "correctIndex": 2,
    "explanation": "הפונקציה compute בודקת ראשוניות: מחזירה True אם אין ל-num מחלק בין 2 ל-num-1.\n\nvalues = המספרים 2 עד 19 (arange לא כולל את 20).\nmask = מערך בוליאני: True במקומות של מספרים ראשוניים.\nvalues[mask] = סינון בוליאני - רק הראשוניים.\n\nהראשוניים בין 2 ל-19:\n2, 3, 5, 7, 11, 13, 17, 19\n\nסכום:\n2+3+5+7+11+13+17+19 = 77\n\nבמילים: התוכנית סוכמת את המספרים הראשוניים בין 2 ל-20 (לא כולל).",
    "variants": [
      {
        "question": "נתון קטע הקוד הבא:\n```import numpy as np\n\ndef compute(num):\n    for i in range(2, num):\n        if num % i == 0:\n            return False\n    return True\n\nmax_num = 30\nvalues = np.arange(2, max_num)\nmask = np.array([compute(v) for v in values])\nprint(sum(values[mask]))```",
        "options": [
          "77",
          "435",
          "129",
          "100",
          "158"
        ],
        "correctIndex": 2,
        "explanation": "הראשוניים בין 2 ל-29 (כולל):\n2, 3, 5, 7, 11, 13, 17, 19, 23, 29\n\nסכום:\n2+3+5+7+11+13+17+19 = 77\n77+23+29 = 129"
      }
    ]
  },
  {
    "id": 25,
    "topic": "pandas",
    "subtopic": "מיון לפי רשימת עזר",
    "source": "מבחן 2024 סמסטר ב' מועד ב' + תרגול",
    "question": "נתון קטע הקוד הבא:\n```lst = [('a', 1), ('b', 2), ('c', 3), ('d', 4)]\nauxiliary = ['d', 'c', 'a', 'b']\n\nres = [tup for x in auxiliary for tup in lst if tup[0] == x]\nprint(res)```",
    "options": [
      "[('d', 4), ('c', 3), ('b', 2), ('a', 1)]",
      "[('d', 4), ('c', 3), ('a', 1), ('b', 2)]",
      "תתקבל שגיאת ריצה",
      "[('a', 1), ('b', 2), ('c', 3), ('d', 4)]",
      "['d', 'c', 'a', 'b']"
    ],
    "correctIndex": 1,
    "explanation": "ה-list comprehension הכפול רץ קודם על auxiliary (הלולאה החיצונית) ואז על lst (הפנימית):\n\nעבור x='d': נמצא ('d', 4)\nעבור x='c': נמצא ('c', 3)\nעבור x='a': נמצא ('a', 1)\nעבור x='b': נמצא ('b', 2)\n\nהפלט: [('d', 4), ('c', 3), ('a', 1), ('b', 2)]\n\nבמילים: התוכנית מדפיסה את רשומות lst באופן ממוין, כאשר מפתח המיון הוא האיבר הראשון בכל tuple, והסדר מוכתב על ידי סדר המפתחות ברשימת העזר auxiliary."
  },
  {
    "id": 26,
    "topic": "pandas",
    "subtopic": "פונקציות מרחק בקוד",
    "source": "מבחן 2024 סמסטר ב' מועד א' + מבחן 2025 סמסטר ב' מועד א'",
    "question": "נתון קטע הקוד הבא:\n```def func(list1, list2):\n    res1 = [(p-q)**2 for p, q in zip(list1, list2)]\n    res2 = [abs(p-q) for p, q in zip(list1, list2)]\n    return sum(res1)**0.5, sum(res2)\n\ntest1 = [0, 2, 4, 6]\nprint(func(test1, test1))\nprint(func(test1, list(reversed(test1))))```\nמה יודפס ומה מחשבת הפונקציה?",
    "options": [
      "(0.0, 0)\nבקירוב (8.94, 16); הפונקציה מחשבת מרחק אוקלידי ומרחק מנהטן בין שני וקטורים",
      "(0.0, 0.0)\n(80.0, 16.0); הפונקציה מחשבת שונות וסכום הפרשים",
      "תתקבל שגיאה כי הפונקציה מחזירה שני ערכים",
      "(0.0, 0)\nבקירוב (16.0, 8.94); הפונקציה מחשבת מרחק מנהטן ומרחק אוקלידי",
      "(6.0, 12)\n(8.94, 16); הפונקציה מחשבת נורמות של הווקטורים"
    ],
    "correctIndex": 0,
    "explanation": "res1 = ריבועי ההפרשים - השורש של סכומם הוא מרחק אוקלידי.\nres2 = ערכים מוחלטים של ההפרשים - סכומם הוא מרחק מנהטן.\n\nקריאה 1: func(test1, test1) - וקטור מול עצמו, כל ההפרשים 0:\n(0.0, 0)\n\nקריאה 2: test1 = [0,2,4,6] מול [6,4,2,0]:\nהפרשים: -6, -2, 2, 6\nאוקלידי: (36+4+4+36)^0.5 = 80^0.5 = 8.94\nמנהטן: 6+2+2+6 = 16\n\nהפלט: (8.94, 16.0) בקירוב.\n\nגרסת המבחן של 2024ב כללה רק את המרחק האוקלידי עם [0,1,2,3,4] - שם התקבל 6.32 = שורש 40.",
    "variants": [
      {
        "question": "נתון קטע הקוד הבא:\n```def func(list1, list2):\n    intermediate = [(p-q)**2 for p, q in zip(list1, list2)]\n    return sum(intermediate)**0.5\n\ntest1 = [0, 1, 2, 3, 4]\nprint(func(test1, test1))\nprint(func(test1, list(reversed(test1))))```\nמה יודפס ומה מחשבת הפונקציה?",
        "options": [
          "0.0\n40.0; הפונקציה מחשבת את סכום ריבועי ההפרשים",
          "בקירוב 5.48\n6.32; הפונקציה מחשבת נורמת הווקטור הראשון",
          "תתקבל שגיאה בקריאה השנייה כי reversed מחזיר iterator",
          "0.0\n12.0; הפונקציה מחשבת מרחק מנהטן בין שני וקטורים",
          "0.0\nבקירוב 6.32; הפונקציה מחשבת מרחק אוקלידי בין שני וקטורים"
        ],
        "correctIndex": 4,
        "explanation": "הפונקציה מחשבת מרחק אוקלידי: שורש סכום ריבועי ההפרשים.\n\nקריאה 1: וקטור מול עצמו - מרחק 0.0.\n\nקריאה 2: [0,1,2,3,4] מול [4,3,2,1,0]:\nהפרשים: -4, -2, 0, 2, 4\nריבועים: 16+4+0+4+16 = 40\nשורש: 6.32 בקירוב.\n\nהערה: reversed מחזיר iterator, אבל zip יודע לעבוד איתו ישירות - אין שגיאה."
      }
    ]
  },
  {
    "id": 27,
    "topic": "pandas",
    "subtopic": "מיזוג מחרוזות",
    "source": "מבחן 2024 סמסטר א' מועד ב'",
    "question": "נתון קטע הקוד הבא:\n```text = \"abatardir, acariatre, atlantica, batiments, pale\"\ntext = \"X\".join(text.split(\"a\"))\nprint(text)```\nמה מבצעת השורה השנייה בקוד?",
    "options": [
      "מחליפה כל מופע של התו a בתו X (שקול ל-replace)",
      "מוחקת את כל מופעי התו a מהמחרוזת",
      "ממיינת את התווים במחרוזת",
      "משכפלת את המחרוזת ומוסיפה X בין העותקים",
      "מפצלת את המחרוזת לרשימת מילים לפי פסיקים"
    ],
    "correctIndex": 0,
    "explanation": "text.split(\"a\") מפצל את המחרוזת לרשימת מקטעים בכל מופע של a (התו נעלם).\n\"X\".join(...) מדביק את המקטעים חזרה עם X ביניהם.\n\nהתוצאה: כל a הוחלף ב-X - שקול בדיוק ל:\ntext.replace(\"a\", \"X\")\n\nזו תבנית ותיקה בפייתון: split ואז join = החלפה גורפת. במבחן המקורי הוחלף התו a-עם-גג (a המודגשת בצרפתית) באות a רגילה - העיקרון זהה."
  },
  {
    "id": 28,
    "topic": "stats",
    "subtopic": "ממוצע וחציון",
    "source": "מבחן 2025 סמסטר ב' מועד א' + מבחן חזרה",
    "question": "בטבלה הבאה מוצג משקל (בק\"ג) של ארגזי ירקות שנשקלו במדגם אקראי ממחסן סיטונאי:",
    "dataTable": {
      "headers": [
        "משקל (ק\"ג)",
        "3",
        "4",
        "7",
        "8",
        "10",
        "13",
        "25",
        "37",
        "45"
      ],
      "rows": [
        [
          "מספר ארגזים",
          "10",
          "10",
          "8",
          "8",
          "7",
          "4",
          "4",
          "3",
          "2"
        ]
      ]
    },
    "questionEnd": "אילו מהטענות הבאות נכונות בהתחשב בהתפלגות הנתונים?",
    "options": [
      "ההתפלגות נראית סימטרית",
      "השונות במדגם גבוהה מאוד ולכן לא ניתן להסיק על המגמה",
      "החציון גדול מהממוצע",
      "ניתן לצפות שהממוצע יהיה גבוה מהחציון",
      "רוב הארגזים שוקלים יותר מ-12 ק\"ג"
    ],
    "correctIndex": 3,
    "explanation": "רוב התצפיות מרוכזות במשקלים הנמוכים (10+10+8+8+7 = 43 ארגזים במשקל עד 10 ק\"ג מתוך 56), ומעט ארגזים כבדים מאוד (25, 37, 45) יוצרים זנב ימני ארוך.\n\nזו התפלגות מוטה חיובית (ימינה): הערכים הקיצוניים הגבוהים מושכים את הממוצע כלפי מעלה, בעוד החציון עמיד להם - לכן צפוי ממוצע גבוה מהחציון.\n\nבדיקה מהירה: החציון (התצפית ה-28-29 מתוך 56) נופל על משקל 7-8 ק\"ג; הממוצע בקירוב 12 ק\"ג.\n\nרוב הארגזים דווקא שוקלים פחות מ-12 ק\"ג (43 מתוך 56), וההתפלגות רחוקה מסימטרית."
  },
  {
    "id": 29,
    "topic": "stats",
    "subtopic": "ממוצע וחציון",
    "source": "מבחן 2025 סמסטר א' מועד ב'",
    "question": "התפלגות זמני המתנה במסעדה מסוימת ביפו היא מוטה ימינה, כלומר ישנם מקרים נדירים של זמני המתנה ארוכים במיוחד. נלקח מדגם של 100 לקוחות ונמצא כי זמן ההמתנה החציוני הוא 12 דקות, בעוד שהממוצע הוא 18 דקות.\n\nאילו מהטענות הבאות נכונות?",
    "options": [
      "כדי לחשב סטיית תקן, נעדיף להשתמש בחציון ולא בממוצע במקרה הזה",
      "במקרים של התפלגות מוטה ימינה, סטיית התקן תמיד קטנה מהחציון",
      "שתי הטענות: הערך 12 דקות מייצג טוב יותר את מרכז ההתפלגות מאשר 18 דקות; והממוצע מושפע במיוחד מערכים קיצוניים ולכן נוטה להיות גבוה מהחציון",
      "הערך 18 דקות מייצג טוב יותר את מרכז ההתפלגות מאשר 12 דקות",
      "ההתפלגות סימטרית ולכן הממוצע והחציון צריכים להיות שווים"
    ],
    "correctIndex": 2,
    "explanation": "בהתפלגות מוטה ימינה זמני ההמתנה הקיצוניים (נדירים אך ארוכים מאוד) מושכים את הממוצע כלפי מעלה - לכן ממוצע (18) גבוה מחציון (12).\n\nהחציון עמיד לערכים קיצוניים ולכן מייצג טוב יותר את הלקוח ה'טיפוסי'.\n\nהטענות השגויות: ההתפלגות אינה סימטרית (נתון שהיא מוטה); אין שום כלל שקושר בין סטיית תקן לחציון; ונוסחת סטיית התקן מוגדרת סביב הממוצע - לא מחליפים בה את הממוצע בחציון."
  },
  {
    "id": 30,
    "topic": "stats",
    "subtopic": "זיהוי צורת התפלגות",
    "source": "מבחן 2023 סמסטר ב' מועד א'",
    "question": "בביה\"ס התיכון ע\"ש אילן רמון בהוד השרון נערך סקר אנונימי בנושא דימוי הגוף בקרב 250 תלמידי י\"ב. התלמידים דרגו את דימוי הגוף העצמי שלהם בין 1 ל-10 כאשר 1 מסמן את הערך הכי נמוך ו-10 - הכי גבוה. ממוצע הדירוגים בקרב בני הנוער היה 8.27, חציון 7.5 ושכיח 7.44.\n\nסטודנט הכין היסטוגרמה של כל הדירוגים (250) וקיבל פונקציית צפיפות עולה (לנקודת מקסימום) ויורדת לאחר מכן. כעת עליו להחליט איזה סוג התפלגות מקיימים הנתונים. סמנו תשובה אחת נכונה:",
    "options": [
      "התפלגות נורמלית",
      "התפלגות מוטה חיובית (positive skew)",
      "התפלגות מוטה שלילית (negative skew)",
      "התפלגות נורמלית סטנדרטית",
      "התפלגות אחידה (uniform)"
    ],
    "correctIndex": 1,
    "explanation": "הסימן המזהה: סדר המדדים.\nממוצע (8.27) > חציון (7.5) > שכיח (7.44)\n\nכאשר הממוצע גדול מהחציון והחציון גדול מהשכיח - ההתפלגות מוטה חיובית (זנב ימני): ערכים גבוהים קיצוניים מושכים את הממוצע ימינה, החציון פחות והשכיח נשאר בפסגה.\n\nהתפלגות נורמלית או סימטרית הייתה מציגה ממוצע = חציון = שכיח. התפלגות נורמלית סטנדרטית דורשת בנוסף ממוצע 0 וסטיית תקן 1 - בוודאי לא כאן (סולם 1-10)."
  },
  {
    "id": 31,
    "topic": "stats",
    "subtopic": "התפלגות מוטה",
    "source": "מבחן 2023 סמסטר א' מועד א'",
    "question": "נכון או לא נכון? בהתפלגות מוטה חיובית (positive skewed distribution) חציון וממוצע הנתונים מתלכדים.",
    "options": [
      "נכון - הם מתלכדים דווקא בהתפלגות מוטה, ונפרדים בהתפלגות סימטרית",
      "נכון - חציון וממוצע תמיד מתלכדים בכל התפלגות",
      "לא נכון - בהתפלגות מוטה חיובית הממוצע תמיד קטן מהחציון",
      "לא נכון - בהתפלגות מוטה חיובית הזנב הימני מושך את הממוצע מעל החציון",
      "לא ניתן לדעת ללא נתונים מספריים"
    ],
    "correctIndex": 3,
    "explanation": "בהתפלגות מוטה חיובית יש זנב ימני ארוך - ערכים גבוהים קיצוניים. ערכים אלה משפיעים חזק על הממוצע (שמשקלל כל ערך) אך לא על החציון (שרק סופר מיקומים).\n\nלכן בהתפלגות מוטה חיובית: ממוצע > חציון - הם אינם מתלכדים.\n\nהתלכדות ממוצע-חציון-שכיח מאפיינת התפלגויות סימטריות (כמו הנורמלית). האפשרות ההפוכה (ממוצע קטן מחציון) מתארת דווקא הטיה שלילית."
  },
  {
    "id": 32,
    "topic": "stats",
    "subtopic": "היסטוגרמה מנורמלת",
    "source": "מבחן 2025 סמסטר ב' מועד ב' + תרגול 2",
    "question": "להלן היסטוגרמה (מנורמלת - סכום הגבהים 1) של משקל 500 אבטיחים במשק של אחד המושבים בדרום הארץ. גובה כל עמודה מייצג את החלק היחסי של האבטיחים באותו טווח משקל:",
    "dataTable": {
      "headers": [
        "טווח משקל (ק\"ג)",
        "2-3",
        "3-4",
        "4-5",
        "5-6",
        "6-7",
        "7-8"
      ],
      "rows": [
        [
          "חלק יחסי",
          "0.03",
          "0.12",
          "0.35",
          "0.39",
          "0.10",
          "0.01"
        ]
      ]
    },
    "questionEnd": "(א) מהו אחוז האבטיחים ששוקלים בין 4.5 ל-5.5 ק\"ג?\n(ב) מהו מספר האבטיחים ששקלו בין 3 ל-4 ק\"ג?",
    "options": [
      "(א) לא ניתן לשער על סמך ההיסטוגרמה הנתונה\n(ב) 60 אבטיחים",
      "(א) בין 35% ל-39%\n(ב) 12 אבטיחים",
      "(א) לא ניתן לשער\n(ב) גם את זה לא ניתן לחשב",
      "(א) 37% בדיוק\n(ב) 60 אבטיחים",
      "(א) 37% בדיוק\n(ב) 120 אבטיחים"
    ],
    "correctIndex": 0,
    "explanation": "(א) הטווח 4.5-5.5 חוצה שתי עמודות באמצען. ההיסטוגרמה מספרת רק כמה מסה יש בכל עמודה שלמה - לא איך היא מתפלגת בתוך העמודה. ייתכן שכל המסה של עמודת 4-5 מרוכזת בחצי השמאלי (מתחת ל-4.5) וייתכן שכולה בימני. לכן לא ניתן לשער - החישוב 0.35/2 + 0.39/2 = 37% נכון רק תחת הנחת אחידות שלא נתונה.\n\n(ב) הטווח 3-4 הוא עמודה שלמה - כאן אין בעיה:\n500 · 0.12 = 60 אבטיחים."
  },
  {
    "id": 33,
    "topic": "stats",
    "subtopic": "היסטוגרמה מנורמלת",
    "source": "מבחן 2025 סמסטר ב' מועד ב' + תרגול 2",
    "question": "בהמשך להיסטוגרמת האבטיחים (500 אבטיחים; חלקים יחסיים: 2-3: 0.03, 3-4: 0.12, 4-5: 0.35, 5-6: 0.39, 6-7: 0.10, 7-8: 0.01):\n\n(א) מהו התחום [מספר מינימלי, מספר מקסימלי] של האבטיחים ששקלו בין 4.5 ל-7 ק\"ג?\n(ב) איזה מדד מרכזי ניתן לחשב במדויק מהנתונים, ומהו ערכו?",
    "options": [
      "(א) בין 245 ל-420\n(ב) החציון, והוא 5",
      "(א) בין 420 ל-495\n(ב) החציון, והוא 5.5",
      "(א) בין 245 ל-420\n(ב) הממוצע, והוא 5.1",
      "(א) לא ניתן לחשב חסמים\n(ב) אף מדד לא ניתן לחישוב מדויק",
      "(א) בדיוק 350\n(ב) סטיית התקן, והיא 1.2"
    ],
    "correctIndex": 0,
    "explanation": "(א) הטווח 4.5-7 כולל: חצי מעמודת 4-5 (תרומה בין 0 ל-0.35), את כל עמודת 5-6 (0.39) ואת כל עמודת 6-7 (0.10).\n\nמינימום: אם כל מסת עמודת 4-5 נמצאת מתחת ל-4.5:\n(0.39 + 0.10) · 500 = 245\n\nמקסימום: אם כולה מעל 4.5:\n(0.35 + 0.39 + 0.10) · 500 = 420\n\n(ב) חישוב מצטבר: 0.03 + 0.12 + 0.35 = 0.50 בדיוק בערך 5. כלומר בדיוק חצי מהאבטיחים שוקלים עד 5 ק\"ג - החציון הוא 5.\n\nהממוצע וסטיית התקן לא ניתנים לחישוב מדויק - הם דורשים לדעת את הערכים בתוך העמודות."
  },
  {
    "id": 34,
    "topic": "stats",
    "subtopic": "השוואת היסטוגרמות",
    "source": "מבחן 2023 סמסטר ב' מועד א' + מבחן 2024 סמסטר א' מועד ב' + תרגול 2",
    "question": "נתונות שתי היסטוגרמות של שני מדגמים מאוכלוסיות שונות A ו-B:\n\nמדגם A: התפלגות בצורת U - שכיחויות גבוהות (7, 6, 5...) בשני הקצוות של הטווח, ושכיחויות נמוכות (1) במרכז.\nמדגם B: התפלגות פעמונית - שכיחות מקסימלית (7) במרכז הטווח, יורדת הדרגתית לשכיחות 1 בקצוות.\nבשני המדגמים אותו טווח ערכים, וסכום השכיחויות (גודל המדגם) זהה.\n\nאילו מהטענות ניתן להסיק מהתרשימים?",
    "options": [
      "שני המדגמים בהכרח נדגמו מהתפלגות נורמלית",
      "לא ניתן להסיק דבר על השונויות מצורת ההיסטוגרמות",
      "רווח הסמך מ-A יהיה צר יותר מזה של B",
      "שתי הטענות: השונות המדגמית של A גבוהה מזאת של B; ורווח סמך לתוחלת שיחושב מ-A (באותה רמת ביטחון) יהיה רחב יותר מזה של B",
      "השונות המדגמית של A נמוכה מזאת של B"
    ],
    "correctIndex": 3,
    "explanation": "שונות מודדת פיזור סביב הממוצע.\n\nב-A (צורת U) רוב התצפיות רחוקות מהמרכז - בקצוות - לכן השונות גבוהה.\nב-B (פעמון) רוב התצפיות צמודות למרכז - השונות נמוכה.\n\nרוחב רווח סמך לתוחלת פרופורציוני לסטיית התקן המדגמית (s/sqrt(n)). באותה רמת ביטחון ואותו n: שונות גדולה יותר ב-A גוררת רווח סמך רחב יותר.\n\nלגבי נורמליות: מדגם בצורת U בוודאי לא מגיע מהתפלגות נורמלית (פעמונית) - בגרסת המבחן של 2025 הטענה 'ייתכן ששני המדגמים נדגמו מהתפלגות נורמלית' סומנה כלא נכונה."
  },
  {
    "id": 35,
    "topic": "stats",
    "subtopic": "התפלגות נורמלית - טווח סימטרי",
    "source": "מבחן 2025 סמסטר ב' מועד א' + מבחן חזרה",
    "question": "נתונה התפלגות נורמלית N(70, 10) - תוחלת 70 וסטיית תקן 10.\n\nמהו התחום [left, right] בו נמצאים 80% משטח ההתפלגות באופן סימטרי מסביב לתוחלת?",
    "options": [
      "[42.8, 97.2]",
      "[53.5, 86.5]",
      "[50.4, 89.6]",
      "[60.0, 80.0]",
      "[57.2, 82.8]"
    ],
    "correctIndex": 4,
    "explanation": "טווח סימטרי המכיל 80% משאיר 10% בכל זנב. לכן נקודת החיתוך הימנית משאירה מתחתיה 90% - זהו z = Z(0.90) = 1.28.\n\nחישוב:\nleft = 70 - 1.28·10 = 57.2\nright = 70 + 1.28·10 = 82.8\n\nהתחום: [57.2, 82.8]\n\nהעיקרון: עבור טווח סימטרי של X אחוזים, מחפשים בטבלה את z שמצטבר עד (X + (100-X)/2) אחוזים.",
    "variants": [
      {
        "question": "נתונה התפלגות נורמלית N(40, 15) - תוחלת 40 וסטיית תקן 15.\n\nמהו התחום [left, right] בו נמצאים 70% משטח ההתפלגות באופן סימטרי מסביב לתוחלת?",
        "options": [
          "[25.0, 55.0]",
          "[36.0, 44.0]",
          "[24.4, 55.6]",
          "[29.5, 50.5]",
          "[18.4, 61.6]"
        ],
        "correctIndex": 2,
        "explanation": "טווח סימטרי של 70% משאיר 15% בכל זנב - נקודת החיתוך מצטברת ל-85%: z = Z(0.85) = 1.04.\n\nחישוב:\nleft = 40 - 1.04·15 = 40 - 15.6 = 24.4\nright = 40 + 1.04·15 = 40 + 15.6 = 55.6\n\nהתחום: [24.4, 55.6] (זו בדיוק שאלת מבחן 2025ב מועד ב')."
      },
      {
        "question": "נתונה התפלגות נורמלית N(65, 7) - תוחלת 65 וסטיית תקן 7.\n\nמהו התחום [left, right] בו נמצאים 85% משטח ההתפלגות באופן סימטרי מסביב לתוחלת?",
        "options": [
          "[51.0, 79.0]",
          "[57.72, 72.28]",
          "[50.6, 79.4]",
          "[58.0, 72.0]",
          "[54.92, 75.08]"
        ],
        "correctIndex": 4,
        "explanation": "טווח סימטרי של 85% משאיר 7.5% בכל זנב - z = Z(0.925) = 1.44.\n\nחישוב:\nleft = 65 - 1.44·7 = 65 - 10.08 = 54.92\nright = 65 + 1.44·7 = 65 + 10.08 = 75.08\n\nהתחום: [54.92, 75.08] (זו בדיוק שאלת מבחן 2024ב מועד ב')."
      }
    ]
  },
  {
    "id": 36,
    "topic": "stats",
    "subtopic": "התפלגות נורמלית - הסתברות",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "בהתייחס להתפלגות N(70, 10): מה ההסתברות שערכו של משתנה מקרי שנדגם באופן אקראי מההתפלגות יהיה נמוך מ-75?",
    "options": [
      "0.9332 (בקירוב 93%)",
      "0.7500 (בדיוק 75%)",
      "0.5000 (בדיוק 50%)",
      "0.3085 (בקירוב 31%)",
      "0.6915 (בקירוב 69%)"
    ],
    "correctIndex": 4,
    "explanation": "מתקננים את הערך:\nZ = (75 - 70) / 10 = 0.5\n\nמטבלת Z:\nP(x < 75) = P(Z < 0.5) = 0.6915\n\nכלומר בקירוב 69% מהערכים נמוכים מ-75. הגיוני: 75 מעט מעל התוחלת, ולכן ההסתברות מעט מעל 50%.",
    "variants": [
      {
        "question": "בהתייחס להתפלגות N(40, 15): מה ההסתברות שערכו של משתנה מקרי שנדגם באופן אקראי מההתפלגות יהיה גבוה מ-45?",
        "options": [
          "0.3707",
          "0.1293",
          "0.6293",
          "0.5000",
          "0.8707"
        ],
        "correctIndex": 0,
        "explanation": "מתקננים:\nZ = (45 - 40) / 15 = 0.33\n\nמטבלת Z:\nP(x < 45) = 0.6293\n\nאבל נשאלנו על ההסתברות המשלימה:\nP(x > 45) = 1 - 0.6293 = 0.3707\n\nשימו לב לכיוון השאלה - טעות נפוצה היא לענות את הערך מהטבלה בלי להפוך."
      }
    ]
  },
  {
    "id": 37,
    "topic": "stats",
    "subtopic": "התפלגות נורמלית - הסתברות",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד ב'",
    "question": "בהתייחס להתפלגות N(70, 10): מה ההסתברות שערכו של משתנה מקרי שנדגם באופן אקראי יהיה נמוך מ-50 או גבוה מ-85?",
    "options": [
      "בקירוב 0.09",
      "בקירוב 0.16",
      "בקירוב 0.07",
      "בקירוב 0.02",
      "בקירוב 0.91"
    ],
    "correctIndex": 0,
    "explanation": "מחשבים כל זנב בנפרד:\n\nזנב שמאלי:\nZ1 = (50 - 70)/10 = -2.0\nP(x < 50) = 0.0228\n\nזנב ימני:\nZ2 = (85 - 70)/10 = 1.5\nP(x < 85) = 0.9332, ולכן P(x > 85) = 1 - 0.9332 = 0.0668\n\nסכום שני המאורעות הזרים:\nP = 0.0228 + 0.0668 = 0.0896 - בקירוב 0.09",
    "variants": [
      {
        "question": "בהתייחס להתפלגות N(40, 15): מה ההסתברות שערכו של משתנה מקרי שנדגם באופן אקראי יהיה בין 30 ל-45?",
        "options": [
          "בקירוב 0.25",
          "בקירוב 0.63",
          "בקירוב 0.88",
          "בקירוב 0.12",
          "בקירוב 0.37"
        ],
        "correctIndex": 4,
        "explanation": "הסתברות לטווח = הפרש בין שני חתכים:\n\nZ עליון: (45-40)/15 = 0.33, P(x < 45) = 0.6293\nZ תחתון: (30-40)/15 = -0.66, P(x < 30) = 0.2546\n\nP(30 < x < 45) = 0.6293 - 0.2546 = 0.3747 - בקירוב 0.37\n\n(דרך שקולה מהפתרון הרשמי: 1 פחות שני הזנבות - 1 - 0.3707 - 0.2546 = 0.3747.)"
      }
    ]
  },
  {
    "id": 38,
    "topic": "stats",
    "subtopic": "התפלגות נורמלית - טווח לא סימטרי",
    "source": "מבחן 2025 סמסטר א' מועד א' + מועד ב'",
    "question": "נתונה התפלגות נורמלית N(60, 8) - תוחלת 60 וסטיית תקן 8.\n\nקבעו תחום [A, B] לא סימטרי סביב התוחלת שבו נמצאים 85% מערכי ההתפלגות, כך ש-X% מהערכים שבתחום נמצאים מימין לתוחלת, Y% משמאל, ומתקיים X = Y + 5.",
    "options": [
      "[49.76, 70.24]",
      "[46.88, 73.12]",
      "[49.76, 73.12]",
      "[46.88, 70.24]",
      "[48.0, 72.0]"
    ],
    "correctIndex": 2,
    "explanation": "קודם פותרים את חלוקת האחוזים:\nX = Y + 5 וגם X + Y = 85\n2Y + 5 = 85, כלומר Y = 40, X = 45\n\nצד שמאל: 40% בין left לתוחלת. מתחת ל-left נשאר 50% - 40% = 10%, כלומר left נמצא בנקודה שמצטברת ל-10% - זהו z = -Z(0.90) = -1.28:\nleft = 60 - 1.28·8 = 49.76\n\nצד ימין: 45% בין התוחלת ל-right. מצטבר עד right: 50% + 45% = 95% - זהו Z(0.95) = 1.64:\nright = 60 + 1.64·8 = 73.12\n\nהתחום: [49.76, 73.12]\n\nזהו סוג שאלה חדש יחסית (הופיע לראשונה ב-2025) - טווח לא סימטרי שדורש לפרק את האחוזים לשני צדדים שונים."
  },
  {
    "id": 39,
    "topic": "stats",
    "subtopic": "התפלגות נורמלית - טווח לא סימטרי",
    "source": "מבחן 2025 סמסטר א' מועד ב'",
    "question": "נתונה התפלגות נורמלית N(75, 10). מהו התחום [left, right] בו נמצאים 80% משטח ההתפלגות באופן לא סימטרי מסביב לתוחלת, כך ש-50% נמצאים משמאל לתוחלת ו-30% מימין?",
    "options": [
      "[65.0, 83.4]",
      "[66.6, 83.4]",
      "לא ניתן לבנות תחום כזה",
      "התחום הוא ממינוס אינסוף עד 83.4",
      "[58.5, 83.4]"
    ],
    "correctIndex": 3,
    "explanation": "זו שאלה עם 'מלכודת' אלגנטית:\n\nצד שמאל: נדרשים 50% משמאל לתוחלת. אבל כל השטח משמאל לתוחלת הוא בדיוק 50%! כלומר left חייב לכסות את כל הזנב השמאלי - left = מינוס אינסוף.\n\nצד ימין: 30% בין התוחלת ל-right, מצטבר 50% + 30% = 80%:\nright = 75 + Z(0.80)·10 = 75 + 0.84·10 = 83.4\n\nהתחום: (מינוס אינסוף, 83.4]\n\nהלקח: כשמבקשים בדיוק 50% מצד אחד של התוחלת בהתפלגות נורמלית, הגבול באותו צד בורח לאינסוף - תחום ההתפלגות הוא כל הישר הממשי."
  },
  {
    "id": 40,
    "topic": "stats",
    "subtopic": "התפלגות נורמלית - הסתברות",
    "source": "מבחן 2024 סמסטר ב' מועד א'",
    "question": "ידוע שגובה נערות בכיתה י\"א בביה\"ס תיכון \"עתידים\" במרכז הארץ מתפלג התפלגות נורמלית עם תוחלת 160 ס\"מ וסטיית תקן של 7 ס\"מ. מה ההסתברות שגובה של נערה שנבחרה באופן אקראי מאותו ביה\"ס יהיה בין הערכים 158.5 ל-161.5 ס\"מ?",
    "options": [
      "בקירוב 0.583",
      "בקירוב 0.166",
      "בקירוב 0.417",
      "בקירוב 0.834",
      "בקירוב 0.079"
    ],
    "correctIndex": 1,
    "explanation": "הטווח סימטרי סביב התוחלת (160 פחות 1.5 ועד 160 ועוד 1.5):\n\nz_left = (158.5 - 160)/7 = -0.21\nz_right = (161.5 - 160)/7 = +0.21\n\nP(x < 158.5) = 0.4168 (מהטבלה)\nמסימטריה: P(x > 161.5) = 0.4168 גם כן.\n\nההסתברות בטווח:\nP = 1 - 2·0.4168 = 1 - 0.8336 = 0.1664\n\nבקירוב 16.6%. הגיוני: טווח צר מאוד (0.42 סטיות תקן בסך הכל) תופס חלק קטן מההתפלגות."
  },
  {
    "id": 41,
    "topic": "stats",
    "subtopic": "התפלגות נורמלית סטנדרטית",
    "source": "מבחן 2023 סמסטר א' מועד ב' + מבחן 2024 סמסטר א' מועד ב'",
    "question": "אילו מהתכונות הבאות מאפיינות פונקציית צפיפות של התפלגות נורמלית סטנדרטית (standard normal distribution)?\n\n1. ממוצע, חציון ושכיח זהים ושווים ל-0\n2. ממוצע, חציון ושכיח זהים ושווים ל-1\n3. כ-68% (בקירוב) מהשטח מתחת לגרף נמצאים בתחום [-1, 1]\n4. כ-95% (בקירוב) מהשטח מתחת לגרף נמצאים בתחום [-1, 1]\n5. שונות וסטיית התקן זהות ושוות ל-1\n6. סימטרית סביב הממוצע",
    "options": [
      "טענות 1, 3, 5 ו-6 נכונות",
      "כל הטענות נכונות",
      "טענות 1, 4 ו-6 בלבד נכונות",
      "טענות 1, 3 ו-5 בלבד נכונות",
      "טענות 2, 4, 5 ו-6 נכונות"
    ],
    "correctIndex": 0,
    "explanation": "התפלגות נורמלית סטנדרטית: תוחלת 0 וסטיית תקן 1.\n\nטענה 1 נכונה: בהתפלגות סימטרית שלושת מדדי המרכז מתלכדים, וכאן כולם 0.\nטענה 3 נכונה: הכלל האמפירי - כ-68% בתוך סטיית תקן אחת, וכאן סטיית התקן היא 1 בדיוק.\nטענה 4 לא נכונה: 95% דורשים כשתי סטיות תקן ([-1.96, 1.96] ליתר דיוק).\nטענה 5 נכונה: סטיית תקן 1, ולכן שונות = 1 בריבוע = 1 - הן זהות (מקרה מיוחד של σ=1!).\nטענה 6 נכונה: כל התפלגות נורמלית סימטרית סביב התוחלת."
  },
  {
    "id": 42,
    "topic": "stats",
    "subtopic": "התפלגות נורמלית",
    "source": "מבחן 2024 סמסטר ב' מועד א'",
    "question": "אילו מהטענות הבאות לגבי התפלגות נורמלית אינן נכונות?\n\n1. פונקציית צפיפות של התפלגות נורמלית סימטרית סביב התוחלת\n2. כ-95% של כל ערכי ההתפלגות נמצאים בין שתי סטיות תקן (אחת מימין ואחת משמאל) סביב התוחלת\n3. בהתפלגות נורמלית סטנדרטית הממוצע, החציון והשכיח מתלכדים, אך לא בהכרח בכל התפלגות נורמלית\n4. כ-95% של כל ערכי התפלגות נורמלית סטנדרטית נמצאים בין הערכים -1.96 ו-1.96\n5. כ-68% של כל ערכי התפלגות נורמלית נמצאים בין הערכים -1.0 ו-1.0",
    "options": [
      "טענות 2, 3 ו-5 אינן נכונות",
      "רק טענה 5 אינה נכונה",
      "כל הטענות נכונות",
      "טענות 3 ו-4 אינן נכונות",
      "טענות 1 ו-4 אינן נכונות"
    ],
    "correctIndex": 0,
    "explanation": "טענה 2 לא נכונה בניסוחה: 'בין שתי סטיות תקן - אחת מימין ואחת משמאל' מתאר את התחום של סטיית תקן אחת לכל כיוון, שמכיל כ-68%, לא 95%. (95% דורשים כשתי סטיות תקן לכל כיוון.)\n\nטענה 3 לא נכונה: ההתלכדות של ממוצע-חציון-שכיח נובעת מהסימטריה ולכן מתקיימת בכל התפלגות נורמלית, לא רק בסטנדרטית.\n\nטענה 5 לא נכונה: הכלל של 68% בתחום [-1, 1] נכון רק בהתפלגות סטנדרטית (סטיית תקן 1). בהתפלגות נורמלית כללית התחום הוא תוחלת פלוס-מינוס סטיית תקן.\n\nטענות 1 ו-4 נכונות."
  },
  {
    "id": 43,
    "topic": "stats",
    "subtopic": "משפט הגבול המרכזי",
    "source": "מבחן 2024 סמסטר ב' מועד א' + תרגול 3",
    "question": "להלן מספר טענות לגבי משפט הגבול המרכזי (CLT) על התפלגות הדגימה של ממוצעים. איזו מהטענות נכונה?",
    "options": [
      "משפט הגבול המרכזי אינו תקף לאוכלוסיות עם התפלגות מוטה (חיובית או שלילית)",
      "התפלגות הדגימה של הממוצעים תהיה מוטה כאשר האוכלוסייה מוטה, גם עבור n גדול",
      "התפלגות דגימה של ממוצעים תהיה נורמלית סטנדרטית כאשר גודל המדגם n הולך וגדל",
      "להתפלגות דגימה של ממוצעים תהיה תוחלת mu וסטיית תקן sigma, כאשר mu ו-sigma הם התוחלת וסטיית התקן של האוכלוסייה",
      "להתפלגות דגימה של ממוצעים תהיה סטיית תקן נמוכה יותר מזאת של האוכלוסייה ממנה נדגמו המדגמים"
    ],
    "correctIndex": 4,
    "explanation": "לפי משפט הגבול המרכזי, התפלגות הדגימה של הממוצעים מקיימת:\nתוחלת mu (כמו האוכלוסייה), אבל סטיית תקן sigma/sqrt(n) - קטנה פי שורש n מזו של האוכלוסייה. לכן הטענה הנכונה: סטיית התקן נמוכה יותר.\n\nמדוע השאר שגויות?\nנורמלית - כן, אבל לא סטנדרטית (התוחלת נשארת mu, לא 0).\nסטיית התקן אינה sigma אלא sigma/sqrt(n).\nככל ש-n גדל ההתפלגות מתקרבת לנורמלית סימטרית - גם אם האוכלוסייה מוטה.\nהמשפט תקף לכל התפלגות בסיס (עם שונות סופית) - כולל מוטות; זה בדיוק כוחו."
  },
  {
    "id": 44,
    "topic": "stats",
    "subtopic": "התפלגות דגימה של ממוצעים",
    "source": "מבחן 2024 סמסטר ב' מועד א' + מבחן 2025 סמסטר א' מועד ב' + תרגול 3",
    "question": "נתונים התרשימים הבאים של פונקציות צפיפות:\n\nA: פעמון סביב 3.5, טווח 0-7, גובה מקסימלי 0.40\nB: התפלגות מוטה ימינה חדה, פסגה ליד 0.25, טווח 0-4\nC: פעמון סביב 10, טווח 5-15, גובה מקסימלי 0.40\nD: קו שטוח (אחיד) בגובה 0.143 על התחום 0-7\nE: פעמון צר מאוד סביב 3.5, טווח 0-7, גובה מקסימלי 0.8\nF: תרשים פיזור (scatter) של נקודות\n\nמהתפלגות מקורית כלשהי נדגם מספר גדול של מדגמים אקראיים, כל מדגם בגודל 1000. סטודנט שרטט את פונקציית הצפיפות של ההתפלגות המקורית ואת התפלגות דגימת הממוצעים. אילו צירופים אפשריים?",
    "options": [
      "F יכולה לייצג את ההתפלגות המקורית ללא קשר לתרשים הדגימה",
      "A כהתפלגות הדגימה כאשר E היא ההתפלגות המקורית",
      "E כהתפלגות הדגימה כאשר C היא ההתפלגות המקורית",
      "C כהתפלגות הדגימה כאשר A היא ההתפלגות המקורית",
      "E כהתפלגות הדגימה של הממוצעים כאשר A או D מייצגות את ההתפלגות המקורית; וגם A כהתפלגות הדגימה כאשר D היא המקורית"
    ],
    "correctIndex": 4,
    "explanation": "כללי התאמה לפי CLT: התפלגות הדגימה של הממוצעים חייבת (1) להיות ממורכזת סביב תוחלת ההתפלגות המקורית, (2) להיות צרה משמעותית ממנה, (3) להיות בקירוב נורמלית.\n\nE (צר, סביב 3.5) מתאים כהתפלגות דגימה עבור מקוריות שמרכזן 3.5: A (פעמון סביב 3.5) ו-D (אחיד על 0-7, תוחלת 3.5). מתאים.\nA (רחב יותר מ-E, סביב 3.5) יכול לשמש התפלגות דגימה כאשר D המקורית - אותה תוחלת, A צר ונורמלי ביחס לאחיד. מתאים.\n\nהפסולים:\nC ממורכז ב-10 - לא תואם תוחלת 3.5 של E או A.\nA כדגימה של E - התפלגות הדגימה חייבת להיות צרה מהמקורית, לא רחבה ממנה.\nF הוא scatter - אינו פונקציית צפיפות כלל."
  },
  {
    "id": 45,
    "topic": "stats",
    "subtopic": "התפלגות דגימה של ממוצעים",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "מהתפלגות כלשהי M נדגמו בנפרד שלוש קבוצות גדולות של מדגמים אקראיים: קבוצה 1 - 1000 מדגמים בגודל A כל אחד, קבוצה 2 - 1000 מדגמים בגודל B, קבוצה 3 - 1000 מדגמים בגודל C. ניתן להניח כי A, B, C > 500.\n\nשורטטו פונקציות הצפיפות של התפלגות הדגימה של הממוצעים של שלוש הקבוצות: כולן פעמוניות סביב 10, כאשר עקומת קבוצה 1 היא הצרה ביותר, עקומת קבוצה 2 רחבה יותר, ועקומת קבוצה 3 הרחבה ביותר.\n\nאילו מהטענות נכונות?",
    "options": [
      "רווח הסמך ממדגם בגודל A יהיה רחב יותר מזה של מדגם בגודל B",
      "ניתן להסיק כי A < B < C",
      "שתי הטענות: ניתן להסיק כי A > B > C; ורווח סמך לתוחלת M ממדגם בגודל A יהיה צר יותר מזה של מדגם בגודל B (בהנחת סטיית תקן ורמת ביטחון זהות)",
      "ההתפלגות המקורית M היא בהכרח נורמלית עם תוחלת 10",
      "לא ניתן להסיק על גודלם היחסי של A, B, C"
    ],
    "correctIndex": 2,
    "explanation": "רוחב התפלגות הדגימה של הממוצעים הוא sigma/sqrt(n): ככל שהמדגם גדול יותר - ההתפלגות צרה יותר.\n\nקבוצה 1 הצרה ביותר - גודל המדגם A הוא הגדול ביותר. לכן A > B > C.\n\nרווח סמך צר יותר מתקבל ממדגם גדול יותר (המכנה sqrt(n) גדל) - מדגם בגודל A ייתן רווח צר יותר ממדגם בגודל B.\n\nלגבי M: לפי CLT התפלגות הדגימה תמיד תיראה נורמלית סביב תוחלת M (שהיא 10), ללא תלות בצורת M עצמה - לכן לא ניתן להסיק ש-M נורמלית או אפילו סימטרית."
  },
  {
    "id": 46,
    "topic": "stats",
    "subtopic": "התפלגות דגימה של ממוצעים",
    "source": "מבחן 2023 סמסטר א' מועד ב' + מבחן 2025 סמסטר א' מועד א'",
    "question": "סטודנט דגם מספר רב של מדגמים של משתנה מקרי X כלשהו ושרטט את התפלגות דגימת הממוצעים של המדגמים. ההתפלגות שהתקבלה נראית פעמונית וסימטרית.\n\nבחרו את התשובה הכי מדויקת:",
    "options": [
      "המשתנה המקרי X מתפלג התפלגות נורמלית סטנדרטית",
      "המשתנה המקרי X מתפלג התפלגות מוטה",
      "המשתנה המקרי X מתפלג התפלגות אחידה (uniform)",
      "המשתנה המקרי X מתפלג התפלגות נורמלית",
      "לא ניתן לדעת איך מתפלג המשתנה המקרי X"
    ],
    "correctIndex": 4,
    "explanation": "זהו בדיוק הרעיון של משפט הגבול המרכזי: התפלגות הדגימה של ממוצעים תיראה נורמלית (פעמונית וסימטרית) עבור כל התפלגות מקורית - נורמלית, אחידה, מוטה, בדידה...\n\nלכן צורת התפלגות הממוצעים לא מגלה דבר על צורת ההתפלגות של X עצמו. התשובה: לא ניתן לדעת.\n\nבמבחן 2025 מועד א' הופיעה גרסה עם ארבעה תרשימים ושאלה איזה מהם מייצג התפלגות דגימה של משתנה אחיד - התשובה הייתה הפעמון הצר, מאותו נימוק בדיוק (הדגימה נורמלית וצרה גם כשהמקור אחיד)."
  },
  {
    "id": 47,
    "topic": "stats",
    "subtopic": "מתאם וסיבתיות",
    "source": "מבחן 2025 סמסטר א' מועד ב' + מבחן 2023 סמסטר ב' מועד א'",
    "question": "חוקרים גילו כי בערים עם מספר גבוה יותר של תחנות כיבוי אש, יש יותר מקרי שריפה בשנה. מסקנה זו מבוססת על ניתוח סטטיסטי שהראה מתאם חזק בין מספר תחנות הכיבוי למספר השריפות.\n\nאיזו מהטענות הבאות מתארת בצורה הנכונה ביותר את היחס בין שני המשתנים?",
    "options": [
      "לא ייתכן מתאם בין משתנים ללא קשר סיבתי ביניהם",
      "אם היינו סוגרים תחנות כיבוי אש, מספר השריפות בערים אלה היה יורד בהתאם",
      "קיים מתאם בין מספר תחנות הכיבוי למספר השריפות, אך ככל הנראה לא מדובר בקשר סיבתי ישיר",
      "הקמת תחנות כיבוי אש גורמת לעלייה במספר השריפות, ולכן מדובר בקשר סיבתי",
      "מכיוון שנמצא מתאם, בהכרח קיימת סיבתיות בין המשתנים"
    ],
    "correctIndex": 2,
    "explanation": "מתאם אינו סיבתיות (correlation is not causation). כאן פועל משתנה שלישי מסביר - גודל העיר: ערים גדולות מכילות גם יותר תחנות כיבוי וגם יותר שריפות (יותר מבנים, יותר אוכלוסייה).\n\nתחנות הכיבוי לא גורמות לשריפות, וסגירתן לא הייתה מפחיתה שריפות (להפך...).\n\nהדוגמה הקלאסית מההרצאה: מתאם בין מכירות גלידה לתקיפות כרישים - שניהם תוצאה של הקיץ (משתנה שלישי), ללא קשר סיבתי ביניהם. במבחנים התבקשתם גם לתת דוגמה משלכם לזוג משתנים עם מתאם ללא סיבתיות."
  },
  {
    "id": 48,
    "topic": "inference",
    "subtopic": "חישוב רווח סמך",
    "source": "מבחן 2025 סמסטר א' מועד א' + תרגול 3",
    "question": "חברת מזון בודקת את משקל האריזות של מוצר מסוים. ידוע שמשקל האריזות מתפלג נורמלית עם תוחלת לא ידועה ושונות ידועה של 2.5 גרם. נלקח מדגם אקראי של 100 אריזות, ונמצא כי ממוצע המשקל במדגם הוא 500.8 גרם.\n\nחשבו רווח סמך ברמת ביטחון 99% לתוחלת משקל האריזות.",
    "options": [
      "[500.60, 501.00]",
      "[500.49, 501.11]",
      "[500.39, 501.21]",
      "[500.76, 500.84]",
      "[498.22, 503.38]"
    ],
    "correctIndex": 2,
    "explanation": "נוסחת רווח סמך לתוחלת:\nCI = ממוצע המדגם פלוס-מינוס Z·sigma/sqrt(n)\n\nנתונים:\nממוצע 500.8, שונות 2.5 (סטיית תקן = שורש 2.5 = 1.58), n = 100\n\nרמת ביטחון 99% משאירה 0.5% בכל זנב - Z(0.995) = 2.58\n\nחישוב:\nמרווח = 2.58 · 1.58 / 10 = 0.41\nCI(99%) = 500.8 פלוס-מינוס 0.41 = [500.39, 501.21]\n\nשימו לב: השונות נתונה (2.5) - צריך לקחת שורש כדי לקבל סטיית תקן. זו טעות נפוצה.",
    "variants": [
      {
        "question": "מפעל שוקולד בודק את משקל החפיסות. משקל החפיסות מתפלג נורמלית עם תוחלת לא ידועה ושונות ידועה של 4 גרם. נלקח מדגם אקראי של 400 חפיסות, ונמצא ממוצע משקל של 250.5 גרם.\n\nחשבו רווח סמך ברמת ביטחון 95% לתוחלת משקל החפיסות.",
        "options": [
          "[250.10, 250.90]",
          "[250.48, 250.52]",
          "[250.30, 250.70]",
          "[246.58, 254.42]",
          "[249.52, 251.48]"
        ],
        "correctIndex": 2,
        "explanation": "נתונים:\nממוצע 250.5, שונות 4 (סטיית תקן 2), n = 400\n\nרמת ביטחון 95% - Z(0.975) = 1.96\n\nחישוב:\nמרווח = 1.96 · 2 / 20 = 0.196 - בקירוב 0.20\nCI(95%) = 250.5 פלוס-מינוס 0.20 = [250.30, 250.70]"
      },
      {
        "question": "מעבדה בודקת ריכוז חומר פעיל בתרופה. הריכוז מתפלג נורמלית עם שונות ידועה של 9 (יחידות בריבוע). נלקח מדגם של 225 טבליות, וממוצע הריכוז במדגם היה 80.2 יחידות.\n\nחשבו רווח סמך ברמת ביטחון 90% לתוחלת הריכוז.",
        "options": [
          "[79.21, 81.19]",
          "[79.87, 80.53]",
          "[77.23, 83.17]",
          "[80.00, 80.40]",
          "[79.54, 80.86]"
        ],
        "correctIndex": 1,
        "explanation": "נתונים:\nממוצע 80.2, שונות 9 (סטיית תקן 3), n = 225\n\nרמת ביטחון 90% - Z(0.95) = 1.65\n\nחישוב:\nמרווח = 1.65 · 3 / 15 = 0.33\nCI(90%) = 80.2 פלוס-מינוס 0.33 = [79.87, 80.53]"
      }
    ]
  },
  {
    "id": 49,
    "topic": "inference",
    "subtopic": "גודל מדגם נדרש",
    "source": "מבחן 2025 סמסטר א' מועד א' + תרגול 3",
    "question": "בהמשך לשאלת אריזות המזון (שונות ידועה 2.5 גרם): כמה אריזות לפחות יש לדגום כדי שהאורך הכולל של רווח הסמך ברמת ביטחון 85% יהיה לכל היותר 0.2 גרם?",
    "options": [
      "130 אריזות",
      "519 אריזות",
      "1037 אריזות",
      "260 אריזות",
      "23 אריזות"
    ],
    "correctIndex": 1,
    "explanation": "אורך כולל של רווח סמך = פעמיים המרווח:\nlength = 2 · Z(0.925) · sigma / sqrt(n)\n\nמציבים ופותרים:\n2 · 1.44 · sqrt(2.5) / sqrt(n) = 0.2\n2 · 1.44 · 1.58 / sqrt(n) = 0.2\nsqrt(n) = 4.55 / 0.2 = 22.77\nn = 518.4\n\nמעגלים כלפי מעלה (חייבים לעמוד בדרישה): n = 519.\n\nמלכודות: לזכור שהאורך הכולל הוא כפליים המרווח (בלי ה-2 מקבלים בטעות רבע מהמדגם הנדרש), ולעגל תמיד למעלה.",
    "variants": [
      {
        "question": "משקל מוצר מתפלג נורמלית עם שונות ידועה של 4. כמה יחידות לפחות יש לדגום כדי שהאורך הכולל של רווח הסמך ברמת ביטחון 95% יהיה לכל היותר 0.5?",
        "options": [
          "123 יחידות",
          "246 יחידות",
          "984 יחידות",
          "62 יחידות",
          "16 יחידות"
        ],
        "correctIndex": 1,
        "explanation": "אורך כולל:\n2 · 1.96 · 2 / sqrt(n) = 0.5\nsqrt(n) = 7.84 / 0.5 = 15.68\nn = 245.9\n\nמעגלים כלפי מעלה: n = 246."
      }
    ]
  },
  {
    "id": 50,
    "topic": "inference",
    "subtopic": "צמצום רווח סמך",
    "source": "מבחן 2025 סמסטר א' מועד א' + מבחן חזרה + תרגול 3",
    "question": "איזו מבין הפעולות הבאות עשויה להקטין את רוחב רווח הסמך לתוחלת (עבור אותם נתונים)?\n\n1. הגדלת גודל המדגם באותה רמת ביטחון\n2. הגדלת רמת הביטחון מ-95% ל-99% עבור אותו גודל מדגם\n3. הפחתת השונות במדגם על ידי שיפור תהליך הייצור\n4. הקטנת רמת הביטחון מ-99% ל-90% עבור אותו גודל מדגם\n5. הקטנת גודל המדגם בחצי",
    "options": [
      "פעולות 1 ו-2 בלבד",
      "פעולות 2 ו-5 בלבד",
      "כל הפעולות מקטינות את הרווח",
      "פעולות 1, 3 ו-4",
      "פעולות 1 ו-4 בלבד"
    ],
    "correctIndex": 3,
    "explanation": "רוחב רווח הסמך פרופורציוני ל-Z · s / sqrt(n). כל מה שמקטין את אחד הגורמים במונה או מגדיל את המכנה - מצמצם:\n\nפעולה 1: הגדלת n מגדילה את המכנה - מצמצמת. נכון.\nפעולה 3: הקטנת s (השונות) מקטינה את המונה - מצמצמת. נכון.\nפעולה 4: רמת ביטחון נמוכה יותר גוררת Z קטן יותר - מצמצמת. נכון.\n\nפעולה 2: רמת ביטחון גבוהה יותר מגדילה את Z - מרחיבה (ההפך).\nפעולה 5: הקטנת n מקטינה את המכנה - מרחיבה.\n\nבניסוח של מבחן החזרה: 'להגדיל את גודל המדגם או להקטין את רמת הביטחון' וגם 'להגדיל את הטעות המותרת alpha' - שתיהן דרכים לצמצום."
  },
  {
    "id": 51,
    "topic": "inference",
    "subtopic": "פרשנות רווח סמך",
    "source": "מבחן 2025 סמסטר ב' מועד ב' + תרגול 3",
    "question": "נערך סקר בקרב מספר משפחות וחושב רווח סמך לתוחלת מספר שעות שינה של ילדי בתי ספר יסודיים במהלך החופש הגדול. נמצא כי: CI(85%) = [7.4, 8.5]. נתייחס לאוכלוסיית כל הילדים בגילאי בית ספר יסודי כ\"אוכלוסייה\".\n\nאיזו מהפרשנויות הבאות לרווח הסמך נכונה?",
    "options": [
      "ממוצע שעות השינה באוכלוסייה הינו בין 7.4 ל-8.5 בהסתברות 0.85",
      "נוכל לומר בביטחון של 85% ומעלה שכל ילד ישן בין 7.4 ל-8.5 שעות",
      "מספר שעות שינה של ילד שנבחר באקראי יהיה בין 7.4 ל-8.5 בהסתברות 0.85",
      "85% מכלל הילדים בגילאי בית ספר יסודי ישנים בין 7.4 ל-8.5 שעות",
      "אם נדגום מדגם אקראי של 1000 ילדים, נגלה כי כ-850 מהם ישנים בין 7.4 ל-8.5 שעות"
    ],
    "correctIndex": 0,
    "explanation": "רווח סמך הוא הצהרה על הפרמטר של האוכלוסייה - התוחלת (הממוצע) - ולא על ילדים בודדים.\n\nהפרשנות הנכונה (כפי שנלמד בקורס): בביטחון של 85%, תוחלת שעות השינה באוכלוסייה נמצאת בין 7.4 ל-8.5.\n\nכל שאר האפשרויות מבלבלות בין התוחלת לבין התפלגות הפרטים:\nרווח הסמך לא אומר דבר על אחוז הילדים בטווח, לא על ילד בודד אקראי, ולא על 850 מתוך 1000 - פיזור הילדים הבודדים רחב בהרבה מרווח הסמך של הממוצע (שמצטמצם עם sqrt(n)).\n\nהשאלה הזו חזרה כמעט מילה במילה גם עם טלפונים חכמים (2023ב, 2024ב) - אותו עיקרון בדיוק."
  },
  {
    "id": 52,
    "topic": "inference",
    "subtopic": "פרשנות רווח סמך",
    "source": "מבחן 2023 סמסטר ב' מועד א' + מבחן 2024 סמסטר ב' מועד ב'",
    "question": "נערך סקר וחושב רווח סמך לתוחלת מספר טלפונים חכמים שיש במשקי בית חילוניים בארץ. נמצא כי: CI(87%) = [2.15, 3.47].\n\nסמנו נכון או לא נכון עבור כל אחת מהטענות:\n\n1. נוכל לומר בביטחון של 87% שמספר טלפונים חכמים ממוצע באוכלוסייה הינו בין 2.15 ל-3.47\n2. מספר טלפונים במשק בית שנבחר אקראית יהיה בין 2.15 ל-3.47 בהסתברות 0.87\n3. 87% מכלל משקי הבית באוכלוסייה מחזיקים בין 2.15 ל-3.47 טלפונים חכמים",
    "options": [
      "1 נכון; 2 נכון; 3 לא נכון",
      "כל השלוש לא נכונות",
      "1 נכון; 2 לא נכון; 3 לא נכון",
      "1 לא נכון; 2 נכון; 3 נכון",
      "כל השלוש נכונות"
    ],
    "correctIndex": 2,
    "explanation": "טענה 1 נכונה: זו בדיוק הפרשנות של רווח סמך - הצהרת ביטחון על התוחלת (הממוצע האוכלוסייתי).\n\nטענה 2 לא נכונה: רווח הסמך אינו טווח חיזוי לפרט בודד. משק בית בודד יכול להחזיק 0, 1 או 6 טלפונים - הפיזור של פרטים רחב בהרבה.\n\nטענה 3 לא נכונה: הרווח לא אומר דבר על אחוז משקי הבית בטווח - הוא אך ורק על הממוצע."
  },
  {
    "id": 53,
    "topic": "inference",
    "subtopic": "חישוב רווח סמך",
    "source": "מבחן 2023 סמסטר א' מועד א'",
    "question": "במחקר על רמת ה-IQ של ילידי הארץ הועברו מבחני IQ ל-225 תושבים ונמצא כי ממוצע המדגם היה 107 יחידות עם סטיית תקן של 4 יחידות.\n\n(א) מהו רווח סמך ברמת ביטחון של 90% לתוחלת רמת ה-IQ?\n(ב) אם רמת הביטחון הנדרשת תרד ל-85% עם אותו מדגם - מה יקרה לרווח?",
    "options": [
      "(א) בקירוב [106.12, 107.88]\n(ב) הרווח יישאר ללא שינוי",
      "(א) בקירוב [102.6, 111.4]\n(ב) לא ניתן לקבוע",
      "(א) בקירוב [103.0, 111.0]\n(ב) הרווח יקטן",
      "(א) בקירוב [106.56, 107.44]\n(ב) הרווח יקטן (יהיה צר יותר)",
      "(א) בקירוב [106.56, 107.44]\n(ב) הרווח יגדל (יהיה רחב יותר)"
    ],
    "correctIndex": 3,
    "explanation": "(א) חישוב:\nמרווח = Z(0.95) · s / sqrt(n) = 1.65 · 4 / 15 = 0.44\nCI(90%) = 107 פלוס-מינוס 0.44 = [106.56, 107.44]\n\n(ב) רמת ביטחון נמוכה יותר (85% במקום 90%) גוררת ערך Z קטן יותר (1.44 במקום 1.65) - המרווח מתכווץ. רווח הסמך יקטן.\n\nההיגיון: כשמוכנים 'לטעות' יותר, אפשר להצהיר על טווח צר יותר."
  },
  {
    "id": 54,
    "topic": "inference",
    "subtopic": "גודל מדגם נדרש",
    "source": "מבחן 2023 סמסטר א' מועד א'",
    "question": "מכון סקרים התבקש לחשב רווח סמך באורך 0.2 יחידות לכל היותר לתוחלת ה-IQ בקרב ילידי הארץ. רמת הביטחון הנדרשת היא 95% ושונות ה-IQ באוכלוסייה ידועה ושווה ל-3 יחידות.\n\nמהו גודל המדגם המינימלי שיש לדגום על מנת לעמוד בדרישה?",
    "options": [
      "4612",
      "1153",
      "34",
      "289",
      "577"
    ],
    "correctIndex": 1,
    "explanation": "אורך רווח הסמך:\nlength = 2 · Z(0.975) · sigma / sqrt(n) עם sigma = sqrt(3)\n\nדרישה:\n2 · 1.96 · sqrt(3) / sqrt(n) <= 0.2\nsqrt(n) >= 2 · 1.96 · 1.732 / 0.2 = 33.95\nn >= 1152.5\n\nמעגלים כלפי מעלה: n = 1153.\n\nשימו לב שוב: 'אורך' = הרווח הכולל (2 מרווחים), והשונות 3 דורשת שורש לקבלת סטיית תקן 1.732."
  },
  {
    "id": 55,
    "topic": "inference",
    "subtopic": "חישוב רווח סמך",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "מטע לקטיף ענבים מגדל ענבים מסוג \"ענב-זהב\", שמשקל האשכולות שהם מפיקים מתפלג התפלגות נורמלית עם תוחלת לא ידועה. נלקח מדגם אקראי של 450 אשכולות, ונמצא כי המשקל הממוצע שלהם הוא 215 גרם. השונות המדגמית שנמדדה היא 49 גרם.\n\nמצאו רווח סמך ברמת ביטחון של 88% לתוחלת משקל האשכולות במטע.",
    "options": [
      "בקירוב [214.48, 215.52]",
      "בקירוב [214.85, 215.15]",
      "בקירוב [213.96, 216.04]",
      "בקירוב [211.4, 218.6]",
      "בקירוב [214.34, 215.66]"
    ],
    "correctIndex": 0,
    "explanation": "רמת ביטחון 88% משאירה 6% בכל זנב - Z(0.94) = 1.56.\n\nסטיית התקן: שורש השונות = sqrt(49) = 7.\n\nחישוב:\nמרווח = 1.56 · 7 / sqrt(450) = 10.92 / 21.21 = 0.51\nCI(88%) = 215 פלוס-מינוס 0.51 = [214.48, 215.51]\n\nרמות ביטחון 'לא עגולות' (88%, 85%, 97%) חוזרות המון במבחני הקורס - חשוב לשלוט בתרגום רמת ביטחון לערך ה-Z הנכון: מוסיפים חצי מהזנב ל-50%, כלומר Z((1+0.88)/2) = Z(0.94)."
  },
  {
    "id": 56,
    "topic": "inference",
    "subtopic": "רווח סמך והתפלגות הבסיס",
    "source": "מבחן חזרה + מבחן 2025 סמסטר א' מועד ב'",
    "question": "בהמשך לשאלת אשכולות הענבים: נכון או לא נכון - חלק מהתשובות לחישוב רווח הסמך היו משתנות אם משקל האשכולות היה מתפלג התפלגות לא סימטרית, למשל מוטה חיובית?",
    "options": [
      "נכון - רווח סמך מוגדר רק עבור אוכלוסייה נורמלית",
      "לא נכון - משפט הגבול המרכזי חל על כל התפלגות בסיס, ולכן חישוב רווח הסמך לא משתנה (המדגם גדול)",
      "נכון - רווח הסמך יהפוך ללא סימטרי סביב הממוצע",
      "לא ניתן לדעת ללא שרטוט ההתפלגות",
      "נכון - בהתפלגות מוטה יש להשתמש בחציון במקום בממוצע ברווח הסמך"
    ],
    "correctIndex": 1,
    "explanation": "רווח הסמך לתוחלת מבוסס על התפלגות הדגימה של הממוצעים - ולפי משפט הגבול המרכזי, במדגם גדול (450 אשכולות, הרבה מעל הסף המקובל) התפלגות זו נורמלית ללא תלות בצורת התפלגות הבסיס.\n\nלכן החישוב זהה גם אם משקל האשכולות מוטה חיובית - הנוסחה, ערך ה-Z והתוצאה לא משתנים.\n\nזה בדיוק הכוח של ה-CLT, וזו הסיבה שבשאלות אחרות בקורס מודגש שהמשתנה מתפלג 'בצורה אחידה' (צמיגים, כבלים) - וזה לא מפריע לחישוב."
  },
  {
    "id": 57,
    "topic": "inference",
    "subtopic": "רווח סמך - שונות ורמת ביטחון",
    "source": "מבחן 2024 סמסטר א' מועד ב' + מבחן 2024 סמסטר ב' מועד ב'",
    "question": "מפעל צמיגים מייצר צמיגים כך שהלחץ המקסימלי בו הם יכולים לעמוד מתפלג בצורה אחידה עם תוחלת לא ידועה. נלקח מדגם בן 400 צמיגים ונמצא כי ממוצע הלחץ המקסימלי שלהם הוא 3.1 אטמוספרות. השונות המדגמית שנמדדה היא 0.36 אטמוספרות.\n\n(א) מצאו רווח סמך ברמת ביטחון של 95% לתוחלת הלחץ המקסימלי.\n(ב) כיצד תשתנה תשובתכם אם השונות המדגמית הייתה 0.5 (עם אותו ממוצע מדגם)?",
    "options": [
      "(א) בקירוב [3.04, 3.16]\n(ב) רווח הסמך יקטן (יהיה צר יותר)",
      "(א) לא ניתן לחשב כי ההתפלגות אחידה ולא נורמלית",
      "(א) בקירוב [3.07, 3.13]\n(ב) רווח הסמך יישאר זהה",
      "(א) בקירוב [2.4, 3.8]\n(ב) רווח הסמך יגדל",
      "(א) בקירוב [3.04, 3.16]\n(ב) רווח הסמך יגדל (יהיה רחב יותר)"
    ],
    "correctIndex": 4,
    "explanation": "(א) סטיית תקן: sqrt(0.36) = 0.6.\nמרווח = 1.96 · 0.6 / sqrt(400) = 1.96 · 0.6 / 20 = 0.059\nCI(95%) = 3.1 פלוס-מינוס 0.06 = [3.04, 3.16]\n\n(ב) שונות גדולה יותר גוררת סטיית תקן גדולה יותר במונה - הרווח מתרחב.\n\nולמלכודת: העובדה שההתפלגות אחידה (לא נורמלית) אינה מפריעה - המדגם גדול (400) ומשפט הגבול המרכזי מבטיח שהתפלגות הממוצעים נורמלית."
  },
  {
    "id": 58,
    "topic": "inference",
    "subtopic": "גודל מדגם נדרש",
    "source": "מבחן 2024 סמסטר ב' מועד ב'",
    "question": "מפעל צמיגים מייצר צמיגים כך שהלחץ המקסימלי מתפלג בצורה אחידה עם תוחלת לא ידועה. השונות המוערכת היא 0.36 אטמוספרות.\n\n(א) מהו גודל המדגם הנדרש על מנת לבנות רווח סמך ברוחב 0.1 לתוחלת הלחץ, בביטחון של 97%?\n(ב) נכון או לא נכון: עם אותו רוחב רווח (0.1) אבל רמת ביטחון של 90%, היינו נדרשים לגודל מדגם קטן יותר?",
    "options": [
      "(א) 170 צמיגים\n(ב) נכון",
      "(א) 1357 צמיגים\n(ב) לא נכון",
      "(א) 679 צמיגים\n(ב) לא נכון",
      "(א) 43 צמיגים\n(ב) נכון",
      "(א) 679 צמיגים\n(ב) נכון"
    ],
    "correctIndex": 4,
    "explanation": "(א) רוחב 0.1 פירושו חצי-רוחב (מרווח) של 0.05:\nZ(0.985) · sigma / sqrt(n) = 0.05\n2.17 · 0.6 / sqrt(n) = 0.05\nsqrt(n) = 1.302 / 0.05 = 26.04\nn = 678.1 - מעגלים למעלה: 679.\n\n(ב) נכון: רמת ביטחון נמוכה יותר גוררת Z קטן יותר, ולכן דרוש sqrt(n) קטן יותר לאותו רוחב - מדגם קטן יותר מספיק.\n\nבאותו מבחן נשאל גם: עם שונות מוערכת גבוהה יותר (0.40) - היה דרוש מדגם גדול יותר (לא קטן), כי סטיית התקן במונה גדלה."
  },
  {
    "id": 59,
    "topic": "inference",
    "subtopic": "חישוב הפוך - שונות מרווח",
    "source": "מבחן 2024 סמסטר א' מועד א' + מבחן 2023 סמסטר ב' מועד א'",
    "question": "בעיריית ת\"א-יפו חישבו רווח סמך לתוחלת זמן הנסיעה (בדקות) של נוסע בקו R1 של הרכבת הקלה, ברמת ביטחון של 95% על סמך מדגם של 729 נבדקים. גודל (אורך) רווח הסמך שהתקבל הוא 0.25.\n\nמהי השונות המדגמית של זמן הנסיעה בקרב הנבדקים?",
    "options": [
      "בקירוב 2.96",
      "בקירוב 0.74",
      "בקירוב 11.85",
      "בקירוב 5.31",
      "בקירוב 1.72"
    ],
    "correctIndex": 0,
    "explanation": "זו שאלה 'הפוכה' - מהרוחב אל השונות.\n\nאורך הרווח:\nlength = 2 · Z · s / sqrt(n)\n0.25 = 2 · 1.96 · s / 27  (sqrt(729) = 27)\n\nמבודדים את s:\ns = 0.25 · 27 / (2 · 1.96) = 6.75 / 3.92 = 1.72\n\nהשאלה מבקשת שונות - מעלים בריבוע:\ns^2 = 1.72^2 = 2.96\n\nמלכודת כפולה: לא לשכוח את ה-2 של האורך הכולל, ולא להחזיר סטיית תקן (1.72) כשמבקשים שונות (2.96). גרסת 2023ב: מדגם 625, ביטחון 97%, אורך 0.4 - שם התקבלה שונות של בקירוב 5.3."
  },
  {
    "id": 60,
    "topic": "inference",
    "subtopic": "ממוצע משוקלל + רווח סמך",
    "source": "מבחן 2024 סמסטר ב' מועד א'",
    "question": "מכון כושר עורך מחקר על מספר שעות שבועי שמשקיע סטודנט בפעילות גופנית. נאסף מדגם אקראי בגודל 150 המתפלג כך:",
    "dataTable": {
      "headers": [
        "מס' שעות פעילות",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "7",
        "10"
      ],
      "rows": [
        [
          "מס' סטודנטים",
          "10",
          "20",
          "30",
          "30",
          "25",
          "15",
          "10",
          "10"
        ]
      ]
    },
    "questionEnd": "(א) מהו ממוצע שעות הפעילות במדגם?\n(ב) חשבו רווח סמך ברמת ביטחון 90% לתוחלת, בהנחת שונות מדגמית של 6.04.",
    "options": [
      "(א) בקירוב 3.43\n(ב) בקירוב [3.10, 3.76]",
      "(א) בקירוב 4.00\n(ב) בקירוב [3.67, 4.33]",
      "(א) בקירוב 2.87\n(ב) בקירוב [2.54, 3.20]",
      "(א) בקירוב 3.43\n(ב) בקירוב [2.44, 4.42]",
      "(א) בקירוב 3.43\n(ב) בקירוב [3.36, 3.50]"
    ],
    "correctIndex": 0,
    "explanation": "(א) ממוצע משוקלל:\nסכום = 0·10 + 1·20 + 2·30 + 3·30 + 4·25 + 5·15 + 7·10 + 10·10\nסכום = 0 + 20 + 60 + 90 + 100 + 75 + 70 + 100 = 515\nממוצע = 515 / 150 = 3.43\n\n(ב) סטיית תקן = sqrt(6.04) = 2.46\nמרווח = 1.65 · 2.46 / sqrt(150) = 4.06 / 12.25 = 0.33\nCI(90%) = 3.43 פלוס-מינוס 0.33 = [3.10, 3.76]\n\nבאותו מבחן נשאל גם מה ניתן להסיק על ההתפלגות: הזנב הימני (7 ו-10 שעות) גורר התפלגות מוטה חיובית שבה ממוצע גבוה מחציון."
  },
  {
    "id": 61,
    "topic": "inference",
    "subtopic": "רווח סמך והחלטה",
    "source": "מבחן 2025 סמסטר א' מועד ב'",
    "question": "מפעל לייצור כבלים חשמליים מייצר כבלים כך שהמתח המקסימלי שהם יכולים לשאת מתפלג בצורה אחידה עם תוחלת לא ידועה. נלקח מדגם של 500 כבלים, ונמצא כי ממוצע המתח המקסימלי שלהם הוא 215 וולט. השונות המדגמית היא 16 וולט.\n\nהתקן העולמי למתח המקסימלי הוא 215.75 וולט. מנהל המפעל מחליט כי אם התוצרת עומדת בתקן ב-95% ביטחון (כלומר רווח הסמך מכסה את התקן), הוא ישחרר את הסחורה, אחרת לא.\n\nמה ההחלטה הנכונה?",
    "options": [
      "הסחורה תופץ - רווח הסמך [214.65, 215.35] מכסה את התקן",
      "הסחורה לא תופץ - רווח הסמך [214.65, 215.35] אינו מכסה את התקן 215.75",
      "הסחורה תופץ כי הממוצע 215 קרוב מספיק ל-215.75",
      "הסחורה תופץ - רווח הסמך [211.08, 218.92] מכסה את התקן",
      "לא ניתן להחליט כי ההתפלגות אחידה ולא נורמלית"
    ],
    "correctIndex": 1,
    "explanation": "חישוב רווח הסמך:\nסטיית תקן = sqrt(16) = 4\nמרווח = 1.96 · 4 / sqrt(500) = 7.84 / 22.36 = 0.35\nCI(95%) = 215 פלוס-מינוס 0.35 = [214.65, 215.35]\n\nהתקן 215.75 נמצא מחוץ לרווח (מעל הגבול העליון 215.35).\n\nמסקנה: לא ניתן לומר ב-95% ביטחון שהכבלים עומדים בתקן - הסחורה לא תופץ.\n\nההתפלגות האחידה אינה בעיה: מדגם של 500 מבטיח לפי CLT שהתפלגות הממוצעים נורמלית. באותו מבחן נשאל גם סעיף 'נכון/לא נכון' על כך - התשובות לא היו משתנות אילו ההתפלגות הייתה נורמלית."
  },
  {
    "id": 62,
    "topic": "inference",
    "subtopic": "standard error",
    "source": "מבחן 2023 סמסטר א' מועד ב'",
    "question": "מהו המונח standard error בהקשר של רווחי סמך - כיצד הוא מוגדר?",
    "options": [
      "סטיית התקן של התפלגות הדגימה של הממוצעים: sigma חלקי שורש n (במדגם גדול ניתן להחליף את sigma בסטיית התקן המדגמית s)",
      "ההפרש בין ממוצע המדגם לתוחלת האמיתית של האוכלוסייה",
      "השגיאה המקסימלית המותרת בניסוי, כפי שקובע החוקר מראש",
      "השונות של המדגם חלקי מספר התצפיות",
      "סטיית התקן של האוכלוסייה עצמה, ללא תלות בגודל המדגם"
    ],
    "correctIndex": 0,
    "explanation": "ה-standard error (שגיאת התקן) הוא סטיית התקן של התפלגות הדגימה של הממוצעים:\nSE = sigma / sqrt(n)\n\nלפי משפט הגבול המרכזי, במדגם מספיק גדול התפלגות הממוצעים שואפת לנורמלית עם תוחלת mu וסטיית תקן sigma/sqrt(n) - וכאשר sigma אינה ידועה מחליפים אותה בסטיית התקן המדגמית s.\n\nזהו בדיוק הגורם שמופיע בנוסחת רווח הסמך: ממוצע פלוס-מינוס Z כפול SE. ככל שהמדגם גדל, ה-SE קטן והרווח מתכווץ."
  },
  {
    "id": 63,
    "topic": "regression",
    "subtopic": "טבלת סיכום OLS",
    "source": "שאלה שחזרה ב-6 מבחנים (2023-2025) + תרגול 4",
    "question": "להלן סיכום של מודל רגרסיה לינארית שאומן על dataset כלשהו עם משתנים בלתי תלויים ומשתנה תלוי. לא בוצע feature scaling על המשתנים הבלתי תלויים.",
    "dataTable": {
      "headers": [
        "",
        "coef",
        "std err",
        "P>|t|"
      ],
      "rows": [
        [
          "const",
          "50.3493",
          "18.05",
          "0.006"
        ],
        [
          "x1",
          "3.2771",
          "0.32",
          "0.000"
        ],
        [
          "x2",
          "-16.3702",
          "6.15",
          "0.008"
        ],
        [
          "x3",
          "0.0063",
          "0.014",
          "0.663"
        ],
        [
          "x4",
          "10.4285",
          "1.87",
          "0.000"
        ],
        [
          "x5",
          "-0.0012",
          "0.0006",
          "0.043"
        ]
      ]
    },
    "questionEnd": "בנוסף נתון: R-squared = 0.256, Adj. R-squared = 0.254, מספר תצפיות 1599.\n\nנכון, לא נכון או לא ניתן לדעת: הורדת המשתנה x3 מהמודל עלולה לגרור ירידה משמעותית בערכו של R בריבוע?",
    "options": [
      "נכון - כל הסרת משתנה מקטינה משמעותית את R בריבוע",
      "לא ניתן לדעת - חסר מידע על המתאם בין x3 ל-y",
      "נכון - למקדם של x3 ערך חיובי ולכן הוא תורם למודל",
      "לא ניתן לדעת - נדרש feature scaling כדי לענות",
      "לא נכון - x3 אינו מובהק (p-value של 0.663), ולכן הסרתו לא תפגע משמעותית ב-R בריבוע"
    ],
    "correctIndex": 4,
    "explanation": "העמודה הקריטית היא P>|t| (מובהקות):\nעבור x3 מתקבל p-value של 0.663 - הרבה מעל סף מקובל של 0.05. המשמעות: אין עדות שהמקדם של x3 שונה מאפס, כלומר x3 אינו תורם למודל באופן מובהק.\n\nהסרת משתנה לא-מובהק כמעט ולא תשנה את R בריבוע - לכן 'עלולה לגרור ירידה משמעותית' אינו נכון.\n\nעיקרון הזהב בשאלות אלה: מובהקות (p-value) קובעת אם הסרה תפגע ב-R בריבוע; משתנה מובהק (p קטן) - הסרתו תפגע; משתנה לא מובהק (p גדול) - הסרתו כמעט לא תשפיע."
  },
  {
    "id": 64,
    "topic": "regression",
    "subtopic": "טבלת סיכום OLS",
    "source": "שאלה שחזרה ב-6 מבחנים (2023-2025) + תרגול 4",
    "question": "בהמשך לטבלת סיכום מודל הרגרסיה (x1: coef 3.28, p 0.000; x2: coef -16.37, p 0.008; x3: coef 0.006, p 0.663; x4: coef 10.43, p 0.000; x5: coef -0.0012, p 0.043; לא בוצע feature scaling).\n\nאילו מהטענות הבאות נכונות?\n\n1. הורדת משתנה כלשהו מהמודל עלולה לגרור עלייה משמעותית בערכו של R בריבוע\n2. הורדת המשתנה x5 מהמודל עלולה לגרור ירידה בערכו של R בריבוע\n3. למשתנה x2 ההשפעה הכי משמעותית על y (כי המקדם שלו הגדול ביותר בערך מוחלט)\n4. למשתנה x3 ההשפעה הכי משמעותית על y",
    "options": [
      "טענות 3 ו-4 נכונות",
      "טענות 1 ו-2 נכונות",
      "טענות 2 ו-3 נכונות",
      "רק טענה 3 נכונה",
      "רק טענה 2 נכונה"
    ],
    "correctIndex": 4,
    "explanation": "טענה 1 לא נכונה: R בריבוע לעולם אינו עולה כשמסירים משתנה - הוספת משתנים יכולה רק לשמר או להעלות אותו (גם אם מעט), ולכן הסרה יכולה רק לשמר או להוריד.\n\nטענה 2 נכונה: x5 מובהק (p = 0.043 < 0.05) - הסרתו צפויה להוריד את R בריבוע.\n\nטענה 3 לא נכונה - וזו המלכודת המרכזית: ללא feature scaling אי אפשר להשוות גדלי מקדמים! מקדם גדול על משתנה בסקאלה זעירה שקול למקדם קטן על משתנה בסקאלה ענקית. התשובה הנכונה בשאלת 'ההשפעה הכי משמעותית' היא תמיד 'לא ניתן לדעת' ללא scaling.\n\nטענה 4 לא נכונה: x3 אינו מובהק כלל (p = 0.663) - בוודאי לא המשפיע ביותר.\n\nבמבחנים נשאל גם: לאחר feature scaling אילו תשובות ישתנו? רק שאלת 'ההשפעה המשמעותית ביותר' - אחרי scaling כן ניתן להשוות מקדמים."
  },
  {
    "id": 65,
    "topic": "regression",
    "subtopic": "טבלת סיכום OLS",
    "source": "מבחן 2024 סמסטר ב' מועד ב' + מבחן 2023 סמסטר ב' מועד א'",
    "question": "בטבלת סיכום של מודל רגרסיה לינארית (ללא feature scaling), נתון שהמשתנה x6 מובהק מאוד (p-value של 0.000) והמשתנה x3 אינו מובהק (p-value של 0.71).\n\nמה ניתן לומר על השפעת הסרת כל אחד מהם על adjusted R בריבוע?",
    "options": [
      "הסרת x6 תוריד את adjusted R בריבוע; הסרת x3 עשויה דווקא להעלות אותו",
      "הסרת כל אחד מהם תמיד מורידה את adjusted R בריבוע",
      "adjusted R בריבוע אינו מושפע מהסרת משתנים",
      "הסרת x6 תעלה את adjusted R בריבוע; הסרת x3 תוריד אותו",
      "הסרת כל אחד מהם תמיד מעלה את adjusted R בריבוע"
    ],
    "correctIndex": 0,
    "explanation": "בניגוד ל-R בריבוע (שלעולם לא עולה בהסרת משתנה), adjusted R בריבוע 'מעניש' על משתנים מיותרים.\n\nx6 מובהק - הוא תורם למודל תרומה אמיתית. הסרתו תפגע בהתאמה יותר מהחיסכון בעונש - adjusted R בריבוע יירד.\n\nx3 לא מובהק - הוא 'משתנה מיותר' שרק מוסיף עונש. הסרתו כמעט לא תפגע בהתאמה, אך תבטל את העונש - adjusted R בריבוע עשוי לעלות.\n\nזה ההבדל המהותי בין שני המדדים, והוא נבחן שוב ושוב בגרסאות שאלת ה-OLS."
  },
  {
    "id": 66,
    "topic": "regression",
    "subtopic": "adjusted R בריבוע",
    "source": "מבחן 2023 סמסטר א' מועד א'",
    "question": "מהי המוטיבציה לשימוש ב-adjusted R בריבוע כמדד נוסף לטיב מודל רגרסיה לינארית?",
    "options": [
      "המדד 'מעניש' על הוספת משתנים מיותרים שאינם תורמים למודל - ככל שמוסיפים יותר משתנים מיותרים, הפער בינו לבין R בריבוע גדל",
      "המדד מחליף את הצורך ב-p-values של המקדמים",
      "המדד מודד את איכות החיזוי על test set במקום על נתוני האימון",
      "המדד מנרמל את R בריבוע לטווח שבין מינוס 1 ל-1",
      "המדד מתקן את R בריבוע כך שיתאים גם למודלים לא לינאריים"
    ],
    "correctIndex": 0,
    "explanation": "הבעיה עם R בריבוע: הוספת כל משתנה - גם חסר משמעות לחלוטין - לעולם לא תוריד אותו (ולרוב תעלה מעט). כך מודל 'מנופח' במשתנים נראה טוב יותר בלי להיות טוב יותר.\n\nadjusted R בריבוע מתקן זאת: הוא כולל קנס שגדל עם מספר המשתנים. משתנה חדש מעלה אותו רק אם תרומתו האמיתית עולה על הקנס.\n\nלכן פער גדל בין R בריבוע ל-adjusted R בריבוע הוא נורת אזהרה: המודל עמוס במשתנים מיותרים."
  },
  {
    "id": 67,
    "topic": "regression",
    "subtopic": "מטריצת מתאמים",
    "source": "שאלה שחזרה ב-3 מבחנים + תרגול 5",
    "question": "סטודנט רוצה למדל בעיית ניבוי ערכים רציפים בעזרת רגרסיה לינארית, עם חמישה משתנים בלתי תלויים (x1-x5) ומשתנה תלוי y. לא בוצע feature scaling. הסטודנט חישב את מקדם המתאם של פירסון בין כל זוגות המשתנים:",
    "dataTable": {
      "headers": [
        "",
        "x1",
        "x2",
        "x3",
        "x4",
        "x5",
        "y"
      ],
      "rows": [
        [
          "x1",
          "1.00",
          "-0.50",
          "0.02",
          "-0.43",
          "0.01",
          "0.48"
        ],
        [
          "x2",
          "-0.50",
          "1.00",
          "0.03",
          "0.84",
          "-0.02",
          "-0.18"
        ],
        [
          "x3",
          "0.02",
          "0.03",
          "1.00",
          "0.05",
          "0.04",
          "0.01"
        ],
        [
          "x4",
          "-0.43",
          "0.84",
          "0.05",
          "1.00",
          "0.03",
          "-0.15"
        ],
        [
          "x5",
          "0.01",
          "-0.02",
          "0.04",
          "0.03",
          "1.00",
          "0.00"
        ]
      ]
    },
    "questionEnd": "נכון, לא נכון או לא ניתן לדעת:\n\n1. למשתנה x3 אין השפעה משמעותית על y\n2. למשתנה x1 ההשפעה הכי משמעותית על y\n3. הורדת המשתנה x5 עלולה לפגוע במדד ה-R בריבוע",
    "options": [
      "1 נכון; 2 נכון; 3 נכון",
      "1 לא ניתן לדעת; 2 לא ניתן לדעת; 3 לא ניתן לדעת",
      "1 נכון; 2 נכון; 3 לא נכון",
      "1 נכון; 2 לא נכון; 3 נכון",
      "1 לא נכון; 2 נכון; 3 נכון"
    ],
    "correctIndex": 2,
    "explanation": "קוראים את השורה/עמודה של y:\nx1-y: 0.48, x2-y: -0.18, x3-y: 0.01, x4-y: -0.15, x5-y: 0.00\n\nטענה 1 נכונה: מתאם 0.01 בין x3 ל-y - כמעט אפס, אין קשר לינארי משמעותי.\n\nטענה 2 נכונה: ל-x1 המתאם הגבוה ביותר בערך מוחלט (0.48) עם y - ההשפעה המשמעותית ביותר. שימו לב: כאן, בניגוד לטבלת מקדמי OLS, ניתן לקבוע - מתאם פירסון אינו תלוי בסקאלה!\n\nטענה 3 לא נכונה: מתאם x5-y הוא 0.00 - הסרת x5 לא תפגע ב-R בריבוע.\n\nנקודה נוספת מהמבחנים: המתאם הגבוה (0.84) בין x2 ל-x4 מציין multi-collinearity - לכן 'הורדת x4 תפגע ב-R בריבוע' סומנה לא נכון: המידע שלו מיוצג כמעט כולו על ידי x2."
  },
  {
    "id": 68,
    "topic": "regression",
    "subtopic": "multi-collinearity",
    "source": "מבחן 2024 סמסטר א' מועד א' + תרגול 5",
    "question": "נתונה בעיית רגרסיה לינארית מרובת משתנים. איזו מהטענות הבאות לגבי תופעת ה-multi-collinearity נכונה?",
    "options": [
      "התופעה רלוונטית רק כשיש יותר מעשרה משתנים",
      "ניתן לפתור את התופעה על ידי קידוד משתנים קטגוריים עם dummy encoding",
      "התופעה פוגעת ביכולת לפרש את המקדמים של המודל",
      "התופעה פוגעת במדד ה-R בריבוע",
      "התופעה משפרת את דיוק החיזוי כי יש יותר מידע במודל"
    ],
    "correctIndex": 2,
    "explanation": "multi-collinearity = קשר לינארי חזק בין שניים או יותר מהמשתנים הבלתי תלויים.\n\nהפגיעה המרכזית: פרשנות המקדמים. כששני משתנים 'נעים יחד', המודל מחלק ביניהם את 'עוגת התרומה' באופן שרירותי - המקדמים יכולים לקבל ערכים מוזרים, סימנים הפוכים מהצפוי, ורגישות גבוהה לשינויים קטנים בנתונים.\n\nמה שהתופעה לא פוגעת בו: R בריבוע ויכולת החיזוי - המודל כמכלול עדיין מנבא היטב; רק החלוקה הפנימית בין המקדמים בעייתית.\n\ndummy encoding הוא שיטת קידוד למשתנים קטגוריים - אין לו קשר לפתרון multi-collinearity."
  },
  {
    "id": 69,
    "topic": "regression",
    "subtopic": "multi-collinearity",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד ב' + תרגול 5",
    "question": "לפניכם מספר אמירות לגבי תופעת ה-multi-collinearity במודל רגרסיה לינארית. איזו מהן נכונה?",
    "options": [
      "התופעה יכולה להשפיע על סימן המקדם של משתנה בלתי תלוי - למשל להפוך אותו מחיובי לשלילי",
      "בחלוקה ל-train ו-test, התופעה מחלישה את המתאם של תוצאות הניבוי ל-test set",
      "ניתן להפחית את התופעה על ידי ביצוע feature scaling לפני בניית משוואת הרגרסיה",
      "התופעה מחלישה את יכולת הניבוי של המודל - הדבר בא לידי ביטוי ב-R בריבוע",
      "ניתן לבטל את התופעה על ידי שימוש ב-dummy encoding"
    ],
    "correctIndex": 0,
    "explanation": "כשיש מתאם חזק בין משתנים, המודל מחלק ביניהם את התרומה בצורה לא יציבה - מקדם של משתנה שקשור חיובית ל-y יכול לצאת שלילי כי 'שותפו' תפס את התרומה החיובית. זו בדיוק דוגמת חדרי השינה במחירי בתים (מקדם שלילי לחדרים!).\n\nהטענות השגויות:\nיכולת ניבוי / R בריבוע / מתאם עם test - לא נפגעים; המודל השלם מנבא טוב, רק פרשנות המקדמים נפגעת.\nfeature scaling משנה סקאלות אך לא מבטל תלות לינארית בין משתנים.\ndummy encoding הוא נושא אחר לגמרי (קידוד קטגוריות).\n\nעוד מהמבחנים: זיהוי התופעה דווקא פשוט (מטריצת מתאמים או scatter plot) - הטענה 'מורכבת לזיהוי' סומנה לא נכון."
  },
  {
    "id": 70,
    "topic": "regression",
    "subtopic": "multi-collinearity",
    "source": "תרגול 5 + מבחן 2024 סמסטר ב' מועד א'",
    "question": "אילו מהטענות הבאות לגבי multi-collinearity נכונות?\n\n1. התופעה מתרחשת כאשר שניים (או יותר) משתנים בלתי תלויים מקיימים קשר לינארי משמעותי\n2. התופעה יכולה לגרום למשתנה עם קשר מובהק למשתנה התלוי להיראות כאילו אין לו תרומה מובהקת בטבלת סיכום הרגרסיה\n3. תופעת ה-multi-collinearity מורכבת לזיהוי, לכן לא תמיד נוכל לבטלה\n4. בהינתן שני משתנים עם קשר של multi-collinearity, המשתנה הנחוץ יותר הוא זה בעל מקדם המתאם (pearson r) הגבוה יותר למשתנה התלוי",
    "options": [
      "כל הטענות נכונות",
      "טענות 1, 2 ו-4 נכונות; טענה 3 לא נכונה",
      "טענות 1 ו-3 בלבד נכונות",
      "רק טענה 1 נכונה",
      "טענות 2 ו-3 בלבד נכונות"
    ],
    "correctIndex": 1,
    "explanation": "טענה 1 נכונה - זו ההגדרה.\n\nטענה 2 נכונה: כשהמידע 'מתחלק' בין משתנים מתואמים, ה-p-value של כל אחד בנפרד עלול לצאת לא מובהק - למרות שהקשר האמיתי עם y מובהק. זו אחת התופעות המסוכנות ביותר בפרשנות.\n\nטענה 3 לא נכונה: זיהוי פשוט - מטריצת מתאמים בין המשתנים חושפת את התופעה מיד. ואפשר לטפל (למשל להסיר אחד מהמשתנים).\n\nטענה 4 נכונה: מבין שני משתנים מתואמים, נשמור את זה שמתואם חזק יותר עם y - הוא נושא יותר מידע רלוונטי."
  },
  {
    "id": 71,
    "topic": "regression",
    "subtopic": "רווח סמך למקדם",
    "source": "מבחן 2023 סמסטר א' מועד א'",
    "question": "בניתוח מודל רגרסיה לינארית עם משתנה בלתי תלוי אחד X ומשתנה תלוי Y, נמצא כי רווח הסמך למקדם beta1 הוא [-3.11, 2.51].\n\nמה ניתן להסיק מנתוני השאלה?",
    "options": [
      "לא מתקיים קשר לינארי בין X ל-Y",
      "אין שום קשר בין X ל-Y",
      "המקדם beta1 שווה בדיוק ל-0.3-",
      "X הוא predictor טוב ל-Y",
      "מתקיים קשר ריבועי (לא לינארי) בין X ל-Y"
    ],
    "correctIndex": 0,
    "explanation": "רווח הסמך של beta1 כולל את הערך 0 (הטווח נמתח מ-3.11- עד 2.51).\n\nהמשמעות: לא ניתן לשלול ש-beta1 = 0, כלומר אין עדות סטטיסטית לקשר לינארי בין X ל-Y. (שקול ל-p-value לא מובהק.)\n\nדיוק חשוב בניסוח: המסקנה היא 'לא מתקיים קשר לינארי', לא 'אין שום קשר' - ייתכן בהחלט קשר לא-לינארי (ריבועי, מחזורי...) שרגרסיה לינארית עיוורת אליו. אבל גם אי אפשר להסיק שקיים קשר ריבועי - פשוט אין לנו עדות ממודל לינארי."
  },
  {
    "id": 72,
    "topic": "regression",
    "subtopic": "התאמת מודל לתבנית נתונים",
    "source": "מבחן 2023 סמסטר א' מועד א'",
    "question": "מכון מטאורולוגי אסף נתוני תשלום חשבונות חשמל של משפחות (Y) וטמפרטורה חודשית ממוצעת (X):",
    "dataTable": {
      "headers": [
        "X (טמפ')",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
        "35",
        "40"
      ],
      "rows": [
        [
          "Y (חשבון)",
          "150",
          "110",
          "90",
          "90",
          "110",
          "110",
          "120",
          "130"
        ]
      ]
    },
    "questionEnd": "נלמדת משוואת רגרסיה מהצורה Y = b0 + b1·X. על סמך הנתונים בטבלה, מהי המסקנה הנכונה?",
    "options": [
      "הבעיה אינה מתאימה למידול על ידי משוואת רגרסיה לינארית",
      "ניתן להסיק כי b1 הוא מקדם עם תרומה משמעותית חיובית",
      "הבעיה מתאימה לרגרסיה לינארית אך לא ניתן להסיק על b1",
      "ניתן להסיק כי b1 הוא מקדם עם תרומה משמעותית שלילית",
      "b1 יהיה שווה ל-0 בדיוק במשוואת הרגרסיה"
    ],
    "correctIndex": 0,
    "explanation": "מתבוננים בתבנית: Y יורד (150 → 90) ואז עולה חזרה (90 → 130) - צורת U.\n\nהסיפור הפיזיקלי הגיוני: בקור מחממים (חשבון גבוה), בטמפרטורות נעימות לא מפעילים כלום (מינימום), בחום ממזגים (חשבון עולה שוב).\n\nקשר בצורת U הוא לא-לינארי מובהק: קו ישר אחד לא יכול לתאר ירידה ואז עלייה. רגרסיה לינארית תתאים קו כמעט שטוח עם R בריבוע נמוך ותפספס את התבנית לחלוטין.\n\nלכן: הבעיה אינה מתאימה לרגרסיה לינארית (מתאימה למשל לרגרסיה פולינומית או piece-wise)."
  },
  {
    "id": 73,
    "topic": "regression",
    "subtopic": "התאמת מודל לתבנית נתונים",
    "source": "מבחן 2024 סמסטר ב' מועד ב'",
    "question": "מכון מטאורולוגי אסף נתוני תשלום חשבונות חשמל של משפחות (Y) וטמפרטורה חודשית ממוצעת (X):",
    "dataTable": {
      "headers": [
        "X (טמפ')",
        "10",
        "15",
        "20",
        "25",
        "30",
        "32.5",
        "35",
        "37.5"
      ],
      "rows": [
        [
          "Y (חשבון)",
          "1000",
          "1100",
          "1150",
          "1250",
          "1300",
          "1400",
          "1475",
          "1600"
        ]
      ]
    },
    "questionEnd": "נלמדת משוואת רגרסיה Y = b0 + b1·X. אילו מהטענות נכונות?\n\n1. ניתן לשער כי X הוא משתנה עם תרומה משמעותית חיובית (b1 > 0)\n2. ניתן לשער בוודאות גבוהה כי b1 יהיה גדול מ-1.0\n3. ניתן לשער בוודאות גבוהה כי b0 יהיה גדול מ-1.0\n4. הבעיה אינה מתאימה למידול על ידי רגרסיה לינארית",
    "options": [
      "טענות 1 ו-3 בלבד נכונות",
      "רק טענה 1 נכונה",
      "טענות 1 ו-2 בלבד נכונות",
      "טענות 1, 2 ו-3 נכונות",
      "רק טענה 4 נכונה"
    ],
    "correctIndex": 3,
    "explanation": "כאן, בניגוד לגרסת ה-U, הקשר מונוטוני עולה וכמעט לינארי - מתאים מאוד לרגרסיה לינארית (טענה 4 שגויה).\n\nטענה 1 נכונה: Y עולה בעקביות עם X - שיפוע חיובי.\n\nטענה 2 נכונה: הערכת השיפוע - עלייה של כ-600 יחידות Y (מ-1000 ל-1600) על פני 27.5 יחידות X - שיפוע של בערך 20-22. בוודאות גדול מ-1.\n\nטענה 3 נכונה: החיתוך b0 - הערך החזוי ב-X=0. מהמגמה: 1000 פחות בערך 10 כפול 20 - סביבות 800. בוודאות גדול מ-1.\n\nזו שאלת אומדן 'על המפית' - לא נדרש חישוב מדויק, רק סדרי גודל מהנתונים."
  },
  {
    "id": 74,
    "topic": "regression",
    "subtopic": "feature scaling ברגרסיה",
    "source": "מבחן 2024 סמסטר ב' מועד ב'",
    "question": "נתונה בעיית רגרסיה עם משתנים בלתי תלויים X1, X2, X3 ומשתנה תלוי Y. נכון או לא נכון:\n\n1. ביצוע feature scaling על X1, X2, X3 עשוי לשפר את טיב מודל הרגרסיה\n2. ביצוע feature scaling על X1, X2, X3 עשוי להשפיע על המקדמים b1,...,bk במודל\n3. ביצוע feature scaling על המשתנה התלוי Y עשוי להשפיע על המקדמים b1,...,bk ועל b0",
    "options": [
      "1 נכון; 2 נכון; 3 לא נכון",
      "1 לא נכון; 2 לא נכון; 3 לא נכון",
      "1 נכון; 2 נכון; 3 נכון",
      "1 נכון; 2 לא נכון; 3 נכון",
      "1 לא נכון; 2 נכון; 3 נכון"
    ],
    "correctIndex": 4,
    "explanation": "רגרסיה לינארית עם פתרון אנליטי אינה תלוית-סקאלה: scaling הוא טרנספורמציה לינארית, והמודל פשוט 'מפצה' דרך המקדמים. טיב ההתאמה (R בריבוע, איכות החיזוי) לא משתנה - טענה 1 לא נכונה.\n\nאבל המקדמים עצמם כן משתנים: אם מכווצים את X פי 10, המקדם שלו גדל פי 10 כדי לפצות - טענה 2 נכונה.\n\nגם scaling של Y משנה את כל המקדמים ואת b0 (הכל מוכפל/מוזז בהתאם) - טענה 3 נכונה.\n\nהשורה התחתונה: scaling ברגרסיה לינארית משנה את 'התרגום' (המקדמים) אבל לא את 'המשמעות' (טיב המודל). זה שונה ממודלים מבוססי-מרחק (KNN, KMeans) שבהם scaling משנה תוצאות!"
  },
  {
    "id": 75,
    "topic": "regression",
    "subtopic": "feature scaling ברגרסיה",
    "source": "מבחן 2023 סמסטר א' מועד ב'",
    "question": "נכון או לא נכון: feature scaling הוא תהליך הכרחי לקראת אימון מודל רגרסיה לינארית?",
    "options": [
      "לא נכון - scaling אסור ברגרסיה לינארית כי הוא מעוות את הקשר בין המשתנים",
      "נכון - ללא scaling המודל לא יתכנס לפתרון",
      "נכון - בלעדיו R בריבוע תמיד יוצא שלילי",
      "נכון - scaling הכרחי לכל מודל למידת מכונה ללא יוצא מן הכלל",
      "לא נכון - רגרסיה לינארית אינה מבוססת מרחקים, וטיב המודל אינו תלוי בסקאלת המשתנים"
    ],
    "correctIndex": 4,
    "explanation": "רגרסיה לינארית נפתרת אנליטית (או בגרדיאנט) ומוצאת את אותו קו מיטבי בכל סקאלה - המקדמים מסתגלים אוטומטית. לכן scaling אינו הכרחי לטיב המודל.\n\nמתי scaling כן שימושי ברגרסיה? לפרשנות: אחרי scaling אפשר להשוות מקדמים ולזהות איזה משתנה משפיע יותר (זוכרים את שאלת ה-OLS?).\n\nלעומת זאת במודלים מבוססי מרחק - KNN, NNR, KMeans - וכן ברשתות נוירונים, scaling חיוני באמת: משתנה בסקאלה גדולה 'משתלט' על חישוב המרחק."
  },
  {
    "id": 76,
    "topic": "regression",
    "subtopic": "פרשנות מודל",
    "source": "מבחן 2025 סמסטר א' מועד א' + תרגול 5",
    "question": "נתון dataframe עם נתוני מכירת בתים: גודל הבית (שטח), מספר חדרי שינה ומחיר (במאות אלפי דולרים). ידוע שגודל הבית ומספר חדרי השינה מתואמים חזק. משוואת הרגרסיה שהתקבלה:\n```Y = 3.36 + 0.2·size - 0.52·bedrooms```\nסטודנט מציג את המודל למשרד תיווך. אילו מהטענות נכונות?\n\n1. כל חדר שינה נוסף מוריד את מחיר הבית ב-0.52 (במאות אלפי דולרים)\n2. מחיר צפוי של בית עם שטח 1500 ושלושה חדרי שינה הוא 301.8\n3. ניתן לשער ש-R בריבוע ו-adjusted R בריבוע במודל שהתקבל הם גבוהים\n4. לא ניתן להשתמש במשוואה שהתקבלה לניבוי מחירי בתים",
    "options": [
      "טענות 2 ו-4 נכונות",
      "רק טענה 4 נכונה",
      "טענות 2 ו-3 נכונות",
      "טענות 1, 2 ו-3 נכונות",
      "טענות 1 ו-2 נכונות"
    ],
    "correctIndex": 2,
    "explanation": "טענה 1 לא נכונה: המקדם השלילי של חדרי שינה נוגד אינטואיציה ומיד מעלה חשד ל-multi-collinearity בין size ל-bedrooms (בתים גדולים = יותר חדרים). המקדמים 'חילקו ביניהם את העוגה' - אסור לפרש אותם בנפרד.\n\nטענה 2 נכונה - הצבה פשוטה:\nY = 3.36 + 0.2·1500 - 0.52·3 = 3.36 + 300 - 1.56 = 301.8\n\nטענה 3 נכונה: הקשר החזק בין שטח למחיר גורר התאמה טובה - R בריבוע גבוה. שוב העיקרון: multi-collinearity לא פוגעת בטיב החיזוי.\n\nטענה 4 לא נכונה - מאותה סיבה בדיוק: המודל כמכלול מנבא מצוין; רק פרשנות מקדם בודד אסורה."
  },
  {
    "id": 77,
    "topic": "regression",
    "subtopic": "רגרסיה על רעש",
    "source": "מבחן 2024 סמסטר א' מועד א' + תרגול 4",
    "question": "סטודנט רוצה לנבא את Y מ-X. הוא בנה scatter plot של מדגם גדול והתקבל פיזור אקראי לחלוטין - ענן נקודות ללא שום מגמה (רעש). הסטודנט למד משוואת רגרסיה מהצורה y = b0 + b1·x.\n\nאילו מהטענות נכונות?\n\n1. ניתן להסיק ברמת ודאות גבוהה כי b1 שווה ל-0\n2. ניתן להסיק ברמת ודאות גבוהה כי b0 שווה לממוצע ערכי ה-Y במדגם\n3. ניתן להסיק ברמת ודאות גבוהה כי b0 שווה ל-0\n4. לא ניתן להסיק מסקנות על b0 ו-b1 על סמך הנתונים",
    "options": [
      "רק טענה 4 נכונה",
      "טענות 1 ו-3 נכונות",
      "טענות 2 ו-3 נכונות",
      "טענות 1 ו-2 נכונות",
      "רק טענה 1 נכונה"
    ],
    "correctIndex": 3,
    "explanation": "כשאין שום קשר בין X ל-Y:\n\nטענה 1 נכונה: השיפוע האופטימלי הוא b1 = 0 - שום שיפוע אחר לא משפר את ה-MSE כי X לא נושא מידע על Y.\n\nטענה 2 נכונה: בהינתן b1 = 0, המשוואה היא Y = b0 קבוע. הקבוע שממזער את סכום ריבועי השגיאות הוא בדיוק ממוצע ערכי Y - תכונה יסודית של ה-MSE.\n\nטענה 3 לא נכונה: b0 שווה לממוצע Y, שאינו בהכרח 0 (תלוי בנתונים).\n\nכלומר דווקא ניתן להסיק הרבה: הקו המיטבי הוא קו אופקי בגובה ממוצע Y."
  },
  {
    "id": 78,
    "topic": "regression",
    "subtopic": "piece-wise regression",
    "source": "מבחן 2025 סמסטר ב' מועד ב' + תרגול 4",
    "question": "בתרשים פיזור נראית תבנית של שני קטעים לינאריים שונים: עד נקודה מסוימת x הנתונים עולים בשיפוע אחד, ומעבר לה - בשיפוע שונה. לתבנית כזו מתאים מודל piece-wise regression: קו רגרסיה 'חתוך' המורכב משתי משוואות נפרדות (y1 עד הנקודה, y2 אחריה).\n\nבהינתן הכלים שנלמדו בקורס, איזו שיטת אימון תמצא את המשוואות y1, y2 ואת נקודת החיתוך x?",
    "options": [
      "לא ניתן לאמן מודל כזה עם כלי הקורס - נדרשת רשת נוירונים",
      "להשתמש ב-KMeans עם K=2 על ערכי ה-Y ולאמן רגרסיה על כל אשכול",
      "לחשב את ממוצע ה-X ולקבוע אותו כנקודת החיתוך ללא בדיקה",
      "לאמן רגרסיה לינארית אחת על כל הנתונים ולפצל את הקו שהתקבל באמצע הטווח",
      "לעבור על נקודות חיתוך אפשריות; עבור כל מועמדת לפצל את הנתונים לשניים, לאמן רגרסיה לינארית על כל חלק, ולבחור את החלוקה שממזערת את השגיאה הכוללת (MSE)"
    ],
    "correctIndex": 4,
    "explanation": "הרעיון: חיפוש ממצה (grid search) על נקודת החיתוך.\n\nלכל מועמדת x:\nמפצלים את הנתונים לשתי קבוצות (משמאל ומימין ל-x), מאמנים רגרסיה לינארית רגילה על כל קבוצה בנפרד, ומחשבים את סכום שגיאות ה-MSE של שני הקטעים יחד.\n\nבוחרים את ה-x שנותן את השגיאה הכוללת הנמוכה ביותר - יחד עם שתי המשוואות שאומנו עבורו.\n\nזה משתמש רק בכלי הקורס (רגרסיה לינארית + לולאה), ומדגים עיקרון כללי: הפיכת היפר-פרמטר (נקודת החיתוך) לבעיית חיפוש.\n\nדוגמה מציאותית לתבנית כזו: צריכת חשמל מול טמפרטורה, שכר מול ותק (קפיצה בקידום), עלות ייצור מול כמות (חיסכון לגודל)."
  },
  {
    "id": 79,
    "topic": "regression",
    "subtopic": "פונקציות loss",
    "source": "מבחן 2024 סמסטר ב' מועד א' + תרגול 4",
    "question": "פונקציית האופטימיזציה של רגרסיה לינארית שהוצגה בהרצאות היא MSE - ממוצע ריבועי השגיאות. סטודנט הציע פונקציות חלופיות. עבור כל אחת, האם היא אלטרנטיבה טובה למציאת משוואת רגרסיה?\n\nא. ממוצע ההפרשים בחזקת 3\nב. ממוצע ההפרשים בחזקת מינוס 2\nג. ממוצע ההפרשים בחזקת 4\nד. ממוצע הערכים המוחלטים של ההפרשים (MAE)",
    "options": [
      "א לא; ב לא; ג כן; ד כן",
      "כולן אלטרנטיבות טובות",
      "א כן; ב לא; ג כן; ד לא",
      "אף אחת אינה אלטרנטיבה טובה",
      "א לא; ב כן; ג לא; ד כן"
    ],
    "correctIndex": 0,
    "explanation": "מה נדרש מפונקציית loss לרגרסיה? שתעניש כל שגיאה (בלי לבטל שגיאות זו את זו), ותקטן ככל שהמודל טוב יותר.\n\nא. חזקה 3 - פסולה: חזקה אי-זוגית משמרת סימן. שגיאות חיוביות ושליליות מתקזזות, ושגיאה שלילית ענקית דווקא 'משפרת' את הציון - המינימיזציה תברח לכיוון הלא נכון.\n\nב. חזקה מינוס 2 - פסולה: ככל שהשגיאה קטנה יותר, הערך 1 חלקי שגיאה בריבוע גדל! הפונקציה מתגמלת שגיאות ענקיות ומענישה דיוק - ההפך הגמור.\n\nג. חזקה 4 - תקינה: זוגית וחיובית, מענישה כל שגיאה (רגישה עוד יותר לחריגים מ-MSE, אבל עקרונית עובדת).\n\nד. MAE - תקינה: ערך מוחלט חיובי תמיד, מעניש כל שגיאה. אלטרנטיבה מוכרת ופחות רגישה לחריגים."
  },
  {
    "id": 80,
    "topic": "regression",
    "subtopic": "פונקציות loss",
    "source": "מבחן 2023 סמסטר א' מועד ב'",
    "question": "מהו מדד ה-MSE (mean squared error) ולמה הוא משמש?",
    "options": [
      "השורש של סכום השגיאות; משמש לנרמול משתנים לפני אימון",
      "אחוז החיזויים השגויים; משמש כמדד accuracy ברגרסיה",
      "המרחק בין שני וקטורים; משמש למדידת דמיון בין תצפיות",
      "ממוצע השגיאות בערך מוחלט; משמש למדידת דיוק מסווגים בלבד",
      "ממוצע ריבועי השגיאות בין ערכי אמת לערכים שחזה המודל; משמש כפונקציית loss שממזערים בעת אימון מודל רגרסיה לינארית"
    ],
    "correctIndex": 4,
    "explanation": "MSE = ממוצע של (ערך אמת פחות ערך חזוי) בריבוע, על פני כל התצפיות.\n\nהריבוע ממלא שני תפקידים: הופך כל שגיאה לחיובית (אין קיזוז בין שגיאות חיוביות ושליליות), ומעניש שגיאות גדולות באופן לא פרופורציונלי.\n\nהשימוש: זו פונקציית המטרה של רגרסיה לינארית - האימון מוצא את המקדמים (b0, b1, ...) שממזערים את ה-MSE. מודל אופטימלי = MSE מינימלי."
  },
  {
    "id": 81,
    "topic": "regression",
    "subtopic": "רגרסיה לוגיסטית",
    "source": "מבחן 2023 סמסטר א' מועד א'",
    "question": "אימון מודל רגרסיה לוגיסטית (לסיווג בינארי) נעשה על ידי אופטימיזציה של פונקציית מטרה. איזו פונקציה תהיה בחירה טובה לאימון המודל?",
    "options": [
      "ממוצע ההפרשים (ללא ריבוע וללא ערך מוחלט)",
      "מדד ה-R בריבוע של המודל",
      "סכום התחזיות חלקי מספר הדוגמאות",
      "ממוצע ריבועי ההפרשים בין התוויות לתחזיות (MSE)",
      "log loss (cross-entropy): מינוס הממוצע של y·log(y-חזוי) + (1-y)·log(1-y-חזוי)"
    ],
    "correctIndex": 4,
    "explanation": "רגרסיה לוגיסטית מוציאה הסתברות השתייכות למחלקה (בין 0 ל-1), והתוויות הן 0 או 1.\n\nפונקציית ה-loss המתאימה היא log loss (הנקראת גם binary cross-entropy):\nכשהתווית y=1 - העונש הוא מינוס log של ההסתברות החזויה: תחזית בטוחה ונכונה כמעט לא נענשת, תחזית בטוחה ושגויה נענשת בעונש שואף לאינסוף.\nכשהתווית y=0 - סימטרית עם 1 פחות ההסתברות.\n\nMSE אינו הבחירה הנכונה כאן - הוא מיועד לניבוי ערכים רציפים, ובשילוב עם הסיגמואיד יוצר משטח אופטימיזציה בעייתי. R בריבוע הוא מדד הערכה, לא פונקציית אימון."
  },
  {
    "id": 82,
    "topic": "regression",
    "subtopic": "רגרסיה לוגיסטית",
    "source": "מבחן 2025 סמסטר א' מועד א' + תרגול 6",
    "question": "בבעיית סיווג בינארית ממודלת ברגרסיה לוגיסטית, סטודנט מציע פונקציית loss חלופית ל-log loss:\n\nloss = ממוצע של (0 אם התחזית נכונה, אחרת 1)\nכאשר התחזית היא 1 אם ההסתברות החזויה גדולה או שווה 0.5, אחרת 0.\n\n(א) האם הפונקציה המוצעת 'תפעל כמצופה' - ערכי loss נמוכים יצביעו על מודל טוב יותר?\n(ב) האם היא טובה יותר, שקולה, או פחות טובה מ-log loss?",
    "options": [
      "(א) כן\n(ב) שקולה לחלוטין ל-log loss",
      "(א) לא\n(ב) ערכים נמוכים שלה מציינים דווקא מודל גרוע",
      "(א) לא\n(ב) לא רלוונטי כי היא לא פועלת",
      "(א) כן\n(ב) פחות טובה - היא 'גסה' יותר, סופרת רק את מספר הטעויות ואינה רגישה לגודל השגיאה ולביטחון המודל",
      "(א) כן\n(ב) טובה יותר - היא פשוטה וישירה יותר"
    ],
    "correctIndex": 3,
    "explanation": "(א) כן - זהו 0-1 loss: הוא סופר את שיעור הטעויות, ולכן loss נמוך אכן מציין מודל מדויק יותר. הכיוון נכון.\n\n(ב) פחות טובה, משתי סיבות:\n\nרגישות: log loss מבחין בין טעות 'בקושי' (הסתברות 0.49 כשהאמת 1) לטעות בוטחת (הסתברות 0.01 כשהאמת 1) - הראשונה נענשת מעט, השנייה בחומרה. ה-0-1 loss נותן לשתיהן עונש זהה של 1, והוא חסום על ידי 1 בעוד log loss אינו חסום.\n\nדוגמה מספרית (כפי שנדרש במבחן): שני מודלים שטועים על אותה דוגמה - אחד עם הסתברות 0.49 ואחד עם 0.01. לפי 0-1 loss הם זהים; לפי log loss הראשון כמעט טוב והשני גרוע מאוד - וזה המידע שמכוון את האימון."
  },
  {
    "id": 83,
    "topic": "regression",
    "subtopic": "רגרסיה לוגיסטית",
    "source": "מבחן 2024 סמסטר ב' מועד ב'",
    "question": "בסיכום אימון מודל רגרסיה לוגיסטית מוצג מדד pseudo R בריבוע, השונה מ-R בריבוע של רגרסיה לינארית.\n\nמדוע לא ניתן לחשב ברגרסיה לוגיסטית R בריבוע כפי שמחושב ברגרסיה לינארית?",
    "options": [
      "נוסחת R בריבוע מבוססת על ריבועי סטיות של תחזיות רציפות מסביב לממוצע; ברגרסיה לוגיסטית התוויות בינאריות (0/1) והמודל חוזה הסתברויות - ההגדרה המקורית אינה משקפת את טיב הסיווג",
      "R בריבוע דורש בדיוק משתנה בלתי תלוי אחד, ולוגיסטית עובדת רק עם רבים",
      "pseudo R בריבוע ו-R בריבוע הם בעצם אותו מדד בשמות שונים",
      "ברגרסיה לוגיסטית אין בכלל משתנה תלוי ולכן אין מה למדוד",
      "החישוב אפשרי אך אורך זמן רב מדי ולכן משתמשים בקירוב"
    ],
    "correctIndex": 0,
    "explanation": "R בריבוע ברגרסיה לינארית מוגדר כיחס השונות המוסברת: 1 פחות (סכום ריבועי השגיאות חלקי סכום ריבועי הסטיות מהממוצע). ההגדרה נשענת על ניבוי ערכים רציפים ועל מזעור MSE.\n\nברגרסיה לוגיסטית: התוויות הן 0/1, הפלט הוא הסתברות, והאימון ממזער log loss - לא MSE. חישוב R בריבוע 'רגיל' על הסתברויות מול תוויות בינאריות לא מודד את מה שמעניין אותנו.\n\nלכן משתמשים ב-pseudo R בריבוע (למשל של McFadden) - מבוסס השוואת ה-log likelihood של המודל למודל בסיס.\n\nשיטות נוספות להערכת מודל לוגיסטי (הסעיף השני במבחן): accuracy, precision/recall, מטריצת confusion, ROC/AUC."
  },
  {
    "id": 84,
    "topic": "regression",
    "subtopic": "משתנים קטגוריים וקידוד",
    "source": "מבחן 2024 סמסטר ב' מועד ב'",
    "question": "סטודנט הציע לקודד משתנה קטגורי מסוג אזור מגורים באופן הבא: צפון (1), חיפה והקריות (2), השרון (3), גוש דן (4), דרום (5) - ולהשתמש בו כמשתנה מספרי במודל רגרסיה.\n\nהאם זה קידוד מתאים, ומה הקידוד הנכון למשתנה קטגורי נומינלי?",
    "options": [
      "הקידוד מצוין - כל קטגוריה קיבלה מספר ייחודי וזה כל מה שנדרש",
      "הקידוד בעייתי: הוא כופה סדר ומרחקים מלאכותיים בין אזורים (כאילו 'דרום' גדול פי 5 מ'צפון'); הקידוד הנכון הוא dummy encoding - עמודה בינארית לכל קטגוריה",
      "הקידוד הנכון הוא להמיר כל אזור לקו הרוחב הגיאוגרפי שלו",
      "אסור בכלל להכניס משתנים קטגוריים למודל רגרסיה",
      "הקידוד בעייתי רק אם יש יותר מ-10 קטגוריות"
    ],
    "correctIndex": 1,
    "explanation": "אזור מגורים הוא משתנה נומינלי - אין סדר טבעי בין הקטגוריות.\n\nקידוד 1-5 מזריק למודל מידע כוזב: שהאזורים מסודרים על ציר, ש'השרון' נמצא בדיוק באמצע בין 'צפון' ל'דרום', ושהמרחק בין צפון לחיפה שווה למרחק בין השרון לגוש דן. מודל רגרסיה ילמד מקדם אחד שכופה קשר לינארי מונוטוני עם ה'ציר' המדומה הזה.\n\nדוגמה לכשל (כפי שנדרש במבחן): אם מחירי הדירות גבוהים בגוש דן (4) ונמוכים גם בצפון (1) וגם בדרום (5) - שום מקדם לינארי לא יתאר זאת.\n\nהפתרון: dummy encoding (one-hot) - משתנה בינארי נפרד לכל אזור. כל אזור מקבל מקדם עצמאי ללא סדר כפוי."
  },
  {
    "id": 85,
    "topic": "regression",
    "subtopic": "השלמת ערכים חסרים",
    "source": "מבחן 2024 סמסטר א' מועד א'",
    "question": "נהוג להשלים ערכים חסרים בנתונים טבלאיים (dataframe) עם ערך ממוצע (mean) או חציון (median) של העמודה הרלוונטית.\n\nבאילו מקרים נעדיף שימוש בחציון ולא בממוצע למטרה הזאת?",
    "options": [
      "כאשר העמודה היא המשתנה התלוי של המודל",
      "כאשר העמודה מכילה ערכים שלמים בלבד",
      "כאשר התפלגות הנתונים בעמודה מוטה (חיובית או שלילית) באופן משמעותי - אז הממוצע אינו מייצג נאמנה את הערך הטיפוסי",
      "כאשר יש מעט מאוד ערכים חסרים (פחות מ-5%)",
      "תמיד עדיף ממוצע; חציון משמש רק כשאין אפשרות לחשב ממוצע"
    ],
    "correctIndex": 2,
    "explanation": "הממוצע רגיש לערכים קיצוניים: בהתפלגות מוטה (למשל שכר - רוב האנשים סביב ערך מסוים ומיעוט עם שכר עתק), החריגים מושכים את הממוצע הרחק מהערך ה'טיפוסי'.\n\nהשלמה עם ממוצע כזה תזריק לנתונים ערכים לא מייצגים.\n\nהחציון עמיד לחריגים - הוא הערך האמצעי בפועל, ולכן מייצג טוב יותר תצפית טיפוסית בהתפלגות מוטה.\n\nכלל אצבע: התפלגות סימטרית - ממוצע וחציון דומים, שניהם בסדר; התפלגות מוטה או עם חריגים - חציון."
  },
  {
    "id": 86,
    "topic": "classification",
    "subtopic": "מטריצת confusion",
    "source": "מבחן 2023 סמסטר ב' מועד א' + תרגול 8 (חזרה ב-3 מבחנים)",
    "question": "במשימת סיווג לשלוש מחלקות, התקבלה מטריצת ה-confusion הבאה (שורות = מחלקה אמיתית, עמודות = מחלקה חזויה):",
    "dataTable": {
      "headers": [
        "",
        "predicted A",
        "predicted B",
        "predicted C"
      ],
      "rows": [
        [
          "actual A",
          "50",
          "10",
          "10"
        ],
        [
          "actual B",
          "20",
          "50",
          "20"
        ],
        [
          "actual C",
          "5",
          "5",
          "50"
        ]
      ]
    },
    "questionEnd": "מהם ה-precision וה-recall של מחלקה A, ומהו הדיוק הכללי (accuracy)?",
    "options": [
      "precision(A) = 50/75, recall(A) = 50/70, accuracy = 150/220",
      "precision(A) = 50/75, recall(A) = 50/70, accuracy = 50/220",
      "precision(A) = 50/70, recall(A) = 50/75, accuracy = 150/220",
      "precision(A) = 70/220, recall(A) = 75/220, accuracy = 150/220",
      "precision(A) = 50/220, recall(A) = 50/75, accuracy = 75/220"
    ],
    "correctIndex": 0,
    "explanation": "מספר הדוגמאות הכולל: סכום כל התאים = 220.\n\nprecision(A) = כמה מהחיזויים ל-A היו נכונים:\nעמודת predicted A: 50+20+5 = 75 חיזויים, מתוכם 50 נכונים.\nprecision(A) = 50/75\n\nrecall(A) = כמה מהדוגמאות האמיתיות של A זוהו:\nשורת actual A: 50+10+10 = 70 דוגמאות, מתוכן 50 זוהו.\nrecall(A) = 50/70\n\naccuracy = האלכסון חלקי הכל:\n(50+50+50)/220 = 150/220\n\nכלל הזהב: precision קורא עמודה (חזוי), recall קורא שורה (אמיתי). מאותה מטריצה: precision(C) = 50/80, recall(C) = 50/60, ומספר דוגמאות B בפועל = 90.",
    "variants": [
      {
        "question": "במשימת סיווג לשלוש מחלקות, התקבלה מטריצת confusion (שורות = אמיתי, עמודות = חזוי):\n```actual A: predicted A = 40, predicted B = 5, predicted C = 5\nactual B: predicted A = 20, predicted B = 50, predicted C = 10\nactual C: predicted A = 0, predicted B = 30, predicted C = 30```\nמהם ה-precision וה-recall של מחלקה A, ומהו הדיוק הכללי?",
        "options": [
          "precision(A) = 40/60, recall(A) = 40/50, accuracy = 40/190",
          "precision(A) = 40/190, recall(A) = 40/60, accuracy = 60/190",
          "precision(A) = 40/60, recall(A) = 40/50, accuracy = 120/190",
          "precision(A) = 40/50, recall(A) = 40/60, accuracy = 120/190",
          "precision(A) = 60/190, recall(A) = 50/190, accuracy = 120/190"
        ],
        "correctIndex": 2,
        "explanation": "סה\"כ דוגמאות: 190.\n\nprecision(A): עמודת predicted A = 40+20+0 = 60; נכונים 40 - precision = 40/60.\nrecall(A): שורת actual A = 40+5+5 = 50; זוהו 40 - recall = 40/50.\naccuracy: (40+50+30)/190 = 120/190.\n\n(זו בדיוק המטריצה ממבחן 2025ב מועד א'. שם גם: precision(C) = 30/45, recall(C) = 30/60, דוגמאות B בפועל = 80.)"
      },
      {
        "question": "במשימת סיווג לשלוש מחלקות, התקבלה מטריצת confusion (שורות = אמיתי, עמודות = חזוי):\n```actual A: predicted A = 30, predicted B = 10, predicted C = 30\nactual B: predicted A = 20, predicted B = 50, predicted C = 10\nactual C: predicted A = 20, predicted B = 5, predicted C = 30```\nמהם ה-precision וה-recall של מחלקה A, ובין אילו שתי מחלקות ה'בלבול' הגבוה ביותר?",
        "options": [
          "precision(A) = 70/205, recall(A) = 30/60; הבלבול הגבוה ביותר בין A ל-C",
          "precision(A) = 30/70, recall(A) = 30/70; הבלבול הגבוה ביותר בין A ל-C",
          "precision(A) = 30/70, recall(A) = 30/70; הבלבול הגבוה ביותר בין A ל-B",
          "precision(A) = 30/60, recall(A) = 30/70; הבלבול הגבוה ביותר בין B ל-C",
          "precision(A) = 30/205, recall(A) = 30/70; הבלבול הגבוה ביותר בין B ל-C"
        ],
        "correctIndex": 1,
        "explanation": "סה\"כ: 205 דוגמאות.\n\nprecision(A): עמודת predicted A = 30+20+20 = 70 - precision = 30/70.\nrecall(A): שורת actual A = 30+10+30 = 70 - recall = 30/70.\n\nבלבול: מחפשים את התאים הגדולים מחוץ לאלכסון. A שסווגו כ-C: 30 (הגדול ביותר!), C שסווגו כ-A: 20 - סה\"כ 50 טעויות הדדיות בין A ל-C, יותר מכל זוג אחר.\n\n(מטריצה זו ממבחן 2025א מועד א'. שם גם: precision(C) = 30/70, recall(C) = 30/55, דוגמאות B בפועל = 80.)"
      }
    ]
  },
  {
    "id": 87,
    "topic": "classification",
    "subtopic": "מטריצת confusion",
    "source": "מבחן 2023 סמסטר א' מועד א' + מועד ב'",
    "question": "במשימת סיווג בינארית, התקבלה מטריצת ה-confusion הבאה:",
    "dataTable": {
      "headers": [
        "",
        "predicted A",
        "predicted B"
      ],
      "rows": [
        [
          "actual A",
          "75",
          "15"
        ],
        [
          "actual B",
          "35",
          "60"
        ]
      ]
    },
    "questionEnd": "מהם precision(B), recall(B) וה-accuracy?",
    "options": [
      "precision(B) = 60/75, recall(B) = 60/95, accuracy = 60/185",
      "precision(B) = 60/75, recall(B) = 60/95, accuracy = 135/185",
      "precision(B) = 60/95, recall(B) = 60/75, accuracy = 135/185",
      "precision(B) = 75/110, recall(B) = 75/90, accuracy = 135/185",
      "precision(B) = 60/185, recall(B) = 60/95, accuracy = 95/185"
    ],
    "correctIndex": 1,
    "explanation": "סה\"כ דוגמאות: 75+15+35+60 = 185.\n\nprecision(B): עמודת predicted B = 15+60 = 75; מתוכם 60 באמת B.\nprecision(B) = 60/75\n\nrecall(B): שורת actual B = 35+60 = 95; מתוכם 60 זוהו.\nrecall(B) = 60/95\n\naccuracy: (75+60)/185 = 135/185\n\nלמחלקה A במקביל: precision = 75/110, recall = 75/90, ומספר דוגמאות A בפועל = 90.",
    "variants": [
      {
        "question": "במשימת סיווג בינארית התקבלה מטריצת confusion:\n```actual A: predicted A = 50, predicted B = 0\nactual B: predicted A = 25, predicted B = 40```\nמהם precision(A), recall(A), precision(B) ו-recall(B)?",
        "options": [
          "precision(A) = 50/75, recall(A) = 50/50, precision(B) = 40/40, recall(B) = 40/65",
          "כל המדדים שווים ל-90/115",
          "precision(A) = 50/50, recall(A) = 50/75, precision(B) = 40/65, recall(B) = 40/40",
          "precision(A) = 50/75, recall(A) = 50/50, precision(B) = 40/65, recall(B) = 40/40",
          "precision(A) = 50/115, recall(A) = 50/50, precision(B) = 40/115, recall(B) = 40/65"
        ],
        "correctIndex": 0,
        "explanation": "מקרה מעניין עם ערכי קיצון:\n\nprecision(A) = 50/(50+25) = 50/75 - המסווג 'נדיב' מדי עם A.\nrecall(A) = 50/(50+0) = 50/50 = 1 - אף A אמיתי לא פוספס!\nprecision(B) = 40/(0+40) = 40/40 = 1 - כל חיזוי B היה נכון.\nrecall(B) = 40/(25+40) = 40/65 - אבל 25 דוגמאות B פוספסו.\n\naccuracy = 90/115. זו דוגמה קלאסית ל-trade-off: recall מושלם ל-A בא על חשבון precision, ולהפך ב-B."
      }
    ]
  },
  {
    "id": 88,
    "topic": "classification",
    "subtopic": "KNN עם מרחק מנהטן",
    "source": "מבחן חזרה + מבחן 2025 סמסטר א' מועד ב' + תרגול 6",
    "question": "נתון ה-training set הבא:",
    "dataTable": {
      "headers": [
        "X1",
        "X2",
        "class"
      ],
      "rows": [
        [
          "1",
          "1",
          "white"
        ],
        [
          "2",
          "5",
          "black"
        ],
        [
          "4",
          "4",
          "black"
        ],
        [
          "3",
          "2",
          "white"
        ],
        [
          "1",
          "5",
          "white"
        ],
        [
          "2",
          "2",
          "?"
        ]
      ]
    },
    "questionEnd": "סווגו את תצפית ה-test בנקודה (2, 2) בעזרת מסווג KNN עם K=3 ומטריקת מרחק Manhattan:\n```distance((u,v),(p,q)) = |u-p| + |v-q|```",
    "options": [
      "white - כל חמשת השכנים הם white",
      "white - שניים משלושת השכנים הקרובים ביותר הם white",
      "black - שניים משלושת השכנים הקרובים ביותר הם black",
      "black - השכן הקרוב ביותר הוא black",
      "לא ניתן להכריע - יש תיקו בין המחלקות"
    ],
    "correctIndex": 1,
    "explanation": "מחשבים מרחק מנהטן מ-(2,2) לכל נקודת אימון:\n\nאל (1,1) white: |2-1|+|2-1| = 2\nאל (2,5) black: |2-2|+|2-5| = 3\nאל (4,4) black: |2-4|+|2-4| = 4\nאל (3,2) white: |2-3|+|2-2| = 1\nאל (1,5) white: |2-1|+|2-5| = 4\n\nשלושת הקרובים ביותר:\n(3,2) white במרחק 1\n(1,1) white במרחק 2\n(2,5) black במרחק 3\n\nהצבעת רוב: 2 white מול 1 black - הסיווג: white.",
    "variants": [
      {
        "question": "נתון ה-training set הבא:\n```(1,1) black, (1,7) white, (3,3) white, (5,4) black, (2,5) black```\nסווגו את תצפית ה-test בנקודה (3, 6) בעזרת KNN עם K=3 ומרחק Manhattan:\n```distance((u,v),(p,q)) = |u-p| + |v-q|```",
        "options": [
          "black - השכן הקרוב ביותר (2,5) הוא black",
          "white - כל השכנים במרחק עד 4 הם white",
          "white - שניים משלושת הקרובים ((1,7) ו-(3,3)) הם white",
          "לא ניתן להכריע",
          "black - שניים משלושת הקרובים הם black"
        ],
        "correctIndex": 2,
        "explanation": "מרחקי מנהטן מ-(3,6):\n\nאל (1,1) black: 2+5 = 7\nאל (1,7) white: 2+1 = 3\nאל (3,3) white: 0+3 = 3\nאל (5,4) black: 2+2 = 4\nאל (2,5) black: 1+1 = 2\n\nשלושת הקרובים: (2,5) black במרחק 2, ואז (1,7) white ו-(3,3) white במרחק 3.\n\nרוב: 2 white מול 1 black - הסיווג: white.\n\n(זו הגרסה ממבחן 2024ב מועד ב'. שימו לב שהשכן הקרוב ביותר דווקא black - עם K=1 התשובה הייתה מתהפכת!)"
      }
    ]
  },
  {
    "id": 89,
    "topic": "classification",
    "subtopic": "NNR ו-validation",
    "source": "מבחן חזרה + מבחן 2025 סמסטר א' מועד ב' + תרגול 6",
    "question": "שתי טענות על מסווגים מבוססי שכנים:\n\n1. בעבודה עם מסווג מסוג NNR (nearest neighbors in radius), ככל שנגדיל את הרדיוס כך גדל הסיכוי להגיע לדיוק גבוה יותר על ה-validation set\n2. במסווגים KNN ו-NNR נעשה שימוש ב-validation set רק במקרים בהם יש מספיק נתוני אימון על מנת 'להפריש' חלק מהם (בדרך כלל כ-10%) ל-validation",
    "options": [
      "1 לא נכון; 2 לא נכון",
      "שתי הטענות נכונות רק עבור סיווג בינארי",
      "1 נכון; 2 לא נכון",
      "1 לא נכון; 2 נכון",
      "1 נכון; 2 נכון"
    ],
    "correctIndex": 3,
    "explanation": "טענה 1 לא נכונה: רדיוס הוא היפר-פרמטר עם אופטימום - לא 'יותר זה יותר טוב'. רדיוס קטן מדי לא תופס שכנים; רדיוס גדול מדי מכניס להצבעה נקודות רחוקות ולא רלוונטיות (ובקיצוניות - את כל המדגם, שמנבא תמיד את מחלקת הרוב). הדיוק עולה ואז יורד - לכן מחפשים רדיוס אופטימלי באמצעות validation.\n\nטענה 2 נכונה: הפרשת validation 'עולה' בנתוני אימון. כשהנתונים מעטים, ויתור על 10% מהם עלול לפגוע במסווג יותר משהכיוונון מרוויח - לכן משתמשים ב-validation set כשיש מספיק נתונים."
  },
  {
    "id": 90,
    "topic": "classification",
    "subtopic": "בחירת K",
    "source": "מבחן 2023 סמסטר א' מועד ב' + מבחן 2024 סמסטר ב' מועד ב'",
    "question": "נכון או לא נכון: במסווג מסוג KNN תמיד נגיע לדיוק רב יותר על test set עבור K גדול יותר. בפרט, אם נחשיב את כל ה-train set למטרת סיווג של דוגמאות ה-test - כלומר K = גודל ה-train set - נגיע לדיוק מרבי אפשרי.",
    "options": [
      "לא נכון - הדיוק המרבי מתקבל תמיד ב-K=1",
      "נכון - אבל רק אם ה-train set מאוזן בין המחלקות",
      "נכון - יותר שכנים תמיד מספקים יותר מידע",
      "לא נכון - K גדול גורם לשגיאת ריצה בספריות הסטנדרטיות",
      "לא נכון - עם K = גודל ה-train המסווג ינבא תמיד את מחלקת הרוב, ללא תלות בדוגמה הנבדקת"
    ],
    "correctIndex": 4,
    "explanation": "כאשר K שווה לגודל כל ה-train set, כל דוגמת test 'שואלת' את כל נקודות האימון - וההצבעה תמיד תסתיים באותה תוצאה: מחלקת הרוב ב-train. המסווג מתנוון למסווג קבוע שמתעלם לחלוטין מהדוגמה הנבדקת.\n\nK הוא היפר-פרמטר עם איזון:\nK קטן מדי - רגיש לרעש ולחריגים (overfitting).\nK גדול מדי - 'מחליק' את הגבולות עד אובדן כל הבחנה (underfitting), עד למקרה הקיצון של מחלקת הרוב.\n\nגם 'הדיוק המרבי תמיד ב-K=1' שגוי - ה-K האופטימלי תלוי בנתונים ונמצא באמצעות validation set."
  },
  {
    "id": 91,
    "topic": "classification",
    "subtopic": "תכונות KNN",
    "source": "מבחן 2025 סמסטר א' מועד א'",
    "question": "בנינו מודל סיווג KNN עבור dataset מתויג עם 5 מחלקות. אילו מהטענות נכונות?\n\n1. ככל שנבחר K גדול יותר כך דיוק המסווג יגדל\n2. ביצוע feature scaling על הקלט יעזור לפרשנות אך אין לו השפעה על דיוק המסווג\n3. מסווג זה מתאים למצבים בהם פיזור ה-data במרחב אינו ניתן להפרדה לינארית\n4. מסווג זה מתאים למצבים בהם יש 'חריגים' (outliers) - תצפיות רחוקות מאוד מכל השאר\n5. נבחר K אי-זוגי על מנת למנוע מצב של תיקו בניבוי מחלקה",
    "options": [
      "טענות 2 ו-3 נכונות",
      "טענות 3 ו-4 נכונות",
      "רק טענה 5 נכונה",
      "טענות 3 ו-5 נכונות",
      "טענות 1, 3 ו-5 נכונות"
    ],
    "correctIndex": 1,
    "explanation": "טענה 3 נכונה: KNN מסווג לפי שכנות מקומית ואינו מניח שום צורת גבול - הוא מצטיין בדיוק היכן שמסווגים לינאריים נכשלים.\n\nטענה 4 נכונה: חריג רחוק מכולם פשוט לא ייכלל בין השכנים הקרובים של אף דוגמה נורמלית - השפעתו מקומית ומוגבלת. (בניגוד למשל לרגרסיה, שחריג מעוות את כולה.)\n\nהשגויות:\nטענה 1 - K גדול יותר אינו תמיד טוב יותר (ראו שאלת K = גודל ה-train).\nטענה 2 - ההפך: ל-scaling יש השפעה ישירה וקריטית על הדיוק - KNN מבוסס מרחקים, ומשתנה בסקאלה גדולה משתלט על המרחק.\nטענה 5 - עם 5 מחלקות K אי-זוגי לא מונע תיקו! (למשל K=5 עם הצבעה 2-2-1). הטריק של K אי-זוגי עובד רק בסיווג בינארי."
  },
  {
    "id": 92,
    "topic": "classification",
    "subtopic": "KNN על תרשים פיזור",
    "source": "מבחן 2024 סמסטר ב' מועד א' + תרגול 6",
    "question": "נתון פיזור של תצפיות משתי מחלקות בדו-מימד. הצורות המלאות מייצגות train set והריקות מייצגות test set:",
    "dataTable": {
      "headers": [
        "נקודה",
        "X1",
        "X2",
        "מחלקה",
        "תפקיד"
      ],
      "rows": [
        [
          "1",
          "1",
          "5",
          "אדום",
          "train"
        ],
        [
          "2",
          "2",
          "6",
          "אדום",
          "train"
        ],
        [
          "3",
          "2",
          "4",
          "אדום",
          "train"
        ],
        [
          "4",
          "5",
          "2",
          "כחול",
          "train"
        ],
        [
          "5",
          "6",
          "3",
          "כחול",
          "train"
        ],
        [
          "6",
          "6",
          "1",
          "כחול",
          "train"
        ],
        [
          "7",
          "5",
          "3",
          "אדום",
          "test"
        ],
        [
          "8",
          "6",
          "2",
          "כחול",
          "test"
        ]
      ]
    },
    "questionEnd": "(א) עבור KNN עם K=3 (מרחק אוקלידי), מה יהיה ה-accuracy על ה-test set?\n(ב) האם בעיית הסיווג מתאימה למידול על ידי multi-layer perceptron? ועל ידי K-Means?",
    "options": [
      "(א) 0\n(ב) מתאימה רק לרגרסיה לינארית",
      "(א) 1.0\n(ב) מתאימה גם ל-MLP וגם ל-K-Means",
      "(א) 0.5\n(ב) מתאימה ל-MLP, לא מתאימה ל-K-Means (שאינו מסווג מונחה)",
      "(א) 0.5\n(ב) לא מתאימה ל-MLP, מתאימה ל-K-Means",
      "(א) 1.0\n(ב) לא מתאימה לאף מודל"
    ],
    "correctIndex": 2,
    "explanation": "(א) נקודת test 7 היא אדומה ב-(5,3) - אבל היא יושבת עמוק בשטח הכחולים: שלושת שכנותיה הקרובות הן (5,2), (6,3), (6,2 לא באימון) - בפועל (5,2), (6,3), (6,1) - כולן כחולות. תסווג כחול - טעות.\nנקודת test 8 כחולה ב-(6,2) - שכנותיה (5,2), (6,3), (6,1) כחולות - תסווג נכון.\n\naccuracy = 1 מתוך 2 = 0.5 (וגם עבור K=5 מתקבל 0.5 - כפי שנשאל במבחן).\n\n(ב) MLP - כן: זהו מסווג מונחה גמיש שמתאים לבעיה. K-Means - לא: זהו אלגוריתם אשכולות לא מונחה - הוא לא לומד ממחלקות ולא מנבא תוויות. גם רגרסיה לינארית נפסלה במבחן - היא מנבאת ערך רציף, לא מחלקה."
  },
  {
    "id": 93,
    "topic": "classification",
    "subtopic": "KNN על תרשים פיזור",
    "source": "מבחן 2024 סמסטר א' מועד ב' + מבחן 2025 סמסטר ב' מועד א'",
    "question": "נתון פיזור של תצפיות משתי מחלקות בדו-מימד (מלאות = train, ריקות = test):",
    "dataTable": {
      "headers": [
        "נקודה",
        "X1",
        "X2",
        "מחלקה",
        "תפקיד"
      ],
      "rows": [
        [
          "1",
          "2",
          "2",
          "אדום",
          "train"
        ],
        [
          "2",
          "4",
          "1",
          "אדום",
          "train"
        ],
        [
          "3",
          "3",
          "3",
          "אדום",
          "train"
        ],
        [
          "4",
          "1",
          "4",
          "כחול",
          "train"
        ],
        [
          "5",
          "1.2",
          "3.4",
          "אדום",
          "test"
        ],
        [
          "6",
          "3",
          "2",
          "אדום",
          "test"
        ]
      ]
    },
    "questionEnd": "(א) מה יהיה ה-accuracy על ה-test עבור K=1 ועבור K=3 (מרחק אוקלידי)?\n(ב) נכון או לא נכון: ניתן למצוא רדיוס R כך שבמסווג NNR ה-accuracy על ה-test יהיה 1?",
    "options": [
      "(א) K=1: דיוק 1.0, K=3: דיוק 1.0\n(ב) נכון",
      "(א) K=1: דיוק 0.5, K=3: דיוק 1.0\n(ב) נכון",
      "(א) K=1: דיוק 1.0, K=3: דיוק 0.5\n(ב) לא נכון",
      "(א) K=1: דיוק 0, K=3: דיוק 1.0\n(ב) לא נכון",
      "(א) K=1: דיוק 0.5, K=3: דיוק 0.5\n(ב) נכון"
    ],
    "correctIndex": 1,
    "explanation": "(א) K=1:\nנקודה 5 (אדומה, ב-1.2,3.4): השכנה הקרובה ביותר היא הכחולה (1,4) במרחק 0.63 - תסווג כחול, טעות.\nנקודה 6 (אדומה, ב-3,2): הקרובות הן אדומות - נכון.\naccuracy = 0.5\n\nK=3:\nנקודה 5: שלוש הקרובות - כחולה (1,4) ושתי אדומות (2,2), (3,3) - רוב אדום, נכון!\nנקודה 6: רוב אדום - נכון.\naccuracy = 1.0\n\nהלקח: K=3 'מיישר' טעות מקומית של שכן בודד.\n\n(ב) נכון: למשל R=2 - עבור נקודה 5 נכנסות להצבעה הכחולה ושתי אדומות (רוב אדום), ועבור נקודה 6 רק אדומות. שתיהן מסווגות נכון - accuracy = 1.\n\n(במבחן 2025ב מועד א' הופיעה גרסה עם פריסה שבה K=1 נתן 0 ו-K=3 נתן 0.5 - אותם עקרונות בדיוק.)"
  },
  {
    "id": 94,
    "topic": "classification",
    "subtopic": "השוואת מסווגים",
    "source": "מבחן 2024 סמסטר א' מועד ב'",
    "question": "נתון validation set קטן אשר סווג על ידי שני מסווגים שונים. כל תצפית שייכת לאחת משלוש מחלקות: A, B או C.",
    "dataTable": {
      "headers": [
        "תצפית",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
      ],
      "rows": [
        [
          "מחלקה אמיתית",
          "A",
          "A",
          "A",
          "A",
          "B",
          "B",
          "B",
          "B",
          "C",
          "C"
        ],
        [
          "מסווג 1",
          "A",
          "A",
          "A",
          "A",
          "A",
          "A",
          "A",
          "B",
          "A",
          "B"
        ],
        [
          "מסווג 2",
          "A",
          "B",
          "A",
          "A",
          "C",
          "A",
          "A",
          "B",
          "C",
          "B"
        ]
      ]
    },
    "questionEnd": "איזה מסווג מבין השניים נעדיף, ומדוע?",
    "options": [
      "שני המסווגים שקולים לחלוטין מכל בחינה",
      "שני המסווגים עם accuracy זהה (5/10), אך נעדיף את מסווג 2 - הוא היחיד שמזהה את כל שלוש המחלקות (מסווג 1 לא חוזה C אף פעם)",
      "נעדיף את מסווג 1 - הוא עקבי יותר בתחזיותיו",
      "נעדיף את מסווג 2 - ה-accuracy שלו 8/10 לעומת 5/10",
      "נעדיף את מסווג 1 - ה-accuracy שלו גבוה יותר"
    ],
    "correctIndex": 1,
    "explanation": "חישוב accuracy:\nמסווג 1: תצפיות 1,2,3,4 נכונות (A), תצפית 8 נכונה (B), תצפית 10 שגויה (חזה B במקום C) - רגע, תצפית 10 אמיתית C וחזה B - שגוי. סה\"כ נכונות: 1,2,3,4,8 = 5/10.\nמסווג 2: נכונות 1,3,4 (A), 8 (B), 9 (C) = 5/10.\n\nה-accuracy זהה - אבל התמונה הפנימית שונה:\nמסווג 1 לא חזה C אף פעם - recall(C) = 0. הוא 'עיוור' למחלקה שלמה.\nמסווג 2 מכסה את כל שלוש המחלקות (זיהה נכון גם C).\n\nכשה-accuracy שווה, מדדי precision/recall פר-מחלקה מכריעים - נעדיף את מסווג 2. זה בדיוק המסר של 'accuracy לבדו אינו מספיק'."
  },
  {
    "id": 95,
    "topic": "classification",
    "subtopic": "train/validation/test",
    "source": "מבחן 2024 סמסטר א' מועד א'",
    "question": "בבעיות סיווג נחלק לעיתים את ה-dataset המתויג לשלושה חלקים: train, validation, test. מהי מטרת כל אחד מהחלקים?",
    "options": [
      "train לאימון; validation לניקוי הנתונים; test לגיבוי",
      "train להערכה; validation לאימון; test לכיוונון פרמטרים",
      "train לאימון המודל; validation לכיוונון היפר-פרמטרים (כמו K ב-KNN); test להערכה סופית של ביצועים על נתונים שלא נראו כלל",
      "train לאימון; validation ו-test זהים בתפקידם - שניהם להערכה סופית",
      "שלושת החלקים משמשים לאימון - החלוקה נועדה רק להאיץ חישובים"
    ],
    "correctIndex": 2,
    "explanation": "train - הנתונים שמהם המודל לומד (למשל: הנקודות המאוחסנות ב-KNN, המקדמים ברגרסיה).\n\nvalidation - לבחירת היפר-פרמטרים: מאמנים עם ערכים שונים (K=1,3,5... או רדיוסים שונים ב-NNR) ובוחרים את הערך שנותן את הביצועים הטובים ביותר על ה-validation. המודל לא התאמן על נתונים אלה, אבל הם 'השתתפו' בבחירת התצורה.\n\ntest - הערכה סופית והוגנת: נתונים שלא השפיעו על שום החלטה. רק הם מעידים על ביצועי המודל בעולם האמיתי.\n\nדוגמה מהקורס (KNN): מאמנים על train, בוחרים K לפי validation, מדווחים דיוק על test."
  },
  {
    "id": 96,
    "topic": "classification",
    "subtopic": "precision ו-recall - תכונות",
    "source": "מבחן 2025 סמסטר ב' מועד ב'",
    "question": "במשימת סיווג לשלוש מחלקות חושבו precision (P) ו-recall (R) לכל מחלקה: P1, P2, P3 ו-R1, R2, R3. אילו מהטענות נכונות?\n\n1. בהכרח מתקיים P1 + P2 + P3 = 1\n2. ייתכן כי R1 + R2 + R3 = 3\n3. בהכרח מתקיים Pi + Ri <= 2 לכל i\n4. אם Pi = 1 אזי בהכרח גם Ri = 1",
    "options": [
      "טענות 1 ו-3 נכונות; טענות 2 ו-4 לא נכונות",
      "טענות 2 ו-3 נכונות; טענות 1 ו-4 לא נכונות",
      "טענות 2 ו-4 נכונות; טענות 1 ו-3 לא נכונות",
      "כל הטענות נכונות",
      "רק טענה 3 נכונה"
    ],
    "correctIndex": 1,
    "explanation": "טענה 1 לא נכונה: precision של כל מחלקה הוא ערך עצמאי בין 0 ל-1 - אין שום אילוץ שסכומם יהיה 1. במסווג מושלם כולם 1 והסכום 3.\n\nטענה 2 נכונה: אם המסווג מושלם, ה-recall של כל מחלקה הוא 1 והסכום בדיוק 3 - 'ייתכן'.\n\nטענה 3 נכונה: כל מדד חסום על ידי 1, ולכן הסכום של שניהם חסום על ידי 2. תמיד.\n\nטענה 4 לא נכונה: precision מושלם אומר שכל חיזוי ל-i היה נכון - אבל ייתכן שהמסווג 'שמרן' וזיהה רק חלק קטן מדוגמאות i האמיתיות (recall נמוך). ראו את דוגמת המטריצה הבינארית: precision(B) = 1 בזמן ש-recall(B) = 40/65."
  },
  {
    "id": 97,
    "topic": "classification",
    "subtopic": "מגבלות accuracy",
    "source": "מבחן 2025 סמסטר ב' מועד ב'",
    "question": "דיווח מדד ה-accuracy בלבד לבדיקת איכות של מסווג נחשב לא מספיק. מדוע?",
    "options": [
      "accuracy רלוונטי רק לבעיות רגרסיה ולא לסיווג",
      "accuracy קשה מדי לחישוב במערכות גדולות",
      "כשהמחלקות לא מאוזנות, מסווג שתמיד חוזה את מחלקת הרוב מקבל accuracy גבוה מבלי לזהות אף דוגמה מהמחלקות הקטנות - נדרשים precision ו-recall פר-מחלקה",
      "accuracy תמיד שווה ל-precision ולכן מיותר לדווח את שניהם",
      "accuracy מודד רק את מהירות המסווג ולא את דיוקו"
    ],
    "correctIndex": 2,
    "explanation": "הדוגמה הקלאסית: זיהוי מחלה נדירה שפוגעת ב-1% מהאוכלוסייה. מסווג ש'חוזה' תמיד 'בריא' משיג accuracy של 99% - ומחמיץ את כל החולים (recall של מחלקת החולים = 0).\n\nה-accuracy הכללי מסתיר את ההתנהגות פר-מחלקה. לכן מדווחים גם:\nprecision לכל מחלקה - כמה מהחיזויים לאותה מחלקה נכונים.\nrecall לכל מחלקה - כמה מהדוגמאות האמיתיות זוהו.\n\nראו גם את שאלת שני המסווגים: accuracy זהה (5/10) אבל אחד מהם עיוור לגמרי למחלקה C - רק המדדים הפר-מחלקתיים חשפו זאת."
  },
  {
    "id": 98,
    "topic": "classification",
    "subtopic": "בחירת מודל לפי פיזור",
    "source": "מבחן 2023 סמסטר א' מועד ב' + מבחן 2023 סמסטר ב' מועד א'",
    "question": "בהינתן אוסף דוגמאות המתויגות לשתי מחלקות (עיגולים וריבועים), התקבל פיזור שבו העיגולים מרוכזים באזור פנימי והריבועים מקיפים אותם מכל הצדדים (טבעת) - הפרדה לא לינארית מובהקת.\n\nאיזה מודל יכול להיות בחירה טובה למשימת הסיווג הבינארית?",
    "options": [
      "אף מודל - הדוגמאות אינן ניתנות להפרדה על ידי מסווג",
      "רגרסיה לוגיסטית בלבד - היא מיועדת בדיוק לסיווג בינארי",
      "רק רשת נוירונים - מסווגי שכנים לא עובדים בדו-מימד",
      "רגרסיה לינארית בלבד",
      "KNN, NNR ורשת נוירונים (feed forward) - כולם מתמודדים עם גבולות לא לינאריים"
    ],
    "correctIndex": 4,
    "explanation": "המבנה 'עיגולים בתוך טבעת ריבועים' אינו ניתן להפרדה על ידי קו ישר - שום קו לא יפריד בין פנים הטבעת לחוץ.\n\nמי נופל? רגרסיה לוגיסטית - הגבול שלה לינארי (קו ישר בדו-מימד). רגרסיה לינארית - בכלל לא מסווג (ערך רציף).\n\nמי מצליח?\nKNN ו-NNR - החלטה לפי שכנות מקומית: עיגול נבדק מוקף עיגולים - יסווג נכון, בלי שום הנחת צורה.\nרשת נוירונים - שכבות חבויות עם אקטיבציה לא-לינארית לומדות גבולות מעוגלים ומורכבים.\n\nוכמובן שהבעיה כן פתירה - 'לא ניתן להפרדה לינארית' אינו 'לא ניתן להפרדה'."
  },
  {
    "id": 99,
    "topic": "classification",
    "subtopic": "cross entropy loss",
    "source": "מבחן 2024 סמסטר א' מועד א' + מבחן 2023 סמסטר ב' מועד א'",
    "question": "נתונה הגדרת המדד cross entropy loss (מבוסס על מינוס log של ההסתברות שהמודל נתן למחלקה האמיתית). לאילו מודלים המדד מתאים כפונקציית אימון?\n\n1. רגרסיה לינארית\n2. רגרסיה לוגיסטית\n3. רשת נוירונים (feed forward) לסיווג\n4. KNN",
    "options": [
      "מתאים ל-3 בלבד",
      "מתאים ל-1 ו-2 בלבד",
      "מתאים ל-2 ו-3 בלבד",
      "מתאים ל-2, 3 ו-4",
      "מתאים לכל הארבעה"
    ],
    "correctIndex": 2,
    "explanation": "cross entropy דורש שהמודל יפיק הסתברות השתייכות למחלקה:\n\nרגרסיה לוגיסטית - כן: הפלט הוא הסתברות, וה-CE (במקרה הבינארי) הוא בדיוק ה-log loss שלה.\n\nרשת נוירונים לסיווג - כן: שכבת softmax בפלט מפיקה התפלגות הסתברויות, וה-CE הוא פונקציית האימון הסטנדרטית.\n\nרגרסיה לינארית - לא: היא מנבאת ערך רציף, לא הסתברות. המדד חסר משמעות שם (פונקציית האימון שלה היא MSE).\n\nKNN - לא, מסיבה עמוקה יותר: ל-KNN אין שלב אימון בכלל! בהינתן K, ה'אימון' הוא רק אחסון הנקודות - אין פרמטרים למזער עליהם loss. (בחירת K היא כיוונון היפר-פרמטר עם validation - לא אימון.)"
  },
  {
    "id": 100,
    "topic": "classification",
    "subtopic": "cross entropy loss",
    "source": "מבחן 2024 סמסטר א' מועד ב' + תרגול 7",
    "question": "משתמשים ב-cross entropy loss לאימון רשת נוירונים לסיווג לשלוש מחלקות: A, B, C. בקורס החישוב נעשה עם לוגריתם בבסיס 10.\n\nתנו דוגמה לפלט שכבת softmax (עבור דוגמת סיווג בודדת) אשר ה-CE loss שלה גדול מ-1:",
    "options": [
      "פלט [0.33, 0.33, 0.34] כאשר המחלקה האמיתית היא C: העונש הוא מינוס log(0.34) = 0.47",
      "פלט [0.90, 0.05, 0.05] כאשר המחלקה האמיתית היא A: העונש הוא מינוס log(0.90) = 0.05",
      "פלט [0.05, 0.90, 0.05] כאשר המחלקה האמיתית היא A: העונש הוא מינוס log(0.05) = 1.30",
      "פלט [0.5, 0.4, 0.1] כאשר המחלקה האמיתית היא A: העונש הוא מינוס log(0.5) = 0.30",
      "לא קיים פלט עם CE גדול מ-1 - המדד חסום על ידי 1"
    ],
    "correctIndex": 2,
    "explanation": "ה-CE של דוגמה בודדת: מינוס log של ההסתברות שהמודל נתן למחלקה האמיתית.\n\nכדי לקבל CE גדול מ-1 (בבסיס 10) צריך שההסתברות למחלקה הנכונה תהיה נמוכה מ-0.1:\nמינוס log10 של 0.1 = 1 בדיוק, וכל הסתברות נמוכה יותר חוצה את הסף.\n\nבדוגמה: האמת היא A אבל המודל נתן ל-A רק 0.05 (והיה בטוח בטעות ש-B):\nCE = מינוס log10(0.05) = 1.30 - גדול מ-1.\n\nזה מדגים את היופי של CE: הוא אינו חסום מלמעלה - ככל שהמודל בטוח יותר בטעות, העונש מזנק. שאר האפשרויות מתארות תחזיות סבירות עם עונש קטן מ-1."
  },
  {
    "id": 101,
    "topic": "classification",
    "subtopic": "jaccard score על קבוצות",
    "source": "מבחן 2023 סמסטר ב' מועד א' + תרגול 8",
    "question": "מדד ה-jaccard score בין שתי קבוצות A ו-B מוגדר: גודל החיתוך חלקי גודל האיחוד.\n\nמה יודפס כתוצאה מהרצת הקוד?\n```A = set((1, 3, 4, 5, 5, 2, 1, 1))\nB = set((1, 4, 5, 6, 7, 8, 2, 4))\nprint(len(A.intersection(B)) / len(A.union(B)))\n\nC = set((1, 3, 4, 5, 5, 2, 1, 1))\nD = set((1, 4, 5, 3, 1, 4, 4, 2))\nprint(len(C.intersection(D)) / len(C.union(D)))```",
    "options": [
      "0.5\n1.0",
      "0.5\n0.625",
      "1.0\n0.5",
      "0.4\n1.0",
      "0.625\n1.0"
    ],
    "correctIndex": 0,
    "explanation": "צעד ראשון - המרת ה-tuples ל-sets מסירה כפילויות:\nA = {1, 2, 3, 4, 5} (5 איברים)\nB = {1, 2, 4, 5, 6, 7, 8} (7 איברים)\n\nחיתוך: {1, 2, 4, 5} - גודל 4\nאיחוד: {1,...,8} - גודל 8\njaccard = 4/8 = 0.5\n\nC = {1, 2, 3, 4, 5}, D = {1, 2, 3, 4, 5} - זהות לחלוטין אחרי הסרת כפילויות!\nחיתוך = איחוד - jaccard = 1.0\n\nתחום הערכים של המדד: 0 (קבוצות זרות) עד 1 (קבוצות זהות). משמעותו: מידת הדמיון בין שתי קבוצות - גודל החיתוך ביחס לאיחוד.",
    "variants": [
      {
        "question": "מדד ה-jaccard score בין שתי קבוצות: גודל החיתוך חלקי גודל האיחוד.\n\nמה יודפס?\n```A = set((2, 2, 4, 6, 8, 8))\nB = set((1, 3, 5, 7))\nprint(len(A.intersection(B)) / len(A.union(B)))\n\nC = set((10, 20, 30, 10))\nD = set((20, 30, 40))\nprint(len(C.intersection(D)) / len(C.union(D)))```",
        "options": [
          "0.0\n0.5",
          "0.0\n0.67",
          "0.5\n0.5",
          "1.0\n0.5",
          "0.25\n0.75"
        ],
        "correctIndex": 0,
        "explanation": "A = {2, 4, 6, 8} (זוגיים), B = {1, 3, 5, 7} (אי-זוגיים):\nחיתוך ריק - jaccard = 0/8 = 0.0\n\nC = {10, 20, 30}, D = {20, 30, 40}:\nחיתוך {20, 30} גודל 2; איחוד {10, 20, 30, 40} גודל 4\njaccard = 2/4 = 0.5"
      }
    ]
  },
  {
    "id": 102,
    "topic": "classification",
    "subtopic": "hamming distance",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "לפי התיעוד הרשמי, scipy.spatial.distance.hamming מחזירה את שיעור (proportion) הרכיבים השונים בין שני וקטורים.\nדוגמה: hamming([1,0,0], [0,1,0]) מחזירה 0.667.\n\nמה יודפס לאחר ביצוע הקוד?\n```from scipy.spatial import distance\nprint(distance.hamming([1, 0, 0], [1, 1, 0]))\nprint(distance.hamming([1, 0, 0, 0], [1, 1, 0, 0]))\nprint(distance.hamming([1, 2, 3], [3, 1, 2]))```",
    "options": [
      "0.33\n0.5\n0.67",
      "0.33\n0.25\n1.0",
      "1\n1\n3",
      "0.33\n0.25\n0.0",
      "0.67\n0.75\n1.0"
    ],
    "correctIndex": 1,
    "explanation": "hamming = מספר המקומות השונים חלקי אורך הווקטור:\n\nשורה 1: [1,0,0] מול [1,1,0] - שוני רק במקום השני: 1/3 = 0.33\n\nשורה 2: [1,0,0,0] מול [1,1,0,0] - שוני במקום השני, אבל האורך 4: 1/4 = 0.25\nהשוני זהה לשורה 1, אך הפרופורציה שונה!\n\nשורה 3: [1,2,3] מול [3,1,2] - כל שלושת המקומות שונים (1 מול 3, 2 מול 1, 3 מול 2): 3/3 = 1.0\nהערכים זהים אבל בסדר שונה - hamming משווה מקום-מול-מקום ואינו מזהה תמורות.",
    "variants": [
      {
        "question": "scipy.spatial.distance.hamming מחזירה את שיעור הרכיבים השונים בין שני וקטורים.\n\nמה יודפס?\n```from scipy.spatial import distance\nprint(distance.hamming([1, 1, 0, 0], [1, 0, 0, 0]))\nprint(distance.hamming([1, 0, 1, 0, 1], [1, 1, 1, 0, 0]))\nprint(distance.hamming([2, 4, 6], [6, 2, 4]))```",
        "options": [
          "0.75\n0.6\n1.0",
          "1\n2\n3",
          "0.25\n0.4\n0.0",
          "0.25\n0.4\n1.0",
          "0.5\n0.4\n0.67"
        ],
        "correctIndex": 3,
        "explanation": "שורה 1: שוני במקום אחד מתוך 4: 1/4 = 0.25\nשורה 2: שוני במקומות 2 ו-5 מתוך 5: 2/5 = 0.4\nשורה 3: כל שלושת המקומות שונים (סדר מוחלף): 3/3 = 1.0"
      }
    ]
  },
  {
    "id": 103,
    "topic": "classification",
    "subtopic": "jaccard distance (scipy)",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "לפי התיעוד, scipy.spatial.distance.jaccard מחשבת את מדד אי-הדמיון (dissimilarity) של jaccard בין וקטורים בוליאניים: שיעור המקומות השונים מתוך המקומות שבהם לפחות אחד מהווקטורים אינו אפס.\nדוגמה: jaccard([1,0,0], [0,1,0]) מחזירה 1.0.\n\nמה יודפס?\n```from scipy.spatial import distance\nprint(distance.jaccard([1, 0, 0, 0], [1, 1, 1, 0]))\nprint(distance.jaccard([1, 0, 0, 0, 1], [1, 1, 1, 0, 1]))\nprint(distance.jaccard([1, 0, 0], [1, 0, 0]))```",
    "options": [
      "בקירוב 0.67\n0.5\n0.0",
      "בקירוב 0.33\n0.5\n1.0",
      "בקירוב 0.67\n0.4\n0.0",
      "בקירוב 0.5\n0.5\n0.0",
      "בקירוב 0.75\n0.6\n0.0"
    ],
    "correctIndex": 0,
    "explanation": "מסתכלים רק על מקומות שבהם לפחות וקטור אחד שונה מאפס, וסופרים כמה מהם 'לא מסכימים':\n\nשורה 1: [1,0,0,0] מול [1,1,1,0]\nמקומות רלוונטיים: 1 (שניהם 1 - הסכמה), 2 ו-3 (0 מול 1 - אי הסכמה). מקום 4 (0,0) לא נספר.\nאי הסכמה: 2 מתוך 3 = 0.67\n\nשורה 2: [1,0,0,0,1] מול [1,1,1,0,1]\nרלוונטיים: 1 (הסכמה), 2, 3 (אי הסכמה), 5 (הסכמה).\n2 מתוך 4 = 0.5\n\nשורה 3: וקטורים זהים - אפס אי-הסכמות: 0.0\n\nשימו לב: זהו מדד מרחק (dissimilarity) - 0 פירושו זהים, בניגוד ל-jaccard score על קבוצות שבו 1 פירושו זהים.",
    "variants": [
      {
        "question": "scipy.spatial.distance.jaccard מחשבת אי-דמיון: שיעור המקומות השונים מתוך המקומות שבהם לפחות אחד מהווקטורים אינו אפס.\n\nמה יודפס?\n```from scipy.spatial import distance\nprint(distance.jaccard([1, 1, 0, 0], [1, 0, 1, 0]))\nprint(distance.jaccard([1, 0, 0, 1, 1], [1, 0, 1, 1, 1]))```",
        "options": [
          "בקירוב 0.33\n0.25",
          "בקירוב 0.67\n0.5",
          "בקירוב 0.5\n0.4",
          "בקירוב 0.5\n0.2",
          "בקירוב 0.67\n0.25"
        ],
        "correctIndex": 4,
        "explanation": "שורה 1: [1,1,0,0] מול [1,0,1,0]\nרלוונטיים: מקום 1 (הסכמה), מקומות 2 ו-3 (אי הסכמה). מקום 4 לא נספר.\n2 מתוך 3 = 0.67\n\nשורה 2: [1,0,0,1,1] מול [1,0,1,1,1]\nרלוונטיים: 1, 3, 4, 5. אי הסכמה רק במקום 3.\n1 מתוך 4 = 0.25"
      }
    ]
  },
  {
    "id": 104,
    "topic": "classification",
    "subtopic": "ROC ו-AUC",
    "source": "תרגול 8",
    "question": "מודל סיווג בינארי נועד לחזות האם לקוח יעזוב חברה (attrition = 1). עבור המודל חושבו ROC curve וערך AUC. איזו מהטענות נכונה?",
    "options": [
      "מדד AUC קרוב ל-1 מעיד שבדרך כלל המודל מדרג דוגמאות חיוביות עם הסתברות גבוהה יותר מדוגמאות שליליות",
      "ה-ROC curve מציג את מדד ה-precision כפונקציה של recall עבור ספים שונים",
      "AUC נמדד באחוזים בין 0 ל-100 בלבד",
      "אם מדד ה-AUC שווה 0.5, המשמעות היא שהמודל תמיד טועה בסיווג",
      "שינוי סף ההחלטה הבינארית (threshold) משנה את ערך ה-AUC של אותו המודל"
    ],
    "correctIndex": 0,
    "explanation": "AUC (השטח מתחת לעקומת ה-ROC) שקול להסתברות שדוגמה חיובית אקראית תקבל ציון (הסתברות) גבוה יותר מדוגמה שלילית אקראית. AUC קרוב ל-1 = דירוג כמעט מושלם.\n\nמדוע השאר שגויות?\nה-ROC מציג TPR (recall) כפונקציה של FPR - לא precision מול recall (זו עקומת PR, מדד אחר).\nה-AUC מסכם את הביצועים על פני כל הספים - ולכן בחירת סף ספציפי אינה משנה אותו כלל.\nAUC של 0.5 = ביצועי ניחוש אקראי, לא 'תמיד טועה'. מודל שתמיד טועה בדירוג היה מקבל AUC קרוב ל-0 (ואפשר פשוט להפוך אותו...)."
  },
  {
    "id": 105,
    "topic": "classification",
    "subtopic": "מרחקים לאחר scaling",
    "source": "מבחן 2023 סמסטר ב' מועד א'",
    "question": "נתון אוסף גדול של feature vectors עם מספרים ממשיים, כל אחד באורך N. מפעילים על הווקטורים feature scaling עם StandardScaler. בוחרים שני וקטורים a ו-b באקראי ומחשבים את המרחק האוקלידי ביניהם.\n\nמה נכון לגבי תחום הערכים של המרחק?",
    "options": [
      "המרחק חסום על ידי 0 מלמטה ועל ידי שורש N מלמעלה",
      "המרחק תמיד חיובי ממש (גדול מאפס)",
      "המרחק אינו חסום כלל - לא מלמטה ולא מלמעלה",
      "המרחק חסום על ידי 0 כחסם תחתון, אבל יכול לקבל ערכים גבוהים משורש N",
      "המרחק יכול לקבל ערכים בין 0 ל-1 בלבד"
    ],
    "correctIndex": 3,
    "explanation": "חסם תחתון: מרחק אוקלידי הוא שורש של סכום ריבועים - תמיד אי-שלילי. 0 מתקבל עבור וקטורים זהים (ולכן 'חיובי ממש' שגוי).\n\nחסם עליון: StandardScaler מנרמל כל feature לממוצע 0 וסטיית תקן 1 - אבל לא חוסם את הערכים! ערכים חריגים יכולים להיות 5, 10 או יותר סטיות תקן מהממוצע.\n\nלכן ההפרש בכל קואורדינטה אינו חסום, והמרחק הכולל יכול לעלות על שורש N (שורש N היה מתקבל למשל אם כל הפרש קואורדינטה היה בדיוק 1 - אבל הפרשים גדולים בהחלט אפשריים).\n\nלהשוואה: אחרי MinMaxScaler (שכן חוסם ל-[0,1]) המרחק היה חסום על ידי שורש N."
  },
  {
    "id": 106,
    "topic": "classification",
    "subtopic": "השפעת scaling אחיד",
    "source": "מבחן 2024 סמסטר ב' מועד ב'",
    "question": "במסווג KNN עם מרחק אוקלידי על נתונים דו-ממדיים (X1, X2):\n\nנכון או לא נכון - אם נכפיל את כל ערכי X1 ו-X2 ב-dataset ב-0.5, תוצאות הסיווג עשויות להשתנות?",
    "options": [
      "לא נכון - אבל רק אם K אי-זוגי",
      "נכון - הכפלה ב-0.5 מוחקת חצי מהמידע בנתונים",
      "נכון - כל שינוי בערכים משנה את המרחקים ולכן את התוצאות",
      "נכון - התוצאה תשתנה עבור מרחק אוקלידי אך לא עבור מנהטן",
      "לא נכון - הכפלת כל הצירים באותו קבוע מכווצת את כל המרחקים באותו יחס, סדר השכנים נשמר והסיווג זהה"
    ],
    "correctIndex": 4,
    "explanation": "כשמכפילים את כל הקואורדינטות באותו קבוע c, כל מרחק אוקלידי מוכפל בדיוק ב-c:\ndist חדש = c כפול dist ישן\n\nהמרחקים הצטמצמו - אבל היחסים ביניהם נשמרו במדויק: אם נקודה A הייתה קרובה יותר מנקודה B, היא נשארת קרובה יותר. סדר השכנים לא משתנה - וזה כל מה ש-KNN רואה. הסיווג זהה לחלוטין (וזה נכון גם למנהטן).\n\nההנגדה החשובה: scaling שונה לכל feature (כמו StandardScaler על features בסקאלות שונות) כן משנה את יחסי המרחקים ואת התוצאות - כי הוא מכווץ כל ציר בגורם אחר. הכפלה אחידה = שינוי יחידות מידה בלבד."
  },
  {
    "id": 107,
    "topic": "classification",
    "subtopic": "מסווג ליניארי מול לא-ליניארי",
    "source": "מבחן 2023 סמסטר ב' מועד א'",
    "question": "נתון פיזור תצפיות משתי מחלקות בדו-מימד, כאשר המחלקות אינן ניתנות להפרדה לינארית (למשל שתי קבוצות שזורות זו בזו).\n\nנכון או לא נכון עבור כל מודל - האם בעיית הסיווג מתאימה למידול על ידו?\n\n1. רגרסיה לינארית\n2. multi-layer perceptron\n```3. NNR (nearest neighbors in radius)```\n4. KNN",
    "options": [
      "1 לא נכון; 2 לא נכון; 3 נכון; 4 נכון",
      "1 נכון; 2 נכון; 3 נכון; 4 נכון",
      "כל המודלים מתאימים",
      "1 לא נכון; 2 נכון; 3 לא נכון; 4 לא נכון",
      "1 לא נכון; 2 נכון; 3 נכון; 4 נכון"
    ],
    "correctIndex": 4,
    "explanation": "רגרסיה לינארית - לא: ראשית היא בכלל מודל לניבוי ערכים רציפים ולא מסווג; ושנית, גם כמפריד היא לינארית - לא מתאימה לנתונים שזורים.\n\nmulti-layer perceptron - כן: השכבות החבויות והאקטיבציות הלא-לינאריות מאפשרות ללמוד גבולות מורכבים ככל שנדרש. (לעומת perceptron בודד - שהוא כן לינארי!)\n\nNNR ו-KNN - כן: שניהם מחליטים לפי שכנות מקומית ואינם מניחים שום צורת גבול - עובדים מצוין על נתונים לא-לינאריים."
  },
  {
    "id": 146,
    "topic": "classification",
    "subtopic": "NNR - רדיוס אופטימלי ו-scaling",
    "source": "בהשראת מבחן 2025 סמסטר א' מועד ב' (שאלה 12) - גרסה עם נתונים מוגדרים",
    "question": "בתרגיל בית מימשתם מסווג NNR (nearest neighbors in radius) עם מרחק אוקלידי, ומצאתם רדיוס אופטימלי באמצעות validation set.\n\nנתונים שלושה datasets לסיווג. בשלושתם אותם שני features בדיוק: feature1 בתחום 0 עד 1, ו-feature2 בתחום 0 עד 1000. ה-datasets נבדלים זה מזה רק בפריסת התצפיות ובתיוגי המחלקות. לא בוצע feature scaling.\n\nנסמן את הרדיוס האופטימלי של כל dataset ב-R1, R2, R3 בהתאמה. סמנו נכון או לא נכון:\n\n1. ייתכן שנמצא כי R1 שווה ל-R2\n2. בוודאות נמצא כי R1 שווה ל-R2 שווה ל-R3 (שכן ה-features זהים)\n3. ללא scaling, המרחק האוקלידי בין תצפיות נשלט כמעט לחלוטין על ידי feature2\n4. לאחר StandardScaler על כל dataset, הרדיוסים האופטימליים צפויים להשתנות ביחס לאלה שנמצאו ללא scaling",
    "options": [
      "1 נכון; 2 נכון; 3 לא נכון; 4 נכון",
      "כל הטענות נכונות",
      "1 לא נכון; 2 לא נכון; 3 נכון; 4 נכון",
      "1 נכון; 2 לא נכון; 3 נכון; 4 נכון",
      "1 לא נכון; 2 נכון; 3 נכון; 4 לא נכון"
    ],
    "correctIndex": 3,
    "explanation": "טענה 1 נכונה: הרדיוס האופטימלי תלוי בפריסת התצפיות ובמבנה המחלקות - אבל שני datasets שחולקים את אותו מרחב features בהחלט יכולים במקרה להגיע לאותו רדיוס אופטימלי. 'ייתכן' - כן.\n\nטענה 2 לא נכונה: זהות ה-features לא גוררת זהות רדיוסים! הרדיוס האופטימלי נקבע לפי צפיפות התצפיות והפרדת המחלקות - שנבדלות בין ה-datasets. שוויון משולש הוא אפשרי אך בשום אופן לא ודאי.\n\nטענה 3 נכונה: feature2 חי בסקאלה גדולה פי 1000. במרחק אוקלידי, הפרש טיפוסי ב-feature2 (מאות) מגמד לחלוטין הפרש ב-feature1 (שברי יחידה) - feature1 כמעט 'שקוף' לחישוב.\n\nטענה 4 נכונה: StandardScaler מכווץ כל feature בגורם שונה (לפי סטיית התקן שלו) - יחסי המרחקים משתנים באופן לא אחיד, feature1 'מקבל קול', והרדיוס האופטימלי החדש ייתן תוצאות שונות. זה בדיוק ההבדל מהכפלה אחידה של כל הצירים (שמשמרת הכל).\n\nהערה: במבחן המקורי (2025א מועד ב') השאלה נשענה על טבלאות נתונים חלקיות; כאן הסקאלות הוגדרו במפורש כדי שהתשובות ייגזרו מהעקרונות."
  },
  {
    "id": 108,
    "topic": "neural",
    "subtopic": "perceptron",
    "source": "מבחן 2024 סמסטר א' מועד א' + תרגול 7",
    "question": "בראשית העבודה החישובית על בינה מלאכותית (שנות ה-1950-60) הוצעה יחידת perceptron:\ny = 0 אם w·x + b <= 0, אחרת y = 1\n\nמה היה החיסרון הבולט של יחידת ה-perceptron בהתמודדות עם בעיות בעולם האמיתי?",
    "options": [
      "היא איטית מדי לחישוב על מחשבים מודרניים",
      "היא יכולה לסווג רק לשלוש מחלקות או יותר, לא לשתיים",
      "אין לה שום חיסרון - היא הבסיס לכל רשת נוירונים מודרנית",
      "היא מסוגלת לפתור רק בעיות הניתנות להפרדה לינארית - ונכשלת בבעיות פשוטות כמו XOR",
      "היא דורשת כמויות עצומות של נתוני אימון"
    ],
    "correctIndex": 3,
    "explanation": "ה-perceptron מחשב סכום משוקלל ומפעיל סף - גיאומטרית, הוא מגדיר על-מישור (קו ישר בדו-מימד) ומסווג לפי הצד.\n\nלכן הוא מוגבל לבעיות separable לינארית. הדוגמה המפורסמת (מינסקי ופפרט, 1969): פונקציית XOR - ארבע נקודות ששום קו ישר לא מפריד נכון - בלתי פתירה על ידי perceptron בודד.\n\nחיסרון קשור: פונקציית המדרגה אינה גזירה - אין גרדיאנט 'לזרום' דרכו, מה שמקשה על אימון.\n\nהפתרון ההיסטורי: multi-layer perceptron עם אקטיבציות גזירות (sigmoid ואחרות) - שכבות מרובות שוברות את מגבלת הלינאריות."
  },
  {
    "id": 109,
    "topic": "neural",
    "subtopic": "gradient descent - עקרונות",
    "source": "שאלה שחזרה ב-4 מבחנים + תרגול 7",
    "question": "נתבונן בעדכון צעד בשיטת ה-gradient descent:\nx חדש = x נוכחי פחות alpha כפול הגרדיאנט של f בנקודה x\n\nאילו מהטענות נכונות?\n\n1. השיטה משמשת למציאת מינימום של פונקציית loss במהלך אימון הרשת\n2. השיטה משמשת למציאת מקסימום של פונקציית ה-loss\n3. עבור learning rate נתון, מובטח כי השיטה תמצא את נקודת הקיצון הרצויה (בהנחה שיש אחת בלבד)\n4. השיטה משמשת לאופטימיזציה של פונקציית loss ואינה מוגבלת למסווג מסוג רשת נוירונים\n5. הפרמטר alpha יכול לקבל כל ערך ממשי לא כולל אפס",
    "options": [
      "טענות 1 ו-5 נכונות",
      "טענות 2 ו-4 נכונות",
      "טענות 1 ו-4 נכונות",
      "טענות 1, 3 ו-4 נכונות",
      "רק טענה 1 נכונה"
    ],
    "correctIndex": 2,
    "explanation": "טענה 1 נכונה: הצעד בכיוון מינוס הגרדיאנט - 'במורד' הפונקציה - מוביל למינימום. זה בדיוק תפקיד השיטה באימון.\n\nטענה 4 נכונה: gradient descent הוא כלי אופטימיזציה כללי - משמש גם ברגרסיה לינארית, רגרסיה לוגיסטית ומודלים רבים אחרים.\n\nהשגויות:\nטענה 2 - לחיפוש מקסימום היה צריך להפוך את הסימן (gradient ascent).\nטענה 3 - אין ערובה: learning rate גדול מדי גורם לזגזוג או התבדרות; קטן מדי - התקדמות איטית. גם עם נקודת קיצון יחידה ההתכנסות אינה מובטחת לכל alpha.\nטענה 5 - alpha שלילי הופך את הכיוון ומטפס במעלה הפונקציה (מתרחק מהמינימום); לא כל ערך שאינו אפס תקין."
  },
  {
    "id": 110,
    "topic": "neural",
    "subtopic": "gradient descent - קוד",
    "source": "מבחן 2024 סמסטר ב' מועד ב' + תרגול 7",
    "question": "נתון קטע קוד המחשב ערך אופטימלי של x עבור פונקציית המטרה:\n```def cost_function(x):\n    return x**2 + 5\n\ndef derivative(x):\n    return 2*x\n\ndef gradient_descent(learning_rate, iterations):\n    x = 5  # initial guess\n    for _ in range(iterations):```\n        # שורה 1\n        # שורה 2\n        # שורה 3\n```        print(x)\n    return x\n\noptimal_x = gradient_descent(learning_rate, iterations=4)\nprint(f'optimal x is: {optimal_x}')```\nכיצד יש להשלים את שלוש השורות החסרות?",
    "options": [
      "slope = derivative(x)\nstep = learning_rate * slope\nx = x - step",
      "slope = cost_function(x)\nstep = learning_rate * slope\nx = x - step",
      "slope = derivative(x)\nstep = learning_rate / slope\nx = x - step",
      "slope = derivative(5)\nstep = learning_rate * slope\nx = step",
      "slope = derivative(x)\nstep = learning_rate * slope\nx = x + step"
    ],
    "correctIndex": 0,
    "explanation": "שלושת הצעדים של איטרציית gradient descent:\n\nשורה 1: חישוב השיפוע בנקודה הנוכחית - הנגזרת, לא הפונקציה עצמה:\nslope = derivative(x)\n\nשורה 2: גודל הצעד - מכפלת השיפוע בקצב הלמידה:\nstep = learning_rate * slope\n\nשורה 3: עדכון בכיוון ההפוך לשיפוע (יורדים במורד!):\nx = x - step\n\nהאפשרויות השגויות: שימוש ב-cost_function במקום הנגזרת; פלוס במקום מינוס (טיפוס במעלה); חלוקה בשיפוע; והצבה של הנקודה ההתחלתית הקבועה 5 בכל איטרציה."
  },
  {
    "id": 111,
    "topic": "neural",
    "subtopic": "gradient descent - קוד",
    "source": "מבחן 2024 סמסטר ב' מועד ב' + תרגול 7",
    "question": "בהמשך לקוד ה-gradient descent (פונקציה x בריבוע ועוד 5, נגזרת 2x, ניחוש התחלתי x=5, ארבע איטרציות, הדפסת x אחרי כל עדכון):\n\nמה יודפס עבור learning_rate = 1, ומה עבור learning_rate = 0.5?",
    "options": [
      "בשני המקרים יודפס 5, 5, 5, 5 - אין שינוי",
      "עם 1: הערכים 0, 0, 0, 0; עם 0.5: הערכים -5, 5, -5, 5",
      "עם 1: ירידה הדרגתית 4, 3, 2, 1; עם 0.5: ירידה איטית יותר",
      "עם 1: התבדרות 15, 45, 135, 405; עם 0.5: התכנסות הדרגתית",
      "עם 1: הערכים -5, 5, -5, 5 (תנודה בלתי פוסקת); עם 0.5: הערכים 0, 0, 0, 0 (התכנסות מיידית)"
    ],
    "correctIndex": 4,
    "explanation": "עם learning_rate = 1:\nמ-x=5: שיפוע 10, צעד 10, x הופך ל-5-.\nמ-x=-5: שיפוע -10, צעד -10, x חוזר ל-5.\nוכך הלאה: -5, 5, -5, 5 - השיטה 'קופצת' מעל המינימום שוב ושוב בלי להתכנס. זו הדגמת learning rate גדול מדי.\n\nעם learning_rate = 0.5:\nמ-x=5: שיפוע 10, צעד 5, x = 0 - בול במינימום!\nמשם: שיפוע 0, צעד 0 - נשאר: 0, 0, 0, 0.\n(מקרה מיוחד יפה: עבור פרבולה, alpha = 0.5 מגיע למינימום בצעד אחד.)\n\nבמבחן נשאל גם על 0.1 (ירידה הדרגתית ומתכנסת לכיוון 0) ועל מינוס 0.1 (הערכים גדלים ומתרחקים מהמינימום - כיוון הפוך)."
  },
  {
    "id": 112,
    "topic": "neural",
    "subtopic": "learning rate",
    "source": "מבחן 2024 סמסטר ב' מועד א'",
    "question": "בשיטת gradient descent, אילו מהטענות לגבי גודל הצעד alpha (learning rate) נכונות?\n\n1. learning rate אינו משפיע על מהירות מציאת פתרון אופטימלי\n2. learning rate נמוך מדי יכול לגרום לאלגוריתם להתכנס לאט או 'להיתקע' במינימום לוקאלי\n3. learning rate גבוה מדי יכול לגרום לאלגוריתם להתכנס לנקודת קיצון של מקסימום במקום מינימום\n4. אם נקבע learning rate של 0, האלגוריתם עלול למצוא מינימום לוקאלי במקום גלובלי",
    "options": [
      "כל הטענות שגויות",
      "טענות 2, 3 ו-4 נכונות",
      "טענות 1 ו-4 נכונות",
      "טענות 2 ו-3 נכונות",
      "רק טענה 2 נכונה"
    ],
    "correctIndex": 4,
    "explanation": "טענה 2 נכונה: צעדים זעירים גוררים התקדמות איטית מאוד, ובנוף עם כמה מינימומים - היתקעות במינימום לוקאלי ראשון בלי יכולת 'לדלג' ממנו.\n\nהשגויות:\nטענה 1 - ההפך הגמור: ה-learning rate הוא הגורם המרכזי שקובע את מהירות ההתכנסות (ראו ההבדל בין 1, 0.5 ו-0.1 בשאלת הקוד).\nטענה 3 - alpha גבוה גורם לזגזוג או התבדרות, אבל לא להתכנסות למקסימום: הצעד תמיד בכיוון הירידה של הפונקציה; מקסימום הוא נקודה דוחה עבור gradient descent.\nטענה 4 - עם alpha = 0 הצעד תמיד אפס: האלגוריתם לא זז בכלל מהנקודה ההתחלתית - הוא לא מוצא שום מינימום."
  },
  {
    "id": 113,
    "topic": "neural",
    "subtopic": "gradient descent - חישוב צעד",
    "source": "מבחן 2025 סמסטר א' מועד א'",
    "question": "מחפשים את המינימום של הפונקציה y = x בריבוע ועוד 3x, עם learning rate של 0.1 וניחוש התחלתי x = 0.\n\n(א) מה יהיה ערכו של x לאחר צעד עדכון בודד?\n(ב) מה השינוי הנדרש בנוסחת העדכון כדי למצוא מקסימום של פונקציה?",
    "options": [
      "(א) x = -3\n(ב) להפוך את סימן הפונקציה בלבד",
      "(א) x = 0.3\n(ב) להחליף את המינוס בפלוס",
      "(א) x = -0.3\n(ב) להחליף את המינוס בפלוס - לטפס במעלה הפונקציה במקום לרדת",
      "(א) x = 0\n(ב) אין צורך בשינוי - השיטה מוצאת גם מקסימום",
      "(א) x = -0.3\n(ב) להעלות את ה-learning rate פי 2"
    ],
    "correctIndex": 2,
    "explanation": "(א) הנגזרת: 2x + 3. בנקודה x = 0:\nגרדיאנט = 2·0 + 3 = 3\nצעד = 0.1 · 3 = 0.3\nx חדש = 0 - 0.3 = -0.3\n\n(הגיוני: המינימום האמיתי של הפרבולה נמצא ב-x = -1.5, והצעד אכן מתקדם לכיוונו.)\n\n(ב) הנוסחה עם מינוס יורדת במורד הגרדיאנט - אל המינימום. להיפוך למציאת מקסימום מחליפים את המינוס בפלוס (gradient ascent) - מטפסים במעלה.\n\nבאותה שאלה במבחן סומן גם: לבחירה הראשונית של x יש השפעה משמעותית על מהירות מציאת המינימום - נכון."
  },
  {
    "id": 114,
    "topic": "neural",
    "subtopic": "gradient descent מול פתרון אנליטי",
    "source": "מבחן 2025 סמסטר ב' מועד א'",
    "question": "שיטת gradient descent משמשת למציאת נקודות קיצון בפונקציה מורכבת. מהם יתרון אחד וחיסרון אחד של השיטה לעומת האלטרנטיבה של מציאת נקודת קיצון בפתרון אנליטי (השוואת הנגזרת לאפס)?",
    "options": [
      "יתרון: תמיד מהירה יותר מפתרון אנליטי; חיסרון: דורשת שהפונקציה תהיה לינארית",
      "יתרון: עובדת גם כשאין פתרון אנליטי למשוואת הנגזרת; חיסרון: לא בהכרח מגיעה לנקודת הקיצון בצורה מדויקת",
      "יתרון: אינה דורשת חישוב נגזרת; חיסרון: מוגבלת לפונקציות ריבועיות",
      "יתרון: מוצאת תמיד את המינימום הגלובלי; חיסרון: עובדת רק בממד אחד",
      "אין לשיטה יתרונות - היא משמשת רק מסיבות היסטוריות"
    ],
    "correctIndex": 1,
    "explanation": "יתרון: לפונקציות loss מורכבות (כמו של רשת נוירונים עמוקה עם מיליוני פרמטרים) אין פתרון סגור למשוואה 'נגזרת = 0'. gradient descent לא צריך לפתור את המשוואה - הוא רק מחשב את הגרדיאנט נקודתית וצועד. עובד כמעט על כל פונקציה גזירה.\n\nחיסרון: השיטה איטרטיבית ומתקרבת - לא בהכרח נוחתת בדיוק בנקודת הקיצון (עוצרים אחרי מספר איטרציות או בסף התכנסות), ועלולה להיתקע במינימום לוקאלי.\n\nשימו לב שהיא כן דורשת חישוב נגזרת (גרדיאנט) - רק לא את פתרון המשוואה."
  },
  {
    "id": 115,
    "topic": "neural",
    "subtopic": "gradient descent - צורת הפונקציה",
    "source": "מבחן 2025 סמסטר ב' מועד ב'",
    "question": "נתונות שתי פונקציות ריבועיות:\n(1) y = 2x בריבוע ועוד 5\n(2) y = 20x בריבוע ועוד 5\n\nמריצים gradient descent עם אותו x התחלתי ואותו learning rate על שתיהן, למספר גדול מאוד של איטרציות.\n\nבאיזו פונקציה יש סיכוי גבוה יותר למצוא נקודת קיצון מדויקת?",
    "options": [
      "באף אחת - פונקציות ריבועיות אינן מתאימות ל-gradient descent",
      "בפונקציה (2) - גרדיאנט גדול יותר מאיץ את ההתכנסות תמיד",
      "אין הבדל - לשתי הפונקציות אותו מינימום ולכן אותה התנהגות",
      "בפונקציה (1) - הגרדיאנט שלה מתון פי 10, הצעדים קטנים יותר יחסית והסיכון לזגזוג סביב המינימום נמוך יותר",
      "תלוי אך ורק בנקודת ההתחלה, לא בפונקציה"
    ],
    "correctIndex": 3,
    "explanation": "הנגזרות: 4x לעומת 40x - בפונקציה (2) הגרדיאנט גדול פי 10 בכל נקודה.\n\nעם אותו learning rate, הצעדים בפונקציה (2) גדולים פי 10. עבור פרבולה y = a·x בריבוע, ההתכנסות דורשת ש-alpha יהיה קטן מ-1 חלקי a (בקירוב) - ככל שהפונקציה 'תלולה' יותר (a גדול), טווח ה-alpha הבטוח מצטמצם.\n\nלכן עם alpha נתון: בפונקציה המתונה (1) סביר שנתכנס יפה למינימום; בתלולה (2) אותו alpha עלול להיות 'גדול מדי' ולגרום לזגזוג סביב המינימום או אף להתבדרות.\n\nזו הסיבה המעשית ש-feature scaling עוזר לאימון: הוא 'מעגל' את נוף ה-loss ומאפשר learning rate אחיד."
  },
  {
    "id": 116,
    "topic": "neural",
    "subtopic": "softmax",
    "source": "מבחן 2023 סמסטר א' מועד א'",
    "question": "פונקציית softmax משמשת ל... (בחרו את התשובה הכי מדויקת):",
    "options": [
      "נורמליזציה של רשימת ערכים כך שיהיו בעלי ממוצע 0 וסטיית תקן 1",
      "חישוב הערך המקסימלי ברשימה בצורה רכה",
      "הפיכת רשימת ערכים להסתברויות: כל ערך בתחום [0,1] וכולם מסתכמים ל-1",
      "נורמליזציה של רשימת ערכים לתחום [-1, 1]",
      "קירוב מהיר של ערך ממשי כלשהו ל-0 או 1 לצורך החלטה בינארית"
    ],
    "correctIndex": 2,
    "explanation": "softmax מקבלת וקטור של מספרים ממשיים (לוגיטים - יכולים להיות שליליים, גדולים, כל דבר) ומחזירה וקטור הסתברויות:\nכל רכיב הוא e בחזקת הערך, מחולק בסכום כל האקספוננטים.\n\nהתוצאה: כל ערך בין 0 ל-1, והסכום בדיוק 1 - התפלגות הסתברויות על המחלקות.\n\nלכן היא הבחירה הטבעית לשכבת הפלט של מסווג רב-מחלקות: הרשת מפיקה ציון לכל מחלקה, ו-softmax מתרגמת לציונים להסתברויות השתייכות.\n\nהאפשרות על ממוצע 0 וסטיית תקן 1 מתארת StandardScaler; התחום [-1,1] מתאים ל-tanh; וקירוב חד ל-0/1 מתאר argmax קשיח."
  },
  {
    "id": 117,
    "topic": "neural",
    "subtopic": "softmax - חישוב",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "עבור וקטור הקלט z = [-1, 1.5, 7], מה יהיה פלט פונקציית ה-softmax (בקירוב)?",
    "options": [
      "[0.0003, 0.0041, 0.9956]",
      "[0, 0, 1] בדיוק",
      "[0.33, 0.33, 0.34]",
      "[-0.13, 0.20, 0.93]",
      "[0.10, 0.30, 0.60]"
    ],
    "correctIndex": 0,
    "explanation": "מחשבים אקספוננטים:\ne בחזקת -1 = 0.368\ne בחזקת 1.5 = 4.482\ne בחזקת 7 = 1096.6\n\nסכום: 1101.5\n\nמחלקים:\n0.368 / 1101.5 = 0.0003\n4.482 / 1101.5 = 0.0041\n1096.6 / 1101.5 = 0.9956\n\nשימו לב לשתי תכונות מפתח:\nהפלט אף פעם לא שלילי - גם עבור קלט שלילי (e בחזקת מספר שלילי הוא חיובי קטן) - ולכן האפשרות עם -0.13 נפסלת מיד.\nהפרש גדול בין ערכי הקלט (7 מול 1.5) מתורגם לדומיננטיות כמעט מוחלטת - אבל לא ל-1 מדויק."
  },
  {
    "id": 118,
    "topic": "neural",
    "subtopic": "softmax - אלטרנטיבות",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "במקום פונקציית softmax מציעים אלטרנטיבות לשכבת הפלט של מסווג. עבור כל הצעה - האם תשיג את מטרת אימון המסווג באותה רמת איכות?\n\nsoftmax_A: הערך z_i חלקי סכום כל ערכי z\nsoftmax_B: הערך z_i בריבוע חלקי סכום כל הריבועים\nsoftmax_C: מחזירה 1 עבור הערך המקסימלי ו-0 לכל השאר",
    "options": [
      "כל שלוש ההצעות שקולות ל-softmax המקורית",
      "softmax_A ו-softmax_B שקולות; רק softmax_C פסולה",
      "כל שלוש ההצעות אינן שקולות: softmax_A לא מייצרת הסתברויות תקינות, softmax_B לא משמרת סדר בין ערכים, softmax_C עושה חלוקה גסה מדי",
      "רק softmax_C שקולה - היא הפשוטה ביותר",
      "softmax_A שקולה לחלוטין ל-softmax המקורית; softmax_B ו-softmax_C פסולות"
    ],
    "correctIndex": 2,
    "explanation": "softmax_A (חלוקה בסכום) - פסולה: עם ערכים שליליים מתקבלות 'הסתברויות' שליליות או גדולות מ-1, והסכום במכנה יכול אף להתאפס. אין ערובה להסתברויות תקינות. (האקספוננט ב-softmax הוא שמבטיח אי-שליליות!)\n\nsoftmax_B (ריבועים) - פסולה מסיבה עדינה: הריבוע הורס את הסדר. עבור z = [-3, 1]: הריבועים [9, 1] נותנים לערך הקטן יותר (-3) את ההסתברות הגבוהה! softmax חייבת לשמר את יחס הסדר בין הערכים.\n\nsoftmax_C (argmax קשיח) - מייצרת הסתברויות תקינות (0 ו-1), אבל החלוקה גסה מדי: אין הבחנה בין ביטחון גבוה לנמוך, והפונקציה אינה גזירה - אי אפשר לאמן דרכה עם gradient descent. איכות האימון נפגעת."
  },
  {
    "id": 119,
    "topic": "neural",
    "subtopic": "softmax - תכונות",
    "source": "מבחן 2025 סמסטר א' מועד ב'",
    "question": "במשימות סיווג מרובות מחלקות משתמשים ב-softmax לחישוב הסתברות ההשתייכות. אילו מהטענות נכונות?\n\n1. softmax מבטיחה שסכום כל ההסתברויות בפלט יהיה שווה ל-1\n2. ככל שההפרש בין ערכי הקלט גדול יותר, כך ההסתברות של המחלקה עם הערך הגבוה תהיה קרובה יותר ל-1\n3. ניתן להשתמש בפלט softmax כקלט ל-cross-entropy loss לאימון רשת נוירונים וגם רגרסיה לוגיסטית\n4. softmax מחייבת שכל ערכי הקלט יהיו אי-שליליים\n5. הפלט של softmax יכול לכלול ערכים שליליים אם הקלט מכיל מספרים שליליים",
    "options": [
      "טענות 1, 2, 4 נכונות; 3 ו-5 לא נכונות",
      "טענות 1, 2 ו-3 נכונות; טענות 4 ו-5 לא נכונות",
      "כל הטענות נכונות",
      "טענות 1 ו-2 בלבד נכונות",
      "טענות 1, 3 ו-5 נכונות; 2 ו-4 לא נכונות"
    ],
    "correctIndex": 1,
    "explanation": "טענה 1 נכונה: החלוקה בסכום האקספוננטים מנרמלת לסכום 1 - תמיד.\n\nטענה 2 נכונה: הפרשים גדולים מועצמים אקספוננציאלית - ראו את z = [-1, 1.5, 7] שנתן 0.9956 לערך הגבוה.\n\nטענה 3 נכונה: softmax + cross-entropy הוא הצמד הסטנדרטי לרשתות סיווג, וגם רגרסיה לוגיסטית (רב-מחלקתית) מתאמנת עם CE. (לרגרסיה לינארית - לא, היא מנבאת ערך רציף.)\n\nטענה 4 לא נכונה: הקלט יכול להיות כל מספר ממשי - האקספוננט מטפל בשליליים.\n\nטענה 5 לא נכונה: e בחזקת כל מספר הוא חיובי - הפלט תמיד חיובי ממש, גם עבור קלט שלילי."
  },
  {
    "id": 120,
    "topic": "neural",
    "subtopic": "sigmoid ו-softmax",
    "source": "מבחן חזרה + 3 מבחנים נוספים",
    "question": "עבור כל אחת מהטענות על פונקציות האקטיבציה בשכבת הפלט, סמנו נכון או לא נכון:\n\n1. פונקציית sigmoid מעבירה את הקלט לטווח הערכים [-1, 1]\n2. sigmoid ברשת נוירונים יכולה לשמש לסיווג בינארי\n3. sigmoid יכולה לשמש לסיווג למספר רב של מחלקות\n4. softmax יכולה לשמש לסיווג בינארי\n5. softmax יכולה לשמש לסיווג למספר רב של מחלקות\n6. softmax הופכת וקטור של מספרים ממשיים להסתברויות",
    "options": [
      "1 לא נכון; 2 נכון; 3 נכון; 4 נכון; 5 נכון; 6 נכון",
      "1 לא נכון; 2 נכון; 3 לא נכון; 4 נכון; 5 נכון; 6 נכון",
      "1 נכון; 2 נכון; 3 לא נכון; 4 לא נכון; 5 נכון; 6 נכון",
      "כל הטענות נכונות",
      "1 לא נכון; 2 לא נכון; 3 לא נכון; 4 נכון; 5 נכון; 6 לא נכון"
    ],
    "correctIndex": 1,
    "explanation": "טענה 1 לא נכונה: הטווח של sigmoid הוא (0, 1) - לא [-1, 1] (זה הטווח של tanh). זו מלכודת שחוזרת כמעט בכל מבחן!\n\nטענה 2 נכונה: sigmoid מפיקה מספר בודד בין 0 ל-1 - מתפרש כהסתברות למחלקה החיובית. מושלם לבינארי.\n\nטענה 3 לא נכונה: פלט בודד לא יכול לייצג התפלגות על 3 מחלקות ומעלה.\n\nטענות 4 ו-5 נכונות: softmax עובדת לכל מספר מחלקות - כולל 2 (במקרה הבינארי היא שקולה מתמטית ל-sigmoid).\n\nטענה 6 נכונה: זו בדיוק הגדרתה - וקטור ממשי הופך לווקטור הסתברויות.\n\nעוד גרסה שהופיעה במבחנים: 'sigmoid משמשת לניבוי ערך רציף' - לא נכון, היא לסיווג; ניבוי רציף נעשה ללא אקטיבציה בפלט."
  },
  {
    "id": 121,
    "topic": "neural",
    "subtopic": "CNN",
    "source": "מבחן חזרה + הרצאה על רשתות קונבולוציה",
    "question": "ברשתות קונבולוציה (CNN), מה היתרון שמתקבל משיתוף משקלים (weight sharing)?",
    "options": [
      "שיתוף המשקלים מאפשר לרשת לרוץ ללא GPU",
      "הוא מאפשר לאמן את הרשת ללא נתונים מתויגים",
      "אין יתרון אמיתי - זו מגבלה טכנית של החומרה",
      "הוא מבטיח שהרשת לא תגיע ל-overfitting לעולם",
      "יעילות והקטנה דרמטית של מספר הפרמטרים (כמספר תאי הפילטר במקום כמספר הפיקסלים), ובנוסף - היכולת לזהות את אותו feature בכל מקום בתמונה"
    ],
    "correctIndex": 4,
    "explanation": "ב-CNN אותו פילטר (kernel) קטן - למשל 3 על 3 משקלים - מוחלק על פני כל התמונה.\n\nיתרון 1 - חיסכון עצום בפרמטרים: מספר המשקלים הנלמדים הוא כמספר תאי הפילטר (9 בדוגמה), במקום משקל לכל פיקסל כמו בשכבה fully connected. בתמונה של מיליון פיקסלים זה הבדל של סדרי גודל.\n\nיתרון 2 - אינווריאנטיות למיקום: מכיוון שאותם משקלים סורקים את כל התמונה, feature שנלמד (קצה, פינה, טקסטורה) מזוהה בכל מקום בתמונה - לא רק במיקום ספציפי שבו הופיע באימון.\n\nשני היתרונות יחד הם הסיבה ש-CNN מתאימות כל כך לתמונות."
  },
  {
    "id": 122,
    "topic": "neural",
    "subtopic": "cross entropy - התאמה למודלים",
    "source": "מבחן 2023 סמסטר ב' מועד א'",
    "question": "מדוע מדד ה-cross entropy loss אינו מתאים לאימון מסווג מסוג KNN?",
    "options": [
      "KNN אינו מסוגל להפיק הסתברויות בשום צורה",
      "KNN עובד רק עם מרחק אוקלידי ולא עם לוגריתמים",
      "המדד מתאים ל-KNN באותה מידה כמו לרשת נוירונים",
      "ב-KNN שלב האימון 'מנוון' (ריק) בהינתן K - אין פרמטרים למזער עליהם loss; בחירת K נעשית עם validation set וזה כיוונון היפר-פרמטר, לא אימון",
      "cross entropy דורש בדיוק שתי מחלקות ו-KNN עובד עם יותר"
    ],
    "correctIndex": 3,
    "explanation": "פונקציית loss משמשת לאימון: תהליך איטרטיבי שמכוונן פרמטרים פנימיים (משקלים, מקדמים) כדי למזער אותה.\n\nל-KNN אין תהליך כזה: בהינתן K, ה'אימון' הוא רק שמירת נקודות האימון בזיכרון. אין משקלים, אין גרדיאנטים, אין מה למזער - ולכן אין משמעות לפונקציית loss של אימון.\n\nמה שכן עושים ב-KNN: בוחרים את K (היפר-פרמטר) על ידי השוואת ביצועים על validation set - אבל זו בחירת תצורה, לא אימון מודל.\n\nלעומת זאת CE כן מתאים לרגרסיה לוגיסטית ולרשתות נוירונים - מודלים שמפיקים הסתברויות ומתאמנים בגרדיאנט."
  },
  {
    "id": 147,
    "topic": "neural",
    "subtopic": "מודלי שפה גדולים",
    "source": "מבחן 2023 סמסטר ב' מועד א' (שאלה בשווי 20 נקודות)",
    "question": "מודלי שפה כמו ChatGPT כבשו הרבה מתחומי החיים שלנו. אילו מהטענות הבאות נכונות?\n\n1. ChatGPT יוצר טקסט חופשי רהוט ושוטף (בעיקר באנגלית) בהינתן שאלה פתוחה\n2. ChatGPT הוא מחולל שיח אשר התאמן (בין השאר) על datasets של שיחות בין בני אדם\n3. ChatGPT נבנה והתאמן בצורה כזאת שהוא יודע לאחזר תשובות עובדתיות מדויקות\n4. ארכיטקטורת הבסיס של ChatGPT היא רשת נוירונים ככלי סיווג",
    "options": [
      "טענות 1, 2 ו-3 נכונות; טענה 4 לא נכונה",
      "טענות 3 ו-4 בלבד נכונות",
      "טענות 1 ו-2 בלבד נכונות",
      "כל ארבע הטענות נכונות",
      "טענות 1, 2 ו-4 נכונות; טענה 3 לא נכונה"
    ],
    "correctIndex": 4,
    "explanation": "טענה 1 נכונה: יצירת טקסט רהוט ושוטף היא בדיוק היכולת המרכזית של מודלי שפה גדולים.\n\nטענה 2 נכונה: המודל אומן על כמויות עצומות של טקסט, כולל שיחות ודיאלוגים אנושיים - ועבר כוונון ייעודי (fine-tuning) על נתוני שיח.\n\nטענה 3 לא נכונה - וזו הנקודה החשובה: מודל שפה אינו מנוע אחזור עובדות. הוא לומד לחזות את הטקסט הסביר הבא - לא לאמת נכונות. לכן הוא עלול 'להזות' (hallucinate): לייצר תשובות שנשמעות בטוחות ומדויקות אך שגויות עובדתית. שטף לשוני אינו ערובה לדיוק.\n\nטענה 4 נכונה: בבסיס המודל רשת נוירונים (ארכיטקטורת Transformer), ובכל צעד היא פותרת בעיית סיווג ענקית - חיזוי ה-token הבא מתוך אוצר המילים (עם softmax על עשרות אלפי מחלקות, בדיוק כפי שנלמד בקורס)."
  },
  {
    "id": 123,
    "topic": "clustering",
    "subtopic": "K-Means - עקרונות",
    "source": "תרגול 9 + מבחן 2024 סמסטר ב' מועד ב'",
    "question": "חוקרים השתמשו באלגוריתם K-Means כדי לחלק מדגם של פרחי רקפות לארבע קבוצות (K=4) לפי אורך עלים ורוחב עלים. אילו מהטענות הבאות נכונות?\n\n1. האלגוריתם יעצור כאשר הסיווג לאשכולות מתייצב (אין שינוי בהשמות בין איטרציות)\n2. האלגוריתם תמיד יסתיים לאחר 4 איטרציות בדיוק (כמספר האשכולות)\n3. לבחירת הצנטרואידים ההתחלתיים יכולה להיות השפעה על התוצאה הסופית\n4. ניתן להעריך את איכות התוצאה עם silhouette score גם ללא תיוגי אמת\n5. ניתן להעריך את איכות התוצאה עם precision ו-recall",
    "options": [
      "טענות 1, 2 ו-4 נכונות",
      "טענות 3 ו-5 נכונות",
      "כל הטענות נכונות",
      "טענות 1, 3 ו-4 נכונות",
      "טענות 1 ו-5 בלבד נכונות"
    ],
    "correctIndex": 3,
    "explanation": "טענה 1 נכונה: תנאי העצירה הסטנדרטי של K-Means הוא התכנסות - כשאף תצפית לא מחליפה אשכול (או שהצנטרואידים מפסיקים לזוז).\n\nטענה 3 נכונה: K-Means רגיש לאתחול - אתחולים שונים יכולים להתכנס לפתרונות שונים (מינימומים לוקאליים). לכן נהוג להריץ מספר פעמים.\n\nטענה 4 נכונה: silhouette הוא מדד פנימי - הוא משווה את מרחק כל תצפית לאשכול שלה מול האשכול השכן, ללא צורך בתיוגים.\n\nהשגויות:\nטענה 2 - מספר האיטרציות תלוי בנתונים ובאתחול, אין שום קשר קבוע ל-K.\nטענה 5 - precision ו-recall הם מדדי סיווג מונחה שמשווים תחזית לתווית אמת פר-דוגמה; באשכולות אין 'שם מחלקה' צפוי לכל אשכול. להשוואה לתיוגי אמת משתמשים ב-rand index."
  },
  {
    "id": 124,
    "topic": "clustering",
    "subtopic": "K-Means - נכון/לא נכון",
    "source": "תרגול 9 + מבחן 2024 סמסטר ב' מועד ב'",
    "question": "סמנו נכון או לא נכון עבור הטענות הבאות על אלגוריתם K-Means:\n\n1. אתחול הצנטרואידים בשיטת ++KMeans אינו מבטיח ריצה מהירה יותר בכל מקרה, והאלגוריתם עדיין רגיש לאתחול\n2. אם נעדכן את מיקום הצנטרואיד אחרי כל השמה של תצפית בודדת (במקום פעם באיטרציה), מובטח שנתכנס לאותה תוצאה מהר יותר\n3. מספר האיטרציות עד התכנסות נקבע באופן ישיר על ידי גודל ה-dataset: יותר תצפיות = יותר איטרציות\n4. קיים אתחול צנטרואידים שממנו האלגוריתם מתכנס באיטרציה אחת",
    "options": [
      "1 נכון; 2 נכון; 3 לא נכון; 4 לא נכון",
      "1 נכון; 2 לא נכון; 3 לא נכון; 4 נכון",
      "1 לא נכון; 2 לא נכון; 3 נכון; 4 נכון",
      "כל הטענות נכונות",
      "1 לא נכון; 2 נכון; 3 נכון; 4 לא נכון"
    ],
    "correctIndex": 1,
    "explanation": "טענה 1 נכונה: ++KMeans משפר את האתחול סטטיסטית (מפזר צנטרואידים רחוקים זה מזה) אבל לא מבטיח דבר - האלגוריתם נשאר רגיש לאתחול, רק פחות.\n\nטענה 2 לא נכונה: עדכון אחרי כל השמה משנה את הדינמיקה, אבל אין שום ערובה להתכנסות מהירה יותר או לאותה תוצאה - התוצאה תלויה גם בסדר עיבוד התצפיות.\n\nטענה 3 לא נכונה: מספר האיטרציות תלוי במבנה הנתונים ובאתחול - dataset ענק עם אשכולות מופרדים היטב יכול להתכנס בשתי איטרציות.\n\nטענה 4 נכונה: אם נאתחל את הצנטרואידים בדיוק במרכזי האשכולות הסופיים - ההשמה הראשונה כבר יציבה והאלגוריתם עוצר מיד."
  },
  {
    "id": 125,
    "topic": "clustering",
    "subtopic": "K-Means - רגישות לאתחול",
    "source": "מבחן 2024 סמסטר ב' מועד ב' + מבחן 2024 סמסטר א' מועד ב'",
    "question": "הרצנו אלגוריתם K-Means פעמיים על אותו dataset בדיוק, עם אותו K, וקיבלנו שתי חלוקות שונות לאשכולות.\n\nכיצד ייתכן הדבר, וכיצד מומלץ להתמודד עם התופעה?",
    "options": [
      "זו בהכרח שגיאה בקוד - K-Means דטרמיניסטי לחלוטין",
      "האלגוריתם רגיש לאתחול האקראי של הצנטרואידים ועלול להתכנס למינימום לוקאלי שונה בכל ריצה; מומלץ להריץ מספר פעמים ולבחור את התוצאה הטובה ביותר",
      "הנתונים השתנו בין הריצות - אין הסבר אחר",
      "K-Means מחזיר תוצאה אקראית בכוונה כדי למנוע overfitting",
      "התופעה מתרחשת רק כאשר K גדול ממספר התצפיות"
    ],
    "correctIndex": 1,
    "explanation": "K-Means מתחיל מאתחול אקראי של הצנטרואידים, וכל אתחול יכול להוביל למסלול התכנסות אחר - לעיתים למינימום לוקאלי שונה של פונקציית המטרה (סכום ריבועי המרחקים לצנטרואידים).\n\nלכן שתי ריצות 'כשרות' לגמרי יכולות להחזיר חלוקות שונות.\n\nההתמודדות המקובלת:\nלהריץ את האלגוריתם מספר פעמים עם אתחולים שונים ולבחור את הריצה עם ה-inertia הנמוך ביותר (בספריית sklearn זה בדיוק הפרמטר n_init).\nלחלופין/בנוסף: אתחול חכם עם ++KMeans שמקטין את השונות בין ריצות."
  },
  {
    "id": 126,
    "topic": "clustering",
    "subtopic": "K-Means - שיפור תוצאות",
    "source": "מבחן 2024 סמסטר ב' מועד א'",
    "question": "הרצנו K-Means על dataset והתוצאות אינן משביעות רצון (אשכולות לא הגיוניים). אילו מהפעולות הבאות עשויות לשפר את התוצאות?\n\n1. להגדיל את מספר האיטרציות המקסימלי ואת מספר הריצות עם אתחולים שונים\n2. לבצע feature scaling על המשתנים לפני ההרצה\n3. לבצע הורדת ממדים ל-2 ממדים עם PCA - זה תמיד משפר תוצאות אשכולות\n4. להגדיל את K באופן משמעותי - יותר אשכולות זה תמיד יותר טוב\n5. לעדכן את הצנטרואידים אחרי כל השמת תצפית בודדת - זה מבטיח תוצאה טובה יותר",
    "options": [
      "פעולות 1, 2 ו-3",
      "כל הפעולות",
      "פעולות 2 ו-4",
      "פעולות 1 ו-2 בלבד",
      "פעולות 3 ו-5 בלבד"
    ],
    "correctIndex": 3,
    "explanation": "פעולה 1 עוזרת: יותר איטרציות מבטיחות התכנסות מלאה, ויותר אתחולים מגדילים את הסיכוי לפגוע במינימום טוב.\n\nפעולה 2 עוזרת מאוד: K-Means מבוסס מרחקים - feature בסקאלה גדולה משתלט על חישוב המרחק ומעוות את האשכולות. scaling מאזן את תרומת ה-features.\n\nהשגויות:\nפעולה 3 - PCA יכול לעזור לעיתים (הסרת רעש) אבל 'תמיד משפר' זו הגזמה - הוא גם עלול לזרוק מידע שמבחין בין אשכולות.\nפעולה 4 - K גדול מדי מפצל אשכולות טבעיים; K נבחר לפי הנתונים (elbow, silhouette), לא 'כמה שיותר'.\nפעולה 5 - כפי שראינו, שינוי סדר העדכון לא מבטיח דבר."
  },
  {
    "id": 127,
    "topic": "clustering",
    "subtopic": "rand index",
    "source": "תרגול 9 + מבחן 2025 סמסטר א' מועד א'",
    "question": "מדד rand_score משווה שתי חלוקות לאשכולות: הוא בודק, עבור כל זוג תצפיות, האם שתי החלוקות 'מסכימות' לגביו (שתיהן שמות את הזוג יחד באותו אשכול, או שתיהן מפרידות אותו), ומחזיר את שיעור הזוגות המוסכמים.\n\nנתונות התוויות האמיתיות של 5 תצפיות: [A, A, B, B, B]\nותוצאת אשכול: [0, 0, 1, 1, 2] (התצפית החמישית הופרדה לאשכול משלה)\n\nמהו ה-rand score?",
    "options": [
      "0.5 - בדיוק מחצית",
      "1.0 - החלוקות זהות",
      "0.8 - מתוך 10 זוגות, 8 מוסכמים",
      "0.4 - רוב הזוגות אינם מוסכמים",
      "0.6 - מתוך 10 זוגות, 6 מוסכמים"
    ],
    "correctIndex": 2,
    "explanation": "מספר הזוגות: 5 תצפיות - 10 זוגות (5 כפול 4 חלקי 2).\n\nנסמן את התצפיות 1-5. ההבדל היחיד בין החלוקות: תצפית 5 (B באמת) קיבלה אשכול נפרד (2) במקום להיות עם 3 ו-4.\n\nבודקים זוג-זוג:\n(1,2): יחד באמת, יחד באשכול - מוסכם\n(3,4): יחד באמת, יחד באשכול - מוסכם\n(1,3), (1,4), (2,3), (2,4): נפרדים באמת, נפרדים באשכול - מוסכמים\n(1,5), (2,5): נפרדים באמת (A מול B), נפרדים באשכול - מוסכמים\n(3,5), (4,5): יחד באמת (B,B) אבל נפרדים באשכול - לא מוסכמים!\n\nמוסכמים: 8 מתוך 10\nrand_score = 0.8\n\nתכונות המדד: תחום הערכים 0 עד 1; ערך 1 = החלוקות שקולות לחלוטין (גם אם שמות האשכולות שונים); זהו המדד המתאים להערכת אשכולות כשיש תיוגי אמת.",
    "variants": [
      {
        "question": "מדד rand_score מחזיר את שיעור זוגות התצפיות שעליהם שתי חלוקות 'מסכימות' (יחד בשתיהן או נפרדים בשתיהן).\n\nנתונות התוויות האמיתיות של 7 תצפיות: [A, B, A, A, C, B, A]\nותוצאת אשכול: [1, 1, 1, 0, 2, 0, 2]\n\nמהו ה-rand score (בקירוב)?",
        "options": [
          "0.52 - מתוך 21 זוגות, 11 מוסכמים",
          "0.33 - מתוך 21 זוגות, 7 מוסכמים",
          "1.0 - החלוקות שקולות",
          "0.86 - מתוך 21 זוגות, 18 מוסכמים",
          "0.71 - מתוך 21 זוגות, 15 מוסכמים"
        ],
        "correctIndex": 0,
        "explanation": "מספר הזוגות: 7 כפול 6 חלקי 2 = 21.\n\nעוברים על הזוגות ובודקים הסכמה בין האמת [A,B,A,A,C,B,A] לאשכול [1,1,1,0,2,0,2]:\n\nזוגות מוסכמים לדוגמה: (1,3) - יחד באמת (A,A) ויחד באשכול (1,1); (1,5) - נפרדים בשתיהן; (2,5), (3,5), (4,2)...\nזוגות לא מוסכמים לדוגמה: (1,2) - נפרדים באמת (A,B) אבל יחד באשכול (1,1); (1,4) - יחד באמת אבל נפרדים באשכול; (5,7) - נפרדים באמת (C,A) אבל יחד באשכול (2,2).\n\nספירה מלאה נותנת 11 זוגות מוסכמים מתוך 21:\nrand_score = 11/21 = 0.52 בקירוב\n\n(זו בדיוק השאלה ממבחן 2025 סמסטר א' מועד א'.)"
      }
    ]
  },
  {
    "id": 128,
    "topic": "clustering",
    "subtopic": "purity",
    "source": "תרגול 9 + מבחן 2024 סמסטר ב' מועד א'",
    "question": "מדד purity לאיכות אשכולות: לכל אשכול מזהים את התווית האמיתית השכיחה ביותר בו, סוכמים את מספרי ה'רוב' מכל האשכולות ומחלקים במספר התצפיות הכולל.\n\nנתונות 12 תצפיות (A עד L) שחולקו לשלושה אשכולות, עם התוויות האמיתיות (1, 2 או 3):\n\nאשכול X: תצפיות עם תוויות 1, 1, 2, 1\nאשכול Y: תצפיות עם תוויות 3, 3, 3, 3\nאשכול Z: תצפיות עם תוויות 3, 1, 2, 2\n\nמהו ה-purity של החלוקה?",
    "options": [
      "9/12 = 0.75",
      "10/12 = 0.83",
      "6/12 = 0.5",
      "12/12 = 1.0",
      "8/12 = 0.67"
    ],
    "correctIndex": 0,
    "explanation": "מחשבים את הרוב בכל אשכול:\n\nאשכול X (תוויות 1,1,2,1): התווית השכיחה היא 1 - מופיעה 3 פעמים.\nאשכול Y (תוויות 3,3,3,3): התווית 3 - 4 פעמים (אשכול טהור!).\nאשכול Z (תוויות 3,1,2,2): התווית 2 - פעמיים.\n\nסכום הרובים: 3 + 4 + 2 = 9\npurity = 9/12 = 0.75\n\nתכונות המדד (נשאלו במבחנים):\nהחסם העליון הוא 1 - מתקבל כשכל אשכול טהור לחלוטין.\nהמדד מודד הומוגניות של אשכולות - אבל יש לו חולשה: purity של 1 מתקבל באופן טריוויאלי כשכל תצפית באשכול משלה (K = מספר התצפיות)."
  },
  {
    "id": 129,
    "topic": "clustering",
    "subtopic": "silhouette ו-rand index",
    "source": "תרגול 9",
    "question": "נתונים שני מדגמים לא קשורים A ו-B, כל אחד עם שלוש קבוצות אמת (מסומנות בצורות שונות). בשניהם הורץ K-Means עם K=3, כאשר הצנטרואידים ההתחלתיים אותחלו 'יפה' - אחד בתוך כל קבוצת אמת - ובשני המקרים האלגוריתם התכנס לחלוקה שמשחזרת במדויק את קבוצות האמת.\n\nההבדל: במדגם A הקבוצות מרוחקות וקומפקטיות; במדגם B הקבוצות מפוזרות יותר וכמעט חופפות בשוליים.\n\nמה ניתן לומר על מדדי האיכות של שתי התוצאות?",
    "options": [
      "ה-rand index (מול תיוגי האמת) שווה בשני המדגמים; אבל ה-silhouette של B נמוך משל A",
      "ה-rand index של B נמוך משל A; ה-silhouette זהה",
      "לא ניתן לחשב silhouette ללא תיוגי אמת",
      "שני המדדים נמוכים יותר ב-A",
      "גם ה-rand index וגם ה-silhouette זהים בשני המדגמים"
    ],
    "correctIndex": 0,
    "explanation": "rand index משווה את החלוקה לתיוגי האמת: בשני המדגמים החלוקה משחזרת את קבוצות האמת במדויק - ולכן בשניהם rand index מושלם וזהה (1).\n\nsilhouette לעומת זאת הוא מדד גיאומטרי פנימי: הוא מודד כמה כל תצפית קרובה לאשכול שלה לעומת האשכול השכן. הוא לא יודע דבר על 'אמת' - רק על צורת הפיזור.\n\nבמדגם A האשכולות קומפקטיים ומרוחקים - silhouette גבוה.\nבמדגם B התצפיות מפוזרות והאשכולות כמעט נוגעים - המרחקים לאשכול השכן קטנים יחסית - silhouette נמוך יותר.\n\nהלקח: אותה 'הצלחה' מול האמת, ציוני silhouette שונים - כי silhouette מודד הפרדה גיאומטרית, לא נכונות."
  },
  {
    "id": 130,
    "topic": "clustering",
    "subtopic": "אלגוריתם דמיון (תרגיל בית 4)",
    "source": "מבחן 2025 סמסטר ב' מועד ב' + מבחן 2025 סמסטר א' מועד א'",
    "question": "בתרגיל בית 4 מימשתם אלגוריתם אשכול מבוסס סף דמיון (min_similarity): עוברים על התצפיות, וכל תצפית מצטרפת לאשכול קיים אם הדמיון שלה למוביל האשכול עולה על הסף - אחרת היא פותחת אשכול חדש.\n\nסמנו את הטענות הנכונות (MS = ערך הסף, NUM = מספר האשכולות שנוצר):\n\n1. ככל שמגדילים את הסף MS, נוטים להיווצר אשכולות קטנים יותר (ורבים יותר)\n2. ככל שמגדילים את הסף MS, נוטים להיווצר אשכולות גדולים יותר\n3. ייתכן מצב שבו NUM שווה למספר התצפיות\n4. אם MS1 גדול מ-MS2 אז בוודאות NUM1 גדול מ-NUM2",
    "options": [
      "טענות 1 ו-3 נכונות; 2 ו-4 לא נכונות",
      "טענות 1 ו-4 נכונות; 2 ו-3 לא נכונות",
      "טענות 2 ו-4 נכונות",
      "רק טענה 4 נכונה",
      "טענות 2 ו-3 נכונות; 1 ו-4 לא נכונות"
    ],
    "correctIndex": 0,
    "explanation": "טענה 1 נכונה (ו-2 לא): סף דמיון גבוה = תנאי הצטרפות מחמיר - פחות תצפיות מצליחות להצטרף לאשכולות קיימים, נוצרים אשכולות קטנים ורבים.\n\nטענה 3 נכונה: עם סף גבוה מספיק (למשל דמיון מושלם נדרש), אף תצפית לא מצטרפת לאף אשכול - כל תצפית פותחת אשכול משלה, NUM = מספר התצפיות.\n\nטענה 4 לא נכונה: המגמה קיימת ('עשוי לגרור') אבל אין ודאות - התוצאה תלויה בפיזור הדמיונות בפועל ובסדר העיבוד. ייתכן ששני ספים שונים יניבו אותו מספר אשכולות. במבחן ההבחנה הייתה בדיוק בין 'עשוי' (נכון) ל'בוודאות' (לא נכון)."
  },
  {
    "id": 131,
    "topic": "clustering",
    "subtopic": "אלגוריתם דמיון (תרגיל בית 4)",
    "source": "מבחן 2025 סמסטר א' מועד א'",
    "question": "בהשוואה בין אלגוריתם האשכול מבוסס סף הדמיון (מתרגיל בית 4) לבין K-Means, אילו יתרונות יש לאלגוריתם הסף?",
    "options": [
      "אינו דורש לקבוע מראש את מספר האשכולות K, וסובלני יותר לחריגים (outlier פשוט נשאר באשכול קטן משלו במקום לעוות צנטרואיד)",
      "הוא היחיד שעובד עם מרחק אוקלידי",
      "הוא מבטיח מציאת החלוקה האופטימלית הגלובלית",
      "הוא תמיד מהיר יותר מ-K-Means ואינו תלוי בסדר התצפיות",
      "אין לו שום יתרון - K-Means עדיף בכל מצב"
    ],
    "correctIndex": 0,
    "explanation": "יתרון 1 - אין צורך ב-K מראש: מספר האשכולות נגזר מהנתונים ומהסף. ב-K-Means חייבים לנחש/לכוונן את K (elbow, silhouette).\n\nיתרון 2 - עמידות לחריגים: תצפית חריגה שלא דומה לאף אשכול פשוט פותחת אשכול קטן משלה ולא משפיעה על השאר. ב-K-Means חריג נכפה לאשכול הקרוב ביותר ומושך את הצנטרואיד שלו.\n\nלמען ההגינות, יש לו גם חסרונות (תלות בסדר התצפיות, בחירת מוביל שרירותית) - ולכן הטענה 'תמיד מהיר ולא תלוי בסדר' שגויה. וכמו K-Means, גם הוא לא מבטיח אופטימום גלובלי."
  },
  {
    "id": 132,
    "topic": "clustering",
    "subtopic": "debug של K-Means",
    "source": "מבחן 2025 סמסטר א' מועד א'",
    "question": "סטודנט ביקש מ-ChatGPT לממש K-Means וקיבל קוד עם באגים. להלן קטעים חשודים:\n\nשורה 10:  n_samples = data.shape[1]   # מספר התצפיות\nשורה 13:  for cluster_id in range(k+1):   # מעבר על האשכולות\nשורה 16:  if converged: continue   # עצירה בהתכנסות\nשורה 17:  current_centroids = copy(previous_centroids)   # שמירת מצב לבדיקת התכנסות\n\nאילו תיקונים נדרשים?",
    "options": [
      "הקוד תקין לחלוטין - אין באגים",
      "רק שורה 17 - כיוון ההעתקה",
      "רק שורה 16 - השאר תקינות",
      "רק שורות 10 ו-13 דורשות תיקון",
      "כל הארבעה: shape[0] במקום shape[1]; range(k) במקום range(k+1); break במקום continue; ולהעתיק את הנוכחי אל previous (בכיוון ההפוך)"
    ],
    "correctIndex": 4,
    "explanation": "שורה 10: ב-numpy, שורות הן תצפיות ועמודות הן features - מספר התצפיות הוא data.shape[0], לא shape[1].\n\nשורה 13: range(k+1) עובר על k+1 אשכולות - אחד יותר מדי (ואינדקס k לא קיים). צריך range(k) עבור אשכולות 0 עד k-1.\n\nשורה 16: continue מדלג לאיטרציה הבאה - בדיוק ההפך מעצירה! בהתכנסות צריך break כדי לצאת מהלולאה.\n\nשורה 17: הכיוון הפוך - צריך לשמור את המצב הנוכחי בתור ה'קודם' לקראת האיטרציה הבאה:\nprevious_centroids = copy(current_centroids)\nכפי שנכתב, הצנטרואידים החדשים נדרסים על ידי הישנים - האלגוריתם לא מתקדם לעולם."
  },
  {
    "id": 133,
    "topic": "clustering",
    "subtopic": "בחירת K",
    "source": "מבחן 2025 סמסטר א' מועד ב'",
    "question": "כיצד ניתן לבחור בצורה מושכלת את מספר האשכולות K להרצת K-Means, כשאין ידע מוקדם על הנתונים?",
    "options": [
      "אין דרך לבחור K - חייבים ידע מוקדם",
      "להריץ פעם אחת עם K אקראי - האלגוריתם מתקן את K תוך כדי ריצה",
      "להריץ את האלגוריתם בלולאה עבור ערכי K שונים, לחשב מדד איכות (silhouette או inertia) לכל K, ולבחור לפי המדד הטוב ביותר או לפי 'שיטת המרפק'",
      "לבחור K שווה למספר התצפיות חלקי 10",
      "לקבוע תמיד K=3 - זהו הערך האופטימלי המוכח מתמטית"
    ],
    "correctIndex": 2,
    "explanation": "הגישה הסטנדרטית: הפיכת בחירת K לבעיית חיפוש.\n\nלולאה על ערכי K (למשל 2 עד 10):\nמריצים K-Means לכל ערך, ומחשבים מדד:\n\nsilhouette score - מחפשים את K עם הציון הגבוה ביותר (הפרדה טובה בין אשכולות).\n\ninertia (סכום ריבועי מרחקים לצנטרואידים) עם שיטת המרפק (elbow): ה-inertia תמיד יורד עם K, אבל מחפשים את הנקודה שבה הירידה 'נשברת' - שיפור זניח מעבר לה. זה ה-K הטבעי של הנתונים.\n\nחשוב: K-Means עצמו לא משנה את K תוך כדי ריצה - K הוא קלט קבוע."
  },
  {
    "id": 134,
    "topic": "clustering",
    "subtopic": "DBSCAN",
    "source": "תרגול 10",
    "question": "באלגוריתם DBSCAN, מה צפוי לקרות כאשר מגדילים את הפרמטר epsilon (רדיוס השכנות) תוך שמירה על min_samples קבוע?",
    "options": [
      "האלגוריתם נכשל - epsilon חייב להישאר בערך ברירת המחדל",
      "כל הנקודות הופכות לרעש",
      "מספר האשכולות נשאר קבוע - epsilon משפיע רק על מהירות הריצה",
      "אשכולות סמוכים נוטים להתמזג לאשכולות גדולים יותר, ומספר נקודות הרעש (noise) קטן",
      "האשכולות מתפצלים לאשכולות קטנים רבים ומספר נקודות הרעש גדל"
    ],
    "correctIndex": 3,
    "explanation": "epsilon מגדיר את רדיוס השכנות: נקודות במרחק עד epsilon נחשבות שכנות.\n\nכשמגדילים אותו:\nלכל נקודה יש יותר שכנים - יותר נקודות עומדות בתנאי core point (לפחות min_samples שכנים).\nאזורים שהיו מופרדים על ידי 'רווח' מתחברים - אשכולות סמוכים מתמזגים.\nנקודות שהיו מבודדות (רעש) נבלעות עכשיו בתוך רדיוס של אשכול כלשהו - הרעש מצטמצם.\n\nבקיצוניות: epsilon ענק - כל הנתונים אשכול אחד גדול ואפס רעש.\nבכיוון ההפוך (epsilon זעיר): אף נקודה לא מוצאת מספיק שכנים - הכל רעש."
  },
  {
    "id": 135,
    "topic": "clustering",
    "subtopic": "DBSCAN",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "הרצנו DBSCAN על dataset וכל הנקודות סווגו לאשכול אחד ענק (וכמעט אין רעש). מה כדאי לשנות בפרמטרים כדי לקבל חלוקה עדינה יותר למספר אשכולות?",
    "options": [
      "להוסיף פרמטר K כמו ב-K-Means",
      "להגדיל את שניהם יחד באותו יחס",
      "אי אפשר לשנות - DBSCAN תמיד מחזיר אשכול אחד",
      "להגדיל את epsilon או להקטין את min_samples",
      "להקטין את epsilon או להגדיל את min_samples"
    ],
    "correctIndex": 4,
    "explanation": "אשכול אחד ענק פירושו שהקריטריון לצפיפות רופף מדי - הכל 'מחובר להכל'.\n\nשתי דרכים להחמיר:\n\nלהקטין את epsilon: רדיוס שכנות קטן יותר - חיבורים בין אזורים מרוחקים נשברים, האשכול הענק מתפרק לרכיבים צפופים באמת.\n\nלהגדיל את min_samples: נדרשים יותר שכנים כדי להיות core point - אזורים דלילים מפסיקים 'לגשר' בין אשכולות.\n\nהמקרה ההפוך (שהופיע גם הוא במבחן): אם הכל מסווג כרעש - הקריטריון מחמיר מדי; מגדילים epsilon או מקטינים min_samples."
  },
  {
    "id": 136,
    "topic": "clustering",
    "subtopic": "DBSCAN",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "הרצנו DBSCAN וכל הנקודות סווגו כרעש (noise) - לא נוצר אף אשכול. מה ההסבר הסביר ומה הפתרון?",
    "options": [
      "epsilon גדול מדי - יש להקטין אותו עוד",
      "הנתונים בהכרח לא מכילים שום מבנה - אין מה לעשות",
      "צריך להוסיף תיוגי אמת כדי ש-DBSCAN יעבוד",
      "epsilon קטן מדי או min_samples גדול מדי - אף נקודה לא מגיעה לצפיפות הנדרשת; יש להגדיל את epsilon או להקטין את min_samples",
      "מספר האשכולות K שנבחר גדול מדי"
    ],
    "correctIndex": 3,
    "explanation": "נקודה מסווגת כרעש כשהיא לא core point (אין לה מספיק שכנים ברדיוס epsilon) וגם לא בשכנות של core point.\n\nכשהכל רעש - אף נקודה בכל ה-dataset לא אספה min_samples שכנים ברדיוס epsilon. שתי סיבות אפשריות:\nepsilon קטן מדי ביחס לסקאלת המרחקים בנתונים.\nmin_samples גבוה מדי ביחס לצפיפות בפועל.\n\nהפתרון: להגדיל את epsilon (רדיוס נדיב יותר) או להקטין את min_samples (דרישת צפיפות מקלה).\n\nולתזכורת: ל-DBSCAN אין פרמטר K - מספר האשכולות נגזר מהצפיפות. זה אחד מיתרונותיו על K-Means."
  },
  {
    "id": 137,
    "topic": "clustering",
    "subtopic": "PCA",
    "source": "תרגול 10",
    "question": "מריצים PCA על dataset עם שני משתנים x1 ו-x2 המקיימים מתאם לינארי מושלם (כל הנקודות בדיוק על קו ישר עולה).\n\nכיצד יתחלק אחוז השונות המוסברת בין שני הרכיבים הראשיים PC1 ו-PC2?",
    "options": [
      "PC1 יסביר כ-70% ו-PC2 כ-30%",
      "PC1 יסביר 100% מהשונות ו-PC2 יסביר 0%",
      "לא ניתן להריץ PCA על נתונים עם מתאם",
      "שני הרכיבים יסבירו 100% כל אחד",
      "כל רכיב יסביר בדיוק 50%"
    ],
    "correctIndex": 1,
    "explanation": "כשכל הנקודות שוכבות בדיוק על קו ישר, כל השונות בנתונים היא לאורך כיוון אחד ויחיד - הקו עצמו.\n\nPCA מוצא את כיווני השונות המקסימלית:\nPC1 יתיישר בדיוק עם הקו - ויתפוס 100% מהשונות.\nPC2 (ניצב ל-PC1) - בכיוון הניצב אין שום פיזור (הנקודות בדיוק על הקו) - 0%.\n\nהמשמעות המעשית: הנתונים הדו-ממדיים הם באמת חד-ממדיים - אפשר לייצג כל נקודה במספר אחד (המיקום על הקו) בלי לאבד כלום. זה בדיוק הרעיון של הורדת ממד: לזרוק רכיבים שלא מסבירים שונות."
  },
  {
    "id": 138,
    "topic": "clustering",
    "subtopic": "PCA",
    "source": "מבחן חזרה + מבחן 2025 סמסטר ב' מועד א'",
    "question": "נתונים שני משתנים x1 ו-x2 עם מתאם חיובי חזק (אך לא מושלם). מגדירים שני רכיבים מנורמלים:\nPC_a = 0.7·x1 + 0.7·x2 (כיוון ה'סכום' - לאורך המגמה המשותפת)\nPC_b = 0.7·x1 - 0.7·x2 (כיוון ה'הפרש' - ניצב למגמה)\n\nאיזה מהרכיבים יסביר אחוז שונות גבוה יותר?",
    "options": [
      "PC_a - במתאם חיובי חזק רוב השונות נמצאת לאורך הכיוון המשותף (האלכסון העולה)",
      "PC_b - ההפרש תמיד מכיל יותר מידע",
      "תלוי בגודל ה-dataset בלבד",
      "שניהם יסבירו בדיוק אותו אחוז",
      "אף אחד מהם - PCA דורש לפחות שלושה משתנים"
    ],
    "correctIndex": 0,
    "explanation": "מתאם חיובי חזק פירושו שהנקודות מתרכזות סביב אלכסון עולה: כש-x1 גדול גם x2 נוטה להיות גדול.\n\nענן הנקודות מוארך לאורך כיוון הסכום (x1 + x2) - שם הפיזור הגדול.\nבכיוון ההפרש (x1 - x2), הניצב לאלכסון, הענן צר - כי המתאם 'קושר' את המשתנים והם לא סוטים הרבה זה מזה.\n\nלכן PC_a (כיוון הסכום) מסביר את רוב השונות ו-PC_b את המעט שנותר.\n\nזו הגרסה ה'רכה' של שאלת המתאם המושלם: ככל שהמתאם מתחזק, חלקו של PC_a שואף ל-100%."
  },
  {
    "id": 139,
    "topic": "clustering",
    "subtopic": "StandardScaler - קוד",
    "source": "מבחן 2025 סמסטר א' מועד א'",
    "question": "נתון קטע הקוד הבא:\n```import numpy as np\n\ndef transform(data):\n    return (data - np.mean(data, axis=0)) / np.std(data, axis=0)\n\ndata = np.array([[1.0], [3.0], [5.0], [7.0], [9.0]])\nprint(transform(data).flatten())```\nמה יודפס, ואיזו טרנספורמציה מבצעת הפונקציה?",
    "options": [
      "בקירוב [-1.41, -0.71, 0, 0.71, 1.41]; זהו נרמול StandardScaler - ממוצע 0 וסטיית תקן 1",
      "[0, 0.25, 0.5, 0.75, 1]; זהו נרמול MinMaxScaler לתחום [0,1]",
      "תתקבל שגיאת ריצה - לא ניתן לחלק מערך במערך",
      "[1, 3, 5, 7, 9]; הפונקציה לא משנה את הנתונים",
      "[-2, -1, 0, 1, 2]; חיסור הממוצע בלבד"
    ],
    "correctIndex": 0,
    "explanation": "הפונקציה מחסרת את הממוצע ומחלקת בסטיית התקן - זהו בדיוק StandardScaler (תקנון z-score).\n\nחישוב:\nממוצע: (1+3+5+7+9)/5 = 5\nסטיות מהממוצע: -4, -2, 0, 2, 4\nסטיית תקן (של האוכלוסייה, כברירת המחדל של numpy): שורש של (16+4+0+4+16)/5 = שורש 8 = 2.83\n\nערכים מתוקננים:\n-4/2.83 = -1.41\n-2/2.83 = -0.71\n0, 0.71, 1.41\n\nהפלט: [-1.41, -0.71, 0, 0.71, 1.41] - ממוצע 0, סטיית תקן 1, והסימטריה של הקלט נשמרת."
  },
  {
    "id": 140,
    "topic": "clustering",
    "subtopic": "StandardScaler - מימושים חלופיים",
    "source": "מבחן 2025 סמסטר א' מועד א'",
    "question": "בהמשך לפונקציית ה-StandardScaler:\n```def transform(data):\n    return (data - np.mean(data, axis=0)) / np.std(data, axis=0)```\nעבור מטריצת נתונים דו-ממדית (שורות = תצפיות, עמודות = features), אילו מהמימושים החלופיים שקולים לפונקציה המקורית?\n\n1. לולאה על העמודות: לכל עמודה בנפרד לחסר את הממוצע שלה ולחלק בסטיית התקן שלה\n2. אותו קוד עם axis=1 במקום axis=0\n3. שימוש ב-sklearn.preprocessing.StandardScaler עם fit_transform\n4. חיסור np.mean(data) (ללא axis) וחלוקה ב-np.std(data) (ללא axis)",
    "options": [
      "אף מימוש אינו שקול",
      "מימושים 1 ו-3 שקולים; 2 ו-4 אינם שקולים",
      "רק מימוש 3 שקול",
      "כל הארבעה שקולים",
      "מימושים 2 ו-4 שקולים; 1 ו-3 אינם"
    ],
    "correctIndex": 1,
    "explanation": "העיקרון: StandardScaler מתקנן כל feature (עמודה) בנפרד - עם הממוצע וסטיית התקן של אותה עמודה. axis=0 ב-numpy מחשב סטטיסטיקה לאורך השורות, כלומר פר-עמודה - נכון.\n\nמימוש 1 שקול: לולאה מפורשת על עמודות עושה בדיוק את זה.\nמימוש 3 שקול: זה בדיוק מה ש-StandardScaler של sklearn עושה.\n\nמימוש 2 לא שקול: axis=1 מחשב ממוצע פר-שורה (פר-תצפית!) - מתקנן כל תצפית ביחס לעצמה במקום כל feature ביחס לעמודה. תוצאה שונה לחלוטין.\nמימוש 4 לא שקול: ללא axis מתקבל ממוצע גלובלי של כל המטריצה - כל העמודות מתוקננות עם אותם מספרים, במקום כל אחת עם שלה."
  },
  {
    "id": 141,
    "topic": "clustering",
    "subtopic": "MinMaxScaler",
    "source": "מבחן 2024 סמסטר ב' מועד א'",
    "question": "מהו הפלט של נרמול MinMaxScaler (לתחום [0,1]) על וקטור העמודה הבא?\n```[[-5], [10], [15], [7]]```",
    "options": [
      "[0, 0.75, 1, 0.6]",
      "[0, 0.5, 1, 0.35]",
      "[-1, 0.67, 1, 0.47]",
      "[0.25, 0.5, 0.75, 1]",
      "[-0.33, 0.67, 1, 0.47]"
    ],
    "correctIndex": 0,
    "explanation": "נוסחת MinMaxScaler:\nערך מנורמל = (ערך פחות מינימום) חלקי (מקסימום פחות מינימום)\n\nכאן: מינימום -5, מקסימום 15, טווח 20.\n\n(-5 - (-5)) / 20 = 0/20 = 0\n(10 - (-5)) / 20 = 15/20 = 0.75\n(15 - (-5)) / 20 = 20/20 = 1\n(7 - (-5)) / 20 = 12/20 = 0.6\n\nהפלט: [0, 0.75, 1, 0.6]\n\nתכונות לזכור: המינימום תמיד הופך ל-0, המקסימום ל-1, וכל השאר נפרסים לינארית ביניהם. בניגוד ל-StandardScaler, כאן הערכים כן חסומים - ואין דרישה לממוצע 0."
  },
  {
    "id": 142,
    "topic": "clustering",
    "subtopic": "feature scaling - למי זה חשוב",
    "source": "מבחן 2024 סמסטר ב' מועד א'",
    "question": "עבור כל אחת מהטענות על feature scaling, סמנו נכון או לא נכון:\n\n1. ביצוע scaling חשוב לפני הרצת אלגוריתם K-Means\n2. ביצוע scaling עשוי לשפר אימון של מודל רגרסיה לוגיסטית (באימון עם gradient descent)\n3. נרמול עם StandardScaler מעביר את הערכים לתחום [0, 1]\n4. ביצוע scaling חשוב לפני אימון רשת נוירונים (MLP עם ReLU)",
    "options": [
      "1 נכון; 2 נכון; 3 נכון; 4 לא נכון",
      "1 נכון; 2 נכון; 3 לא נכון; 4 נכון",
      "כל הטענות נכונות",
      "1 נכון; 2 לא נכון; 3 נכון; 4 נכון",
      "1 לא נכון; 2 נכון; 3 לא נכון; 4 לא נכון"
    ],
    "correctIndex": 1,
    "explanation": "טענה 1 נכונה: K-Means מבוסס מרחקים - feature בסקאלה גדולה משתלט על המרחק ומעוות את האשכולות. scaling קריטי.\n\nטענה 2 נכונה: באימון עם gradient descent, סקאלות שונות יוצרות נוף loss 'מוארך' שמקשה על ההתכנסות (זוכרים את 2x בריבוע מול 20x בריבוע?). scaling מאזן ומאיץ.\n\nטענה 3 לא נכונה - המלכודת הקבועה: StandardScaler נותן ממוצע 0 וסטיית תקן 1, ללא חסימת תחום. מי שמעביר ל-[0,1] הוא MinMaxScaler.\n\nטענה 4 נכונה: רשתות נוירונים מתאמנות בגרדיאנט - אותו נימוק כמו טענה 2, ואף ביתר שאת (יציבות נומרית, אקטיבציות)."
  },
  {
    "id": 143,
    "topic": "clustering",
    "subtopic": "משתנים קטגוריים",
    "source": "מבחן 2023 סמסטר א' מועד א' + תרגול 6 (חזרה ב-4 מבחנים)",
    "question": "אילו מהמשתנים הבאים הם משתנים קטגוריים?\n\n1. קבוצת דם (A, B, AB, O)\n2. השכלה בקטגוריות: יסודית, תיכונית, אקדמאית\n3. מספר תעודת זהות\n4. משקל של תינוק בלידה\n5. מספר שעות שינה ממוצע ביום\n6. סוג חיית מחמד: כלב, חתול, תוכי",
    "options": [
      "כל המשתנים קטגוריים",
      "משתנים 3, 4 ו-5 קטגוריים",
      "משתנים 1 ו-6 בלבד קטגוריים",
      "משתנים 1, 2, 3 ו-6 קטגוריים; 4 ו-5 כמותיים רציפים",
      "משתנים 1, 2 ו-6 בלבד קטגוריים"
    ],
    "correctIndex": 3,
    "explanation": "קטגוריים:\nקבוצת דם - נומינלי קלאסי (אין סדר).\nהשכלה - קטגורי אורדינלי (יש סדר טבעי, אבל עדיין קטגוריות).\nמספר ת\"ז - המלכודת הגדולה! למרות שהוא 'מספר', אין לו שום משמעות כמותית: אי אפשר לחבר, למצע או להשוות גודל. הוא מזהה (identifier) - קטגורי.\nסוג חיית מחמד - נומינלי.\n\nכמותיים:\nמשקל בלידה - רציף, פעולות חשבון משמעותיות.\nשעות שינה - רציף.\n\nהכלל: משתנה הוא קטגורי אם ערכיו הם 'תוויות', גם כשהן כתובות בספרות. השאלה הזו חוזרת כמעט בכל מבחן בווריאציות (מיקוד, מספר טלפון, מספר בית - כולם קטגוריים!)."
  },
  {
    "id": 144,
    "topic": "clustering",
    "subtopic": "משתנים אורדינליים ונומינליים",
    "source": "מבחן 2024 סמסטר ב' מועד א' + מבחן 2025 סמסטר א' מועד א'",
    "question": "בהקשר של משתנים קטגוריים:\n\n(א) איזה מהבאים הוא משתנה קטגורי אורדינלי (בעל סדר)?\n(ב) ואיזה משתנה קטגורי נומינלי (ללא סדר)?\n\n1. רמת חריפות של רוטב: מתון, בינוני, חריף, חריף מאוד\n2. צבע עיניים: חום, כחול, ירוק\n3. מידת חולצה: S, M, L, XL\n4. עיר מגורים",
    "options": [
      "(א) 1 ו-3 אורדינליים\n(ב) 2 ו-4 נומינליים",
      "(א) 1 ו-2 אורדינליים\n(ב) 3 ו-4 נומינליים",
      "(א) כולם אורדינליים\n(ב) אין נומינליים",
      "(א) רק 1 אורדינלי\n(ב) כל השאר נומינליים",
      "(א) 2 ו-4 אורדינליים\n(ב) 1 ו-3 נומינליים"
    ],
    "correctIndex": 0,
    "explanation": "ההבחנה: האם יש סדר טבעי בין הקטגוריות?\n\nאורדינליים (יש סדר):\nחריפות - מתון פחות מבינוני פחות מחריף - סדר ברור.\nמידות חולצה - S קטן מ-M קטן מ-L - סדר ברור.\n(אבל שימו לב: אין 'מרחק' מוגדר - הפער בין S ל-M אינו בהכרח שווה לפער בין L ל-XL. לכן זה עדיין קטגורי ולא כמותי.)\n\nנומינליים (אין סדר):\nצבע עיניים - חום אינו 'גדול' מכחול.\nעיר מגורים - אין סדר טבעי בין ערים.\n\nההשלכה המעשית: משתנה אורדינלי אפשר לעיתים לקודד במספרים סדורים; נומינלי חייב dummy encoding (אחרת כופים סדר מלאכותי - ראו שאלת אזורי המגורים)."
  },
  {
    "id": 145,
    "topic": "clustering",
    "subtopic": "למידה מונחית ולא מונחית",
    "source": "מבחן 2023 סמסטר ב' מועד א' + מבחן 2024 סמסטר א' מועד ב'",
    "question": "סווגו את המשימות הבאות ללמידה מונחית (supervised) או לא מונחית (unsupervised):\n\n1. חיזוי מחיר דירה לפי מאפייניה, בהינתן מחירי עסקאות עבר\n2. חלוקת לקוחות לפלחי שוק לפי דפוסי קנייה, ללא קטגוריות ידועות מראש\n3. זיהוי ספרות בכתב יד, בהינתן תמונות מתויגות\n4. מציאת קבוצות של מסמכים דומים בארכיון גדול",
    "options": [
      "1 ו-4 מונחית; 2 ו-3 לא מונחית",
      "כל הארבע מונחית",
      "כל הארבע לא מונחית",
      "1 ו-2 מונחית; 3 ו-4 לא מונחית",
      "1 ו-3 מונחית; 2 ו-4 לא מונחית"
    ],
    "correctIndex": 4,
    "explanation": "המבחן: האם יש תוויות (labels) באימון?\n\nמונחית - יש 'תשובות נכונות':\nמחירי דירות - כל דוגמת עבר מגיעה עם המחיר האמיתי (רגרסיה).\nספרות בכתב יד - כל תמונה מתויגת בספרה הנכונה (סיווג).\n\nלא מונחית - אין תוויות, מחפשים מבנה:\nפילוח לקוחות - אין 'פלח נכון' ידוע; האלגוריתם (K-Means, DBSCAN...) מגלה קבוצות מהדמיון בנתונים.\nקיבוץ מסמכים - כנ\"ל, אשכולות לפי דמיון תוכן.\n\nוזו הסיבה ש-K-Means נפסל שוב ושוב בשאלות 'איזה מודל מתאים לסיווג': הוא לא מקבל תוויות ולא מנבא מחלקות - הוא כלי לא מונחה."
  }
];

const TOPIC_NAMES = window.TOPIC_NAMES;
const TOPIC_COLORS = window.TOPIC_COLORS;
const QUESTIONS = window.QUESTIONS;
