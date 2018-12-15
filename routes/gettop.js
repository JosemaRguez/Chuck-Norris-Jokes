var express = require('express')
var router = express.Router()
var request = require('request')
const fs = require('fs')


router.get('/', function(req, res) {
	fs.readFile('./database/topjokes.json', 'utf8', function readFileCallback(err, data){
		res.json(data)  
	});
});

module.exports = router;


