const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/sample-route', (req, res) => {
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
		res.json(fullname);

		// Console.log what is sent to the result
		console.log(fullname);
	} catch {
		// Return as jso object
		res.json('There was an error running the function');
	}
});

// The catchall handler for any request that doesn't match one from above and send back to React's index.html file
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// app.use('/', routes);

//Middleware
// app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Backend listening on ${port}`);
