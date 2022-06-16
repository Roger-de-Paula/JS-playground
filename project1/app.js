const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

console.log(openFace)
console.log(closedFace)

//event listener
closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')) {
        console.log('hello');
        openFace.classList.add('active');
    }
});