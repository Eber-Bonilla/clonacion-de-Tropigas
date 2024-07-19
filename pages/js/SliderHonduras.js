window.addEventListener('load', function(){
  var glider = new Glider(document.querySelector('.carousel__lista'), {
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
            breakpoint: 700,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              draggable: true,
              dragVelocity: 1.1,
            }
          },{
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

  function checkInfiniteScroll() {
    var maxScrollLeft = glider.ele.scrollWidth - glider.ele.clientWidth;
    if (glider.ele.scrollLeft >= maxScrollLeft - 1) {
        glider.ele.scrollLeft = 1; // Move back to start
    } else if (glider.ele.scrollLeft <= 0) {
        glider.ele.scrollLeft = maxScrollLeft - 1; // Move to end
    }
}

glider.ele.addEventListener('scroll', checkInfiniteScroll);
});


window.addEventListener('load', function() {
  var glider = new Glider(document.querySelector('.carousel__Marcas'), {
      slidesToShow: 2,
      slidesToScroll: 2,
      draggable: true,
      dragVelocity: 1.1,
      dots: '.carousel__indicadores2',
      arrows: {
          prev: '.carousel__anterior2',
          next: '.carousel__siguiente2'
      },
      responsive: [
          {
              breakpoint: 700,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  draggable: true,
                  dragVelocity: 1.1,
              }
          },{
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
});