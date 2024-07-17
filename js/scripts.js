const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];


const imagesContainer = document.querySelector('.images-container');

imagesContainer.innerHTML += `   
    <div class="prev">
        <button id="prev" class="my-btn">
        <i class="fa-solid fa-chevron-left"></i>
        </button>
    </div>

    <div class="next">
        <button id="next" class="my-btn">
        <i class="fa-solid fa-chevron-right"></i>
        </button>
    </div>

    <div class="single-image">
        <img src="${images[0]}" alt="01">
    </div>

    <div class="single-image">
        <img src="${images[1]}" alt="02">
    </div>

    <div class="single-image">
        <img src="${images[2]}" alt="03">
    </div>

    <div class="single-image">
        <img src="${images[3]}" alt="04">
    </div>

    <div class="single-image">
        <img src="${images[4]}" alt="05">
    </div>
`;

const prevButton = document.getElementById('prev');

const nextButton = document.getElementById('next');

let currentIndex = 0;

const allImages = document.querySelectorAll('.single-image');

prevButton.addEventListener('click', 
    function() {
        allImages[currentIndex].classList.remove('active');
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        allImages[currentIndex].classList.add('active');
    }
);

nextButton.addEventListener('click', 
    function() {
        allImages[currentIndex].classList.remove('active');
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        allImages[currentIndex].classList.add('active');
    }
);

allImages[currentIndex].classList.add('active');




