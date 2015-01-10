/*
 * GET home page.
 */


/* GET home page. */
exports.index = function(req, res) {
    res.render('index', {title: "Express" });
};

/* GET Hello World page. */
exports.hello = function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
};


// GET Userlist page. 
/*exports.display=('userlist', function(req, res) {
   var db = req.db;
    var collection = db.get('cars');
    collection.find({'model':"BMW i8"},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});*/



/* GET About us page. */
exports.aboutus = function(req, res) {
    res.render('about', { title: 'Shop-Easy!' });
};

/* GET Services page. */
exports.service = function(req, res) {
    res.render('service', { title: 'Shop-Easy!' });
};

/* GET contact page. */
exports.contact = function(req, res) {
    res.render('contact', { title: 'Shop-Easy!' });
};

/* Login page */
exports.logins = function(req, res) {
    res.render('loginpage', { title: 'Shop-Easy!' });
};

exports.disp = function(req, res) {
    res.render('coverpage', { title: 'Shop-Easy!' });
};

exports.show = function(req, res) {
    res.render('frontpage', { title: 'Shop-Easy!' });
};

exports.carlists = function(req, res) {
    res.render('cars', { title: 'Shop-Easy!' });
};

exports.tvlists = function(req, res) {
    res.render('tv', { title: 'Shop-Easy!' });
};

exports.bikelists = function(req, res) {
    res.render('bike', { title: 'Shop-Easy!' });
};


/* GET Hello World page. */
exports.test = function(req, res) {
    res.render('test', { title: 'Hello, World!' });
};



