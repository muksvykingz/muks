// Toggle mobile menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Image slider functionality
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = '0'; // Hide all slides
    });
    slides[index].classList.add('active');
    slides[index].style.opacity = '1'; // Fade in the current slide
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Automatically change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds

// Initially show the first slide
showSlide(currentSlide);

// Add event listeners to slider buttons
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// Simple form validation for contact form
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return; // Prevent form submission
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return; // Prevent form submission
        }

        // Send form data to server using Fetch API
        fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent!');
                contactForm.reset(); // Clear the form
            } else {
                alert('An error occured.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
}
