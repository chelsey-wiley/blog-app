var express = require('express');
var app = express();

// var request = require('request');
//
// var url ='http://requestb.in/1jt17pk1'
// request(url, function (error, response, body) {
//   if (!error) {
//     console.log(body);
//   }
// });

app.use(express.static('public'));
port = process.env.PORT || 5112;

app.listen(port, function() {
  console.log('listening on PORT or locally: 5112.');
});
