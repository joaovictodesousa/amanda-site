$(document).ready(function(){

	if ($(window).width() >= 1081) {

		$(".card").addClass("horizontal");
		$(".card").removeClass("large");
	}
	else{

		$(".card").removeClass("horizontal");
		$(".card").addClass("large");
	}

	$(".header").each(function(){

		var thisHtml = $(this).html();

    	$(this).html("<i class=\"fas fa-balance-scale gold-text\"></i> "+thisHtml);
	});

	$(".carousel.carousel-slider").carousel({

		fullWidth: true
	});

	$("div.card").hide();

	$(window).scroll(function(){

		var position = $(this).scrollTop();

		if (position <= 110)
			$(".container-slider").fadeIn();
		else
			$(".container-slider").fadeOut();

		if (position >= 200)
			$("div.card").show("slow");
		else
			$("div.card").slideUp("slow");
		
	});

	if ($(window).width() <= 1081)
		$(".nav-floating").css("margin-top", "5%");
	else
		$(".nav-floating").css("margin-top", "0%");

	$(window).scroll(function(){

		if ($(this).scrollTop() > 100){
			$(".nav-floating").css("position", "fixed");
			
			if ($(this).width() <= 1081)
				$(".nav-floating").css("margin-top", "5%");
			else
				$(".nav-floating").css("margin-top", "0%");
			//$(".nav-floating").children("div.nav-wrapper").hide();
			$(".nav-floating").css("min-height", "2em");
			$(".nav-floating").css("height", "auto");

			$(".sublogo").show();

			$(".menu-responsive").show();

			$(".divider").hide();

			$(".hide-scroll").hide();

			//Media Query
		}
		else{
			$(".nav-floating").css("position", "relative");
			//$(".nav-floating ").children("div.nav-wrapper").show();
			$(".nav-floating").css("margin-top", "0");
			$(".nav-floating").css("min-height", "8em");
			$(".nav-floating").css("height", "auto");

			$(".sublogo").hide();

			$(".menu-responsive").hide();

			$(".divider").show();

			$(".hide-scroll").show();

		}
	});

	/*

	$("body").delegate("li.navbar-li a", "click", function(){


		if ($(this).html().toUpperCase() !== "INICIO" && $(this).html().toUpperCase() !== "HOME" && $(this).html().toUpperCase() && "TOP" && $(this).html().toUpperCase() !== "TOPO") {

			var idSec = $(this).attr("data-target");

			var secLocation = $(idSec).offset().top;

			$("html").animate({scrollTop: secLocation-90}, 1000);
		}
		else
			$("html").animate({scrollTop: 0}, 1000);

		
	});
	*/

	$(".parallax").parallax();

	$(".sublogo").hide();
	$(".menu-responsive").hide();

	$(".sidenav").sidenav();

	$(".fixed-action-btn").floatingActionButton();

	$(".scrollspy").scrollSpy();

	$(".slider").slider();
    
});