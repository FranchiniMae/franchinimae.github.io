console.log('linked');

$(document).ready(function(){
	$('.projectinfo').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
  	nextArrow: '<i class="slickright fa fa-angle-double-right"></i>',
  	prevArrow: '<i class="slickleft fa fa-angle-double-left"></i>',
  	appendArrows: $('.arrowdiv') 
	});
});
	

// $('.slider-container').slick({ 
// 	slide: '.slider-item', 
// 	arrows: true, 
// 	dots: true, 
// 	prevArrow: '<span class="slick-prev"></span>', 
// 	nextArrow: '<span class="slick-next"></span>', 
// 	appendArrows: '.slider-container .slider-nav', 
// 	appendDots: '.slider-container .slider-nav' });
//   var documentEl = $(document),
// 	parallaxBg = $('div.parallax-bg');

// 	documentEl.on('scroll', function () {
// 	var currScrollPos = documentEl.scrollTop();
// 	parallaxBg.css('background-position', '0 ' + -currScrollPos/4 + 'px');
// 	});
// });