
if (!location.search.match('nojs')) {
    
    var $ = require('jquery');
    var navManager = require('./nav-manager');
    var stepDetailsManager = require('./step-details-manager');
    
    var root = $('.root-container');
    root.addClass('animationEnabled fixedHeight');
    
    navManager.init(root.find('nav'));
    stepDetailsManager.init(root.find('.details'));
    
    navManager.register(function navCallback(id) {
        stepDetailsManager.select(id);
    });
}