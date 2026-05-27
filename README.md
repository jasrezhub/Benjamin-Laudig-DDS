# Benjamin Laudig DDS — Website

A clean, modern dental practice website built with plain HTML, CSS, and JavaScript — no frameworks, no build tools. Ready to host on GitHub Pages in minutes.

---

## 📁 File Structure

```
laudig-dental/
├── index.html              ← Homepage (landing page)
├── css/
│   └── style.css           ← All global styles
├── js/
│   └── main.js             ← Interactions (nav, FAQ, form, scroll reveal)
├── images/                 ← Add your photos here
└── pages/
    ├── services.html       ← Full services list
    ├── faq.html            ← FAQ accordion
    ├── insurance.html      ← Insurance & financing
    └── new-patient.html    ← New patient info & forms
```

---

## 🚀 Deploying to GitHub Pages

1. **Create a GitHub repository** (e.g., `laudig-dental` or `your-username.github.io`)

2. **Upload all files** — drag and drop the entire `laudig-dental/` folder contents into the repo root (or use `git push`)

3. **Enable GitHub Pages:**
   - Go to your repo → **Settings** → **Pages**
   - Set Source to: **Deploy from a branch**
   - Branch: `main` (or `master`), Folder: `/ (root)`
   - Click **Save**

4. **Your site will be live** at `https://your-username.github.io/repo-name` within a few minutes.

> **Custom domain:** Add a `CNAME` file to the repo root containing your domain (e.g., `laudigdds.com`), then point your domain's DNS to GitHub Pages.

---

## ✏️ Customization Checklist

### Essential — Update Before Going Live

- [ ] **Phone number** — Search & replace `(800) 555-1234` and `+18005551234`
- [ ] **Email** — Replace `hello@laudigdds.com`
- [ ] **Address** — Replace `123 Smile Street, Suite 200` and `Your City, ST 00000`
- [ ] **Doctor photo** — Replace hero placeholder in `index.html` with `<img src="images/dr-laudig.jpg" alt="Dr. Benjamin Laudig">`
- [ ] **About section** — Fill in dental school, graduation year, associations
- [ ] **Google Maps** — Paste your iframe embed code into the map placeholder in `index.html`
- [ ] **Booking link** — Replace all `https://www.zocdoc.com` links with your actual scheduling URL (Zocdoc, Dentrix, OpenDental, etc.)
- [ ] **Google Reviews link** — Update the "View All Google Reviews" button with your actual Google Business profile link
- [ ] **Hours** — Verify and update office hours in the contact section

### Photos

Add your images to the `images/` folder and update the `photo-item` divs in `index.html`:

```html
<!-- Replace this placeholder div: -->
<div class="photo-item wide">
  <div class="photo-placeholder-icon">...</div>
</div>

<!-- With this: -->
<div class="photo-item wide">
  <img src="../images/office-reception.jpg" alt="Office reception area" />
</div>
```

### Patient Forms

Upload your PDF forms to a `forms/` folder and update the download links in `pages/new-patient.html`:

```html
<a href="../forms/new-patient-registration.pdf" class="btn btn-navy">Download PDF</a>
```

### Stats (Hero Section)

Update `index.html` hero stats to reflect your actual numbers:
- Years of experience
- Google rating  
- Number of patients

### Insurance Logos

Replace the emoji placeholders in `pages/insurance.html` with actual insurance provider logos:
```html
<div class="insurance-logo-placeholder">
  <img src="../images/insurance/delta-dental.png" alt="Delta Dental" style="width:40px;height:auto;">
</div>
```

### In-Office Savings Plan Pricing

Update the prices in `pages/insurance.html` to match your actual plan pricing.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#1a2e4a` | Primary dark, nav, headings |
| `--gold` | `#c9a84c` | Accents, CTAs, section labels |
| `--cream` | `#faf8f4` | Page background |
| `--white` | `#ffffff` | Cards, sections |
| Font (Display) | Playfair Display | Headings, hero |
| Font (Body) | DM Sans | Body text, UI |

To change colors, update the CSS variables at the top of `css/style.css`.

---

## 📞 Support

For questions about customizing this site, contact your web developer or refer to the comments throughout the HTML files.
