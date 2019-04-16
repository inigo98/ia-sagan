$(document).ready(function() {
    $('#nav-icon').click(function() {
        $(this).toggleClass('open');
        $('.main-nav').toggleClass('responsive');
    });

});
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function(event) {
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.header-container').addClass('nav-collapse');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.header-container').removeClass('nav-collapse');
        }
    }
    lastScrollTop = st;
}

$(".beneficts").click(function() {
    $('html,body').animate({
        scrollTop: $("#benefictsSection").offset().top
    }, 1000);
    $('.main-nav').removeClass('responsive');
    $('#nav-icon').removeClass('open');
});
$(".effect").click(function() {
    $('html,body').animate({
        scrollTop: $("#effectSection").offset().top
    }, 1000);
    $('.main-nav').removeClass('responsive');
    $('#nav-icon').removeClass('open');
});
$(".advantage").click(function() {
    $('html,body').animate({
        scrollTop: $("#advantageSection").offset().top - 200
    }, 1000);
    $('.main-nav').removeClass('responsive');
    $('#nav-icon').removeClass('open');
});
$(".about").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutSection").offset().top
    }, 1000);
    $('.main-nav').removeClass('responsive');
    $('#nav-icon').removeClass('open');
});
$(".contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contactSection").offset().top
    }, 1000);
    $('.main-nav').removeClass('responsive');
    $('#nav-icon').removeClass('open');
});
$("#down-arrow").click(function() {
    $('html,body').animate({
        scrollTop: $("#effectNaSection").offset().top + 50
    }, 1000);
});
$(window).on("scroll", function(evt) {
    const elements = document.querySelectorAll('.fade');
    // console.log(elements);
    for (var index = 0; index < elements.length; index++) {
        const element = elements[index];
        const elementPosition = element.getBoundingClientRect();
        const elementCenter = elementPosition.height / 2;
        // tslint:disable-next-line:max-line-length
        if (elementPosition.top < window.innerHeight - elementPosition.height + elementCenter && elementPosition.top > (elementPosition.height - 120) * -1) {
            element.classList.add('fade-end');
        } else {
            element.classList.remove('fade-end');
        }
    }
    const elements2 = document.querySelectorAll('.fade-arrow');
    // console.log(elements);
    for (var index2 = 0; index2 < elements2.length; index2++) {
        const element2 = elements2[index2];
        const elementPosition2 = element2.getBoundingClientRect();
        const elementCenter2 = elementPosition2.height / 2;
        // tslint:disable-next-line:max-line-length
        if (elementPosition2.top < window.innerHeight - elementPosition2.height + elementCenter2 && elementPosition2.top > (elementPosition2.height - 120) * -1) {
            element2.classList.add('fade-end');
        } else {
            element2.classList.remove('fade-end');
        }
    }
    const element3 = document.getElementById('aboutSection');
    const elementPosition3 = element3.getBoundingClientRect();
    const elementCenter3 = elementPosition3.height;
    // tslint:disable-next-line:max-line-length
    if (elementPosition3.top < window.innerHeight - elementPosition3.height + elementCenter3 && elementPosition3.top > (elementPosition3.height - 120) * -1) {
        element3.classList.add('fade-end');
    } else {
        element3.classList.remove('fade-end');
    }
});
function modal() {
    console.log('modal');
    $('#modalStreak').removeClass('disable');
}
function hideModal() {
    console.log('hide modal');
    $('#modalStreak').addClass('disable');
}
function hideNewModal() {
    console.log('hide modal');
    $('#modalNew').addClass('newdisable');
}