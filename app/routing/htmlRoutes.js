var path = require('path');

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../babystep1.html"));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../index.html"));
    });
};