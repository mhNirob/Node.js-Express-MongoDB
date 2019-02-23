var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    console.log(db)
    collection = db.get('customers');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "customers" : docs
            , title: 'Hello, World!'});
    });

});	

/* Get Medlife Page. */

router.get('/medlife', function(req,res){
	var db = req.db;
    console.log(db)
    collection = db.get('customers');
    collection.find({},{},function(e,docs){
        res.render('medlife', {
            "customers" : docs
            , title: 'Hello, World!'});
    });
});



module.exports = router;
