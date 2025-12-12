const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Init index
let currentIndex = 0;

// DOM elements
const image = document.querySelector('.banner-img');
const text = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const leftBtn = document.querySelector('.arrow_left');
const rightBtn = document.querySelector('.arrow_right');

// Dots list
function createDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('dot_selected');
        dotsContainer.appendChild(dot);
    });
}

// Carousel update
function updateCarousel() {
    image.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    text.innerHTML = slides[currentIndex].tagLine;
    createDots();
}

// Clicks boutons
leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});
rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Init
updateCarousel();
