const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", `http://localhost:3000`); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

//Middleware
app.use(bodyParser.json());

app.use('/', routes);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(port, () => {
    console.log(`Backend listening on ${port}`);
});