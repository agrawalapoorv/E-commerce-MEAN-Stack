exports.hello = function(req, res) {
    res.render('helloworld', { title: ' Products Hello, World!' });
};

exports.display = function(req, res) {
	res.render('allproducts', {title: 'Product Details'});
};

//GET Car information page. 
exports.infos= function(req, res) {
   var db = req.db;
   var id = req.params.id;
    var collection = db.get('cars');
    var dateNow = new Date();
    var status= 0;
    collection.update({'model':id},{$set : {'currentDate' : dateNow}});
    collection.find({'model':id},{},function(e,docs){
    	if (typeof docs[0]["end_date"] == 'undefined'){
			status = 1;
			console.log("status " + status);
		}
        res.render('carinfo', {
            "carinfo" : docs,"status" : status
        });
    });
};

//GET Television information page. 
exports.tvinfos= function(req, res) {
   var db = req.db;
   var id = req.params.id;
    var collection = db.get('tvs');
    var dateNow = new Date();
    var status = 0;
    collection.update({'model':id},{$set : {'currentDate' : dateNow}});
    collection.find({'model':id},{},function(e,docs){
    	if (typeof docs[0]["end_date"] == 'undefined'){
			status = 1;
			console.log("status " + status);
		}
        res.render('tvinfo', {
            "tvinfo" : docs,"status" : status
        });
    });
};


//GET Bike information page. 
exports.bikeinfos= function(req, res) {
   var db = req.db;
   var id = req.params.id;
    var collection = db.get('Bike');
    var dateNow = new Date();
    var status = 0;
    collection.update({'model':id},{$set : {'currentDate' : dateNow}});
    collection.find({'model':id},{},function(e,docs){
    	if (typeof docs[0]["end_date"] == 'undefined'){
			available = 1;
			console.log("status " + status);
		}
        res.render('bikeinfo', {
            "bikeinfo" : docs,"status" : status
        });
    });
};




//GET Addobject  page. 
exports.post= function(req, res) {
   var db = req.db;
//   var id = req.params.id;
   var modelName=req.body.model;
   var yoms=req.body.yom;
   var mileages=req.body.mileage;
   var conditions=req.body.condition;
    var collection = db.get('cars');
    collection.insert({'model':modelName, 'yom':yoms, 'mileages':mileage, 'conditions':condition},function(e,docs){
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("frontpage");
            // And forward to success page
            res.redirect("frontpage");
        }
    });
};