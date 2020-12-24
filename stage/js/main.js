$(document).ready(function() {
	'use strict';
	//-----------------------------------------------------------------------
	// Preloader
	// $(window).on('load', function(){

	// 	$('body').css('overflow','hidden');
	// 	$('.preloader').fadeOut(function(){

	// 		$('body').css('overflow','');
	// 	});
	// });

	// js for preloder
	$(window).on('load', function() {
		$('.preloder').delay(2000).fadeOut(500);
	});

	//-------------------------------------------------------------------------
	// Trigger Typed.js
	function typedJs(element) {
		$(element).typed({
			strings: [ 'desinger', 'developer' ],
			loop: true,
			typeSpeed: 40,
			backSpeed: 40
		});
	}
	typedJs('.typed');
	//-------------------------------------------------------------------------
	// Back To Top Button
	var BackToTop = $('.packtop');

	BackToTop.click(function(e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: 0
			},
			600
		);
	});

	$(window).on('scroll', function() {
		// Show/Hide Back to top  button
		if ($(this).scrollTop() >= 500) {
			if (BackToTop.is(':hidden')) {
				BackToTop.fadeIn();
			}
		} else {
			BackToTop.fadeOut();
		}
	});
	//-----------------------------------------------------------------------------
	// toggle sidebar [hide/show]
	$('.toggler-icon').on('click', function() {
		$('.sidebar').toggleClass('no-sidebar');
		$('.toggler-icon i').toggleClass('fa-align-justify fa-close');
	});

	// Smoothly Scroll To Element
	$('.sidebar-menu li a').click(function(e) {
		// Add Active Class To The Active Link And Remove It From Sibling
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');

		// Show/Hide Back to top  button
		if ($(this).scrollTop() >= 500) {
			if (BackToTop.is(':hidden')) {
				BackToTop.fadeIn();
			}
		} else {
			BackToTop.fadeOut();
		}
	});
	//-----------------------------------------------------------------------------

	//----------------------------------------------------------------------------
	// Testimonials Carousal
	$('.owl-carousel').owlCarousel({
		items: 3,
		loop: true,
		nav: false,
		dots: true,
		margin: 30,
		dotsEach: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 1
			},
			600: {
				items: 1
			},
			800: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});

	//--------------------------------------
});
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
