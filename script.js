const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})