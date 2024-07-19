window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carousel__lista'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dragVelocity: 1.1,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 700,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                draggable: true,
                dragVelocity: 1.1,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                draggable: true,
                dragVelocity: 1.1,
              }
            }
          ]
    });
})