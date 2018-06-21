$(function () {
    'use strict';
    var $page = $('#main'),
        options = {
            debug: true,
            prefetch: true,
            cacheLength: 4,
        },
        smoothState = $page.smoothState(options).data('smoothState');
});

