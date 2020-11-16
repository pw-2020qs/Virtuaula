"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api-express/hello', function (req, res) {
    res.send({ express: 'Hello From Express' });
});
app.post('/api/world', function (req, res) {
    console.log(req.body);
    res.send("I received your POST request. This is what you sent me: " + req.body.post);
});
if (process.env.NODE_ENV === 'production') {
    // Serve all static files
    app.use(express.static(path.join(__dirname, 'client')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client', 'index.html'));
    });
}
app.listen(port, function () { return console.log("Listening on port " + port); });
