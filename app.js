console.log('linked');

$(document).ready(function(){
$('.projectinfo').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
	

  var documentEl = $(document),
	parallaxBg = $('div.parallax-bg');

	documentEl.on('scroll', function () {
	var currScrollPos = documentEl.scrollTop();
	parallaxBg.css('background-position', '0 ' + -currScrollPos/4 + 'px');
	});
});