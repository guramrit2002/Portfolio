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


    document.getElementById('resume').addEventListener('click', function () {
        openPdfFile('https://drive.google.com/file/d/1E17EkVLLLFPWOpflKo525RtftC9vDNxx/view?usp=drive_link');
      });
    
      function openPdfFile(pdfPath) {
        // Open the PDF file in a new tab or window
        window.open(pdfPath, '_blank');
      }


// Assuming you want to change the text of the first GitHub link in the first project
const githubLink1 = document.querySelector('.project .fa-github');

githubLink1.addEventListener('mouseover', function () {
    linkChange('GitHub Repository'); // Replace 'Your text here' with the desired text
});

githubLink1.addEventListener('mouseout', function () {
    linkChange(''); // Reset the text when mouse leaves
});

function linkChange(text) {
    console.log('trigger');
    githubLink1.title = text; // Change the title attribute to display text on hover
}


document.getElementById('icon-ham').addEventListener('click', function () {
    const tab = document.getElementById('tab');
    tab.classList.toggle('tab-visible');
});