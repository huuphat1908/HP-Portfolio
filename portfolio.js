function ScrollOffsetTop(){
    $('html, body').animate({scrollTop: $('#home-section').offset().top}, 'slow');
    /* $('html, body').animate({scrollTop: $('#about-section').offset().top}, 'slow');
    $('html, body').animate({scrollTop: $('#skills-section').offset().top}, 'slow'); */
}

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

function AnimationDownloadCVButton(){
    let button = $('#home-section .banner-text .btn-outline-primary');
    button.on('touchstart', function(){
        $(this).addClass('hover');
    });
    button.on('touchend', function(){
        $(this).removeClass('hover');
    });
}

function AnimationSkillCard(){
    let card = $('#skills-section .container .card');
    card.on('touchstart', function(){
        $(this).addClass('hover');
        $(this).find('h5').addClass('hover');
        $(this).find('span').addClass('hover');
    });
    card.on('touchend', function(){
        $(this).removeClass('hover');
        $(this).find('h5').removeClass('hover');
        $(this).find('span').removeClass('hover');
    });
}

$(document).ready(function(){
    ScrollOffsetTop();
    ShowHideNavLinkBorder();
    ChangeBgColorNav();
    AnimationDownloadCVButton();
    AnimationSkillCard();
})