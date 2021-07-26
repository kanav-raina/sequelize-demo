var express = require('express');
var app = express();
const bodyParser=require('body-parser')
var db = require('./models');
var User = db.User;

app.use(bodyParser.json());

app.post('/users', function (req, res) {
  console.log(req.body)
  User.create({ username: req.body.username,email:req.body.email,password:req.body.password })
    .then(function (user) {
      res.json(user);
    });
});

app.get('/users', function(req, res) {
  User.findAll()
    .then(function (users) {
      res.json(users);
    });
});

app.listen(3000, function() {
  db.sequelize.sync();
});