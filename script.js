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

        document.querySelectorAll('[data-es-label], [data-en-label]').forEach((item) => {
            const label = item.dataset[`${language}Label`];
            if (label) item.setAttribute('aria-label', label);
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
    const initialLanguage = (['es', 'en'].includes(savedLanguage) ? savedLanguage : '') || (navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es');
    setLanguage(initialLanguage);

    const fridayTypeText = document.querySelector('.friday-type-text');
    const startFridayTyping = () => {
        if (!fridayTypeText || fridayTypeText.dataset.typingStarted === 'true') return;
        fridayTypeText.dataset.typingStarted = 'true';
        const text = fridayTypeText.textContent || '';
        let characterIndex = text.length;

        const eraseNextCharacter = () => {
            characterIndex -= 1;
            fridayTypeText.textContent = text.slice(0, characterIndex);
            if (characterIndex > 0) {
                window.setTimeout(eraseNextCharacter, 70);
            } else {
                window.setTimeout(typeNextCharacter, 450);
            }
        };

        const typeNextCharacter = () => {
            characterIndex += 1;
            fridayTypeText.textContent = text.slice(0, characterIndex);
            if (characterIndex < text.length) {
                window.setTimeout(typeNextCharacter, 155);
            } else {
                window.setTimeout(eraseNextCharacter, 5000);
            }
        };

        fridayTypeText.textContent = '';
        characterIndex = 0;
        window.setTimeout(typeNextCharacter, 350);
    };

    if (fridayTypeText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const startWhenScrolledIntoView = () => {
            if (fridayTypeText.dataset.typingStarted === 'true') return;
            const bounds = fridayTypeText.getBoundingClientRect();
            const isVisible = bounds.top < window.innerHeight * 0.85 && bounds.bottom > window.innerHeight * 0.15;
            if (isVisible) {
                startFridayTyping();
                window.removeEventListener('scroll', startWhenScrolledIntoView);
            }
        };

        window.addEventListener('scroll', startWhenScrolledIntoView, { passive: true });
        startWhenScrolledIntoView();
    }

    languageToggle?.addEventListener('click', () => {
        setLanguage(document.documentElement.lang === 'es' ? 'en' : 'es');
    });

    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('js-ready');
        let userHasScrolled = false;
        const revealVisibleElements = () => {
            userHasScrolled = true;
            revealElements.forEach((element) => {
                const bounds = element.getBoundingClientRect();
                const isVisible = bounds.top < window.innerHeight * 0.9 && bounds.bottom > window.innerHeight * 0.1;
                if (isVisible) element.classList.add('active');
            });

            const aiEvolution = document.querySelector('.ai-evolution');
            if (aiEvolution) {
                const bounds = aiEvolution.getBoundingClientRect();
                if (bounds.top < window.innerHeight * 0.95 && bounds.bottom > 0) {
                    aiEvolution.classList.add('is-visible');
                    aiEvolution.querySelectorAll('.ai-stage').forEach((stage) => {
                        stage.classList.add('active');
                        revealObserver?.unobserve(stage);
                    });
                }
            }
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealElements.forEach((element) => revealObserver.observe(element));
        window.addEventListener('scroll', revealVisibleElements, { passive: true });
        revealVisibleElements();
    } else {
        revealElements.forEach((element) => element.classList.add('active'));
    }

    // Fluid stack toggle
    window.toggleStack = function(stackId) {
        const stack = document.getElementById(stackId);
        if (!stack) return;
        stack.classList.toggle('show');
        const trigger = document.querySelector(`[data-stack-target="${stackId}"]`);
        trigger?.setAttribute('aria-expanded', String(stack.classList.contains('show')));
    };

    document.querySelectorAll('[data-stack-target]').forEach((trigger) => {
        trigger.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            window.toggleStack(trigger.dataset.stackTarget);
        });
    });


});

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('js-ready');
    const nav = document.querySelector('.glass-nav');
    const menu = document.querySelector('.menu-toggle');
    const setMenu = open => {
        nav.classList.toggle('menu-open', open);
        menu.setAttribute('aria-expanded', String(open));
        const spanish = document.documentElement.lang === 'es';
        menu.setAttribute('aria-label', spanish ? (open ? 'Cerrar menú' : 'Abrir menú') : (open ? 'Close menu' : 'Open menu'));
    };
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('click', event => { if (!nav.contains(event.target)) setMenu(false); });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && nav.classList.contains('menu-open')) { setMenu(false); menu.focus(); }
    });
    document.getElementById('language-toggle').addEventListener('click', () => setMenu(nav.classList.contains('menu-open')));
    setMenu(false);
    document.querySelectorAll('[data-stack-target]').forEach(trigger => {
        trigger.setAttribute('aria-controls', trigger.dataset.stackTarget);
    });
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            nav.querySelectorAll('.nav-links a').forEach(link => {
                if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
                else link.removeAttribute('aria-current');
            });
        }), { rootMargin: '-15% 0px -60% 0px' });
        document.querySelectorAll('main>section').forEach(section => observer.observe(section));
    }
});
