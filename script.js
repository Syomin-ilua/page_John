function toggleMenu() {
    const button = document.getElementById('btn-menu')
    const menu = document.getElementById('list-menu')
    button.classList.toggle('active')
    menu.classList.toggle('active')
}
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar-panel');
const menuCloseBtn = document.querySelector('.close-menu')
menuBtn.addEventListener('click', () => {
menu.classList.toggle('is-open')
});
menuCloseBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open')
})