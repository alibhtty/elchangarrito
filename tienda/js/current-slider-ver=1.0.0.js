jQuery(document).ready(function(){
  
  jQuery('#show-stores').on('click',function(){
    jQuery('.stores-desktop').toggleClass('show-table');

  });

  jQuery('#show-stores-mobile').on('click',function(){
    jQuery('.stores-mobile').toggleClass('show-table');

  });

  window.addEventListener('click', function(e){
    
    if (!document.getElementById('show-stores').contains(e.target)){
          jQuery('.stores-desktop').removeClass('show-table');

    } 
  });


    window.addEventListener('click', function(e){
    
    if (!document.getElementById('show-stores-mobile').contains(e.target)){
          jQuery('.stores-mobile').removeClass('show-table');

    } 
  });




  jQuery('.product-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

/*jQuery('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });*/