
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , products = require('./routes/products')
  , http = require('http')
  , path = require('path')
 // ,  bodyParser  = require('body-parser')
  , mongo = require('mongodb')
  ,  monk = require('monk')
  , mysql = require('mysql')
  ,  db = monk('localhost:27017/applications')
  , connection  = require('express-myconnection');

var app = express();



// all environments
app.set('port', process.env.PORT || 9000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use("/styles",express.static(__dirname + "/styles"));



app.use(function(req,res,next){
    req.db = db;
    next();
});



app.get('/', routes.index);
app.get('/loginpage', routes.logins);
app.get('/users', user.list);
app.get('/helloworld', products.hello);
//app.get('/userlist',routes.display);
//app.get('/product',products.display);
app.get('/coverpage',routes.disp);
app.get('/frontpage',routes.show);
app.get('/store/cars',routes.carlists);
app.get('/store/carinfo/:id',products.infos);
app.get('/tv',routes.tvlists);
app.get('/tvinfo/:id',products.tvinfos);
app.get('/bike',routes.bikelists);
app.get('/bikeinfo/:id',products.bikeinfos);
app.get('/about',routes.aboutus);
app.get('/service',routes.service);
app.get('/contact',routes.contact);
app.get('/Addobject',products.post);
//Make our db accessible to our router


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
