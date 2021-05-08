function ShowHideNavLinkBorder(){
    let navSpan = $('.navbar-nav > .nav-item > .nav-link > span');
    let navItem = $('.navbar-nav > .nav-item');
    navItem.mouseenter(function(){
        $(this).children().children().addClass('show-border');
    });
    navItem.mouseleave(function(){
        $(this).children().children().removeClass('show-border');
    });
    navItem.click(function(){
        navSpan.removeClass('active');
        $(this).children().children().addClass('active');
    });
    navItem.on('touchstart', function(){
        $(this).children().children().addClass('show-border');
    });
    navItem.on('touchend', function(){
        $(this).children().children().removeClass('show-border');
    });
    navItem.click(function(){
        navSpan.removeClass('active');
        $(this).children().children().addClass('active');
    });
}

function ChangeBgColorNav(){
    $(window).scroll(function(){
        let header = $('.header');
        let bannerOffsetTop = $('#home-section').offset().top;
        let heighOfBanner = $('#home-section').outerHeight();
        if ($(window).scrollTop() > (bannerOffsetTop + heighOfBanner)){
            header.addClass('header_NotOnTop');
        }
        else
            header.removeClass('header_NotOnTop');
    })
}

$(document).ready(function(){
    ShowHideNavLinkBorder();
    ChangeBgColorNav();
})