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
        <button id="prev">Prev</button>
    </div>

    <div class="next">
        <button id="next">Next</button>
    </div>

    <div class="single-image active">
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




