const btnNavMain = document.querySelector('#btn-navigation');
const navListMain = document.querySelector('#list-nav-main');

btnNavMain.addEventListener('click',() => {
    navListMain.classList.toggle('nav-list-hide');
    navListMain.classList.toggle('list-inline');
})
