const express = require("express");

var app = express();

app.get("/",function(request,response){
    response.send("Hello World! COMP202 and COMP204")
});

app.listen(3000, function () {
    console.log("Started application on port %d", 3000)
});