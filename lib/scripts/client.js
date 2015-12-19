
var $ = require('jquery');
var navManager = require('./nav-manager');
var stepDetailsManager = require('./step-details-manager');

if (!location.search.match('nojs')) {
    var main = $('.main');
    main.addClass('animationEnabled');
    
    navManager.init(main.find('nav'));
    stepDetailsManager.init(main.find('.details'));
    
    navManager.register(function navCallback(id) {
        stepDetailsManager.select(id);
    });
}