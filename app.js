console.log('linked');

$(document).ready(function(){
	$('.projectinfo').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
  	nextArrow: '<i class="slickright fa fa-arrow-circle-right"></i>',
  	prevArrow: '<i class="slickleft fa fa-arrow-circle-left"></i>',
  	appendArrows: $('.arrowdiv') 
	});
});
