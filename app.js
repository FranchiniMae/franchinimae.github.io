console.log('linked');

// var ypos,image;
// function parallax() {
// 	ypos = window.pageYOffset;
// 	image = document.getElementById('image');
// 	image.style.top = ypos * .4 + 'px';
// }
// window.addEventListener('scroll', parallax);

	var documentEl = $(document),
	parallaxBg = $('div.parallax-bg');

	documentEl.on('scroll', function () {
		var currScrollPos = documentEl.scrollTop();
		parallaxBg.css('background-position', '0 ' + -currScrollPos/4 + 'px');
	});



