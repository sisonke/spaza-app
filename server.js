  var express = require('express');
   var app = express();

   // create a route
   app.get('/', function (req, res) {
     res.send('Hello World!');
   });

    app.get('/Hello', function (req, res) {
     res.send('Hello codeX!');
   });

   //start the server
   var server = app.listen(3000, function () {

     var host = server.address().address;
     var port = server.address().port;

     console.log('Example app listening at http://%s:%s/Hello', host, port);

   });
