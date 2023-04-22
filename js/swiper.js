

const portfolioSwiper = new Swiper('.testimonials__slider', {
	// Optional parameters
	direction: 'horizontal',
	//loop: true,
	
	//centeredSlides: true,
	pagination: {
    el: '.testimonials__pagination',
  },
	// Navigation arrows
	navigation: {
		nextEl: '.testimonials-button-next',
		prevEl: '.testimonials-button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	// Responsive breakpoints
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1.1,
	// 		spaceBetween: 16,
	// 	},
	// 	475: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 36,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 56,
	// 	},
	// },
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',

});




