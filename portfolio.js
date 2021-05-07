function ShowHideNavLinkBorder(){
    let navSpan = $('.navbar-nav > .nav-item > .nav-link > span');
    let navItem = $('.navbar-nav > .nav-item')
    navItem.mouseenter(function(){
        $(this).children().children().addClass('showBorder');
    })
    navItem.mouseleave(function(){
        $(this).children().children().removeClass('showBorder');
    })
    navItem.click(function(){
        $(this).children().children().removeClass('showBorder');
    })
}

function TransformBannerWhenReziseWindow(){
    let HeightOfNav = $('.header').outerHeight();
    let NotHeader = $('#NotHeader');
    window.onresize = function(){
        if (window.innerWidth < 768){
            NotHeader.offset({ top: HeightOfNav});   
        }
        else
        {
            NotHeader.offset({ top: 0});
        }
    }
}

function TransformBannerWhenPageLoad(){
    let HeightOfNav = $('.header').outerHeight();
    let NotHeader = $('#NotHeader');
    if (window.innerWidth < 768){
        NotHeader.offset({ top: HeightOfNav});      
    }
}

function TransformBannerWhenClickHambugerMenu(){
    let hambugerMenu = $('.navbar-toggler');
    hambugerMenu.click(function(){
        setTimeout(function(){
            let HeightOfNav = $('.header').outerHeight();
            NotHeader = $('#NotHeader');
            if (window.innerWidth < 768){
            NotHeader.animate({ bottom: "500px"});      
    }
        }, 500);
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
    TransformBannerWhenPageLoad();
    TransformBannerWhenReziseWindow();
    ChangeBgColorNav();
    TransformBannerWhenClickHambugerMenu();
})