var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;

});


setInterval(function(event) {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }

}, 250);



function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight) {
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {

        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if (height > 900) {

        $("#coffee-div1").fadeIn();
        $("#coffee-div2").fadeIn(1000);
        $("#coffee-div3").fadeIn(2500);
        $("#coffee-div4").fadeIn(4000);
        $("#coffee-div5").fadeIn(5000);
        $("#coffee-div6").fadeIn(6000);
        $("#coffee-div7").fadeIn();
        $("#coffee-div8").fadeIn(1000);
        $("#coffee-div9").fadeIn(2500);
        $("#coffee-div10").fadeIn(4000);
        $("#coffee-div11").fadeIn(5000);
        $("#coffee-div12").fadeIn(6000);
    }

});
