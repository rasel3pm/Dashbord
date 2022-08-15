const menu = document.getElementById('menu');
const menuBar = document.querySelector('.menu_bar')

menu.addEventListener("click", eventHandaler)

function eventHandaler() {
    menuBar.style.width = '70px'
}