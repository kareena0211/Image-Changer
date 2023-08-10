
const startButton = document.getElementById('start');
const imageElement = document.getElementById('p1');

const imageUrls = [
    './image/bg1.webp',
    './image/bg2.webp',
    './image/bg3.webp',
    './image/bg4.webp',
    './image/bg5.webp',
];

function changeImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    imageElement.src = randomImageUrl;
}

startButton.addEventListener('click', changeImage);
