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

$(document).ready(function(){
    ShowHideNavLinkBorder();
    TransformBannerWhenPageLoad();
    TransformBannerWhenReziseWindow();
})