$(document).ready(function(){
  
  $("#content").click(function(){
    $(".navbar-collapse").collapse('hide');
  });
  
  $("#navbar-collapse > ul li").click(function(){
    $active = $(this);
    $element = $(this).children();
    
    $(".navbar-collapse").collapse('hide');
    
    $("html, body").animate({
      scrollTop: $($element.attr('href')).offset().top
    }, 500);  
    
    $(".nav li.active").removeClass('active');
    
    if (!$active.hasClass('active')) {
        $active.addClass('active');
    }
    
  });
});