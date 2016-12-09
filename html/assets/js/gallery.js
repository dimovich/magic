$(window).on('load', function() {
    var mq = window.matchMedia( "(max-width: 820px)" );
    if (mq.matches) {
	$('#photos').justifiedGallery({
	    lastRow: 'hide',
	    rowHeight : 140,
	    rel : 'gallery',
	    margins : 20
	});
    } else {
	$('#photos').justifiedGallery({
	    lastRow : 'justify', 
	    rowHeight : 140,
	    rel : 'gallery',
	    margins : 20
	});
    }
});
