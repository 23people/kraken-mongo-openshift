'use strict';

var mongoose = require('mongoose');

module.exports = function (router) {


    router.get('/', function (req, res) {

      var states = ['disconnected','connected','connecting','disconnecting'];

      var dbState= states[mongoose.connection.readyState];

      res.render('index',{state: dbState});

    });



};
