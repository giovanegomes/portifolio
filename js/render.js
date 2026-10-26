// js/render.js - Bilingual Dynamic DOM Rendering Engine
(function () {
  function renderAll(lang = 'en') {
    const data = window.portfolioData || (typeof globalThis !== 'undefined' && globalThis.portfolioData) || (typeof portfolioData !== 'undefined' ? portfolioData : null);
    if (!data) {
      console.error('portfolioData is not loaded.');
      return;
    }

    try { renderUITranslations(data, lang); } catch (e) { console.error('Error rendering UI translations:', e); }
    try { renderProfile(data, lang); } catch (e) { console.error('Error rendering profile:', e); }
    try { renderMetrics(data, lang); } catch (e) { console.error('Error rendering metrics:', e); }
    try { renderExperience(data, lang); } catch (e) { console.error('Error rendering experience:', e); }
    try { renderEducation(data, lang); } catch (e) { console.error('Error rendering education:', e); }
    try { renderSkills(data, lang); } catch (e) { console.error('Error rendering skills:', e); }
    try { renderProjects(data, lang); } catch (e) { console.error('Error rendering projects:', e); }

    // Refresh scroll reveal observer for newly injected cards
    if (window.NavigationManager && window.NavigationManager.refreshReveals) {
      window.NavigationManager.refreshReveals();
    }
  }

  function renderUITranslations(data, lang) {
    const ui = data.ui[lang] || data.ui.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (ui[key]) {
        el.textContent = ui[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (ui[key]) {
        el.setAttribute('placeholder', ui[key]);
      }
    });

    // Update document title and html lang attribute
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    const profile = data.profile;
    document.title = `${profile.name} | ${profile.title[lang] || profile.title.en}`;
  }

  function renderProfile(data, lang) {
    const profile = data.profile;
    const heroTitleEl = document.getElementById('hero-name');
    if (heroTitleEl) heroTitleEl.textContent = profile.name;

    const heroHeadlineEl = document.getElementById('hero-headline');
    if (heroHeadlineEl) heroHeadlineEl.textContent = profile.title[lang] || profile.title.en;

    const heroStatusEl = document.getElementById('hero-status-text');
    if (heroStatusEl) heroStatusEl.textContent = profile.status[lang] || profile.status.en;

    const heroDescEl = document.getElementById('hero-desc');
    if (heroDescEl) heroDescEl.textContent = profile.bio[lang] || profile.bio.en;

    const aboutBioEl = document.getElementById('about-bio');
    if (aboutBioEl) aboutBioEl.textContent = profile.summary[lang] || profile.summary.en;

    // Contact cards text & links
    const contactEmailEl = document.getElementById('contact-email-text');
    if (contactEmailEl) contactEmailEl.textContent = profile.contact.email;

    const contactEmailLink = document.getElementById('contact-email-link');
    if (contactEmailLink) contactEmailLink.href = `mailto:${profile.contact.email}`;

    const contactPhoneEl = document.getElementById('contact-phone-text');
    if (contactPhoneEl && profile.contact.phone) contactPhoneEl.textContent = profile.contact.phone;

    const contactPhoneLink = document.getElementById('contact-phone-link');
    if (contactPhoneLink) {
      contactPhoneLink.href = profile.contact.whatsappUrl || `https://wa.me/${profile.contact.phoneRaw ? profile.contact.phoneRaw.replace(/\D/g, '') : '5542999885444'}`;
    }

    const contactLocationEl = document.getElementById('contact-location-text');
    if (contactLocationEl) contactLocationEl.textContent = profile.contact.locationName;

    // Hero Social Links
    const heroGithubLink = document.getElementById('hero-github-link');
    if (heroGithubLink && profile.contact.github) heroGithubLink.href = profile.contact.github;

    const heroLinkedinLink = document.getElementById('hero-linkedin-link');
    if (heroLinkedinLink && profile.contact.linkedin) heroLinkedinLink.href = profile.contact.linkedin;

    // Print Bar
    const printContactBar = document.getElementById('print-contact-bar');
    if (printContactBar) {
      printContactBar.innerHTML = `
        <span>📧 ${profile.contact.email}</span>
        <span>📱 ${profile.contact.phone}</span>
        <span>📍 ${profile.contact.locationName}</span>
        <span>🌐 github.com/giovanegomes</span>
        <span>💼 linkedin.com/in/giovanegomes</span>
      `;
    }
  }

  function renderMetrics(data, lang) {
    const container = document.getElementById('metrics-container');
    if (!container) return;

    container.innerHTML = data.metrics
      .map(
        (m, idx) => `
        <div class="metric-card reveal delay-${(idx + 1) * 100}">
          <div class="metric-value gradient-text">${m.value}</div>
          <div class="metric-label">${m.label[lang] || m.label.en}</div>
        </div>
      `
      )
      .join('');
  }

  function renderExperience(data, lang) {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    container.innerHTML = data.resume.experience
      .map((item) => {
        const role = item.role[lang] || item.role.en;
        const period = item.period[lang] || item.period.en;
        const highlights = item.highlights[lang] || item.highlights.en || [];
        const techTags = (item.technologies || [])
          .map((t) => `<span class="project-tag">${t}</span>`)
          .join('');

        return `
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div>
                  <h4 class="timeline-role">${role}</h4>
                  <span class="timeline-company">${item.company} &bull; ${item.location}</span>
                </div>
                <span class="timeline-period">${period}</span>
              </div>
              <ul class="timeline-highlights">
                ${highlights.map((h) => `<li>${h}</li>`).join('')}
              </ul>
              <div class="timeline-tags">
                ${techTags}
              </div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  function renderEducation(data, lang) {
    const container = document.getElementById('education-timeline');
    if (!container) return;

    const eduHtml = data.resume.education
      .map((item) => {
        const degree = item.degree[lang] || item.degree.en;
        const inst = item.institution[lang] || item.institution.en;
        const details = item.details[lang] || item.details.en;

        return `
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div>
                  <h4 class="timeline-role">${degree}</h4>
                  <span class="timeline-company">${inst} &bull; ${item.location}</span>
                </div>
                <span class="timeline-period">${item.period}</span>
              </div>
              <p style="font-size: var(--text-sm); color: var(--text-muted); margin-top: var(--space-2);">${details}</p>
            </div>
          </div>
        `;
      })
      .join('');

    const diffHtml = data.resume.differentiators && data.resume.differentiators.length ? `
      <div style="margin-top: var(--space-8);">
        <h4 style="font-size: var(--text-lg); margin-bottom: var(--space-4); color: var(--text-primary);">
          ${(data.ui[lang] && data.ui[lang].differentiatorsTitle) || (lang === 'pt' ? 'Diferenciais Competitivos' : 'Key Differentiators')}
        </h4>
        <div style="display: grid; gap: var(--space-3);">
          ${data.resume.differentiators
            .map(
              (d) => `
            <div class="timeline-content" style="padding: var(--space-4); border-left: 3px solid var(--accent-primary);">
              <span style="font-weight: 600; font-size: var(--text-sm); display: block; margin-bottom: 4px; color: var(--text-primary);">
                ${d.title[lang] || d.title.en}
              </span>
              <p style="font-size: var(--text-xs); color: var(--text-muted); margin: 0; line-height: 1.5;">
                ${d.description[lang] || d.description.en}
              </p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    ` : '';

    const certHtml = data.resume.certifications && data.resume.certifications.length ? `
      <div style="margin-top: var(--space-8);">
        <h4 style="font-size: var(--text-lg); margin-bottom: var(--space-4); color: var(--text-primary);">
          ${lang === 'pt' ? 'Certificações Principais' : 'Key Certifications'}
        </h4>
        <div style="display: grid; gap: var(--space-3);">
          ${data.resume.certifications
            .map(
              (c) => `
            <div class="timeline-content" style="padding: var(--space-4);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 600; font-size: var(--text-sm);">${c.title[lang] || c.title.en}</span>
                <span class="font-mono" style="font-size: var(--text-xs); color: var(--text-muted);">${c.year}</span>
              </div>
              <span style="font-size: var(--text-xs); color: var(--accent-primary);">${c.issuer}</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    ` : '';

    container.innerHTML = eduHtml + diffHtml + certHtml;
  }

  function renderSkills(data, lang) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = data.resume.skills
      .map((group) => {
        const catName = group.category[lang] || group.category.en;
        const pills = group.items
          .map(
            (s) => `
            <span class="skill-pill">
              <span>${s.name}</span>
            </span>
          `
          )
          .join('');

        return `
          <div class="skill-card reveal">
            <h4 class="skill-category-title">
              <span style="color: var(--accent-primary);">&bull;</span> ${catName}
            </h4>
            <div class="skill-pills">
              ${pills}
            </div>
          </div>
        `;
      })
      .join('');
  }

  function renderProjects(data, lang) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const ui = data.ui[lang] || data.ui.en;

    container.innerHTML = data.projects
      .map((p) => {
        const title = p.title[lang] || p.title.en;
        const shortDesc = p.shortDescription[lang] || p.shortDescription.en;
        const tags = (p.technologies || [])
          .map((t) => `<span class="project-tag">${t}</span>`)
          .join('');

        return `
          <article class="project-card reveal" data-category="${p.category}">
            <div class="project-top">
              <span class="project-category-badge">${p.badge || p.category.toUpperCase()}</span>
              ${p.featured ? `<span style="font-size: var(--text-xs); color: var(--accent-primary); font-weight: 700;">★ Featured</span>` : ''}
            </div>
            <h3 class="project-title">${title}</h3>
            <p class="project-description">${shortDesc}</p>
            <div class="project-tags">
              ${tags}
            </div>
            <div class="project-actions">
              <button type="button" class="btn btn-outline btn-sm open-project-modal" data-id="${p.id}">
                ${ui.btnDetails}
              </button>
              <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" aria-label="Source code for ${title}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                ${ui.btnSourceCode}
              </a>
            </div>
          </article>
        `;
      })
      .join('');
  }

  window.RenderEngine = {
    renderAll: renderAll
  };
})();
