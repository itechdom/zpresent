var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());

app.post('/',function(req,res) {

    //write the slides.json to the slides.json
    var sbody = JSON.stringify(req.body);

    fs.writeFile('slides.json', sbody , function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
        res.send("hello");
    });

});

var server = app.listen(4000,function(){
    console.log("app is listenting on port 4000");
});