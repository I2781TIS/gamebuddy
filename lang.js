// GameBuddy – Language switcher
(function () {
  const T = {
    he: {
      dir: 'rtl', lang: 'he',
      'toggle.flag': '🇺🇸', 'toggle.label': 'English',

      // ── NAV ──
      'nav.features': 'יכולות', 'nav.why': 'למה אנחנו', 'nav.pricing': 'מחירים',
      'nav.login': 'כניסה', 'nav.login.arrow': 'כניסה →',

      // ── HERO ──
      'hero.badge': 'הפלטפורמה מספר 1 לשחקני פורטנייט בישראל',
      'hero.h1': 'תמצא את<br /><span class="gradient-text">שותף המשחק</span><br />המושלם שלך',
      'hero.sub': 'נמאס לך מ-Solo Queue עם שחקנים שמורידים לך את הרמה? GameBuddy מחבר אותך לשחקנים ישראלים ברמה שלך — ועם הזדמנות לזכות בפרסים בתוך המשחק.',
      'hero.btn.primary': 'הצטרפו בחינם →', 'hero.btn.secondary': 'גלה איך זה עובד',
      'hero.stat1': 'מותאם לישראל', 'hero.stat2': 'מיתוח לפי רמה אמיתית', 'hero.stat3': 'פרסים בתוך המשחק',

      // ── PROBLEM / SOLUTION ──
      'ps.tag': 'הבעיה והפתרון',
      'ps.title': 'Solo Queue שבור.<br />אנחנו כאן לתקן אותו.',
      'ps.sub': 'כל שחקן רציני מכיר את הכאב — אתה ברמה גבוהה, אבל תמיד מוצמד לשחקנים שמורידים לך את הביצועים.',
      'ps.problem.h3': 'הבעיה הנוכחית',
      'ps.problem.p': 'ב-Solo Queue של פורטנייט, אתה לא שולט על מי הקבוצה שלך. שחקנים ברמות שונות מוצמדים יחד ויוצרים חוויה מתסכלת — וסיכוי נמוך יותר לנצח.<br /><br /><strong style="color:#f87171;">המתחרים</strong> ניסו לפתור את זה, אבל מאגר השחקנים שלהם מצומצם מדי ולא ממוקד בישראל.',
      'ps.solution.h3': 'הפתרון שלנו',
      'ps.solution.p': 'GameBuddy בונה מאגר שחקנים <strong style="color:#c084fc;">ממוקד ישראל</strong> — שחקנים שנרשמו, אומתו לפי API, וניתן לסנן לפי רמה אמיתית.<br /><br />כך תוכל <strong style="color:#c084fc;">לבחור עם מי לשחק</strong> לפני שאתה נכנס לגיים — ולזכות בפרסים בדרך.',

      // ── FEATURES ──
      'feat.tag': 'יכולות עיקריות', 'feat.title': 'כל מה שצריך<br />כדי לשחק טוב יותר',
      'feat1.h3': 'חיפוש שחקנים לפי רמה', 'feat1.p': 'מחוברים ל-API הרשמי של פורטנייט — כל שחקן מאומת לפי הסטטיסטיקות האמיתיות שלו. מצא שחקנים בדיוק ברמה שלך.',
      'feat2.h3': 'פרסים בתוך המשחק', 'feat2.p': 'שחקנים שמשתמשים ב-GameBuddy ומנצחים יחד זכאים לפרסים אקסקלוסיביים בתוך פורטנייט. תשחקו ותרוויחו.',
      'feat3.h3': 'פרופיל אישי מלא', 'feat3.p': 'אזור אישי מתקדם — הסטטיסטיקות שלך, הסגנון שלך, הזמינות שלך. הוסף מידע ותן לשחקנים אחרים להכיר אותך.',
      'feat4.h3': 'הודעות ישירות', 'feat4.p': 'דברו לפני שאתם משחקים. הכירו אחד את השני, תאמו אסטרטגיה, וכנסו לגיים מוכנים ומסונכרנים.',

      // ── WHY ──
      'why.tag': 'למה GameBuddy', 'why.title': 'אנחנו לא כמו המתחרים',
      'why.sub': 'המתחרים שלנו הצליחו להכנס לשוק אבל לא לפתור את הבעיה האמיתית. אנחנו ממוקדים בישראל, ונבנה את המאגר הנכון.',
      'why1.h4': 'ממוקד ישראל', 'why1.p': 'שפה, קהילה, שרתים — הכל מותאם לשחקן הישראלי. לא עוד שחקנים אקראיים מחו"ל.',
      'why2.h4': 'מיתוח לפי נתונים אמיתיים', 'why2.p': 'לא על סמך הצהרה עצמית — אלא על פי ה-API הרשמי של פורטנייט.',
      'why3.h4': 'פרסים שמניעים שחקנים', 'why3.p': 'אינסנטיב אמיתי להשתמש בפלטפורמה — פרסים בתוך המשחק שכל שחקן רוצה.',
      'cmp.feature': 'יכולת', 'cmp.competitors': 'המתחרים',
      'cmp.api': 'מיתוח ב-API', 'cmp.israeli': 'מאגר ישראלי', 'cmp.prizes': 'פרסים במשחק',
      'cmp.messages': 'הודעות ישירות', 'cmp.profile': 'פרופיל מפורט', 'cmp.hebrew': 'בעברית מלאה',

      // ── PRICING ──
      'price.tag': 'מחירים', 'price.title': 'בחרו את התוכנית המתאימה לכם',
      'price.sub': 'התחילו בחינם. שדרגו כשאתם מוכנים. מנוי שנתי עם <strong style="color:#4ade80;">10% הנחה</strong>.',
      'price.monthly': 'חודשי', 'price.annual': 'שנתי', 'price.save': 'חסכו 10%',
      'price.free.name': 'חינמי', 'price.free.period': 'לתמיד',
      'price.free.f1': 'גישה למאגר שחקנים', 'price.free.f2': 'פרופיל אישי בסיסי',
      'price.free.f3': 'חיפוש בסיסי לפי רמה', 'price.free.f4': 'פרסים בסיסיים במשחק', 'price.free.f5': 'הודעות ישירות',
      'price.free.x1': 'פרופיל מורחב', 'price.free.x2': 'סינון מתקדם', 'price.free.x3': 'התראות בזמן אמת', 'price.free.x4': 'היסטוריית משחקים',
      'price.free.btn': 'התחילו בחינם',
      'price.premium.badge': '⭐ הכי פופולרי', 'price.premium.name': 'פרימיום',
      'price.premium.display': 'בקרוב', 'price.premium.period': 'מחיר יוכרז בקרוב',
      'price.premium.f1': 'כל מה שבחינמי', 'price.premium.f2': 'פרסים פרימיום — שווים יותר 🔥',
      'price.premium.f3': 'הודעות ישירות ללא הגבלה + העדפה בתור', 'price.premium.f4': 'פרופיל מורחב + בדג\' פרימיום',
      'price.premium.f5': 'עדיפות בחיפוש — מופיע ראשון', 'price.premium.f6': 'סינון מתקדם (KD, Win Rate, שעות)',
      'price.premium.f7': 'התראות בזמן אמת', 'price.premium.f8': 'היסטוריית משחקים', 'price.premium.f9': 'תמיכה מועדפת',
      'price.premium.btn': 'הירשמו לרשימת המתנה →',
      'price.note': '* מחירי פרימיום יוכרזו בקרוב. הירשמו לרשימת ההמתנה וקבלו הנחת מקדימים.',

      // ── CTA ──
      'cta.tag': 'גישה מוקדמת', 'cta.title': 'הצטרפו לבטא של GameBuddy',
      'cta.sub': 'היו מהראשונים לקבל גישה לדאשבורד המלא — בחינם, בלי כרטיס אשראי.',
      'cta.btn': 'הצטרפו עכשיו — בחינם 🎮',

      // ── SIGNUP MODAL ──
      'signup.beta': '🚀 דאשבורד בטא — גישה מוקדמת', 'signup.title': 'יצירת חשבון חינמי',
      'signup.sub': 'מלאו פרטים ותקבלו גישה מיידית לדאשבורד',
      'signup.fname': 'שם פרטי', 'signup.lname': 'שם משפחה', 'signup.email': 'כתובת מייל',
      'signup.pass': 'סיסמא', 'signup.confirm': 'אימות סיסמא',
      'signup.rank': 'רמה נוכחית', 'signup.style': 'סגנון משחק',
      'signup.btn': 'הצטרפו לבטא — בחינם 🎮',
      'signup.terms': 'בלחיצה על הכפתור אתם מסכימים לתנאי השימוש ומדיניות הפרטיות',
      'signup.success.title': 'ברוכים הבאים ל-GameBuddy!',
      'signup.success.sub': 'החשבון שלך נוצר בהצלחה. לחצו להיכנס לדאשבורד',
      'signup.success.btn': 'כניסה לדאשבורד →',

      // ── LOGIN MODAL ──
      'login.title': 'כניסה לחשבון', 'login.sub': 'הכנס אימייל וסיסמא להתחברות',
      'login.email': 'כתובת מייל', 'login.pass': 'סיסמא',
      'login.btn': 'כניסה לדאשבורד →', 'login.noaccount': 'אין לך חשבון?', 'login.register': 'הצטרפו בחינם',

      // ── FOOTER ──
      'footer.brand': 'הפלטפורמה הישראלית למציאת שותפי משחק בפורטנייט — לפי רמה, לפי בחירה שלך.',
      'footer.platform': 'פלטפורמה', 'footer.features': 'יכולות', 'footer.pricing': 'מחירים', 'footer.join': 'הצטרפו',
      'footer.contact': 'צרו קשר', 'footer.legal': 'משפטי', 'footer.privacy': 'מדיניות פרטיות', 'footer.terms': 'תנאי שימוש',
      'footer.copy': '© 2026 GameBuddy. כל הזכויות שמורות.', 'footer.made': 'עוצב ונבנה בישראל 🇮🇱',

      // ── PRESENTATION ──
      'pres.s1.badge': 'הפלטפורמה מספר 1 לשחקני פורטנייט בישראל', 'pres.s1.sub': 'מצא את שותף המשחק המושלם שלך',
      'pres.s2.tag': 'הבעיה', 'pres.s2.title': 'למה לשחק לבד זה סיוט?<br /><span class="grad">(Queue שבור)</span>',
      'pres.p1.h3': 'Matchmaking אקראי ומתסכל', 'pres.p1.p': 'אין שליטה על מי בקבוצה — שחקנים ברמות שונות מוצמדים יחד',
      'pres.p2.h3': 'חוסר תקשורת והפסדים מיותרים', 'pres.p2.p': 'אין תיאום לפני הגיים, אין סנכרון — מפסידים ממשחקים שהיה אפשר לנצח',
      'pres.p3.h3': 'פתרונות גלובליים ולא מותאמים לישראל', 'pres.p3.p': 'כל הפלטפורמות הקיימות הן בחו"ל, לא בעברית, לא לשרתים שלנו',
      'pres.s3.tag': 'הפתרון', 'pres.s3.title': 'GameBuddy –<br /><span class="grad">הדור הבא של ה-Matchmaking</span>',
      'pres.f1.h3': 'אימות API', 'pres.f1.p': 'מיתוח לפי ה-API הרשמי של פורטנייט — נתונים אמיתיים, לא הצהרה עצמית',
      'pres.f2.h3': 'קהילה ישראלית', 'pres.f2.p': 'מאגר שחקנים ישראלי, בעברית, עם שרתים מתאימים',
      'pres.f3.h3': 'חיפוש חכם', 'pres.f3.p': 'סנן לפי רמה, סגנון משחק, זמינות — ומצא בדיוק מה שאתה מחפש',
      'pres.f4.h3': 'פרסים וחיבור', 'pres.f4.p': 'הודעות ישירות + פרסים בתוך המשחק לשחקנים שמנצחים יחד',
      'pres.s4.tag': 'השוואה', 'pres.s4.title': 'למה <span class="grad">GameBuddy</span> ולא המתחרים?',
      'pres.c1': 'יכולת', 'pres.c2': 'המתחרים', 'pres.c.api': 'מיתוח ב-API',
      'pres.c.israeli': 'מאגר ישראלי', 'pres.c.prizes': 'פרסים במשחק', 'pres.c.msg': 'הודעות ישירות', 'pres.c.heb': 'בעברית מלאה',
      'pres.s5.tag': 'מודל עסקי', 'pres.s5.title': 'מודל עסקי <span class="grad">וצמיחה</span>',
      'pres.free.period': 'לתמיד', 'pres.free.f1': 'גישה בסיסית לפלטפורמה', 'pres.free.f2': 'חיפוש שחקנים', 'pres.free.f3': 'פרופיל אישי', 'pres.free.f4': 'חיבור עם שותפים',
      'pres.prem.period': 'לחודש', 'pres.prem.f1': 'כל מה שב-Free', 'pres.prem.f2': 'חיפוש מתקדם ופילטרים', 'pres.prem.f3': 'פרסים בתוך המשחק', 'pres.prem.f4': 'פרופיל VIP מורחב',
      'pres.s6.tag': 'סיכום', 'pres.s6.quote': '"Queue שבור.<br /><span class="grad">אנחנו כאן לתקן אותו.</span>"',
      'pres.s6.sub': 'GameBuddy — הפלטפורמה הישראלית הראשונה שמחברת שחקני פורטנייט לפי רמה אמיתית, עם פרסים, קהילה ועברית מלאה.',
      'pres.s6.btn': 'צור קשר ←', 'pres.keynav': '← → לניווט &nbsp;|&nbsp; Space להמשך',

      // ── DASHBOARD ──
      'dash.subtitle': 'הפורטל שלי', 'dash.plan': 'תוכנית',
      'dash.nav.home': 'דף הבית', 'dash.nav.profile': 'הפרופיל שלי', 'dash.nav.search': 'חפש שחקנים',
      'dash.nav.messages': 'הודעות', 'dash.nav.prizes': 'פרסים', 'dash.nav.settings': 'הגדרות', 'dash.nav.logout': 'יציאה',
      'dash.welcome': 'ברוך הבא', 'dash.stats.title': 'הסטטיסטיקות שלך',
      'dash.upgrade': 'שדרג לפרימיום', 'dash.upgrade.sub': 'קבל גישה לכל הפיצ\'רים',
    },

    en: {
      dir: 'ltr', lang: 'en',
      'toggle.flag': '🇮🇱', 'toggle.label': 'עברית',

      // ── NAV ──
      'nav.features': 'Features', 'nav.why': 'Why Us', 'nav.pricing': 'Pricing',
      'nav.login': 'Login', 'nav.login.arrow': 'Login →',

      // ── HERO ──
      'hero.badge': "Israel's #1 Fortnite Gaming Platform",
      'hero.h1': 'Find Your<br /><span class="gradient-text">Perfect Gaming</span><br />Partner',
      'hero.sub': "Tired of Solo Queue with players who drag you down? GameBuddy connects you with Israeli players at your level — with a chance to win in-game prizes.",
      'hero.btn.primary': 'Join Free →', 'hero.btn.secondary': 'See How It Works',
      'hero.stat1': 'Built for Israel', 'hero.stat2': 'API-Verified Rankings', 'hero.stat3': 'In-Game Prizes',

      // ── PROBLEM / SOLUTION ──
      'ps.tag': 'Problem & Solution',
      'ps.title': 'Solo Queue is Broken.<br />We\'re Here to Fix It.',
      'ps.sub': "Every serious player knows the pain — you're skilled, but always paired with players who hold you back.",
      'ps.problem.h3': 'The Current Problem',
      'ps.problem.p': "In Fortnite's Solo Queue, you have no control over your teammates. Players of all levels are grouped together, creating frustration — and lower win chances.<br /><br /><strong style=\"color:#f87171;\">Competitors</strong> tried to solve this, but their player pools are too small and not focused on Israel.",
      'ps.solution.h3': 'Our Solution',
      'ps.solution.p': 'GameBuddy builds an <strong style="color:#c084fc;">Israel-focused</strong> player pool — registered, API-verified, filterable by real skill level.<br /><br />You can <strong style="color:#c084fc;">choose who to play with</strong> before entering the game — and win prizes along the way.',

      // ── FEATURES ──
      'feat.tag': 'Key Features', 'feat.title': 'Everything You Need<br />to Play Better',
      'feat1.h3': 'Find Players by Rank', 'feat1.p': 'Connected to the official Fortnite API — every player verified by real stats. Find players at exactly your skill level.',
      'feat2.h3': 'In-Game Prizes', 'feat2.p': 'Players who use GameBuddy and win together earn exclusive in-game Fortnite prizes. Play and earn.',
      'feat3.h3': 'Full Personal Profile', 'feat3.p': 'Advanced personal area — your stats, your style, your availability. Add info and let other players get to know you.',
      'feat4.h3': 'Direct Messages', 'feat4.p': 'Talk before you play. Get to know each other, coordinate strategy, and enter the game ready and in sync.',

      // ── WHY ──
      'why.tag': 'Why GameBuddy', 'why.title': "We're Not Like the Competition",
      'why.sub': "Our competitors entered the market but didn't solve the real problem. We're focused on Israel and building the right player pool.",
      'why1.h4': 'Israel-Focused', 'why1.p': 'Language, community, servers — everything tailored for the Israeli player. No more random players from abroad.',
      'why2.h4': 'Real Data Rankings', 'why2.p': 'Not self-declared — ranked by the official Fortnite API.',
      'why3.h4': 'Prizes That Drive Players', 'why3.p': 'A real incentive to use the platform — in-game prizes every player wants.',
      'cmp.feature': 'Feature', 'cmp.competitors': 'Competitors',
      'cmp.api': 'API Ranking', 'cmp.israeli': 'Israeli Pool', 'cmp.prizes': 'In-Game Prizes',
      'cmp.messages': 'Direct Messages', 'cmp.profile': 'Detailed Profile', 'cmp.hebrew': 'Full Hebrew',

      // ── PRICING ──
      'price.tag': 'Pricing', 'price.title': 'Choose the Plan That Works for You',
      'price.sub': 'Start free. Upgrade when ready. Annual plan with <strong style="color:#4ade80;">10% discount</strong>.',
      'price.monthly': 'Monthly', 'price.annual': 'Annual', 'price.save': 'Save 10%',
      'price.free.name': 'Free', 'price.free.period': 'Forever',
      'price.free.f1': 'Player pool access', 'price.free.f2': 'Basic personal profile',
      'price.free.f3': 'Basic rank search', 'price.free.f4': 'Basic in-game prizes', 'price.free.f5': 'Direct messages',
      'price.free.x1': 'Extended profile', 'price.free.x2': 'Advanced filters', 'price.free.x3': 'Real-time alerts', 'price.free.x4': 'Match history',
      'price.free.btn': 'Start Free',
      'price.premium.badge': '⭐ Most Popular', 'price.premium.name': 'Premium',
      'price.premium.display': 'Coming Soon', 'price.premium.period': 'Price announced soon',
      'price.premium.f1': 'Everything in Free', 'price.premium.f2': 'Premium prizes — worth more 🔥',
      'price.premium.f3': 'Unlimited direct messages + queue priority', 'price.premium.f4': 'Extended profile + Premium badge',
      'price.premium.f5': 'Search priority — appear first', 'price.premium.f6': 'Advanced filters (KD, Win Rate, hours)',
      'price.premium.f7': 'Real-time alerts', 'price.premium.f8': 'Match history', 'price.premium.f9': 'Priority support',
      'price.premium.btn': 'Join Waitlist →',
      'price.note': '* Premium pricing announced soon. Join the waitlist and get an early-adopter discount.',

      // ── CTA ──
      'cta.tag': 'Early Access', 'cta.title': 'Join the GameBuddy Beta',
      'cta.sub': 'Be among the first to get full dashboard access — free, no credit card required.',
      'cta.btn': 'Join Now — Free 🎮',

      // ── SIGNUP MODAL ──
      'signup.beta': '🚀 Beta Dashboard — Early Access', 'signup.title': 'Create a Free Account',
      'signup.sub': 'Fill in your details and get instant dashboard access',
      'signup.fname': 'First Name', 'signup.lname': 'Last Name', 'signup.email': 'Email Address',
      'signup.pass': 'Password', 'signup.confirm': 'Confirm Password',
      'signup.rank': 'Current Rank', 'signup.style': 'Play Style',
      'signup.btn': 'Join Beta — Free 🎮',
      'signup.terms': 'By clicking you agree to the Terms of Service and Privacy Policy',
      'signup.success.title': 'Welcome to GameBuddy!',
      'signup.success.sub': 'Your account was created successfully. Click to enter the dashboard.',
      'signup.success.btn': 'Go to Dashboard →',

      // ── LOGIN MODAL ──
      'login.title': 'Sign In', 'login.sub': 'Enter your email and password to log in',
      'login.email': 'Email Address', 'login.pass': 'Password',
      'login.btn': 'Go to Dashboard →', 'login.noaccount': "Don't have an account?", 'login.register': 'Join Free',

      // ── FOOTER ──
      'footer.brand': "Israel's platform for finding Fortnite gaming partners — by rank, by your choice.",
      'footer.platform': 'Platform', 'footer.features': 'Features', 'footer.pricing': 'Pricing', 'footer.join': 'Join',
      'footer.contact': 'Contact', 'footer.legal': 'Legal', 'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms of Service',
      'footer.copy': '© 2026 GameBuddy. All rights reserved.', 'footer.made': 'Designed & built in Israel 🇮🇱',

      // ── PRESENTATION ──
      'pres.s1.badge': "Israel's #1 Fortnite Gaming Platform", 'pres.s1.sub': 'Find Your Perfect Gaming Partner',
      'pres.s2.tag': 'The Problem', 'pres.s2.title': 'Why Playing Solo is a Nightmare?<br /><span class="grad">(Broken Queue)</span>',
      'pres.p1.h3': 'Random & Frustrating Matchmaking', 'pres.p1.p': "No control over your team — players of all levels grouped together",
      'pres.p2.h3': 'No Communication, Needless Losses', 'pres.p2.p': 'No pre-game coordination — losing games that could have been won',
      'pres.p3.h3': 'Global Solutions Not Built for Israel', 'pres.p3.p': 'All existing platforms are abroad, not in Hebrew, not on our servers',
      'pres.s3.tag': 'The Solution', 'pres.s3.title': 'GameBuddy –<br /><span class="grad">Next-Gen Matchmaking</span>',
      'pres.f1.h3': 'API Verification', 'pres.f1.p': 'Ranked by the official Fortnite API — real data, not self-declaration',
      'pres.f2.h3': 'Israeli Community', 'pres.f2.p': 'Israeli player pool, in Hebrew, with the right servers',
      'pres.f3.h3': 'Smart Search', 'pres.f3.p': 'Filter by rank, play style, availability — find exactly what you need',
      'pres.f4.h3': 'Prizes & Connection', 'pres.f4.p': 'Direct messages + in-game prizes for players who win together',
      'pres.s4.tag': 'Comparison', 'pres.s4.title': 'Why <span class="grad">GameBuddy</span> over the Competition?',
      'pres.c1': 'Feature', 'pres.c2': 'Competitors', 'pres.c.api': 'API Ranking',
      'pres.c.israeli': 'Israeli Pool', 'pres.c.prizes': 'In-Game Prizes', 'pres.c.msg': 'Direct Messages', 'pres.c.heb': 'Full Hebrew',
      'pres.s5.tag': 'Business Model', 'pres.s5.title': 'Business Model <span class="grad">& Growth</span>',
      'pres.free.period': 'Forever', 'pres.free.f1': 'Basic platform access', 'pres.free.f2': 'Player search', 'pres.free.f3': 'Personal profile', 'pres.free.f4': 'Partner matching',
      'pres.prem.period': 'per month', 'pres.prem.f1': 'Everything in Free', 'pres.prem.f2': 'Advanced search & filters', 'pres.prem.f3': 'In-game prizes', 'pres.prem.f4': 'Extended VIP profile',
      'pres.s6.tag': 'Summary', 'pres.s6.quote': '"Broken Queue.<br /><span class="grad">We\'re here to fix it.</span>"',
      'pres.s6.sub': "GameBuddy — Israel's first platform connecting Fortnite players by real skill level, with prizes, community, and full support.",
      'pres.s6.btn': 'Contact Us →', 'pres.keynav': '← → to navigate &nbsp;|&nbsp; Space to continue',

      // ── DASHBOARD ──
      'dash.subtitle': 'My Portal', 'dash.plan': 'Plan',
      'dash.nav.home': 'Home', 'dash.nav.profile': 'My Profile', 'dash.nav.search': 'Find Players',
      'dash.nav.messages': 'Messages', 'dash.nav.prizes': 'Prizes', 'dash.nav.settings': 'Settings', 'dash.nav.logout': 'Logout',
      'dash.welcome': 'Welcome', 'dash.stats.title': 'Your Stats',
      'dash.upgrade': 'Upgrade to Premium', 'dash.upgrade.sub': 'Get access to all features',
    }
  };

  // ── APPLY LANGUAGE ──
  function apply(lang) {
    const t = T[lang];
    if (!t) return;

    // Set document direction and language
    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', t.lang);

    // Replace all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Replace placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Update toggle button
    const btn = document.getElementById('gb-lang-toggle');
    if (btn) {
      btn.querySelector('.gb-flag').textContent = t['toggle.flag'];
      btn.querySelector('.gb-label').textContent = t['toggle.label'];
    }

    localStorage.setItem('gb_lang', lang);
    window._gbLang = lang;
  }

  // ── TOGGLE ──
  window.gbToggleLang = function () {
    apply(window._gbLang === 'en' ? 'he' : 'en');
  };

  // ── INJECT BUTTON STYLE ──
  function injectStyle() {
    if (document.getElementById('gb-lang-style')) return;
    const s = document.createElement('style');
    s.id = 'gb-lang-style';
    s.textContent = `
      #gb-lang-toggle {
        display: inline-flex; align-items: center; gap: 7px;
        background: rgba(124,58,237,0.15);
        border: 1px solid rgba(124,58,237,0.4);
        border-radius: 50px; padding: 6px 14px;
        cursor: pointer; font-size: 0.85rem; font-weight: 600;
        color: #c084fc; transition: background .2s, border-color .2s;
        font-family: inherit;
      }
      #gb-lang-toggle:hover { background: rgba(124,58,237,0.3); border-color: rgba(168,85,247,0.6); }
    `;
    document.head.appendChild(s);
  }

  // ── INJECT BUTTON INTO NAV ──
  function injectButton() {
    if (document.getElementById('gb-lang-toggle')) return;
    const btn = document.createElement('button');
    btn.id = 'gb-lang-toggle';
    btn.onclick = window.gbToggleLang;
    btn.innerHTML = '<span class="gb-flag">🇺🇸</span><span class="gb-label">English</span>';

    // Try common nav containers
    const nav = document.querySelector('nav');
    if (nav) nav.appendChild(btn);
  }

  // ── INIT ──
  function init() {
    injectStyle();
    injectButton();
    const saved = localStorage.getItem('gb_lang') || 'he';
    window._gbLang = 'he'; // start as he so apply() will correctly set
    apply(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
