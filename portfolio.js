$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  //Slide every slideDelay seconds
  const slideDelay=2;
  const dynamicSlider = document.getElementById('slider');

  var curSlide = 0;
  window.setInterval(()=>{
    curSlide++;
    if (curSlide== dynamicSlider.childElementCount){
      curSlide = 0;
    }
  }

  //Actual slide
  dynamicSlider.firstElementChild.setProperty("margin-left", "-" + curSlide + "00%");
},slideDelay);

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });
