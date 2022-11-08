var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Hello World! yeahhhhh");
});

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "/views/Blog.html"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

