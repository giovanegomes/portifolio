# Personal Portfolio & Curriculum Vitae

> **Software Engineer / AI Specialist** &bull; Bilingual Portfolio & Printable Resume crafted with pure HTML5, CSS3, and modern Vanilla JavaScript (ES6+), optimized for AI-driven pair programming through Google Antigravity.

---

## ⚡ Highlights & Key Features

- **Zero-Dependency Architecture**: No npm packages, bundlers, or frameworks required. Instant load speed, zero security vulnerabilities, and 100/100 Lighthouse performance.
- **Bilingual Support (EN / PT-BR)**: Dynamic client-side language switching between English and Brazilian Portuguese with `localStorage` persistence.
- **Printable Resume to PDF**: Dedicated `@media print` stylesheet formatted specifically for A4/Letter paper to save or print a clean, professional, unbranded 1–2 page resume directly from any browser.
- **Dual Theme (Dark / Light)**: Full CSS custom property token system with seamless dark and light modes, respecting OS preference (`prefers-color-scheme`) and storing user choice.
- **AI-Driven Data Decoupling (`AGENTS.md` + `js/data.js`)**: All personal details, work history, education, skills, and projects live in `js/data.js`. Any Antigravity AI agent can update or add entries cleanly without risking breaking HTML layouts.
- **Project Showcase & Filter**: Filter projects by categories (*AI & Agents*, *Full Stack*, *Frontend*) with accessible native `<dialog>` modal deep dives.
- **Full Accessibility (a11y)**: Semantic HTML5, skip-to-content links, ARIA labels, accessible focus rings, and reduced motion compliance.

---

## 📁 Project Structure

```
portifolio/
├── AGENTS.md                  # Antigravity project rules & guidelines
├── README.md                  # Documentation and usage guide
├── index.html                 # Semantic HTML5 shell
├── server.js                  # Zero-dependency local preview server
├── css/
│   ├── variables.css          # Design system tokens (colors, fonts, light/dark themes)
│   ├── base.css               # Reset, typography, utility classes
│   ├── layout.css             # Navigation, containers, sections, responsive grids
│   ├── components.css         # Buttons, timeline, cards, modal, skill pills, toggles
│   ├── print.css              # Print & PDF export formatting (@media print)
│   └── animations.css         # Transitions, pulse effects, scroll reveal observers
├── js/
│   ├── data.js                # Centralized single source of truth (bilingual content)
│   ├── render.js              # Dynamic DOM generation engine
│   ├── theme.js               # Theme manager with localStorage persistence
│   ├── navigation.js          # Mobile drawer, smooth scroll, ScrollSpy
│   └── app.js                 # App coordinator, language switch, filters, modal, print
└── assets/
    ├── icons/                 # SVG icon assets
    └── images/                # Profile photo and project media
```

---

## 🚀 Running Locally

You can run the portfolio locally without installing any tools:

### Option 1: Using Antigravity's Built-in Node (`agy-node`)
```powershell
& "C:\Users\giovane.gomes\AppData\Roaming\Antigravity\bin\agy-node.cmd" server.js 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Direct Browser Open
Double-click `index.html` or open it directly in Google Chrome, Edge, Firefox, or Safari.

---

## 🛠️ How to Customize & Update Content

### Adding / Editing Projects
Open `js/data.js` and add an object to `portfolioData.projects`:
```javascript
{
  id: "my-new-project",
  category: "ai", // "ai" | "fullstack" | "frontend"
  featured: true,
  title: {
    en: "New AI Project",
    pt: "Novo Projeto de IA"
  },
  shortDescription: {
    en: "Brief project summary...",
    pt: "Resumo do projeto..."
  },
  longDescription: {
    en: "Detailed project deep dive...",
    pt: "Visão detalhada do projeto..."
  },
  technologies: ["Python", "Gemini API", "TypeScript"],
  highlights: {
    en: ["Key achievement 1", "Key achievement 2"],
    pt: ["Conquista 1", "Conquista 2"]
  },
  demoUrl: "https://demo.example.com",
  repoUrl: "https://github.com/your-username/repo",
  badge: "AI & Agents"
}
```

### Adding / Editing Experience in Resume
Open `js/data.js` and edit `portfolioData.resume.experience`:
```javascript
{
  id: "exp-new",
  role: {
    en: "Lead AI Engineer",
    pt: "Engenheiro Líder de IA"
  },
  company: "Company Name",
  period: { en: "2025 - Present", pt: "2025 - Presente" },
  location: "Remote",
  highlights: {
    en: ["Architected...", "Delivered..."],
    pt: ["Arquitetou...", "Entregou..."]
  },
  technologies: ["Node.js", "Python", "Cloud"]
}
```

---

## 🖨️ Exporting Resume to PDF

1. Click the **"Print / Save PDF"** button in the Hero section or the Resume section (or press `Ctrl + P` / `Cmd + P`).
2. In the browser print dialog:
   - **Destination**: *Save as PDF*
   - **Layout**: *Portrait*
   - **Pages**: *All* (or select pages 1–2)
   - **Background graphics**: *Checked* (optional)
3. Click **Save**.

The dedicated `css/print.css` automatically formats the resume for clean, unbranded printing, removing interactive headers, footers, buttons, and animations.

---

## 🌐 Deployment

Since this project uses pure vanilla HTML, CSS, and JS with zero build steps, you can deploy it in seconds:

- **GitHub Pages**: Push this repository to GitHub, go to *Settings > Pages*, and select the `main` branch.
- **Vercel / Netlify**: Connect the repository or drag-and-drop the directory into the dashboard. No build command needed.
