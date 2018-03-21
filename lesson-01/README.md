# Lesson 1
## Bootstrap the first app using Express

To install and run:
```
$ cd lesson-01
$ npm install
$ nodemon index.js
```
Open [localhost:3000]() in your browser.

In [index.js]() you can see:
```
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.listen(3000, function () {
    console.log('NodeJS + Express is running at localhost, port 3000.');
});
```
