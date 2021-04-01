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