const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

//event listener
closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if (openFace.classList.contains('active')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});