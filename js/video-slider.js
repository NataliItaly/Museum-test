let myVideoSlider = new Swiper('.video-slider', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true
});