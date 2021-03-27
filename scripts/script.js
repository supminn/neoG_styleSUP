/** Navigation */
const btnNav = document.querySelector('#btn-nav');
const navList = document.querySelector('#list-nav');

btnNav.addEventListener('click',() => {
    navList.classList.toggle('nav-list-hide');
})

/** Modal */
const modal = document.querySelector('.modal-container');
const btnModal = document.querySelector('#btn-modal');
const btnClose = document.querySelector('#btn-close-modal');

btnModal.addEventListener('click', () => {
    modal.style.display = "block";
});

btnClose.onclick = () => {
    modal.style.display = "none"
};

window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/** Toast */
const toast = document.querySelector('.toast-container');
const btnToast = document.querySelector('#btn-toast');
const btnCloseToast = document.querySelector('#btn-close-toast');

const closeToast = () => {
    toast.style.display = "none";
};

btnToast.addEventListener('click', () => {
    toast.style.display = "block";
    setTimeout(closeToast,3000);
});

btnCloseToast.onclick = closeToast;