const workEle = document.querySelector('.work1');
workEle.addEventListener('click', () => {
    const viewswork = document.querySelector('.viewswork');
    viewswork.classList.toggle("workviewall");

    if (viewswork.classList.contains('workviewall')) {
        workEle.innerHTML = 'View Less';
    } else {
        workEle.innerHTML = 'View All';
        viewswork.style.display = 'none';
    }
});



