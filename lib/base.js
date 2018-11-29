'use strict';

var el_header = document.querySelector('#js_header'),
    el_overlay = document.querySelector('#js_overlay'),
    el_suoMenuTrigger = document.querySelector('#js_suoMenuTrigger'),
    el_suoMenu = document.querySelector('#js_suo_menu'),
    el_productListBox = document.querySelector('#js_product_list_box'),
    el_helpButton = document.querySelector('#js_help_button'),
    el_helpInfos = document.querySelectorAll('.js_question_info');

var fn_scrollTo = function (element, scrollPixels, duration) {
    var scrollPos = element.scrollLeft;
    // Condition to check if scrolling is required
    if (
        !(
            (scrollPos === 0 || scrollPixels > 0) &&
            (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0)
        )
    ) {
        // Get the start timestamp
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        var scroll = function (timestamp) {
            //Calculate the timeelapsed
            var timeElapsed = timestamp - startTime;
            //Calculate progress
            var progress = Math.min(timeElapsed / duration, 1);
            //Set the scrolleft
            element.scrollLeft = scrollPos + scrollPixels * progress;
            //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
            if (timeElapsed < duration) {
                //Request for animation
                window.requestAnimationFrame(scroll);
            } else {
                return;
            }
        }

        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll);
    }
};

var fn_swipeLeft = function () {
    fn_scrollTo(el_productListBox, -400, 600);
};

var fn_swipeRight = function () {
    fn_scrollTo(el_productListBox, 400, 600);
};

$('#js_btn_left').on('click', function () {
    fn_swipeLeft();
});

$('#js_btn_right').on('click', function () {
    fn_swipeRight();
});

$(el_helpButton).on('click', function () {
    $(el_helpButton).toggleClass('active');
    $(document).trigger('helpTrigger');
});

$(document).on('helpTrigger', function () {
    if ($(el_helpButton).hasClass('active')) {
        $(el_helpInfos).removeClass("hidden animated zoomOut");
        $(el_helpInfos).addClass("animated zoomIn");
    } else {
        $(el_helpInfos).removeClass("animated zoomIn")
        $(el_helpInfos).addClass("animated zoomOut");

        setTimeout(function () {
            $(el_helpInfos).addClass("hidden");
        }, (1650));
    }

});

$('#js_close_button').on('click', function () {

});

$(el_header).on('click', function (e) {
    if (e.target.className.includes('js_category_trigger')) {
        return;
    }

    if (e.target.id == 'js_pandaImage' && $(el_header).hasClass('active') == false) {
        $(el_header).addClass('active')
    } else {
        $(el_header).removeClass('active')
    }
});

$(el_suoMenuTrigger).on('click', function () {
    $(el_suoMenu).toggleClass('active');
    $(el_overlay).toggleClass('active');
});