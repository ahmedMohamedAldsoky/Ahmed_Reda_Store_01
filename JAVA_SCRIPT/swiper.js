//  Initialize Swiper 

var swiper = new Swiper(".slide-swp ", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable:true
    },
    autoplay:{
        delay:2000,
    },
    loop:true
  });



//   swiper slide products



var swiper = new Swiper(".slide_product ", {
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay:{
        delay:2000,
    },
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
    },
    loop:true,
    
  });
