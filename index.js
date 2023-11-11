const slides = document.querySelectorAll('.project');
let counter = 0;

document.getElementById('navigate-left').addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    updateCarousel();
});

document.getElementById('navigate-right').addEventListener('click', () => {
    counter++;
    if (counter === slides.length) {
        counter = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    const percentage = -counter * 100;
    document.querySelector('.project-container').style.transform = `translateX(${percentage}%)`;
}
