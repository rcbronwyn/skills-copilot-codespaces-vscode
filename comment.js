// Create web server
// 1. Include http module
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/form', function (req, res) {
    res.render('form');
});

app.post('/form', function (req, res) {
    var id = req.body.id;
    var password = req.body.password;
    req.session.id = id;
    req.session.password = password;
    res.redirect('/form');
});

app.get('/form/:id', function (req, res) {
    var id = req.params.id;
    res.send('id: ' + id);
});

app.get('/form/:id/:password', function (req, res) {
    var id = req.params.id;
    var password = req.params.password;
    res.send('id: ' + id + ' password: ' + password);
});

app.get('/form/:id/:password', function (req, res) {
    var id = req.params.id;
    var password = req.params.password;
    res.send('id: ' + id + ' password: ' + password);
});

app.get('/form/:id/:password', function (req, res) {
    var id = req.params.id;
    var password = req.params.password;
    res.send('id: ' + id + ' password: ' + password);
});

app.get('/form/:id/:password', function (req, res) {
    var id = req.params.id;
    var password = req.params.password;
    res.send('id: ' + id + ' password: ' + password);
});

app.get('/form/:id/:password', function (req, res) {
    var id = req.params.id;