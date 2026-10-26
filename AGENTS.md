# AI Pair Programming & Architecture Rules: Portfolio & Resume

Welcome, Antigravity Agent. This document outlines the core architecture, design guidelines, and maintenance protocols for this portfolio and resume application.

---

## 1. Core Principles & Philosophy
- **Vanilla Pure Stack**: Built strictly with semantic HTML5, modern CSS3 (custom properties, flexbox, CSS grid), and modern JavaScript (ES6+). Do NOT introduce external runtime dependencies, frameworks (React/Vue/Angular), bundlers (Webpack/Vite), or CSS preprocessors unless explicitly requested by the user.
- **Data-Driven Decoupling**: All user-facing content (biography, work history, education, skills, projects, contact details) is centralized in `js/data.js`.
  - When asked to add, edit, or remove resume entries or projects, **always update `js/data.js`**. The DOM rendering engine (`js/render.js`) will automatically reflect the changes.
- **Bilingual First**: Content supports both English (`en`) and Brazilian Portuguese (`pt-BR`). Ensure any new data entries include both languages.
- **High Performance & Accessibility (a11y)**:
  - 100/100 target on Lighthouse.
  - Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`).
  - Maintain keyboard accessibility (`tabindex`, focus rings, `aria-expanded`, `aria-label`).
- **Print & PDF Fidelity**:
  - The resume must always remain printable as a clean, professional, high-contrast 1–2 page PDF document via `css/print.css`. Do not break `@media print` rules.

---

## 2. Directory Layout & File Roles
```
c:\workspace\portifolio\
├── AGENTS.md                  # This file: architectural guidelines for AI agents
├── README.md                  # Human-facing documentation and deployment instructions
├── index.html                 # Semantic HTML structure & accessibility shells
├── server.js                  # Zero-dependency local development server (Node http module)
├── css/
│   ├── variables.css          # Design tokens (colors, fonts, theme definitions)
│   ├── base.css               # Reset, typography, utility classes
│   ├── layout.css             # Navigation, container, grid layouts, footer
│   ├── components.css         # Timeline, skill pills, cards, modal, buttons, toggles
│   ├── print.css              # Print/PDF resume formatting (@media print)
│   └── animations.css         # Smooth transitions and subtle reveals
├── js/
│   ├── data.js                # Single source of truth for portfolio & resume content
│   ├── render.js              # DOM generation & template population engine
│   ├── theme.js               # Dark/Light theme toggle & localStorage persistence
│   ├── navigation.js          # Smooth scrolling, mobile drawer, ScrollSpy
│   └── app.js                 # App coordinator, language switch, filters, modal, print
└── assets/
    ├── icons/                 # SVG icons
    └── images/                # Images & profile media
```

---

## 3. Maintenance Procedures for AI Agents

### Adding a Project
To add a project, append an entry to `portfolioData.projects` in `js/data.js`:
```javascript
{
  id: "project-slug",
  category: "ai" | "fullstack" | "frontend" | "backend",
  title: { en: "Project Title", pt: "Título do Projeto" },
  shortDescription: { en: "...", pt: "..." },
  longDescription: { en: "...", pt: "..." },
  technologies: ["Tech 1", "Tech 2"],
  highlights: {
    en: ["Metric or achievement 1", "Metric or achievement 2"],
    pt: ["Métrica ou conquista 1", "Métrica ou conquista 2"]
  },
  demoUrl: "https://...",
  repoUrl: "https://github.com/...",
  featured: true
}
```

### Adding a Resume Experience Entry
Append to `portfolioData.resume.experience` in `js/data.js`:
```javascript
{
  role: { en: "Senior AI Engineer", pt: "Engenheiro de IA Sênior" },
  company: "Company Name",
  location: "City, Country",
  period: { en: "2024 - Present", pt: "2024 - Presente" },
  highlights: {
    en: ["Key impact bullet 1", "Key impact bullet 2"],
    pt: ["Ponto de impacto 1", "Ponto de impacto 2"]
  },
  technologies: ["Python", "Gemini API", "TypeScript"]
}
```

---

## 4. Verification Protocol
Before completing any changes:
1. Validate JS syntax using: `& "C:\Users\giovane.gomes\AppData\Roaming\Antigravity\bin\agy-node.cmd" --check <file>`
2. Test the local preview server: `& "C:\Users\giovane.gomes\AppData\Roaming\Antigravity\bin\agy-node.cmd" server.js 3000`
3. Probe endpoints to ensure response status is 200 without console errors.
