var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Lesson 4 - I am served via a router.' });
});
router.get('/data-default', function(req, res) {
  res.json({"response":"I am a default data service, and will be replaced after you click Get Dynamic Data button"});
});
router.get('/data-service', function(req, res) {
  res.json({"response":"I am a dynamic data service created at "+new Date()+""});
});

module.exports = router;
