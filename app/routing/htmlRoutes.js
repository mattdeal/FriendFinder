// dependencies
var path = require('path');

// routing
module.exports = function(app) {
    // handle /survey 
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // show home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
}