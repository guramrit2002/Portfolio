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


document.querySelector('.contact-form form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Access form elements and their values
    var name = this.querySelector('input[placeholder="Name"]').value;
    var email = this.querySelector('input[placeholder="E-mail"]').value;
    var content = this.querySelector('input[placeholder="Content"]').value;

    // Do something with the form data (for example, log it to the console)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Content:', content);

    // You can also send the data to a server using AJAX or fetch

    // Reset the form if needed
    // this.reset();
});
