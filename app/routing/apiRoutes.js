var babySteps = require("../data/baby-steps");

module.exports = function (app) {

    app.get("/api/babySteps", function(req, res) {
        res.json(babySteps);
    });
}