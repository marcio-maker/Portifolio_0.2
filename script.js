// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const languageButtons = document.querySelectorAll('.language-selector button');
const contactForm = document.getElementById('contact-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const themeToggle = document.getElementById('theme-toggle');
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
const backToTopBtn = document.getElementById('back-to-top');

// Translations
const translations = {
    "pt": {
        "nav": {
            "home": "Início",
            "about": "Sobre",
            "skills": "Habilidades",
            "projects": "Projetos",
            "contact": "Contato"
        },
        "hero": {
               "intro": "Oi, eu sou...",

            // Para português
            // "intro": "Oi, eu sou...",
            // para inglês
            // "intro": "Hi, I'm...",
            // para espanhol
             // "intro": "Hola, soy...",
            "title": "Olá, eu sou",
            "subtitle": "Desenvolvedor Full Stack & Designer criando soluções digitais globais",
            "yourTime": "Seu horário:",
            "myTime": "Meu horário (BRT):",
            "projects": "Ver Projetos",
            "contact": "Contato"
        },
        "about": {
            "title": "Sobre Mim",
            "p1": "Desenvolvedor Full Stack em formação, apaixonado por criar soluções digitais inovadoras que combinam funcionalidade e design atraente.",
            "p2": "Minha jornada na programação começou com a curiosidade em entender como funcionam as tecnologias que usamos todos os dias.",
            "p3": "Atualmente me dedicando a aprender HTML, CSS, JavaScript, Python, WordPress e ferramentas de design como Canva e Figma.",
            "p4": "Meu objetivo é me tornar um desenvolvedor nômade, trabalhando remotamente em projetos desafiadores ao redor do mundo."
        },
        "skills": {
            "title": "Minhas Habilidades",
            "html": "Criação de estruturas semânticas e estilização moderna",
            "js": "Desenvolvimento de interfaces interativas",
            "py": "Scripts, automações e aplicações back-end",
            "design": "Design UI/UX",
            "designDesc": "Criação de interfaces intuitivas",
            "languages": "Idiomas",
            "languagesDesc": "Português (nativo), Inglês (intermediário)",
            "remote": "Trabalho Remoto",
            "remoteDesc": "Adaptação a diferentes fusos horários"
        },
        "projects": {
            "title": "Meus Projetos",
            "all": "Todos",
            "web": "Web",
            "design": "Design",
            "game": "Games",
            "blogDesc": "Blog sobre cuidados com cabelos",
            "cafeDesc": "Site para cafeteria",
            "snake": "Jogo da Cobra",
            "snakeDesc": "Jogo clássico em JavaScript",
            "demo": "Demo",
            "code": "Código"
        },
        "contact": {
            "title": "Contato",
            "getInTouch": "Entre em contato",
            "availability": "Disponível para oportunidades remotas"
        },
        "form": {
            "name": "Nome",
            "email": "Email",
            "message": "Mensagem",
            "submit": "Enviar Mensagem"
        },
        "footer": {
            "rights": "Todos os direitos reservados"
        },
        "loading": "Carregando..."
    },
    "en": {
        "nav": {
            "home": "Home",
            "about": "About",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact"
        },
        "hero": {
            "title": "Hello, I'm",
            "subtitle": "Full Stack Developer & Designer creating global digital solutions",
            "yourTime": "Your time:",
            "myTime": "My time (BRT):",
            "projects": "View Projects",
            "contact": "Contact"
        },
        "about": {
            "title": "About Me",
            "p1": "Full Stack Developer in training, passionate about creating innovative digital solutions that combine functionality and attractive design.",
            "p2": "My journey in programming began with curiosity about how the technologies we use every day work.",
            "p3": "Currently dedicated to learning HTML, CSS, JavaScript, Python, WordPress and design tools like Canva and Figma.",
            "p4": "My goal is to become a nomadic developer, working remotely on challenging projects around the world."
        },
        "skills": {
            "title": "My Skills",
            "html": "Creating semantic structures and modern styling",
            "js": "Developing interactive interfaces",
            "py": "Scripts, automations and back-end applications",
            "design": "UI/UX Design",
            "designDesc": "Creating intuitive interfaces",
            "languages": "Languages",
            "languagesDesc": "Portuguese (native), English (intermediate)",
            "remote": "Remote Work",
            "remoteDesc": "Adapting to different time zones"
        },
        "projects": {
            "title": "My Projects",
            "all": "All",
            "web": "Web",
            "design": "Design",
            "game": "Games",
            "blogDesc": "Blog about hair care",
            "cafeDesc": "Website for coffee shop",
            "snake": "Snake Game",
            "snakeDesc": "Classic game in JavaScript",
            "demo": "Demo",
            "code": "Code"
        },
        "contact": {
            "title": "Contact",
            "getInTouch": "Get in touch",
            "availability": "Available for remote opportunities"
        },
        "form": {
            "name": "Name",
            "email": "Email",
            "message": "Message",
            "submit": "Send Message"
        },
        "footer": {
            "rights": "All rights reserved"
        },
        "loading": "Loading..."
    },
    "es": {
        "nav": {
            "home": "Inicio",
            "about": "Sobre mí",
            "skills": "Habilidades",
            "projects": "Proyectos",
            "contact": "Contacto"
        },
        "hero": {
            "title": "Hola, soy",
            "subtitle": "Desarrollador Full Stack & Designer creando soluciones digitales globales",
            "yourTime": "Tu hora:",
            "myTime": "Mi hora (BRT):",
            "projects": "Ver Proyectos",
            "contact": "Contacto"
        },
        "about": {
            "title": "Sobre Mí",
            "p1": "Desarrollador Full Stack en formación, apasionado por crear soluciones digitales innovadoras que combinen funcionalidad y diseño atractivo.",
            "p2": "Mi viaje en la programación comenzó con la curiosidad de entender cómo funcionan las tecnologías que usamos todos los días.",
            "p3": "Actualmente dedicado a aprender HTML, CSS, JavaScript, Python, WordPress y herramientas de diseño como Canva y Figma.",
            "p4": "Mi objetivo es convertirme en un desarrollador nómada, trabajando remotamente en proyectos desafiantes alrededor del mundo."
        },
        "skills": {
            "title": "Mis Habilidades",
            "html": "Creación de estructuras semánticas y estilización moderna",
            "js": "Desarrollo de interfaces interactivas",
            "py": "Scripts, automatizaciones y aplicaciones back-end",
            "design": "Diseño UI/UX",
            "designDesc": "Creación de interfaces intuitivas",
            "languages": "Idiomas",
            "languagesDesc": "Portugués (nativo), Inglés (intermediario)",
            "remote": "Trabajo Remoto",
            "remoteDesc": "Adaptación a diferentes husos horarios"
        },
        "projects": {
            "title": "Mis Proyectos",
            "all": "Todos",
            "web": "Web",
            "design": "Diseño",
            "game": "Juegos",
            "blogDesc": "Blog sobre cuidados capilares",
            "cafeDesc": "Sitio web para cafetería",
            "snake": "Juego de la Serpiente",
            "snakeDesc": "Juego clásico en JavaScript",
            "demo": "Demo",
            "code": "Código"
        },
        "contact": {
            "title": "Contacto",
            "getInTouch": "Ponte en contacto",
            "availability": "Disponible para oportunidades remotas"
        },
        "form": {
            "name": "Nombre",
            "email": "Email",
            "message": "Mensaje",
            "submit": "Enviar Mensaje"
        },
        "footer": {
            "rights": "Todos los derechos reservados"
        },
        "loading": "Cargando..."
    }
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];
        
        for (const key of keys) {
            translation = translation?.[key];
            if (!translation) break;
        }
        
        if (translation) {
            element.textContent = translation;
            // Se for um título com .section-title, reaplicar o efeito de ondas
            if (element.classList.contains('section-title')) {
                const chars = translation.split('');
                element.innerHTML = ''; // Limpar o conteúdo
                chars.forEach(char => {
                    const span = document.createElement('span');
                    span.className = 'wave-char';
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    element.appendChild(span);
                });
                // Reaplicar animação GSAP
                gsap.from(element.querySelectorAll('.wave-char'), {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                });
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const keys = element.getAttribute('data-i18n-placeholder').split('.');
        let translation = translations[lang];
        
        for (const key of keys) {
            translation = translation?.[key];
            if (!translation) break;
        }
        
        if (translation) element.setAttribute('placeholder', translation);
    });
}
// Theme functionality
function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    updateThemeIcon();
}

function updateThemeIcon() {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (icon) {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    } else {
        console.warn('Ícone de tema não encontrado');
    }
}

function initTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    updateThemeIcon();
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// Menu functionality
function initMenu() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    } else {
        console.warn('Elementos de menu (hamburger ou navMenu) não encontrados');
    }
}

// Language functionality
function initLanguage() {
    if (languageButtons.length === 0) {
        console.warn('Botões de idioma não encontrados');
        return;
    }
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            applyTranslations(lang);
        });
    });
}

// Contact form functionality
function initContactForm() {
    if (!contactForm) {
        console.warn('Formulário de contato não encontrado');
        return;
    }

    const formMessages = document.createElement('div');
    formMessages.className = 'form-messages';
    contactForm.appendChild(formMessages);

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (!submitBtn) {
            console.error('Botão de submit do formulário não encontrado');
            return;
        }
        const originalBtnText = submitBtn.textContent;

        try {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            formMessages.textContent = '';
            formMessages.className = 'form-messages';

            const formData = {
                name: contactForm.name.value.trim(),
                email: contactForm.email.value.trim(),
                message: contactForm.message.value.trim()
            };

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            const data = await response.json();

            if (!response.ok) throw new Error(data.message || 'Erro ao enviar mensagem');

            formMessages.textContent = data.message;
            formMessages.className = 'form-messages success';
            contactForm.reset();

            setTimeout(() => {
                formMessages.textContent = '';
                formMessages.className = 'form-messages';
            }, 5000);
        } catch (error) {
            formMessages.textContent = 'Não foi possível conectar ao servidor. Tente novamente mais tarde.';
            formMessages.className = 'form-messages error';
            console.error('Erro no formulário de contato:', error.message);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// Projects filtering
function initProjects() {
    if (filterButtons.length === 0) {
        console.warn('Botões de filtro de projetos não encontrados');
        return;
    }
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects(button.dataset.filter);
        });
    });
}

function filterProjects(category) {
    if (projectCards.length === 0) {
        console.warn('Nenhum cartão de projeto encontrado');
        return;
    }
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Carousel functionality
function initCarousel() {
    if (!carousel || !carouselInner || !projectCards.length || !prevBtn || !nextBtn) {
        console.warn('Elementos do carrossel ausentes');
        return;
    }

    let currentIndex = 0;
    let cardWidth = projectCards[0].offsetWidth + 30;
    let autoScrollInterval = null;
    const autoScrollDelay = 5000; // 5 segundos entre cada avanço

    function updateVisibleCards() {
        const carouselWidth = carousel.offsetWidth;
        if (window.innerWidth <= 576) {
            return 1; // 1 card em telas pequenas
        } else if (window.innerWidth <= 992) {
            return 2; // 2 cards em tablets
        } else {
            return Math.floor(carouselWidth / cardWidth); // 3 ou mais em desktops
        }
    }

    function updateCarousel() {
        // Update position using GSAP to avoid conflicts
        gsap.to(carouselInner, {
            x: -currentIndex * cardWidth,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: () => {
                const tl = gsap.getTweensOf(carouselInner).find(t => t.vars.x.includes('-=')); // Find the auto-scroll tween
                if (tl) tl.pause(); // Pause the auto-scroll while manually updating
            }
        });
        const visibleCards = updateVisibleCards();
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= projectCards.length - visibleCards;
    }

    function startAutoScroll() {
        if (autoScrollInterval) clearInterval(autoScrollInterval); // Evitar múltiplos intervalos
        autoScrollInterval = setInterval(() => {
            const visibleCards = updateVisibleCards();
            if (currentIndex >= projectCards.length - visibleCards) {
                currentIndex = 0; // Voltar ao início ao atingir o fim
            } else {
                currentIndex++;
            }
            updateCarousel();
        }, autoScrollDelay);
    }

    function pauseAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
        const tl = gsap.getTweensOf(carouselInner).find(t => t.vars.x.includes('-=')); // Find the auto-scroll tween
        if (tl) tl.pause();
    }

    function resetAutoScroll() {
        pauseAutoScroll();
        setTimeout(startAutoScroll, 10000); // Reiniciar após 10 segundos sem interação
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentIndex = 0;
            updateCarousel();
            resetAutoScroll(); // Pausar e reiniciar scroll automático
        });
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
        resetAutoScroll(); // Pausar e reiniciar scroll automático
    });

    nextBtn.addEventListener('click', () => {
        const visibleCards = updateVisibleCards();
        currentIndex = Math.min(currentIndex + 1, projectCards.length - visibleCards);
        updateCarousel();
        resetAutoScroll(); // Pausar e reiniciar scroll automático
    });

    let touchStartX = 0;
    let touchEndX = 0;

    carouselInner.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        pauseAutoScroll(); // Pausar scroll automático ao tocar
    }, { passive: true });

    carouselInner.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        resetAutoScroll(); // Reiniciar scroll automático após swipe
    }, { passive: true });

    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        const visibleCards = updateVisibleCards();
        if (difference > 50) {
            currentIndex = Math.min(currentIndex + 1, projectCards.length - visibleCards);
            updateCarousel();
        } else if (difference < -50) {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateCarousel();
        }
    }

    const resizeHandler = () => {
        if (projectCards.length > 0) {
            cardWidth = projectCards[0].offsetWidth + 30;
            updateCarousel();
            startAutoScroll(); // Reiniciar scroll automático ao redimensionar
        }
    };

    if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(resizeHandler);
        resizeObserver.observe(carousel);
    } else {
        window.addEventListener('resize', resizeHandler);
    }

    // Iniciar scroll automático ao carregar
    startAutoScroll();

    // Pausar scroll automático quando o carrossel não está visível
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAutoScroll();
        } else {
            startAutoScroll();
        }
    });

    // Pausar scroll automático ao passar o mouse sobre o carrossel
    carousel.addEventListener('mouseenter', pauseAutoScroll);
    carousel.addEventListener('mouseleave', resetAutoScroll);
}

// GSAP Carousel Function (Updated for Slower Scroll and Button Fix)
function initGSAPCarousel() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || !carouselInner || !projectCards.length) {
        console.warn('GSAP, ScrollTrigger ou elementos do carrossel não estão disponíveis');
        return;
    }

    const totalWidth = projectCards.length * (projectCards[0].offsetWidth + 30);

    // Auto-scrolling with seamless loop, slower speed (40 seconds)
    const autoScrollTween = gsap.to(carouselInner, {
        x: `-=${totalWidth}`,
        duration: 40, // Increased from 20 to 40 seconds for slower scrolling
        ease: "linear",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) // Seamless loop
        },
        paused: true // Start paused to sync with existing auto-scroll
    });

    // Sync GSAP auto-scroll with existing interval
    function syncAutoScroll() {
        if (document.hidden || carousel.matches(':hover')) {
            autoScrollTween.pause();
        } else {
            autoScrollTween.play();
        }
    }

    document.addEventListener('visibilitychange', syncAutoScroll);
    carousel.addEventListener('mouseenter', () => syncAutoScroll());
    carousel.addEventListener('mouseleave', () => syncAutoScroll());

    // Hover effects
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.1,
                rotationY: 10,
                z: 50,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                rotationY: 0,
                z: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // Parallax effect on scroll
    projectCards.forEach(card => {
        gsap.to(card, {
            y: 50,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
}

// Typewriter effect
function initTypewriter() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;

    const prefix = 'Oi, eu sou... ';
    const phrases = [
        '<span>Marcio Maker</span>',
        '<span>Criador de Soluções Digitais</span>',
        '<span>Desenvolvedor Full Stack</span>'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentPhrase = '';
    let delay = 100;

    function type() {
        const fullText = prefix + currentPhrase;
        let displayText = fullText.substring(0, prefix.length + charIndex);
        heroTitle.innerHTML = displayText + '<span class="cursor">|</span>';

        if (!isDeleting) {
            if (charIndex < currentPhrase.length) {
                charIndex++;
                delay = 100;
            } else {
                delay = 2000; // tempo para manter a frase antes de apagar
                isDeleting = true;
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                delay = 50;
            } else {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                currentPhrase = phrases[phraseIndex];
                delay = 400;
            }
        }

        setTimeout(type, delay);
    }

    currentPhrase = phrases[phraseIndex];
    type();
}

// Particles animation
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.warn('Contexto 2D do canvas não disponível');
        return;
    }
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const settings = {
        particleCount: Math.min(Math.floor(width * height / 10000), 100),
        maxDistance: 150,
        particleSize: 3,
        lineThickness: 0.5
    };

    const particleColors = {
        light: ['rgba(59, 130, 246, 0.5)', 'rgba(16, 185, 129, 0.5)', 'rgba(245, 158, 11, 0.5)'],
        dark: ['rgba(59, 130, 246, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(245, 158, 11, 0.8)']
    };

    const particles = [];
    for (let i = 0; i < settings.particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * settings.particleSize + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: particleColors[document.documentElement.getAttribute('data-theme') || 'dark'][
                Math.floor(Math.random() * particleColors.dark.length)
            ]
        });
    }

    let mouse = { x: null, y: null };
    const mouseRadius = 100;

    const handleMouseMove = (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
        mouse.x = null;
        mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    function updateParticleColors() {
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        particles.forEach(p => {
            p.color = particleColors[theme][Math.floor(Math.random() * particleColors[theme].length)];
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', updateParticleColors);
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (const p of particles) {
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseRadius) {
                    const force = (mouseRadius - distance) / mouseRadius;
                    p.speedX += (dx / distance) * force * 0.1;
                    p.speedY += (dy / distance) * force * 0.1;
                    p.speedX = Math.min(Math.max(p.speedX, -1), 1);
                    p.speedY = Math.min(Math.max(p.speedY, -1), 1);
                }
            }

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > width) p.speedX *= -1;
            if (p.y < 0 || p.y > height) p.speedY *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            for (const p2 of particles) {
                if (p === p2) continue;

                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < settings.maxDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / settings.maxDistance})`;
                    ctx.lineWidth = settings.lineThickness;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }

        animationId = requestAnimationFrame(animate);
    }

    let animationId = requestAnimationFrame(animate);

    function handleVisibilityChange() {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animationId = requestAnimationFrame(animate);
        }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    function handleResize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        settings.particleCount = Math.min(Math.floor(width * height / 10000), 100);
    }

    window.addEventListener('resize', handleResize);

    function cleanup() {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseOut);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
    }

    window.addEventListener('unload', cleanup);
}

// Time display functionality
function initTimeDisplay() {
    const visitorTime = document.getElementById('visitor-time');
    const myTime = document.getElementById('my-time');
    if (!visitorTime || !myTime) {
        console.warn('Elementos de exibição de horário não encontrados');
        return;
    }

    function updateClockStyles() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const timeDisplays = document.querySelectorAll('.time-number');

        timeDisplays.forEach(display => {
            display.style.color = isDark ? '#34d399' : '#3b82f6';
            display.style.fontWeight = '600';
            display.style.transition = 'all 0.3s ease';
        });
    }

    function updateTime() {
        const fallbackTime = () => {
            const now = new Date();
            visitorTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const brtTime = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'America/Sao_Paulo'
            });
            myTime.textContent = brtTime;
        };

        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            fetch(`/api/timezone?tz=${encodeURIComponent(timezone)}`, { signal: controller.signal })
                .then(response => {
                    clearTimeout(timeoutId);
                    if (!response.ok) throw new Error('Erro na API de horário');
                    return response.json();
                })
                .then(data => {
                    if (!data.error) {
                        visitorTime.textContent = data.visitor_time;
                        myTime.textContent = data.marcio_time;
                    } else {
                        fallbackTime();
                    }
                })
                .catch(error => {
                    clearTimeout(timeoutId);
                    console.error('Erro ao buscar horário:', error.message);
                    fallbackTime();
                });
        } catch (e) {
            console.error('Erro no initTimeDisplay:', e.message);
            fallbackTime();
        }

        updateClockStyles();
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', updateClockStyles);
    }
    updateTime();
    setInterval(updateTime, 60000);
}

// Back to top button
function initBackToTop() {
    if (!backToTopBtn) {
        console.warn('Botão de voltar ao topo não encontrado');
        return;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.pointerEvents = 'auto';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.pointerEvents = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            } else {
                console.warn(`Elemento de destino ${targetId} não encontrado`);
            }
        });
    });
}

// Scroll reveal animation
function initScrollReveal() {
    const sections = document.querySelectorAll('section.reveal-section');
    if (sections.length === 0) {
        console.warn('Nenhuma seção com classe reveal-section encontrada');
        return;
    }
    const windowHeight = window.innerHeight;

    function checkPosition() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;

            if (position < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.5, 0, 0, 1)';
    });

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
    checkPosition();
}

// Parallax effect
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) {
        console.warn('Elemento hero não encontrado');
        return;
    }

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        hero.style.setProperty('--mouse-x', x);
        hero.style.setProperty('--mouse-y', y);

        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');

        if (heroContent && heroImage) {
            heroContent.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;
            heroImage.style.transform = `translate(${x * -20 + 10}px, ${y * -20 + 10}px)`;
        }
    });
}

// Hover effects
function initHoverEffects() {
    const skillCards = document.querySelectorAll('.skill-card');
    if (skillCards.length === 0) {
        console.warn('Nenhum cartão de habilidade encontrado');
    }
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    projectCards.forEach(project => {
        project.addEventListener('mousemove', (e) => {
            const rect = project.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            project.style.setProperty('--mouse-x', `${x / rect.width * 100}%`);
            project.style.setProperty('--mouse-y', `${y / rect.height * 100}%`);
        });
    });
}

// About section animation with GSAP
function initAboutAnimation() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP ou ScrollTrigger não estão carregados. Certifique-se de incluir as bibliotecas.');
        return;
    }

    const aboutSection = document.querySelector('#about');
    if (!aboutSection) {
        console.warn('Seção About não encontrada');
        return;
    }

    const aboutTitle = aboutSection.querySelector('h2');
    const aboutParagraphs = aboutSection.querySelectorAll('.about-text p');
    const aboutImage = aboutSection.querySelector('img');

    // Inicializar elementos com opacidade 0
    gsap.set([aboutTitle, aboutParagraphs, aboutImage], { opacity: 0 });

    // Animação para o título
    gsap.fromTo(
        aboutTitle,
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aboutSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // Animação para os parágrafos com stagger
    gsap.fromTo(
        aboutParagraphs,
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: aboutSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );

    // Animação para a imagem
    gsap.fromTo(
        aboutImage,
        { x: 50, opacity: 0, scale: 0.9 },
        {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: aboutSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
}

function initContactAnimations() {
    // Links com Hover Animado
    document.querySelectorAll(".contact-method").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { y: -5, scale: 1.05, duration: 0.3, ease: "power1.out" });
        });

        link.addEventListener("mouseleave", () => {
            gsap.to(link, { y: 0, scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });

    // Campos de Formulário com Slide-In
    gsap.from(".form-group", {
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Botão de Enviar com Pulso
    const submitBtn = document.querySelector(".contact-form .btn.btn-primary");
    if (submitBtn) {
        gsap.to(submitBtn, {
            scale: 1.05,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            scrollTrigger: {
                trigger: "#contact",
                start: "top 80%",
                end: "bottom top",
                toggleActions: "play pause resume pause"
            }
        });
        submitBtn.addEventListener("mouseenter", () => gsap.to(submitBtn, { scale: 1, duration: 0.3 }));
        submitBtn.addEventListener("mouseleave", () => gsap.to(submitBtn, { scale: 1.05, duration: 0.3 }));
    }

    // Bordas Iluminadas
    gsap.to("#contact-form input, #contact-form textarea", {
        duration: 0.5,
        stagger: 0.2,
        onStart: function() {
            this.targets().forEach(el => el.classList.add("glow"));
        },
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none reverse",
            onLeaveBack: () => {
                document.querySelectorAll("#contact-form input, #contact-form textarea").forEach(el => el.classList.remove("glow"));
            }
        }
    });

    // Ícones com Rotação
    gsap.from(".contact-method i", {
        rotation: 90,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
    
    document.querySelectorAll(".contact-method").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link.querySelector("i"), {
                rotation: "+=10",
                duration: 0.2,
                yoyo: true,
                repeat: 3
            });
        });
    });

    // Partículas no Hover do Título "Entre em Contato"
    const contactTitle = document.querySelector(".contact-info h3");
    if (contactTitle) {
        contactTitle.style.position = "relative"; // Para posicionar partículas
        contactTitle.addEventListener("mouseenter", () => {
            for (let i = 0; i < 5; i++) {
                const particle = document.createElement("div");
                particle.className = "particle";
                contactTitle.appendChild(particle);
                gsap.to(particle, {
                    x: gsap.utils.random(-50, 50),
                    y: gsap.utils.random(-50, 50),
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    onComplete: () => particle.remove()
                });
            }
        });
    }
}
// Partículas no Hover da Seção de Contato
// (mover para dentro do DOMContentLoaded principal para evitar erros de DOM não carregado)
function initContactSectionParticles() {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
        contactSection.style.position = "relative"; // Necessário para posicionar partículas
        contactSection.addEventListener("mouseenter", (event) => {
            for (let i = 0; i < 10; i++) { // Aumentado de 5 para 10 partículas
                const particle = document.createElement("div");
                particle.className = "particle";
                // Posicionar partículas na posição do mouse
                const rect = contactSection.getBoundingClientRect();
                const mouseX = event.clientX - rect.left;
                const mouseY = event.clientY - rect.top;
                particle.style.left = `${mouseX}px`;
                particle.style.top = `${mouseY}px`;
                contactSection.appendChild(particle);
                gsap.to(particle, {
                    x: gsap.utils.random(-50, 50),
                    y: gsap.utils.random(-50, 50),
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    onComplete: () => particle.remove()
                });
            }
        });
    }
}
// Loader functionality
function initLoader() {
    const loader = document.querySelector('.loader');
    if (!loader) {
        console.warn('Elemento loader não encontrado');
        document.body.classList.add('loaded');
        return;
    }

    function completeLoad() {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
            document.body.classList.add('loaded');
        }, 500);
    }

    if (document.readyState === 'complete') {
        completeLoad();
    } else {
        window.addEventListener('load', completeLoad);
    }
}

// CV download icon
function initDownloadCVIcon() {
    const downloadIcon = document.createElement('a');
    downloadIcon.href = '/assets/cv.pdf';
    downloadIcon.download = 'My_CV.pdf';
    downloadIcon.className = 'download-cv-icon';
    downloadIcon.innerHTML = '<i class="fas fa-file-pdf"></i>'; // Changed icon
    downloadIcon.setAttribute('aria-label', 'Baixar CV');
    downloadIcon.title = 'Baixar CV';
    downloadIcon.setAttribute('tabindex', '0');
    
    // Rest of the styling remains the same
    downloadIcon.style.position = 'fixed';
    downloadIcon.style.left = '20px';
    downloadIcon.style.bottom = '20px';
    downloadIcon.style.fontSize = '24px';
    downloadIcon.style.color = '#3b82f6';
    downloadIcon.style.backgroundColor = '#fff';
    downloadIcon.style.borderRadius = '50%';
    downloadIcon.style.padding = '10px';
    downloadIcon.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    downloadIcon.style.zIndex = '1000';
    downloadIcon.style.transition = 'all 0.3s ease';

    downloadIcon.addEventListener('mouseover', () => {
        downloadIcon.style.backgroundColor = '#3b82f6';
        downloadIcon.style.color = '#fff';
    });

    downloadIcon.addEventListener('mouseout', () => {
        downloadIcon.style.backgroundColor = '#fff';
        downloadIcon.style.color = '#3b82f6';
    });

    document.body.appendChild(downloadIcon);
}

// Debounce utility for performance
function debounce(fn, ms) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), ms);
    };
}
function initNameLoop() {
    const nameElement = document.getElementById('name-loop');
    const names = ['Marcio Maker', 'Ux/UI Designer', 'Desenvolvedor Web']; // Add more if needed
    let currentNameIndex = 0;
    let isDeleting = false;
    let text = '';
    let speed = 100;

    function type() {
        const currentName = names[currentNameIndex];
        if (isDeleting) {
            text = currentName.substring(0, text.length - 1);
        } else {
            text = currentName.substring(0, text.length + 1);
        }

        nameElement.textContent = text;

        if (!isDeleting && text === currentName) {
            setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
        } else if (isDeleting && text === '') {
            isDeleting = false;
            currentNameIndex = (currentNameIndex + 1) % names.length;
        }

        speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }

    type();
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', () => {
    initNameLoop();
    // ... other init functions
});

// Consolidated resize handler
function handleResize() {
    if (projectCards.length > 0 && carousel && carouselInner) {
        const updateCarousel = carouselInner.updateCarousel;
        if (updateCarousel) updateCarousel();
    }

    const canvas = document.querySelector('canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const settings = window.particleSettings;
        if (settings) {
            settings.particleCount = Math.min(Math.floor(canvas.width * canvas.height / 10000), 100);
        }
    }

    const checkPosition = window.checkPosition;
    if (checkPosition) checkPosition();
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    try {
        initLoader();
        initTheme();
        initMenu();
        initLanguage();
        initContactForm();
        initProjects();
        initCarousel();
        initTimeDisplay();
        initBackToTop();
        initSmoothScroll();
        initScrollReveal();
        initTypewriter();
        initParallax();
        initParticles();
        initHoverEffects();
        initDownloadCVIcon();
        initAboutAnimation();
        initGSAPCarousel();
        initWaveEffect(); // Add this line
        applyTranslations('pt');
        const currentYear = document.getElementById('current-year');
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        } else {
            console.warn('Elemento current-year não encontrado');
        }

        window.addEventListener('resize', debounce(handleResize, 100));

        // Mover estas chamadas para cá para garantir que o DOM esteja pronto
        initContactAnimations();
        initContactSectionParticles();
    } catch (error) {
        console.error('Erro na inicialização:', error.message);
    }
});
function initWaveEffect() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP ou ScrollTrigger não estão carregados.');
        return;
    }

    // Selecionar todos os h2 com classe section-title
    const titles = document.querySelectorAll('.section-title');
    if (titles.length === 0) {
        console.warn('Nenhum título com classe section-title encontrado');
        return;
    }

    titles.forEach(title => {
        // Preservar o atributo data-i18n
        const i18nKey = title.getAttribute('data-i18n');
        const originalText = title.textContent;

        // Dividir o texto em caracteres
        const chars = originalText.split('');
        title.innerHTML = ''; // Limpar o conteúdo original

        chars.forEach(char => {
            const span = document.createElement('span');
            span.className = 'wave-char';
            span.textContent = char === ' ' ? '\u00A0' : char; // Preservar espaços
            title.appendChild(span);
        });

        // Animar cada caractere com GSAP
        gsap.from(title.querySelectorAll('.wave-char'), {
            y: 20, // Deslocamento vertical inicial
            opacity: 0,
            duration: 0.8,
            stagger: 0.05, // Atraso entre cada caractere
            ease: 'power2.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Restaurar o atributo data-i18n para manter a funcionalidade de tradução
        if (i18nKey) {
            title.setAttribute('data-i18n', i18nKey);
        }
    });
}