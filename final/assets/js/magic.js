$(function() {
    // init
    $("#menu-nav").css({"top": ($(window).scrollTop()) + "px"});

    // make sure side-menu is visible
    $(window).scrollTop($(window).scrollTop() + 1);
    $(window).scrollTop($(window).scrollTop() - 1);

    // window scroll
    $(window).scroll(function(){
	$("#menu-nav").css({"top": ($(window).scrollTop()) + "px"});
    });

    //
    // menu anchors
    //
    $("#food-link").click(function() {
	$('html, body').animate({
            scrollTop: $("#food").offset().top
	}, 1000);
    });

    $("#beer-link").click(function() {
	$('html, body').animate({
            scrollTop: $("#beer").offset().top
	}, 1000);
    });

    $("#drinks-link").click(function() {
	$('html, body').animate({
            scrollTop: $("#drinks").offset().top
	}, 1000);
    });


    // element highlight on scroll
    // for each element with the class 'menu-section'
    $('.menu-section').each(function eachElement() {
                    // cache the jQuery object
                    var $this = $(this);
                    var position = $this.position();
                    $this.scrollspy({
                        min: position.top - 100,
                        max: position.top + $this.height(),
                        onEnter: function onEnter(element/*, position*/) {
                            $("." + element.id).css('mix-blend-mode', "overlay");
                        },
                        onLeave: function onLeave(element/*, position*/) {
			    $("." + element.id).css('mix-blend-mode', "normal");
                        }
                    });
    });
});

