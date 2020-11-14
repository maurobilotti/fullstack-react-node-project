var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET obtenido desde el backend.');
});

router.post('/', function(req, res) {


   res.send('POST route on person.');
});

module.exports = router;