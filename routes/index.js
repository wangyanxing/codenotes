
/*
 * GET home page.
 */

var dbRoutes = require('./dbRoute');
var user = require('./user');

var i=0;
exports.route = [];
exports.route[++i] = function(app)
{
    app.get('/', function(req, res){
        res.redirect('Home.html');
    });
    
    app.get('/insert', dbRoutes.insert);
}

exports.route[++i] = function(app)
{
    app.get('/users', user.list);
}
/*
exports.route[++i] = function(app)
{
    app.get('/', function(req, res){
    res.render('bootstrapSample', {});
    });
    app.get('/sample', function(req, res){
    res.render('bootstrapSample', {});
    });
}
*/