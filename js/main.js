//variaveis
const chanceIcon = document.querySelector(".menu-icon img");
const menuIcon = document.querySelector(".menu-icon");
const ul = document.querySelector(".ul");

//logica do menu hamburguer
menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
        chanceIcon.src = './img/menu.png';
    } else {
        ul.classList.add('ativo');
        chanceIcon.src = './img/close.png';
    }
})
