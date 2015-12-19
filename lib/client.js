
var $ = require('jquery');
var navManager = require('./nav-manager');
var stepDetailsManager = require('./step-details-manager');

var main = $('.main');

navManager.init(main.find('nav'));
stepDetailsManager.init(main.find('.details'));

navManager.register(function navCallback(id) {
    stepDetailsManager.select(id);
});
