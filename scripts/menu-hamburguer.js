// Função para abrir o menu Hamburguer
function openMenu() {
    document.querySelector('.menu-links').classList.add('active');
    document.getElementById('overlay').style.display = 'block';
}

// Função para fechar o menu Hamburguer
function closeMenu() {
    document.querySelector('.menu-links').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
}

// Abre o menu ao clicar no ícone do menu hamburguer
document.querySelector('.menu-icon').addEventListener('click', function () {
    openMenu();
});

// Função para fechar o menu
function closeMenu() {
    document.querySelector('.menu-links').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
}

// Fecha o menu ao clicar fora do menu ou no ícone do menu hamburguer
document.addEventListener('click', function (event) {
    const menuLinks = document.querySelector('.menu-links');
    const menuIcon = document.querySelector('.menu-icon');
    const overlay = document.getElementById('overlay');

    // Verifica se o clique ocorreu fora do menu e do ícone do menu hamburguer
    if (!menuLinks.contains(event.target) && !menuIcon.contains(event.target) && overlay.style.display === 'block') {
        closeMenu();
    }
});