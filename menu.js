let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: 'smooth' })
}
/* ROLAGEM DESKTOP*/
document.querySelector("#especialit").addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo("#especiali");
})
document.querySelector("#sobrev").addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo("#sobrevi");
})
document.querySelector("#proj").addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo("#proje");
})


/* ROLAGEM MOBILE*/
document.querySelector("#mobiespecialidades").addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo("#especiali");
})
document.querySelector("#mobisobre").addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo("#sobrevi");
})
document.querySelector("#mobiprojetos").addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo("#proje");
})

/* FUNÇÃO PARA MENU MOBILE*/
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})