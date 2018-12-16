'use strict';

var el_header = document.querySelector('#js_header'),
    el_overlay = document.querySelector('#js_overlay'),
    el_suoMenuTrigger = document.querySelector('#js_suoMenuTrigger'),
    el_suoMenu = document.querySelector('#js_suo_menu'),
    el_helpBox = document.querySelector('#js_help_box'),
    el_helpButton = document.querySelector('#js_help_button'),
    el_helpInfos = document.querySelectorAll('.js_question_info');




var fn_setOverlayStatus = function () {
    if ($(el_overlay).hasClass('active')) {
        if ($(el_suoMenu).hasClass('active') || $(el_helpBox).hasClass('active')) {
            return
        }
        // setTimeout(function () {
        $(el_overlay).removeClass('active');
        // }, 250)
    } else {
        $(el_overlay).addClass('active');
    }
};

$(el_suoMenuTrigger).on('click', function () {
    $(el_suoMenu).toggleClass('active');
    fn_setOverlayStatus();
});

$(el_helpButton).on('click', function () {
    // $(el_helpButton).toggleClass('active');
    $(el_helpBox).toggleClass('active');
    fn_setOverlayStatus();
    // $(document).trigger('helpTrigger');

});


/* help button event */

$(document).on('helpTrigger', function () {

    // if active, change tran
    if ($(el_helpButton).hasClass('active')) {
        $(el_helpInfos).removeClass("hidden animated zoomOut");
        $(el_helpInfos).addClass("animated zoomIn");

        if (!$(el_overlay).hasClass('active')) {
            $(el_overlay).addClass('active');
        }
    } else {
        $(el_helpInfos).removeClass("animated zoomIn")
        $(el_helpInfos).addClass("animated zoomOut");


    }


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

