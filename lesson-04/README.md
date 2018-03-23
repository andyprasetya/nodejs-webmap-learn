# Lesson 4
## Creating a router-level middleware to separate views and data services

In this lesson we separate views and data services by using Express' built-in [Router()](https://expressjs.com/en/guide/writing-middleware.html). Also, we will learn how to include a JavaScript into the index page, and create some functions to manipulate the data services.


To install and run:
```
$ cd lesson-04
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
```

[routes/index.js]():
```
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { title: 'Lesson 4 - I am served via a router.' });
});
router.get('/data-default', function(req, res) {
    res.json({"response":"I am a default data service, and will be replaced after you click Get Dynamic Data button"});
});
router.get('/data-service', function(req, res) {
    res.json({"response":"I am a dynamic data service created at "+new Date()+""});
});

module.exports = router;
```

[views/layout/_index.pug]():
```
doctype html
html(lang="en")
    head
        block head
            meta(charset="UTF-8")
            meta(http-equiv="X-UA-Compatible", content="IE=edge")
            meta(name="viewport",content="width=device-width, initial-scale=1, shrink-to-fit=no")
            title= title
            block styles
                link(rel='stylesheet', href='./css/style.css')
    body
        block body

        block scripts
```

[views/index.pug]():
```
extends layout/_index
append body
    p= title
    hr
    button(id='buttonAlert', type='button') Button Alert
    button(id='buttonAjax', type='button') Get Dynamic Data
    button(id='buttonDefault', type='button') Get Default Data
    hr
    pre(id='ajax')
    hr
    p.
        To see data service in action, click -> #[a(href='http://localhost:3000/data-service') localhost:3000/data-service].
append scripts
    script(src='./js/app.js', type='text/javascript')
```

[public/js/app.js]():
```
document.getElementById('buttonAlert').addEventListener('click', function(){
    alert('Hello! You have clicked the button.');
});
document.getElementById('buttonDefault').addEventListener('click', function(){
    _getDefaultData();
});
document.getElementById('buttonAjax').addEventListener('click', function(){
    _getDynamicData();
});
function _getDefaultData () {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('ajax').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', './data-default');
    xhttp.send();
}
function _getDynamicData () {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('ajax').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', './data-service');
    xhttp.send();
}
_getDefaultData();
```

[public/css/style.css]():
```
* {
    box-sizing: border-box;
}
html, body {
    margin: 0;
    min-height: 100%;
    background-color: #DEDEDE;
}
```
