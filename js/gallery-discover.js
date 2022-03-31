const discoverGallery = document.getElementById('discover-gallery');
const secondColumn = document.querySelector('.gallery-second-column');
const thirdColumn = document.querySelector('.gallery-third-column');
console.log(discoverGallery);

discoverGallery.addEventListener('click', function () {
    console.log(secondColumn.style.display);
    if (secondColumn.style.display === 'none' && thirdColumn.style.display === 'none') {
        secondColumn.style.display = 'flex';
        thirdColumn.style.display = 'flex';
        discoverGallery.innerHTML = 'Hide all';
    }
    else {
        secondColumn.style.display = 'none';
        thirdColumn.style.display = 'none';
        discoverGallery.innerHTML = 'Discover all';
    }
});