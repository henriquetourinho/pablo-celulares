// JavaScript Funcional para Pablo Celulares

document.addEventListener('DOMContentLoaded', () => {
    // 1. Função para alternar o menu móvel
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', toggleMenu);
    }

    function toggleMenu() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        
        menuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        
        // Alterna o ícone de hamburger
        const icon = menuButton.querySelector('.fa-bars, .fa-xmark');
        if (icon) {
            if (isExpanded) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        }
    }

    // 2. Função para scroll suave e fechar o menu mobile após clique
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Se o menu mobile estiver aberto, fecha ele
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
            
            // Habilita o scroll suave
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});