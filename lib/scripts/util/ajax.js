var $ = require('jquery');

exports.json = function json(url, success, error) {
    if(!success) {
        throw new Error('no success callback specified');
    }
    var jxhr = $.getJSON(url, success);
    if (error !== undefined) {
        jxhr.fail(error);
    }
};

exports._jquery = function (jquery) {
    $ = jquery;
}