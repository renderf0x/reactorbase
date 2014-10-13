var express = require('express');
var mongoose = require('mongoose');

var Hacker = require('./models/hacker');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/hackertest');

var router = express.Router();

router.use(function(req, res, next){
	console.log(Date.now() + ' Something is happening');
	next();
});

router.get('/', function(req, res){
	res.json({message: 'harro'});
});

app.use(express.static(__dirname));

router.route('/hackers')

	.post(function(req, res){
		var hacker = new Hacker();
		//console.log("req = " + JSON.stringify(req));
		hacker.name = req.body.name;
		hacker.name_note = req.body.name_note;
		hacker.photo = req.body.photo;
		hacker.q1 = req.body.q1;
		hacker.q2 = req.body.q2;
		hacker.q3 = req.body.q3;
		hacker.q4 = req.body.q4;
		hacker.q5 = req.body.q5;
		hacker.cohort = req.body.cohort;

		hacker.save(function(err){
			if (err)
				res.send(err);

			res.json({ message: 'Hacker created!'});
		});
	})

	//get all hackers

	.get(function(req, res){
		Hacker.find(function(err, hackers){
			if (err)
				res.send(err);
			res.json(hackers);
		});
	});

// single hacker lookups for /hackers/:hacker_id
router.route('/hackers/:hacker_id')
	
	.get(function(req, res){
		Hacker.findById(req.params.hacker_id, function(err, hacker){
			if (err)
				res.send(err);
			res.json(hacker);
		});
	})
	//updates info. currently only for names
	.put(function(req, res){
		Hacker.findById(req.params.hacker_id, function(err, hacker){
			if (err)
				res.send(err);
			hacker.name = req.body.name;

			hacker.save(function(err){
				if (err)
					res.send(err);
				res.json({ message: 'Hacker updated!'});
			});
		})
	})

	//this currently times out, for reasons unknown
	.delete(function(req, res){
		Hacker.remove({_id: req.params.hacker_id}), function(err, hacker){
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		};
	});

//get hackers by cohort

router.route('/hackers/cohort/:cohort')
	
	.get(function(req, res){
		Hacker.find({cohort: req.params.cohort}, function(err, hacker){
			if (err)
				res.send(err);
			res.json(hacker);
		});
	});

app.use('/api', router);

app.listen(process.env.PORT || 3000);