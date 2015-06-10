var AppNS = {};

(function($, undefined){

    /**
     * Init events
     */
    AppNS.init = function() {
        $('.menu-btn').on('click', function() {
            $('.page').toggleClass('page_open-sidebar');
        })
        $('.page__accordion').accordion({
            autoHeight: true,
            collapsible: true,
            active: false,
            animated: false,
            heightStyle: "content"
        });
        $('.bxslider').bxSlider({
            adaptiveHeight: true,
            mode: 'fade',
            pager: false
        });
    };


    // call to init events
    $(AppNS.init);

})(jQuery);