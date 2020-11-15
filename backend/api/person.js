var express = require('express');
var router = express.Router();
var config = require('./../databaseConfig');
var connection = config.connection;


router.get('/', function(req, res){
   connection.query('select * from users', function(error, results) {
      if (results){
         res.send(results);
      }
      else{
        res.error(error);
      }
   });
});

router.post('/', function(req, res) {


   res.send('POST route on person.');
});

module.exports = router;