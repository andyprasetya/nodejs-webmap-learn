# Lesson 2
## Serving static HTML file

To install and run:
```
$ cd lesson-0
$ npm install
$ nodemon index.js
```
Open [localhost:3000]() in your browser.

Packages used in this lesson: [Express](http://expressjs.com/) and [Path](https://github.com/jinder/path).

### Summary
[index.js]():
```
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
    console.log('NodeJS + Express is running at localhost, port 3000.');
});
```

[public/index.html]():
```
<!doctype html>
<html>
    <head>
        <title>Lesson 02</title>
        <link rel="stylesheet" href="./css/style.css"/>
    </head>
    <body>
        <p>Hello world!</p>
    </body>
</html>
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
