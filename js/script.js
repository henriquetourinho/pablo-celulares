// JavaScript Funcional para Pablo Celulares

document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup para Menu Móvel e Acessibilidade (A11Y)
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const whatsappFloat = document.querySelector('.whatsapp-float');

    if (whatsappFloat) {
        // Adiciona aria-label ao botão WhatsApp flutuante
        whatsappFloat.setAttribute('aria-label', 'Falar com Pablo Celulares no WhatsApp');
    }

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', toggleMenu);
        menuButton.setAttribute('aria-label', 'Abrir Menu Principal');
    }

    function toggleMenu() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        
        menuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        
        // Refatorado para encontrar o ícone diretamente
        const icon = menuButton.querySelector('i'); // Assume que o primeiro <i> é o ícone
        
        if (icon) {
            // Se o menu estava expandido (true), ele será fechado. Icone deve ser fa-bars.
            if (isExpanded) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars'); 
                menuButton.setAttribute('aria-label', 'Abrir Menu Principal');
            } else {
                // Se o menu NÃO estava expandido (false), ele será aberto. Icone deve ser fa-xmark.
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
                menuButton.setAttribute('aria-label', 'Fechar Menu Principal');
            }
        }
    }

    // 2. Função para scroll suave e fechar o menu mobile após clique
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. BARRA DE PROGRESSO DE SCROLL
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrolled + '%';
    });
});