$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		],
		asNavFor: '.sliderbig',
	});
	$('.sliderbig').slick({
		arrows: false,
		fade: true,
		asNavFor: '.slider',
	})
});

