$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false, /*comando coloca umas setinhas para avançar o carrossel*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})