function about() {
    
    var about = document.querySelectorAll(".about");
  
    for (var i = 0; i < about.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = about[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        about[i].classList.add("active");
      } else {
        about[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", about);


$(function(){

    window.sr = ScrollReveal();
    
    if ($(window).width() < 768) {
    
      if ($('.timeline-content').hasClass('js--fadeInLeft')) {
        $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
      }
    
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    
    } else {
      
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    
    }
    
    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    
    
});  

$(document).ready(function() {
      $("#project-slider").owlCarousel({
          items : 3,
          itemsDesktop:[1199,3],
          itemsDesktopSmall:[980,2],
          itemsMobile : [600,1],
          navigation:true,
          navigationText:["",""],
          pagination:true,
          autoPlay:true
      });
});