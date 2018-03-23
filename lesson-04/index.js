const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var index = require('./routes/index');

app.use('/', index);
app.use('/data-default', function (req, res, next){
	next();
});
app.use('/data-service', function (req, res, next){
	next();
});

app.listen(3000, function () {
    console.log('NodeJS + Express is running at localhost, port 3000.');
});