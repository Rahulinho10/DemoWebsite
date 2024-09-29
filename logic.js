// NAVBAR LOGIC=======================================================================================

const menuToggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggleButton.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    console.log('Menu toggle button clicked! The active class has been toggled.');
});



// HERO SLIDER LOGIC =====================================================================================
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;
const totalSlides = slide.length;

// Function to show the current slide   
const showSlide = (index) => {
    // Reset the index if out of bounds
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// Automatic sliding function
const autoSlide = () => {
    showSlide(currentIndex + 1); // Show the next slide
};

// Set interval for automatic sliding every 3 seconds
let slideInterval = setInterval(autoSlide, 3000);

// Event listeners for manual controls
next.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop automatic sliding
    showSlide(currentIndex + 1); // Show next slide
    slideInterval = setInterval(autoSlide, 3000); // Restart interval
});

prev.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop automatic sliding
    showSlide(currentIndex - 1); // Show previous slide
    slideInterval = setInterval(autoSlide, 3000); // Restart interval
});



// PRODUCT SLIDER LOGIC====================================================================================

const productCards = document.querySelector('.product-cards');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let currentSlide = 0;
const totalCards = document.querySelectorAll('.product-card').length;
const cardsPerView = 3; // Number of visible cards

// Width of a single product card including margin
const slideWidth = document.querySelector('.product-card').offsetWidth + 20;

// Function to update the slide position
function updateSlidePosition() {
    productCards.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Move to the next set of slides
rightArrow.addEventListener('click', () => {
    if (currentSlide < totalCards - cardsPerView) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to the start
    }
    updateSlidePosition();
});

// Move to the previous set of slides
leftArrow.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalCards - cardsPerView; // Loop back to the last set
    }
    updateSlidePosition();
});

// Auto-slide every 5 seconds
setInterval(() => {
    if (currentSlide < totalCards - cardsPerView) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlidePosition();
}, 5000);

