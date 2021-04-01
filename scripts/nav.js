const btnNav = document.querySelector('#btn-nav');
const navList = document.querySelector('#list-nav');

btnNav.addEventListener('click',() => {
    navList.classList.toggle('nav-list-hide');
    navList.classList.toggle('list-inline');
})
