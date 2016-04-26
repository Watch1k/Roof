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

});