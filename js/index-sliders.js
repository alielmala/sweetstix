$(document).ready(function () {
    $('.slick-carousel').slick({
        arrows: true,
        centerPadding: "0px",
        dots: false,
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        prevArrow:"<button type='button' class='slick-prev '>></button>",
        nextArrow:"<button type='button' class='slick-next '><</button>",
        responsive: [{

            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              infinite: true
            }
      
          }, {
      
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
            }
          }, {
      
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
            }
          },  ]
    });
    $
});

$(document).ready(function () {
  $('.collection-wrapper').slick({
      arrows: true,
      centerPadding: "0px",
      dots: false,
      slidesToShow: 3,
      infinite: true,
      autoplay: true,
      prevArrow:"<button type='button' class='collection-slick-prev '>></button>",
      nextArrow:"<button type='button' class='collection-slick-next '><</button>",
      responsive: [{

          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
    
        }, {
    
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          }
        }, 
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          }
        },  ]
  });
  $
});

$(document).ready(function () {
  $('.customers-slider').slick({
      arrows: true,
      centerPadding: "0px",
      dots: false,
      slidesToShow: 2,
      infinite: true,
      autoplay: true,
      prevArrow:"<button type='button' class='collection-slick-prev '>></button>",
      nextArrow:"<button type='button' class='collection-slick-next '><</button>",
      responsive: [{
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
          }
        },]
  });
  $
});

$(document).ready(function () {
  $('.blog-slider').slick({
      arrows: false,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 4,
      infinite: true,
      autoplay: true,
      responsive: [{
          breakpoint: 954,
          settings: {
            slidesToShow: 3,
          }
        },{
          breakpoint: 734,
          settings: {
            slidesToShow: 2,
          }
        },{
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          }
        },]
  });
  $
});
$(document).ready(function () {
  $('.header-slider').slick({
      arrows: false,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
  });
  $
});