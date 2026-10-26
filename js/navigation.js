// js/navigation.js - Navigation, ScrollSpy, Mobile Menu & Reveals
(function () {
  function initNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile Drawer Toggle
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        mobileToggle.setAttribute('aria-expanded', isOpen.toString());
      });

      // Close menu when clicking nav links
      navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (navMenu.classList.contains('is-open')) {
            navMenu.classList.remove('is-open');
            mobileToggle.setAttribute('aria-expanded', 'false');
          }
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (
          navMenu.classList.contains('is-open') &&
          !navMenu.contains(e.target) &&
          !mobileToggle.contains(e.target)
        ) {
          navMenu.classList.remove('is-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // ScrollSpy using IntersectionObserver
    const sections = document.querySelectorAll('section[id]');
    if ('IntersectionObserver' in window && sections.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      };

      const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach((section) => spyObserver.observe(section));
    }

    // Scroll Reveal Observer
    initScrollReveals();
  }

  function initScrollReveals() {
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
    } else {
      // Fallback if observer not supported
      revealElements.forEach((el) => el.classList.add('active'));
    }
  }

  window.NavigationManager = {
    init: initNavigation,
    refreshReveals: initScrollReveals
  };
})();
