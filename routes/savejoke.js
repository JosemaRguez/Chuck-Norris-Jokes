var express = require('express')
var router = express.Router()
var request = require('request')
const fs = require('fs')


router.post('/', function(req, res) {
	var isAlready = false;

	fs.readFile('./database/topjokes.json', 'utf8', function readFileCallback(err, data){
		var jokesSaved = JSON.parse(data);

		for(let i in jokesSaved){
			if(jokesSaved[i].id == req.body.id){
				jokesSaved[i].clicks += 1;
				isAlready = true;
			}
		}
		
		if(!isAlready){
			jokesSaved.push(req.body)
		}

		fs.writeFile('./database/topjokes.json', JSON.stringify(jokesSaved) , (err) => {  
   			if (err) throw err;
    		console.log('Data written to file');
		});
	});

	
});

module.exports = router;


