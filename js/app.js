// js/app.js - Main Application Coordinator
(function () {
  const LANG_KEY = 'portfolio-lang';
  let currentLang = 'en';

  function initLanguage() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'pt') {
      currentLang = saved;
    } else {
      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      currentLang = browserLang.startsWith('pt') ? 'pt' : 'en';
    }

    updateLangPills(currentLang);

    // Event listeners for language switcher buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-lang');
        if (selected && selected !== currentLang) {
          currentLang = selected;
          localStorage.setItem(LANG_KEY, currentLang);
          updateLangPills(currentLang);
          window.RenderEngine.renderAll(currentLang);
        }
      });
    });
  }

  function updateLangPills(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('.project-card');

        cards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 20);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  function initProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    // Delegated click for opening project detail modal
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.open-project-modal');
      if (!btn) return;

      const projectId = btn.getAttribute('data-id');
      const project = window.portfolioData.projects.find((p) => p.id === projectId);
      if (!project) return;

      const ui = window.portfolioData.ui[currentLang] || window.portfolioData.ui.en;

      // Populate modal elements
      const titleEl = document.getElementById('modal-title');
      const badgeEl = document.getElementById('modal-badge');
      const descEl = document.getElementById('modal-desc');
      const highlightsEl = document.getElementById('modal-highlights-list');
      const tagsEl = document.getElementById('modal-tags');
      const repoLinkEl = document.getElementById('modal-repo-link');

      if (titleEl) titleEl.textContent = project.title[currentLang] || project.title.en;
      if (badgeEl) badgeEl.textContent = project.badge || project.category.toUpperCase();
      if (descEl) descEl.textContent = project.longDescription[currentLang] || project.longDescription.en;

      if (highlightsEl) {
        const highlights = project.highlights[currentLang] || project.highlights.en || [];
        highlightsEl.innerHTML = highlights.map((h) => `<li>${h}</li>`).join('');
      }

      if (tagsEl) {
        tagsEl.innerHTML = (project.technologies || [])
          .map((t) => `<span class="project-tag">${t}</span>`)
          .join('');
      }

      if (repoLinkEl) {
        repoLinkEl.href = project.repoUrl;
        repoLinkEl.textContent = ui.btnSourceCode;
      }

      modal.showModal();
    });

    // Close button
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.close());
    }

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;

      if (!isInDialog) {
        modal.close();
      }
    });
  }

  function initPrintResume() {
    const printBtns = document.querySelectorAll('.print-resume-btn');
    printBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        window.print();
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusBox = document.getElementById('form-status');
    const copyEmailBtn = document.getElementById('copy-email-btn');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const ui = window.portfolioData.ui[currentLang] || window.portfolioData.ui.en;

        if (statusBox) {
          statusBox.textContent = ui.formSuccessMessage;
          statusBox.className = 'form-status success';
          statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        form.reset();
        setTimeout(() => {
          if (statusBox) statusBox.style.display = 'none';
        }, 6000);
      });
    }

    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const email = window.portfolioData.profile.contact.email;
        navigator.clipboard.writeText(email).then(() => {
          const ui = window.portfolioData.ui[currentLang] || window.portfolioData.ui.en;
          const origText = copyEmailBtn.textContent;
          copyEmailBtn.textContent = ui.copiedEmail;
          setTimeout(() => {
            copyEmailBtn.textContent = origText;
          }, 2500);
        });
      });
    }
  }

  // Application bootstrap
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    window.ThemeManager.init();
    window.RenderEngine.renderAll(currentLang);
    window.NavigationManager.init();
    initProjectFilters();
    initProjectModal();
    initPrintResume();
    initContactForm();
  });
})();
