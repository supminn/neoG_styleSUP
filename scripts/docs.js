const btnNavMain = document.querySelector('#btn-navigation');
const navListMain = document.querySelector('#list-nav-main');
const linkItem = document.querySelectorAll('.btn-link');

btnNavMain.addEventListener('click',() => {
    navListMain.classList.toggle('nav-list-hide');
    navListMain.classList.toggle('list-inline');
})

for(item of linkItem){
    item.addEventListener('click',() =>{
        navListMain.classList.toggle('nav-list-hide');
    })
}
