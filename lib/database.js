'use strict';

var mongoose = require('mongoose');

var db = function () {

	return {

		config: function (conf){

			var dbConnectionString = conf.mongoDbUrl + conf.dbName;

			mongoose.connect(dbConnectionString);

			var database = mongoose.connection;

	        database.on('error', console.error.bind(console, 'connection error:'));
	        database.once('open', function callback() {
	               console.log('db connection open');
           	});

		}

	};

};

module.exports = db();
