/*-------------------------------------------    
	 Main/Mobile Navigation
-------------------------------------------*/
(function ($) {
	
var ww = document.body.clientWidth;

/* When the page is loaded, add the span tags to the menu for mobile */
$(document).ready(function() {

	/* add mobile menu button */
	$(".nav-global").before('<ul class="mobile-nav"><li class="mobile-menu"><a class="toggleMenu active" href="">Menu</a></li></ul>');

	/* add touch buttons */
	$(".nav-global ul li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
			
		};
	})
	
	/* also add the toggle menu click functionality */
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$("nav ul").toggleClass("active");
	});
	adjustMenu();
})

/* check the window size and assign it to a variable */
$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});


var adjustMenu = function() {
	
	/* If the window is small (mobile) show .toggleMenu and add .hover class */
	if (ww < 769) {
		$(".toggleMenu").css("display", "block");
		if (!$(".toggleMenu").hasClass("active")) {
			$("nav ul:first-child").addClass("active");
		} else {
			$("nav ul:first-child").removeClass("active");
		}
		$("nav ul li").unbind('mouseenter mouseleave');
		$(".touch-btn").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).closest("li").toggleClass("active");
		});
	} 
	
	/* Otherwise hide the mobile menu button and show the nav, CSS handles the rest */
	else if (ww >= 769) {
		$(".toggleMenu").css("display", "none");
		
	}
}

}(jQuery));