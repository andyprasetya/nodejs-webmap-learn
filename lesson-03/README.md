# Lesson 3
## Implementing Pug template engine

To install and run:
```
$ cd lesson-03
$ npm install
$ nodemon index.js
```
Open [localhost:3000]() in your browser.

Packages used in this lesson: [Express](http://expressjs.com/), [Pug](https://pugjs.org/) and [Path](https://github.com/jinder/path).

### Summary
[index.js]():
```
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Lesson 03' });
});

app.listen(3000, function () {
    console.log('NodeJS + Express is running at localhost, port 3000.');
});
```
