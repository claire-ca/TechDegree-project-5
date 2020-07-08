
( function( $ ) {

	$( '.swipebox' ).swipebox({
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : true, // false to force the use of png for buttons
		initialIndexOnArray : 0, // which image index to init when a array is passed
		hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
		removeBarsOnMobile : false, // false will show top bar on mobile devices
		hideBarsDelay : 4000, // delay before hiding bars on desktop
		beforeOpen: function() {}, // called before opening
		afterOpen: null, // called after opening
		afterClose: function() {}, // called after closing
		loopAtEnd: true // true will return to the first image after the last image is reached
	});

} )( jQuery );

let $images = $('.link-image');

$('#gallery-search').keyup(function(){
	let $searchInput = $(this).val().toLowerCase();

	$('.link-image').each(function(){
		let $title = $(this).attr('title').toLowerCase();
		if($title.indexOf($searchInput) > -1) {
			$(this).show();
		} else {
			$(this).hide();
		}
	})
});
