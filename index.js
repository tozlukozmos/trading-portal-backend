const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

var app = express();
app.use(express.json());
app.use(helmet());

const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://192.168.2.112:3000'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    maxAge: 600,
    preflightContinue: false
}

app.use(cors(corsOptions));

// USER
app.post("/auth/login", function(request,response){
    response.status(200).send({error: false, message: "Uygulamaya giriş yapmak için bu endpointi kullanacağız.", data: request.body})
});

app.post("/auth/register", function(request,response){
    response.status(200).send({error: false, message: "Kullanıcı kaydetmek için bu endpointi kullanacağız.", data: request.body})
});

app.get("/users", function(request,response){
    response.status(200).send({error: false, message: "Tüm kullanıcıları almak için bu endpointi kullanacağız."})
});

app.get("/users/:userId", function(request,response){
    response.status(200).send({error: false, message: "İstediğimiz bir kullanıcının bilgilerini almak için bu endpointi kullanacağız", data: {userId: request.params.userId}})
});

app.put("/users/:userId/update", function(request,response){
    response.status(200).send({error: false, message: "İstediğimiz bir kullanıcının bilgilerini güncellemek için bu endpointi kullanacağız.", data: request.body, userId: request.params.userId})
});

app.delete("/users/:userId/delete", function(request,response){
    response.status(200).send({error: false, message: "İstediğimiz bir kullanıcınıyı silmek için bu endpointi kullanacağız", data: {userId: request.params.userId}})
});

// DEFAULT
app.get("/", function(request,response){
    response.send("Hello World! COMP202 and COMP204")
});

app.listen(3000, function () {
    console.log("Started application on port %d", 3000)
});