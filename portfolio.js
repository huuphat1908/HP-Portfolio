function ScrollOffsetTop(){
    let navLink = $('.navbar-nav > .nav-item > .nav-link');
    navLink.click(function(){
        let section =  $(this).attr('href');
        $('html, body').animate({scrollTop: $(section).offset().top - 69}, 200);
    });
}

function StickyNav(){
    $(window).scroll(function(){
        let header = $('.header');
        let fakeHeaderNav = $('#fake-header-nav');
        let bannerOffsetTop = $('#home-section').offset().top;
        let heighOfBanner = $('#home-section').outerHeight();
        if ($(window).scrollTop() > (bannerOffsetTop + heighOfBanner - header.outerHeight() - 1)){
            header.addClass('header_NotOnTop');
            if ($(window).width() < 768){
                fakeHeaderNav.css('height', '69');
            }
        }
        else{
            header.removeClass('header_NotOnTop');
            fakeHeaderNav.css('height', '0');
        }
    });
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
    StickyNav();
    AnimationDownloadCVButton();
    AnimationSkillCard();
})