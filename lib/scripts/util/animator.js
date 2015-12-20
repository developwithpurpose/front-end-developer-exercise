var $ = require('jquery');

exports.animate = function (object, options, time, cb) {
    $(object).animate(options, time, cb);
};

exports._jquery = function (jquery) {
    $ = jquery;
};