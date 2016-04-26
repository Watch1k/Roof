head.ready(function(){

	// Clear placeholder
	(function() {
		$('input,textarea').focus(function(){
				$(this).data('placeholder',$(this).attr('placeholder'))
				$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

	// range slider
	(function() {
		$("#rangeSlider").ionRangeSlider({
			min: 0,
			max: 1000,
			from: 35,
			onChange: function (data) {
				$('.range-slider__number').text(Math.floor(data.from * 1250 / 35));
			}
		});
	}());
	
	// gallery Slider
	(function() {
		$('.gallery').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			variableWidth: true,
			arrows: false,
			focusOnSelect: true
		});
	}());
	
	// quotes Slider
	(function() {
		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			centerMode: true,
			focusOnSelect: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 7000,
			adaptiveHeight: false
		});
	}());

	// Window Scroll
	(function() {
		$(window).load(function () {
			var callHeight = $('.call').outerHeight();
			console.log(callHeight);
			$(window).scroll(function () {
				if (jQuery(document).scrollTop() >= callHeight) {
					$('.header').addClass('is-fixed');
				} else {
					$('.header').removeClass('is-fixed');
				}
			});
		});
	}());

});