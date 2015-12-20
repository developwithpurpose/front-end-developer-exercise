var $ = require('./util/selector');
var animator = require('./util/animator');
var distanceHelper = require('./util/distance-helper');
var animationHelper = require('./util/animation-helper');

var listeners = {};
var listenerCounter = 0;
var $currentActive;
var $highlighter;

exports.register = function register(cb) {
    var id = listenerCounter++;
    listeners[id] = cb;
    return function unregister() {
        delete listeners[id];
    };
};


function select(target) {
    var $target = $(target);
    var destination = $target.position().top;
    $target.addClass('active');
    $currentActive.removeClass('active');
    
    var distance = distanceHelper.distance($currentActive.data('step-id'), $target.data('step-id'));
    
    $currentActive = $target;
    animator.animate(
        $highlighter,
        {
            top: destination
        },
        animationHelper.speed(distance)
    );
}

function itemClickHandler(ev) {
    var $target = $(this);
    ev.preventDefault();
    if(!$target.is($currentActive)) {
        for(var id in listeners) {
            if(listeners.hasOwnProperty(id)) {
                listeners[id]($target.data('step-id'));
            }
        }
        select($target);
    }
}

exports.init = function init($target) {
    var items = $target.find('.item');
    
    $currentActive = items.filter('.active');
    $highlighter = $target.find('.highlight');
    
    items.on('click touchend', itemClickHandler);
    items.on('keypress', itemClickHandler);
};