# Bewerbungs-Landingpage — CLAUDE.md

## ما هو المشروع
صفحة هبوط شخصية باللغة الألمانية لـ **Mhd Noureddin Al Samman**، تُستخدم كـ Bewerbungsseite عند التقدم لوظائف في ألمانيا.

المشروع موجود على GitHub Pages تحت:
`https://noorsamman.github.io/Bewerbungs-Landingpage/`

---

## هيكل الملفات

```
Bewerbungs-Landingpage/
├── index.html       ← الصفحة الرئيسية (المصدر)
├── style.css        ← كل التنسيقات
├── docs/
│   ├── index.html   ← نسخة GitHub Pages (تُزامن يدوياً)
│   └── styles.css   ← نسخة GitHub Pages من style.css
├── CLAUDE.md        ← هذا الملف
└── PROJECT_HISTORY.md
```

> **مهم:** `docs/` ليست مصدر الحقيقة — بعد أي تعديل على الملفات الرئيسية يجب تشغيل:
> ```bash
> cp index.html docs/index.html
> sed -i 's|href="style.css"|href="styles.css"|' docs/index.html
> cp style.css docs/styles.css
> ```

---

## محتوى الصفحة

### معلومات صاحب الصفحة
| الحقل | القيمة |
|-------|--------|
| الاسم الكامل | Mhd Noureddin Al Samman |
| المسمى الوظيفي | Angehender Fachinformatiker für Systemintegration |
| الموقع | Nürnberg, Bayern |
| البريد | noorsamman33@gmail.com |
| الهاتف | +49 176 82300010 |
| GitHub | https://github.com/noorsamman |
| LinkedIn | https://www.linkedin.com/in/mhd-noureddin-al-samman-b71182382 |

### اللغات
| اللغة | المستوى |
|-------|---------|
| Deutsch | C1 |
| Englisch | C1 |
| Arabisch | Muttersprache |

### الإحصائيات (About section)
- IT-Umschulung gestartet: **08/2025**
- Projekte umgesetzt: **4**
- Schwerpunkte: Linux · Cloud · KI

---

## أقسام الصفحة

1. **Header** — sticky مع backdrop blur، اسم كامل + nav links
2. **Hero** — badge "Offen für neue Stellen"، عنوان gradient، زري Email وTelefon
3. **Über mich** — نص صادق عن الـ Umschulung + كروت إحصائيات
4. **Skills** — tags المهارات (highlight للمهارات الرئيسية)
5. **Projekte** — featured card للـ AI Secretary + 3 cards عادية
6. **Kontakt** — Email، Telefon، GitHub، LinkedIn + قائمة اللغات
7. **Footer** — اسم كامل + مسمى + Nürnberg

---

## المشاريع الأربعة

### 1. AI Secretary Platform (Hauptprojekt - featured card)
- n8n Workflows، OpenRouter، Telegram API، PostgreSQL، AI

### 2. Cloud & Server Infrastructure
- Linux، Oracle Cloud، SSH، Docker

### 3. Windows Server Netzwerk-Labor
- Windows Server، Active Directory، DNS، DHCP، PowerShell

### 4. Portfolio-Webseite
- HTML، CSS، GitHub Pages

---

## قرارات التصميم

- **Font:** Inter (Google Fonts)
- **Primary color:** `#2563eb`
- **Accent:** `#7c3aed`
- **Background:** `#f8fafc` (رمادي فاتح جداً)
- **Cards:** border + subtle shadow، border-radius 12–20px
- **Featured card:** gradient خلفية `#f0f5ff → #faf5ff` + badge
- **Responsive breakpoints:** 768px و480px

---

## ما يمكن إضافته مستقبلاً
- [ ] زر تحميل CV (PDF)
- [ ] Favicon
- [ ] Meta description للـ SEO
- [ ] Dark mode
