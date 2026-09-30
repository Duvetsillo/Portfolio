document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('language-toggle');
    const languageItems = document.querySelectorAll('[data-es], [data-en], [data-es-html], [data-en-html]');
    const setLanguage = (language) => {
        document.documentElement.lang = language;
        languageItems.forEach((item) => {
            const translatedHtml = item.dataset[`${language}Html`];
            const translatedText = item.dataset[language];
            if (translatedHtml) item.innerHTML = translatedHtml;
            else if (translatedText) item.textContent = translatedText;
        });

        if (languageToggle) {
            const nextLanguage = language === 'es' ? 'en' : 'es';
            const action = language === 'es' ? 'Switch to English' : 'Cambiar a español';
            languageToggle.textContent = nextLanguage.toUpperCase();
            languageToggle.setAttribute('aria-label', action);
            languageToggle.title = action;
        }

        try { localStorage.setItem('portfolio-language', language); } catch {}
    };

    let savedLanguage = '';
    try { savedLanguage = localStorage.getItem('portfolio-language') || ''; } catch {}
    const initialLanguage = savedLanguage || (navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es');
    setLanguage(initialLanguage);

    languageToggle?.addEventListener('click', () => {
        setLanguage(document.documentElement.lang === 'es' ? 'en' : 'es');
    });

    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('js-ready');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealElements.forEach((element) => revealObserver.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add('active'));
    }

    // Fluid stack toggle
    window.toggleStack = function(stackId) {
        const stack = document.getElementById(stackId);
        if (!stack) return;
        stack.classList.toggle('show');
    };

    const uptimeTimer = document.getElementById('uptime-timer');
    if (uptimeTimer) {
        const startedAt = new Date('2026-01-19T00:00:00');
        const updateUptime = () => {
            const elapsedSeconds = Math.max(0, Math.floor((Date.now() - startedAt.getTime()) / 1000));
            const days = Math.floor(elapsedSeconds / 86400);
            const hours = Math.floor((elapsedSeconds % 86400) / 3600);
            const minutes = Math.floor((elapsedSeconds % 3600) / 60);
            const seconds = elapsedSeconds % 60;
            uptimeTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        };

        updateUptime();
        window.setInterval(updateUptime, 1000);
    }

});
