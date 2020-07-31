 ////////////////////////////////////////////////////////////shrink effect////////////////////////////////////////////////////////////////////



 var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
	document.getElementById("mainNav").style.padding = "20px 10px";
	document.getElementById("logo").style.fontSize = "35px";
	document.getElementById("mainNav").style.backgroundColor='#DDDDDD';
	document.getElementById("mainNav").style.boxShadow=' none';
   } else {



	document.getElementById("mainNav").style.padding = "10px 10px";
	document.getElementById("logo").style.fontSize = "25px";
	
	document.getElementById("mainNav").style.boxShadow='-8px 8px 80px -31px rgba(0,0,0,0.75)';
   }
   prevScrollpos = currentScrollPos;
 }

 //////////////////////////////////////////////////////collapse on click/////////////////////////////////////////////////////////////////////
 $('.js-scroll-trigger').click(function() {
	$('.navbar-collapse').collapse('hide');
  });
 //////////////////////////////////////////////////////animation on scroll//////////////////////////////////////////////////////////////
 

 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });


/////////////////////////////////////////////////////////////service tabs////////////////////////////////////////////////////////////////////////////
$(function() {
	var $a = $(".tabs li");
	$a.click(function() {
		$a.removeClass("active");
		$(this).addClass("active");
	});
});



////////////////////////////////////////////////////////////// navbar toggle//////////////////////////////////////////////////////////////////
$(function () {
	'use strict'

  $("[data-trigger]").on("click", function(){
	  var trigger_id =  $(this).attr('data-trigger');
	  $(trigger_id).toggleClass("show");
	  $('body').toggleClass("offcanvas-active");
  });

  // close if press ESC button 
  $(document).on('keydown', function(event) {
	  if(event.keyCode === 27) {
		 $(".navbar-collapse").removeClass("show");
		 $("body").removeClass("overlay-active");
	  }
  });

  // close button 
  $(".btn-close").click(function(e){
	  $(".navbar-collapse").removeClass("show");
	  $("body").removeClass("offcanvas-active");
  }); 


})




////////////////////////////////////////////////////////scroll effect with scroll spy//////////////////////////////////////////////////

(function($) {
	"use strict"; // Start of use strict
  
	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: (target.offset().top - 56)
		  }, 1000, "easeInOutExpo");
		  return false;
		}
	  }
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	
  
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
	  target: '#mainNav',
	  offset: 56
	});
  
  })(jQuery); // End of use strict









