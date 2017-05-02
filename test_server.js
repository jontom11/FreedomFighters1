var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send("JT ROCKS the Party!!!");
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Example app listening on ${port}`);
});