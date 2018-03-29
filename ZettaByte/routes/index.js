var express = require('express');
var router = express.Router();

var testObj = {
  name: "Raspberry",
  surname: "NodeMCU",
  class:"DIoT"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BIRJU',user:'DIOT' });
});

router.get('/response', function(req, res, next) {
  res.send("Success");
});

router.get('/jsonResponse', function(req, res, next) {
  console.log(params);
  res.send(testObj);
});

router.post('/postResponse', function(req, res, next) {
  console.log(req.body);
  res.send("Params Received");
});

module.exports = router;
