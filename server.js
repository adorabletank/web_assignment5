var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;




// setup a 'route' to listen on the default url path
app.use(express.static('public'));
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, ".\\view\\Home.html"));
});

app.get("/blog", function(req, res){
    res.sendFile(path.join(__dirname, ".\\view\\Blog.html"));
});

app.get("/article", function(req, res){
    res.sendFile(path.join(__dirname, ".\\view\\article.html"));
});

app.get("/registration", function(req, res){
    res.sendFile(path.join(__dirname, ".\\view\\registration.html"));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, ".\\view\\login.html"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

