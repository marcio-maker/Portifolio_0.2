/**
 * Script principal do portfólio
 * Responsável por funcionalidades interativas, traduções e manipulação do DOM
 */

// Elementos DOM
const themeBtn = document.getElementById('theme-btn');
const langButtons = document.querySelectorAll('.lang-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');
const currentYear = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const timezoneInput = document.getElementById('timezone');
const weatherInfo = document.getElementById('weather');

// Idioma atual (padrão: pt-BR)
let currentLang = 'pt-BR';

// Inicializa a página quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Define o ano atual no footer
    currentYear.textContent = new Date().getFullYear();
    
    // Detecta o fuso horário do visitante
    detectTimezone();
    
    // Inicializa o sistema de idiomas
    initLanguage();
    
    // Inicializa o tema (claro/escuro)
    initTheme();
    
    // Inicializa o globo 3D (se Three.js estiver disponível)
    initGlobe();
    
    // Inicializa os relógios
    initClocks();
    
    // Inicializa os filtros de projetos
    initProjectFilters();
    
    // Inicializa o mapa
    initMap();
    
    // Inicializa o calendário
    initCalendar();
    
    // Inicializa o simulador de trabalho remoto
    initRemoteSimulator();
    
    // Inicializa as informações meteorológicas
    initWeather();
    
    // Inicializa o efeito de máquina de escrever no título
    typeWriter('hero-title', translate('hero.title', currentLang));
    
    // Configura o observador de interseção para animações no scroll
    animateOnScroll();
    
    // Event Listeners
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
    
    themeBtn.addEventListener('click', toggleTheme);
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(translate('contact.success', currentLang));
            this.reset();
        });
    }
});

/**
 * Inicializa o sistema de idiomas
 * Verifica localStorage e idioma do navegador
 */
function initLanguage() {
    // Verifica se há um idioma salvo no localStorage
    const savedLang = localStorage.getItem('portfolioLang');
    if (savedLang) {
        changeLanguage(savedLang);
    } else {
        // Detecta o idioma do navegador
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('pt')) {
            changeLanguage('pt-BR');
        } else if (browserLang.startsWith('es')) {
            changeLanguage('es-ES');
        } else {
            changeLanguage('en-US');
        }
    }
}

/**
 * Altera o idioma da página
 * @param {string} lang - Código do idioma (pt-BR, en-US, es-ES)
 */
function changeLanguage(lang) {
    currentLang = lang;
    // Salva no localStorage para persistência
    localStorage.setItem('portfolioLang', lang);
    
    // Atualiza o botão ativo
    langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Atualiza todos os elementos com atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translate(key, lang);
    });
    
    // Atualiza placeholders (se houver)
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('placeholder-i18n');
        if (key) {
            input.setAttribute('placeholder', translate(key, lang));
        }
    });
    
    // Atualiza o título hero com efeito de máquina de escrever
    typeWriter('hero-title', translate('hero.title', lang));
}

/**
 * Traduz uma chave para o idioma atual
 * @param {string} key - Chave de tradução (ex: 'nav.about')
 * @param {string} lang - Código do idioma
 * @returns {string} Texto traduzido
 */
function translate(key, lang) {
    const keys = key.split('.');
    let translation = translations;
    
    // Navega pelo objeto de traduções
    for (const k of keys) {
        if (translation[k] === undefined) {
            return `[${key}]`; // Retorna a chave se não encontrar tradução
        }
        translation = translation[k];
    }
    
    // Retorna a tradução ou o inglês como fallback
    return translation[lang] || translation['en-US'] || `[${key}]`;
}

/**
 * Inicializa o tema (claro/escuro)
 */
function initTheme() {
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

/**
 * Alterna entre temas claro e escuro
 */
function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('portfolioTheme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('portfolioTheme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

/**
 * Detecta o fuso horário do visitante
 * @returns {string} Nome do fuso horário
 */
function detectTimezone() {
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezoneInput) {
            timezoneInput.value = timeZone;
        }
        return timeZone;
    } catch (e) {
        console.error("Timezone detection not supported:", e);
        if (timezoneInput) {
            timezoneInput.value = "America/Sao_Paulo";
        }
        return "America/Sao_Paulo";
    }
}

/**
 * Inicializa e atualiza os relógios
 */
function initClocks() {
    updateClocks();
    // Atualiza os relógios a cada segundo
    setInterval(updateClocks, 1000);
}

/**
 * Atualiza os relógios e o cálculo de sobreposição
 */
function updateClocks() {
    // Relógio do desenvolvedor (São Paulo)
    const myClock = document.getElementById('my-clock');
    if (myClock) {
        const myTime = new Date().toLocaleTimeString(currentLang, { 
            timeZone: 'America/Sao_Paulo',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        myClock.textContent = myTime;
    }
    
    // Relógio do visitante
    const visitorClock = document.getElementById('visitor-clock');
    const visitorLocation = document.getElementById('visitor-location');
    if (visitorClock && visitorLocation) {
        const visitorTime = new Date().toLocaleTimeString(currentLang, { 
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        visitorClock.textContent = visitorTime;
        
        try {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            visitorLocation.textContent = timeZone;
        } catch (e) {
            visitorLocation.textContent = translate('timezone.unknown', currentLang);
        }
    }
    
    // Cálculo de sobreposição
    const overlapResult = document.getElementById('overlap-result');
    if (overlapResult) {
        const now = new Date();
        const visitorHours = now.getHours();
        const myWorkStart = 9; // 9AM
        const myWorkEnd = 17; // 5PM
        
        // Cálculo simplificado da sobreposição
        let overlap = 0;
        if (visitorHours >= myWorkStart && visitorHours <= myWorkEnd) {
            overlap = 8; // Sobreposição total
        } else if (visitorHours >= myWorkStart - 3 && visitorHours <= myWorkEnd + 3) {
            overlap = 4; // Sobreposição parcial
        } else {
            overlap = 2; // Sobreposição mínima
        }
        
        overlapResult.textContent = overlap;
    }
}

/**
 * Inicializa os filtros de projetos
 */
function initProjectFilters() {
    const techFilterButtons = document.querySelectorAll('.filter-btn[data-filter]');
    const projectCards = document.querySelectorAll('.project-card');
    
    techFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Atualiza o botão ativo
            techFilterButtons.forEach(btn => {
                btn.classList.toggle('active', btn === this);
            });
            
            // Filtra os projetos
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.tech.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Filtro por região
    const regionFilterButtons = document.querySelectorAll('.filter-btn[data-filter-region]');
    
    regionFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Atualiza o botão ativo
            regionFilterButtons.forEach(btn => {
                btn.classList.toggle('active', btn === this);
            });
            
            // Filtra os projetos por região
            projectCards.forEach(card => {
                if (filter === 'all-regions' || card.dataset.region.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Inicializa o mapa com Leaflet.js
 */
function initMap() {
    const mapContainer = document.getElementById('projects-map-container');
    if (!mapContainer) return;
    
    // Cria o mapa centrado em uma visão global
    const map = L.map('projects-map-container').setView([20, 0], 2);
    
    // Adiciona tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Marcadores para locais de projetos
    const markers = [
        { coords: [-23.5505, -46.6333], title: 'São Paulo', description: 'Home Base' },
        { coords: [40.7128, -74.0060], title: 'New York', description: 'Currency Converter Users' },
        { coords: [51.5074, -0.1278], title: 'London', description: 'Translation Tool Users' },
        { coords: [1.3521, 103.8198], title: 'Singapore', description: 'Scheduler Clients' }
    ];
    
    // Adiciona marcadores ao mapa
    markers.forEach(marker => {
        L.marker(marker.coords).addTo(map)
            .bindPopup(`<b>${marker.title}</b><br>${marker.description}`);
    });
}

/**
 * Inicializa o calendário com FullCalendar
 */
function initCalendar() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;
    
    // Configuração do calendário
    import { Calendar } from '@fullcalendar/core'; // Ensure FullCalendar is imported
    const calendar = new Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
        },
        events: [
            {
                title: translate('availability.available', currentLang),
                start: new Date(),
                end: new Date(new Date().setHours(new Date().getHours() + 8)),
                color: '#4CAF50'
            },
            {
                title: translate('availability.meeting', currentLang) + ' NY',
                start: new Date(new Date().setDate(new Date().getDate() + 1)),
                end: new Date(new Date().setDate(new Date().getDate() + 1)),
                color: '#F44336'
            },
            {
                title: translate('availability.flexible', currentLang),
                start: new Date(new Date().setDate(new Date().getDate() + 3)),
                end: new Date(new Date().setDate(new Date().getDate() + 3)),
                color: '#FFC107'
            }
        ]
    });
    
    calendar.render();
}

/**
 * Inicializa o simulador de trabalho remoto
 */
function initRemoteSimulator() {
    const startGameBtn = document.getElementById('start-game');
    if (!startGameBtn) return;
    
    startGameBtn.addEventListener('click', function() {
        const timezone = document.getElementById('game-timezone').value;
        const duration = parseInt(document.getElementById('meeting-duration').value);
        
        simulateRemoteWork(timezone, duration);
    });
}

/**
 * Simula o trabalho remoto com diferentes fusos horários
 * @param {string} timezone - Fuso horário do visitante
 * @param {number} duration - Duração da reunião em minutos
 */
function simulateRemoteWork(timezone, duration) {
    const resultDiv = document.getElementById('game-result');
    resultDiv.innerHTML = '';
    
    // Gera as linhas do tempo
    generateTimeline('my-timeline', 'America/Sao_Paulo');
    generateTimeline('your-timeline', timezone);
    
    // Gera os horários disponíveis
    generateMeetingSlots(timezone, duration);
}

/**
 * Gera uma linha do tempo visual
 * @param {string} elementId - ID do elemento container
 * @param {string} timezone - Fuso horário para exibição
function generateTimeline(elementId) {
function generateTimeline(elementId, timezone) {
    const timeline = document.getElementById(elementId);
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    // Cria uma linha do tempo de 24 horas
    for (let i = 0; i < 24; i++) {
        const hourBlock = document.createElement('div');
        hourBlock.className = 'hour-block';
        hourBlock.style.width = `${100/24}%`;
        hourBlock.setAttribute('data-hour', `${i}:00`);
        
        // Marca horário de trabalho (9AM-5PM)
        if (i >= 9 && i < 17) {
            hourBlock.style.backgroundColor = '#4CAF50';
        }
        
        // Adiciona rótulo a cada 3 horas
        if (i % 3 === 0) {
            const hourLabel = document.createElement('span');
            hourLabel.className = 'hour-label';
            hourLabel.textContent = `${i}:00`;
            hourBlock.appendChild(hourLabel);
        }
        
        timeline.appendChild(hourBlock);
    }
}

/**
 * Gera horários disponíveis para reunião
 * @param {string} timezone - Fuso horário do visitante
 * @param {number} duration - Duração da reunião em minutos
 */
function generateMeetingSlots(timezone, duration) {
    const slotsContainer = document.getElementById('meeting-slots');
    if (!slotsContainer) return;
    
    slotsContainer.innerHTML = '';
    
    // Horários disponíveis (mockados)
    const availableSlots = ['09:00', '10:30', '12:00', '14:00', '15:30'];
    
    availableSlots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.className = 'time-slot';
        slotElement.textContent = slot;
        
        slotElement.addEventListener('click', function() {
            // Remove seleção anterior
            document.querySelectorAll('.time-slot').forEach(el => {
                el.classList.remove('selected');
            });
            
            // Seleciona este horário
            this.classList.add('selected');
            
            // Mostra resultado
            const resultDiv = document.getElementById('game-result');
            resultDiv.innerHTML = `
                <p>${translate('simulator.success', currentLang)} ${slot}</p>
                <p>${translate('simulator.duration', currentLang)}: ${duration} ${translate('simulator.minutes', currentLang)}</p>
                <p>${translate('simulator.timezone', currentLang)}: ${timezone}</p>
                <div class="badge">
                    <i class="fas fa-award"></i> ${translate('simulator.badge', currentLang)}
                </div>
            `;
        });
        
        slotsContainer.appendChild(slotElement);
    });
}

/**
 * Inicializa as informações meteorológicas
 */
function initWeather() {
    if (!weatherInfo) return;
    
    // Mock de dados meteorológicos
    weatherInfo.innerHTML = `
        <i class="fas fa-cloud-sun"></i> 25°C em São Paulo
    `;
    
    // Em produção, substituir por chamada à API OpenWeatherMap
    /*
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sao_Paulo&appid=SUA_API_KEY&units=metric&lang=${currentLang}`)
        .then(response => response.json())
        .then(data => {
            weatherInfo.innerHTML = `
                <i class="fas ${getWeatherIcon(data.weather[0].main)}"></i> 
                ${Math.round(data.main.temp)}°C em ${data.name}
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            weatherInfo.innerHTML = '<i class="fas fa-cloud"></i> Weather unavailable';
        });
    */
}

/**
 * Obtém ícone correspondente à condição meteorológica
 * @param {string} weatherCondition - Condição meteorológica
 * @returns {string} Classe do ícone FontAwesome
 */
function getWeatherIcon(weatherCondition) {
    switch(weatherCondition.toLowerCase()) {
        case 'clear': return 'fa-sun';
        case 'clouds': return 'fa-cloud';
        case 'rain': return 'fa-cloud-rain';
        case 'snow': return 'fa-snowflake';
        default: return 'fa-cloud-sun';
    }
}

/**
 * Inicializa o globo 3D com Three.js
 */
function initGlobe() {
    const globeContainer = document.getElementById('globe-container');
    if (!globeContainer || typeof THREE === 'undefined') return;
    
    const width = globeContainer.offsetWidth;
    const height = globeContainer.offsetHeight;
    
    // Cena
    const scene = new THREE.Scene();
    
    // Câmera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderizador
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    globeContainer.appendChild(renderer.domElement);
    
    // Globo
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    
    // Animação
    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Redimensionamento responsivo
    window.addEventListener('resize', function() {
        const newWidth = globeContainer.offsetWidth;
        const newHeight = globeContainer.offsetHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });
}

/**
 * Observador de interseção para animações no scroll
 */
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Efeito de máquina de escrever
 * @param {string} elementId - ID do elemento alvo
 * @param {string} text - Texto a ser digitado
 * @param {number} speed - Velocidade em milissegundos
 */
function typeWriter(elementId, text, speed = 100) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.innerHTML = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

/**
 * Objeto com todas as traduções
 * Estrutura: translations[chave][idioma]
 */
const translations = {
    "tagline": {
        "pt-BR": "Dev brasileiro com impacto global",
        "en-US": "Brazilian developer with global impact",
        "es-ES": "Desarrollador brasileño con impacto global"
    },
    "nav": {
        "about": {
            "pt-BR": "Sobre",
            "en-US": "About",
            "es-ES": "Sobre mí"
        },
        "projects": {
            "pt-BR": "Projetos",
            "en-US": "Projects",
            "es-ES": "Proyectos"
        },
        "availability": {
            "pt-BR": "Disponibilidade",
            "en-US": "Availability",
            "es-ES": "Disponibilidad"
        },
        "contact": {
            "pt-BR": "Contato",
            "en-US": "Contact",
            "es-ES": "Contacto"
        }
    },
    "hero": {
        "title": {
            "pt-BR": "Código que faz a ponte entre fusos horários",
            "en-US": "Code that bridges timezones",
            "es-ES": "Código que une zonas horarias"
        },
        "subtitle": {
            "pt-BR": "Desenvolvedor Full-Stack | Python | JavaScript | Especialista em i18n",
            "en-US": "Full-Stack Developer | Python | JavaScript | i18n Specialist",
            "es-ES": "Desarrollador Full-Stack | Python | JavaScript | Especialista en i18n"
        },
        "contact": {
            "pt-BR": "Entre em contato",
            "en-US": "Contact me",
            "es-ES": "Contáctame"
        },
        "projects": {
            "pt-BR": "Ver projetos",
            "en-US": "View projects",
            "es-ES": "Ver proyectos"
        }
    },
    "timezone": {
        "title": {
            "pt-BR": "Minha disponibilidade global",
            "en-US": "My global availability",
            "es-ES": "Mi disponibilidad global"
        },
        "local": {
            "pt-BR": "Meu horário",
            "en-US": "My time",
            "es-ES": "Mi hora"
        },
        "your": {
            "pt-BR": "Seu horário",
            "en-US": "Your time",
            "es-ES": "Tu hora"
        },
        "overlap": {
            "pt-BR": "Sobreposição",
            "en-US": "Overlap",
            "es-ES": "Superposición"
        },
        "overlap-description": {
            "pt-BR": "horas disponíveis em comum",
            "en-US": "available hours in common",
            "es-ES": "horas disponibles en común"
        },
        "unknown": {
            "pt-BR": "Fuso horário desconhecido",
            "en-US": "Unknown timezone",
            "es-ES": "Zona horaria desconocida"
        }
    },
    "about": {
        "title": {
            "pt-BR": "Sobre Mim",
            "en-US": "About Me",
            "es-ES": "Sobre Mí"
        },
        "intro": {
            "pt-BR": "Olá! Sou Marcio, um desenvolvedor full-stack especializado em criar soluções globais. Trabalho remotamente desde 2020, colaborando com equipes de mais de 5 países.",
            "en-US": "Hello! I'm Marcio, a full-stack developer specialized in creating global solutions. I've been working remotely since 2020, collaborating with teams from more than 5 countries.",
            "es-ES": "¡Hola! Soy Marcio, un desarrollador full-stack especializado en crear soluciones globales. Trabajo remotamente desde 2020, colaborando con equipos de más de 5 países."
        },
        "experience": {
            "pt-BR": "Minhas soluções são construídas com foco em internacionalização (i18n), experiência de usuário e desempenho em diferentes regiões do mundo.",
            "en-US": "My solutions are built with focus on internationalization (i18n), user experience and performance in different regions of the world.",
            "es-ES": "Mis soluciones están construidas con enfoque en internacionalización (i18n), experiencia de usuario y rendimiento en diferentes regiones del mundo."
        },
        "tech-skills": {
            "pt-BR": "Habilidades Técnicas",
            "en-US": "Technical Skills",
            "es-ES": "Habilidades Técnicas"
        },
        "languages": {
            "pt-BR": "Idiomas",
            "en-US": "Languages",
            "es-ES": "Idiomas"
        },
        "global-ready": {
            "pt-BR": "Pronto para Trabalho Global",
            "en-US": "Global Ready",
            "es-ES": "Listo para Trabajo Global"
        },
        "global1": {
            "pt-BR": "Experiência com equipes multinacionais",
            "en-US": "Experience with multinational teams",
            "es-ES": "Experiencia con equipos multinacionales"
        },
        "global2": {
            "pt-BR": "Especialista em internacionalização (i18n)",
            "en-US": "Internationalization specialist (i18n)",
            "es-ES": "Especialista en internacionalización (i18n)"
        },
        "global3": {
            "pt-BR": "Adaptação a diferentes fusos horários",
            "en-US": "Adaptation to different timezones",
            "es-ES": "Adaptación a diferentes zonas horarias"
        },
        "global4": {
            "pt-BR": "Certificado em inglês técnico",
            "en-US": "Technical English certified",
            "es-ES": "Certificado en inglés técnico"
        },
        "global5": {
            "pt-BR": "Experiência com metodologias ágeis",
            "en-US": "Experience with agile methodologies",
            "es-ES": "Experiencia con metodologías ágiles"
        }
    },
    "projects": {
        "title": {
            "pt-BR": "Projetos",
            "en-US": "Projects",
            "es-ES": "Proyectos"
        },
        "filter-tech": {
            "pt-BR": "Tecnologia:",
            "en-US": "Technology:",
            "es-ES": "Tecnología:"
        },
        "filter-region": {
            "pt-BR": "Região:",
            "en-US": "Region:",
            "es-ES": "Región:"
        },
        "currency-desc": {
            "pt-BR": "API de conversão de moedas com suporte para 20+ moedas, usado por clientes em 3 países.",
            "en-US": "Currency conversion API with support for 20+ currencies, used by clients in 3 countries.",
            "es-ES": "API de conversión de monedas con soporte para 20+ monedas, usado por clientes en 3 países."
        },
        "translator-desc": {
            "pt-BR": "Ferramenta que traduz conteúdo Markdown preservando formatação, com suporte para 15 idiomas.",
            "en-US": "Tool that translates Markdown content preserving formatting, with support for 15 languages.",
            "es-ES": "Herramienta que traduce contenido Markdown preservando formato, con soporte para 15 idiomas."
        },
        "scheduler-desc": {
            "pt-BR": "Solução para agendamento entre diferentes fusos horários, com clientes em 3 continentes.",
            "en-US": "Solution for scheduling across different timezones, with clients in 3 continents.",
            "es-ES": "Solución para agendar entre diferentes zonas horarias, con clientes en 3 continentes."
        },
        "demo": {
            "pt-BR": "Demo",
            "en-US": "Demo",
            "es-ES": "Demo"
        },
        "map-title": {
            "pt-BR": "Impacto Global",
            "en-US": "Global Impact",
            "es-ES": "Impacto Global"
        }
    },
    "simulator": {
        "title": {
            "pt-BR": "Simulador de Trabalho Remoto",
            "en-US": "Remote Work Simulator",
            "es-ES": "Simulador de Trabajo Remoto"
        },
        "description": {
            "pt-BR": "Teste sua capacidade de agendar reuniões comigo considerando diferentes fusos horários:",
            "en-US": "Test your ability to schedule meetings with me considering different timezones:",
            "es-ES": "Prueba tu capacidad para agendar reuniones conmigo considerando diferentes zonas horarias:"
        },
        "your-timezone": {
            "pt-BR": "Seu fuso horário:",
            "en-US": "Your timezone:",
            "es-ES": "Tu zona horaria:"
        },
        "duration": {
            "pt-BR": "Duração da reunião:",
            "en-US": "Meeting duration:",
            "es-ES": "Duración de la reunión:"
        },
        "start": {
            "pt-BR": "Iniciar simulação",
            "en-US": "Start simulation",
            "es-ES": "Iniciar simulación"
        },
        "my-schedule": {
            "pt-BR": "Minha agenda (Marcio)",
            "en-US": "My schedule (Marcio)",
            "es-ES": "Mi agenda (Marcio)"
        },
        "your-schedule": {
            "pt-BR": "Sua agenda",
            "en-US": "Your schedule",
            "es-ES": "Tu agenda"
        },
        "instructions": {
            "pt-BR": "Selecione um horário para agendar nossa reunião:",
            "en-US": "Select a time to schedule our meeting:",
            "es-ES": "Selecciona una hora para agendar nuestra reunión:"
        },
        "success": {
            "pt-BR": "Reunião agendada com sucesso para",
            "en-US": "Meeting successfully scheduled for",
            "es-ES": "Reunión agendada con éxito para"
        },
        "badge": {
            "pt-BR": "⏱ Ninja de Fusos Horários",
            "en-US": "⏱ Timezone Ninja",
            "es-ES": "⏱ Ninja de Zonas Horarias"
        },
        "minutes": {
            "pt-BR": "minutos",
            "en-US": "minutes",
            "es-ES": "minutos"
        }
    },
    "availability": {
        "title": {
            "pt-BR": "Minha Disponibilidade",
            "en-US": "My Availability",
            "es-ES": "Mi Disponibilidad"
        },
        "available": {
            "pt-BR": "Disponível",
            "en-US": "Available",
            "es-ES": "Disponible"
        },
        "meeting": {
            "pt-BR": "Reunião agendada",
            "en-US": "Scheduled meeting",
            "es-ES": "Reunión agendada"
        },
        "flexible": {
            "pt-BR": "Horário flexível",
            "en-US": "Flexible hours",
            "es-ES": "Horario flexible"
        }
    },
    "contact": {
        "title": {
            "pt-BR": "Contato",
            "en-US": "Contact",
            "es-ES": "Contacto"
        },
        "name": {
            "pt-BR": "Nome:",
            "en-US": "Name:",
            "es-ES": "Nombre:"
        },
        "email": {
            "pt-BR": "Email:",
            "en-US": "Email:",
            "es-ES": "Correo:"
        },
        "timezone": {
            "pt-BR": "Seu fuso horário:",
            "en-US": "Your timezone:",
            "es-ES": "Tu zona horaria:"
        },
        "subject": {
            "pt-BR": "Assunto:",
            "en-US": "Subject:",
            "es-ES": "Asunto:"
        },
        "message": {
            "pt-BR": "Mensagem:",
            "en-US": "Message:",
            "es-ES": "Mensaje:"
        },
        "send": {
            "pt-BR": "Enviar mensagem",
            "en-US": "Send message",
            "es-ES": "Enviar mensaje"
        },
        "success": {
            "pt-BR": "Mensagem enviada com sucesso! Entrarei em contato em breve.",
            "en-US": "Message sent successfully! I'll contact you soon.",
            "es-ES": "¡Mensaje enviado con éxito! Me pondré en contacto pronto."
        },
        "scan": {
            "pt-BR": "Escaneie para conectar",
            "en-US": "Scan to connect",
            "es-ES": "Escanear para conectar"
        }
    },
    "footer": {
        "privacy": {
            "pt-BR": "Política de Privacidade",
            "en-US": "Privacy Policy",
            "es-ES": "Política de Privacidad"
        },
        "terms": {
            "pt-BR": "Termos de Uso",
            "en-US": "Terms of Use",
            "es-ES": "Términos de Uso"
        },
        "cv": {
            "pt-BR": "Download CV",
            "en-US": "Download CV",
            "es-ES": "Descargar CV"
        }
    }
};