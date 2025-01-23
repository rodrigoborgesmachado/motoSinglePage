// Get carousel elements
const images = document.querySelectorAll('.carousel-container img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Initialize current image index
let currentIndex = 0;

// Function to update the active image
function updateCarousel(index) {
    // Remove the active class from all images
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    // Decrease the index or wrap to the last image
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
});

nextButton.addEventListener('click', () => {
    // Increase the index or wrap to the first image
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
});

// Initialize the carousel
updateCarousel(currentIndex);
