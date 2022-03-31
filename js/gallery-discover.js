const discoverGallery = document.getElementById('discover-gallery');
const secondColumn = document.querySelector('.gallery-second-column');
const thirdColumn = document.querySelector('.gallery-third-column');
console.log(discoverGallery);

discoverGallery.addEventListener('click', function () {
    secondColumn.style.display = 'flex';
    thirdColumn.style.display = 'flex';
    discoverGallery.innerHTML = 'Hide all';
});