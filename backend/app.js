var express = require('Express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(cors());

var person = require('./api/person.js');

app.use('/api/person', person);

app.get('*', function(req, res){
    res.send('Adonde queres ir, fiera? ', 404);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});