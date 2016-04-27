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
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						variableWidth: false,
						centerMode: false,
						// adaptiveHeight: true
					}
				}
			]
		});
	}());

	// height Slick Slider
	function resizeGallery() {
		if ($(window).width() < 768) {
			var galleryHeight = $('.gallery__item').eq(0).outerHeight();
			$('.gallery__item').each(function () {
				if ($(this).outerHeight() < galleryHeight) {
					galleryHeight = $(this).outerHeight();
				}
			});
			$('.gallery .slick-track').css('height', galleryHeight);
			return;
		}
		$('.gallery .slick-track').css('height', 'auto');
	};

	resizeGallery();

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
		})
			.on("mousewheel", function (event) {
				event.preventDefault();
				console.log(event.deltaX);
				console.log(event.deltaY);
				if (event.deltaX > 0 || event.deltaY < 0) {
					$('.slider-nav').slick('slickNext');
				} else if (event.deltaX < 0 || event.deltaY > 0) {
					$('.slider-nav').slick('slickPrev');
				}
			});
	}());

	// Window Scroll
	(function() {
		$(window).load(function () {
			var callHeight = $('.call').outerHeight();
			if ($(document).scrollTop() >= 1) {
				$('.header').addClass('is-fixed');
			} else {
				$('.header').removeClass('is-fixed');
			}
			$(window).scroll(function () {
				if ($(document).scrollTop() >= callHeight/2) {
					$('.header').addClass('is-fixed');
				} else {
					$('.header').removeClass('is-fixed');
				}
			});
		});
	}());

	// Counter
	(function(){
		$(window).load(function () {
			$(".timer__in").each(function(index){
				var counter = $(this);
				counter.countdown({
					seconds:counter.data("seconds"),
					callback:function(days,hours,minutes,seconds,total){
						days = (days) ? ((days<10)?"0"+days:days)+":" : "00:";
						hours = (hours) ? ((hours<10)?"0"+hours:hours)+":" : "00:";
						minutes = (minutes) ? ((minutes<10)?"0"+minutes:minutes)+":" : "00:";
						seconds = (seconds) ? ((seconds<10)?"0"+seconds:seconds) : "00";
						counter.html(days+hours+minutes+seconds);
					},
					finished: function(){
						// your code cere
					}
				});
			});
		});
	}());

	// nav Scroll
	(function () {
		$('.nav a').on('click', function (e) {
			e.preventDefault();
			var _this = $(this),
					el = _this.attr('href').substr(1),
					elScroll = $('#' + el).offset().top,
					elOffset = $('.header__row').height();
			$('html, body').animate({ scrollTop: elScroll - elOffset }, 'slow');
		});
	}());

	// menu Toggle
	(function () {
		$('#menu_toggle').on('click', function () {
			$(this).toggleClass('is-active');
			$('.nav').toggleClass('is-active');
		});
	}());

});