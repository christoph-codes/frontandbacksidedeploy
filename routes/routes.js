const express = require('express');
const router = express.Router();

// Put all API endpoints in this file
router.get(`/fullname`, (req, res) => {
	try {
		// Store some values and write some functions
		const name = 'Christopher Jones';

		const addMiddleName = (midname = 'Kirk') => {
			let newName = name.split(' ', 2);
			newName.splice(1, 0, midname);

			return newName.join().replace(/,/gi, ' ');
		};

		console.log(req.query);
		// Generate full name
		const fullname = addMiddleName(req.query.midname);

		// Return as jso object
		// res.json(fullname);
		res.status(200).send(fullname);

		// Console.log what is sent to the result
		console.log(fullname);
	} catch (err) {
		res.status(400).send({
			error: err,
		});
	}
});

router.get('/', (req, res) => {
	try {
        console.log('Everything is healthy');
		res.send({ status: 'Everything is healthy' });
	} catch (err) {
		res.send({ status: 'Everything is NOT healthy' });
	}
});

module.exports = router;