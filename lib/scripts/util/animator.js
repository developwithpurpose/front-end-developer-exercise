var $ = require('jquery');

exports.animate = function (object, options, time, cb) {
    $(object).animate(options, time, cb);
};