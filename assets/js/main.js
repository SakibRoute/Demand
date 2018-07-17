//google map location

function initMap() {
        var uluru = {lat: 23.739321, lng: 90.389146};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }



//swiper 
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      breakpoints: {
        1200: {
          slidesPerView: 4
        },
        990: {
          slidesPerView: 3
        },
        640: {
          slidesPerView: 2
        },
        400: {
          slidesPerView: 1
        }
      }
    });



var swiper = new Swiper('.category-features-slider', {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });