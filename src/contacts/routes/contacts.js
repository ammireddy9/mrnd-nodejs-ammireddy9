var express = require('express');
var router = express.Router();

/* GET contacts */
var contacts=[];
var count=0,msg_count=0;
var messages=[];
var msg = new Object();
router.get('/:id', function(req, res, next) {
	res.json(contacts[req.params.id]);
});

router.post('/', function(req, res, next) {
  //console.log(req.body);
  count++;
  contacts.push(req.body);
  res.json(count-1);
});

router.put('/:id', function(req, res, next) {
	contacts[req.params.id].firstName = req.body.firstName;
	res.json(contacts[req.params.id]);
});

router.post('/msg', function(req, res, next) {
	var msg = req.body;
	var contact = contacts[msg.cid];
	console.log('Contact:');console.log(contact);
	if(!contact.messages){
		console.log('Messages:');
		contact.messages = [];
	}
	var id = contact.messages.length;
	contact.messages[id] = req.body.data;
	console.log('ID:');console.log(id);
	res.json(id);
});

router.get('/msg/:cid/:mid', function(req, res, next) {
	var contact = contacts[req.params.cid];
	res.json(contact.messages[req.params.mid]);
});
module.exports = router;
