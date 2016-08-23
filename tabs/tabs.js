$.Tabs = function (option) {
    var defaults = {
        nav: $('.tabs_nav li'),
        cons: $('.tabs_cons'),
        tag: 'now',
        trigger: 'click',
        target: 1
    };
    var options = $.extend(defaults, option);
    options.nav.on(options.trigger, function (event) {
        event.preventDefault();
        var i = $(this).index();
        options.nav.removeClass(options.tag);
        $(this).addClass(options.tag);
        options.cons.hide(0);
        options.cons.eq(i).show(0);
    });
    options.nav.eq(options.target == -1 ? 0 : options.target - 1).trigger(options.trigger);
};
