const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('Hello world!');
});

app.listen(3000, function () {
	console.log('NodeJS + Express is running at localhost, port 3000.');
});