var $ = require('jquery');

exports.json = function json(url, success, error) {
    var jxhr = $.getJSON(url, success);
    if (error !== undefined) {
        jxhr.fail(error);
    }
};