function ScrollOffsetTop(){
    let navLink = $('.navbar-nav > .nav-item > .nav-link');
    let headerHeight = $('.header').outerHeight();
    navLink.click(function(){
        let section =  $(this).attr('href');
        /* if (section == '#about-section')
            $('html, body').animate({scrollTop: $(section).offset().top}, 200);
        else */
            $('html, body').animate({scrollTop: $(section).offset().top - 69}, 200);
    });
    $('body').offset($('body').scrollspy({target: ".header", offset: 69}));
}

function ShowHideNavLinkBorder(){
    let navLink = $('.navbar-nav > .nav-item > .nav-link');
    navLink.on('event', function() {
        $(this).addClass('active').trigger('classChange');
    });
    
    // in another js file, far, far away
    navLink.on('classChange', function() {
        $(this).children().css('border-color', '#b1b493');
        console.log('A')
    });
    
}

function StickyNav(){
    $(window).scroll(function(){
        let header = $('.header');
        let bannerOffsetTop = $('#home-section').offset().top;
        let heighOfBanner = $('#home-section').outerHeight();
        if ($(window).scrollTop() > (bannerOffsetTop + heighOfBanner - header.outerHeight() - 5)){
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
    StickyNav();
    AnimationDownloadCVButton();
    AnimationSkillCard();
})