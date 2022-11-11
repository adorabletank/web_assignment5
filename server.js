var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);

}

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Hello World!!!/ soup");
});

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "\\view\\Blog.html"));
});


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);

