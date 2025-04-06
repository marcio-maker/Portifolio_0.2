// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const languageButtons = document.querySelectorAll('.language-selector button');
const contactForm = document.getElementById('contact-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const themeToggle = document.getElementById('theme-toggle');

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
            "p3": "Atualmente me dedicando a aprender HTML, CSS, JavaScript, Python, WordPress e ferramentas de design como Figma e Miro.",
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
            "p3": "Currently dedicated to learning HTML, CSS, JavaScript, Python, WordPress and design tools like Figma and Miro.",
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
            "p3": "Actualmente dedicado a aprender HTML, CSS, JavaScript, Python, WordPress y herramientas de diseño como Figma y Miro.",
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
            "languagesDesc": "Portugués (nativo), Inglés (intermedio)",
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

// Apply translations
function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];
        
        for (const key of keys) {
            translation = translation?.[key];
            if (!translation) break;
        }
        
        if (translation) element.textContent = translation;
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
    const icon = themeToggle.querySelector('i');
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Initialize theme from localStorage
function initTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    updateThemeIcon();
    themeToggle.addEventListener('click', toggleTheme);
}

// Menu functionality
function initMenu() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Language functionality
function initLanguage() {
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            applyTranslations(lang);
        });
    });
}

// Contact form functionality
function initContactForm() {
    if (!contactForm) return;
    
    const formMessages = document.createElement('div');
    formMessages.className = 'form-messages';
    contactForm.appendChild(formMessages);
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        try {
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            formMessages.textContent = '';
            formMessages.className = 'form-messages';
            
            const formData = {
                name: contactForm.name.value.trim(),
                email: contactForm.email.value.trim(),
                message: contactForm.message.value.trim()
            };
            
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (!response.ok) throw new Error(data.message || 'Erro ao enviar mensagem');
            
            // Success
            formMessages.textContent = data.message;
            formMessages.className = 'form-messages success';
            contactForm.reset();
            
            // Reset after 5 seconds
            setTimeout(() => {
                formMessages.textContent = '';
                formMessages.className = 'form-messages';
            }, 5000);
            
        } catch (error) {
            formMessages.textContent = error.message;
            formMessages.className = 'form-messages error';
            console.error('Error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// Projects filtering
function initProjects() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects(button.dataset.filter);
        });
    });
}

function filterProjects(category) {
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
function initTypewriter() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    // Criar elemento span para o cursor
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|';
    cursor.style.opacity = '1';
    
    let i = 0;
    function type() {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            heroTitle.appendChild(cursor);
            // Animar o cursor
            setInterval(() => {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }
    
    // Iniciar apenas quando a página estiver totalmente carregada
    if (document.readyState === 'complete') {
        setTimeout(type, 1000);
    } else {
        window.addEventListener('load', () => {
            setTimeout(type, 1000);
        });
    }
}
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
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const settings = {
        particleCount: Math.min(Math.floor(width * height / 10000), 100),
        maxDistance: 150,
        particleSize: 3,
        lineThickness: 0.5
    };
    
    const particles = [];
    const particleColors = {
        light: ['rgba(59, 130, 246, 0.5)', 'rgba(16, 185, 129, 0.5)', 'rgba(245, 158, 11, 0.5)'],
        dark: ['rgba(59, 130, 246, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(245, 158, 11, 0.8)']
    };
    
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
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        for (const p of particles) {
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
        
        requestAnimationFrame(animate);
    }
    
    let animationId;
    function handleVisibilityChange() {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animationId = requestAnimationFrame(animate);
        }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        settings.particleCount = Math.min(Math.floor(width * height / 10000), 100);
    });
    
    animationId = requestAnimationFrame(animate);
}
// Carrossel melhorado
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const inner = carousel.querySelector('.carousel-inner');
    const projects = carousel.querySelectorAll('.project-card');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    
    if (!inner || !projects.length || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    let cardWidth = projects[0].offsetWidth + 30;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    
    function updateCarousel() {
        inner.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Atualizar estado dos botões
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= projects.length - visibleCards;
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, projects.length - visibleCards);
        updateCarousel();
    });
    
    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    inner.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    inner.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        if (difference > 50) { // Swipe left
            currentIndex = Math.min(currentIndex + 1, projects.length - visibleCards);
            updateCarousel();
        } else if (difference < -50) { // Swipe right
            currentIndex = Math.max(currentIndex - 1, 0);
            updateCarousel();
        }
    }
    
    // Responsividade
    const resizeObserver = new ResizeObserver(() => {
        const newCardWidth = projects[0].offsetWidth + 30;
        if (Math.abs(newCardWidth - cardWidth) > 5) { // Evitar atualizações desnecessárias
            cardWidth = newCardWidth;
            updateCarousel();
        }
    });
    
    resizeObserver.observe(carousel);
    updateCarousel();
}
// Carousel and filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const projects = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let cardWidth = projects[0].offsetWidth + 30; // card width + gap

    // Filter projects
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projects.forEach(project => {
                if (filter === 'all' || project.dataset.category === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });

            // Reset carousel position
            currentIndex = 0;
            updateCarousel();
        });
    });

    // Update carousel position
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Previous button functionality
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Next button functionality
    nextBtn.addEventListener('click', () => {
        const visibleCards = Math.floor(document.querySelector('.carousel').offsetWidth / cardWidth);
        if (currentIndex < projects.length - visibleCards) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Recalculate card width on window resize
    window.addEventListener('resize', () => {
        cardWidth = projects[0].offsetWidth + 30;
        updateCarousel();
    });

    // Initialize carousel
    updateCarousel();
});
// Carousel functionality
function initCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const projects = document.querySelectorAll('.project-card');
    
    if (!carouselInner || !projects.length) return;
    
    let currentIndex = 0;
    const cardWidth = projects[0].offsetWidth + 30;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, projects.length - 1);
        updateCarousel();
    });

    window.addEventListener('resize', () => {
        cardWidth = projects[0].offsetWidth + 30;
        updateCarousel();
    });
}

// Time display functionality
function initTimeDisplay() {
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
            document.getElementById('visitor-time').textContent = 
                now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            // Horário de São Paulo (BRT)
            const brtTime = now.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit',
                timeZone: 'America/Sao_Paulo' 
            });
            document.getElementById('my-time').textContent = brtTime;
        };

        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            
            fetch(`/api/timezone?tz=${encodeURIComponent(timezone)}`)
                .then(response => {
                    if (!response.ok) throw new Error('API error');
                    return response.json();
                })
                .then(data => {
                    if (!data.error) {
                        const visitorTime = document.getElementById('visitor-time');
                        const myTime = document.getElementById('my-time');
                        
                        visitorTime.textContent = data.visitor_time;
                        myTime.textContent = data.marcio_time;
                    } else {
                        fallbackTime();
                    }
                })
                .catch(() => fallbackTime());
        } catch (e) {
            fallbackTime();
        }
        
        updateClockStyles();
    }
    
    // Observa mudanças de tema
    themeToggle.addEventListener('click', updateClockStyles);
    
    updateTime();
    setInterval(updateTime, 60000);
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
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
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// Scroll reveal animation
function initScrollReveal() {
    const sections = document.querySelectorAll('section');
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

// Typewriter effect
function initTypewriter() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            heroTitle.innerHTML += '<span class="cursor">|</span>';
            const cursor = document.querySelector('.cursor');
            setInterval(() => {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }
    
    setTimeout(type, 1000);
}

// Parallax effect
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
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

// Particle effect
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 100;
    
    const particleColors = {
        light: ['rgba(59, 130, 246, 0.5)', 'rgba(16, 185, 129, 0.5)', 'rgba(245, 158, 11, 0.5)'],
        dark: ['rgba(59, 130, 246, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(245, 158, 11, 0.8)']
    };
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: particleColors[document.documentElement.getAttribute('data-theme') || 'dark'][
                Math.floor(Math.random() * particleColors.dark.length)
            ]
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Removed unused variable 'currentTheme'
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const distance = Math.sqrt(
                    Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
                );
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance/100})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Hover effects
function initHoverEffects() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.addEventListener('mousemove', (e) => {
            const rect = project.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            project.style.setProperty('--mouse-x', `${x / rect.width * 100}%`);
            project.style.setProperty('--mouse-y', `${y / rect.height * 100}%`);
        });
    });
}

// Loader functionality
function initLoader() {
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
                document.body.classList.add('loaded');
            }, 500);
        }, 1000);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
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
    
    // Set default language to Portuguese
    applyTranslations('pt');
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
// Add CV download icon to the left
function initDownloadCVIcon() {
    const downloadIcon = document.createElement('a');
    downloadIcon.href = '/path/to/your/cv.pdf'; // Replace with the actual path to your CV
    downloadIcon.download = 'My_CV.pdf'; // Replace with the desired file name
    downloadIcon.className = 'download-cv-icon';
    downloadIcon.innerHTML = '<i class="fas fa-download"></i>'; // Font Awesome icon

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

// Initialize CV download icon
document.addEventListener('DOMContentLoaded', () => {
    initDownloadCVIcon();
});
