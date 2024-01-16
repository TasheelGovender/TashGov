const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Display menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

const toGames = () => {
    
}

const toUtilities = () => {

}

const toAdvanced = () => {

}

menu.addEventListener('click', mobileMenu)