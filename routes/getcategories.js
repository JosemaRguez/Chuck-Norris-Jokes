var express = require('express')
var router = express.Router()
var request = require('request')


router.get('/', function(req, res, next) {
  request({
    url: "https://api.chucknorris.io/jokes/categories",
    json: true
  }, function (error, response, body) {
       if (!error && response.statusCode === 200) {
    		res.json(response) 
  		}
  })
});

module.exports = router;


