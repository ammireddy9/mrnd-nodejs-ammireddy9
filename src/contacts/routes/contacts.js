var express = require('express');
var router = express.Router();

/* GET contacts */
var array=[];
var count=0,msg_count=0;
var messages=[];
router.get('/:id', function(req, res, next) {
	res.json(array[req.params.id]);
});

router.post('/', function(req, res, next) {
  //console.log(req.body);
  count++;
  array.push(req.body);
  res.json(count-1);
});

router.put('/:id', function(req, res, next) {
	array[req.params.id].firstName = req.body.firstName;
	res.json(array[req.params.id]);
});

router.post('/msg', function(req, res, next) {
  msg_count++;
  messages.push(req.body);
  res.json(msg_count-1);
});

router.get('/msg/:id', function(req, res, next) {
	res.json(messages[req.params.id]);
});
module.exports = router;
