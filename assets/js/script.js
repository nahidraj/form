(function ($) {
	"use strict";

	// fixed menu js
	// $(window).on('scroll', function () {
	// 	var scroll = $(window).scrollTop();
	// 	if (scroll < 245) {
	// 		$("#sticky-header").removeClass("sticky-menu");
	// 		$("#header-fixed-height").removeClass("active-height");

	// 	} else {
	// 		$("#sticky-header").addClass("sticky-menu");
	// 		$("#header-fixed-height").addClass("active-height");
	// 	}
	// });

	// Fixed menu js start
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$("#header-fixed-height").addClass("active-height");
		}
	});

	// country slider js
	$(".banner_slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		dots: false,
		autoplay: true,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
		nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
	});

	// flash product countdown js
	$('#getting-started').countdown('2024/04/13', function (event) {
		$(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
		$(this).html(event.strftime('<div class="sing-counter">%D <span>Days</span></div> <div class="sing-counter">%H <span class="hours">hrs</span></div> <div class="sing-counter">%M <span>min</span></div> <div class="sing-counter">%S <span>sec</span></div>'));
	});

	/* Odometer Active js */
	// $('.odometer').appear(function (e) {
	// 	var odo = $(".odometer");
	// 	odo.each(function () {
	// 		var countNumber = $(this).attr("data-count");
	// 		$(this).html(countNumber);
	// 	});
	// });

	// Mobile menu js start

	$(".mobile-topbar .bars i").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
		return false;
	});

	$(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
	});

	$('.sub-mobile-menu ul').hide();
	$(".sub-mobile-menu a").on("click", function () {
		$(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});

	// gallery popup js
	$(".parent-container").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	// coupon code js
	$('.coupon-code-here').click(function () {
		$('.coupon-code-form').slideToggle();
	})
	// ship address js
	$('.show-hide-ship-address').click(function () {
		$('.different-address').slideToggle();
	})

	// video popup js
	$('.vidplay').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
			},
			srcAction: 'iframe_src',
		}
	});
	// product details image slider
	$('.product-image-slider').slick({
		dots: true,
		arrows: true,
		prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
		nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
		customPaging: function (slick, index) {
			var targetImage = slick.$slides.eq(index).find('img').attr('src');
			return '<img src=" ' + targetImage + ' "/>';
		}
	});

	// quantity js
	$(".cart-minus").on('click', function () {
		var $input = $(this).parent().find("input");
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$(".cart-plus").on('click', function () {
		var $input = $(this).parent().find("input");
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});


	// scroll to top js
	var btn = $(".scroll-to-top");

	$(window).scroll(function () {
		btn.toggleClass("show", $(window).scrollTop() > 300);
	});

	btn.click(function (e) {
		e.preventDefault();
		if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
			$("html").animate({
					scrollTop: 0,
				},
				800
			);
		} else {
			$("html, body").animate({
					scrollTop: 0,
				},
				0
			);
		}
	});

})(jQuery);