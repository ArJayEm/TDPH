$(function() {
    // toggle navigation
    $('.toggle').on('click', function(){
        $('.main-nav').toggleClass('toggle-nav');
    });
    // get in touch click
    $('#getintouch').on('click', function(){
        $('.loader_wrapper').fadeIn(300, function() {
            // callback after animation
            $(this).css({'display' : 'flex'});
        });
    });
});
$(document).keyup(function(e){
    // ESC key is pressed
    if(e.keyCode === 27) { $('.loader_wrapper').fadeOut(300); }
});
// windows scrolling
$(window).scroll(function() {
    var wScroll = $(this).scrollTop(); // current scrollbar location
    var wHeight = $(window).height();
    var contentTop = $('.content').offset().top
    // check when the services should appear
    if(wScroll > contentTop - wHeight / 1.7) {
        // animate each services one by one
        $('.content .services').each(function(i) {
            setTimeout(function() {
                $('.services').eq(i).addClass('is-showing');
            }, 150 * (i+1));
        })
    }
});
$(window).on("load", function() {
    // remove loader when all images has been loaded.
    $('.loader_wrapper').fadeOut(300, function() {
        // callback after animation
        $(this).css({'display' : 'none', 'background-color' : 'rgba(30,30,30,0.8)', 'color' : 'white'});
    });
    $('.loader_wrapper > p').css({'color' : 'white'});
});
