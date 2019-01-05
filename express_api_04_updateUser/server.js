var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var port = process.env.PORT || 8081;
var users = require('./models/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

router.get('/users', function (req, res) {
    res.json(users.getUsers());
});

router.get('/users/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.getUser(id));
});

router.post('/users', function (req, res) {
    var name = req.body.name;
    res.json(users.addUser(name));
});

router.post('/users/:id', function (req, res) {
    var id = req.params.id;
    console.log('id is ' + id);
    var name = req.body.name;
    console.log('name is ' + name);
    res.json( users.updateUser(id, name));
});

app.use('/api', router);

app.listen(port, function () {
    console.log('Server at ', port);
});
