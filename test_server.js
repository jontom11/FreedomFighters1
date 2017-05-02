var express = require('express');
var app = express();
var pdf_table_extractor = require("pdf-table-extractor");


app.get('/', function(request, response) {
  response.send("JT ROCKS the Party!!!");
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`Example app listening on ${port}`);
});