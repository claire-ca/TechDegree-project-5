
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

$("#gallery-search").keyup(function() {
    var val = $.trim(this.value.toLowerCase()); // gets the value in the input field. Trims whitespace from beginning and end of input. I added toLowerCase().
    if (val === "") // if val is empty 
        $('a').show(); // show all the a tags
    else { // otherwise
        $('a').hide(); // hide all the a tags
        $('a[title*=' + val + "]").show(); // unless the title attribute contains the characters written in the input field
    }
});