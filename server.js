   var express = require('express');
   var app = express();
   app.use(express.static('public'));
   // create a route
   app.get('/', function (req, res) {
     res.send('Hello World!');
   });

    app.get('/Hello', function (req, res) {
     res.send('Hello codeX!');
   });
    app.get('/hi', function (req, res) {
     res.send('hi');
   });
   app.get('/index.html', function (req, res) {
  res.render('index.html');

   });

   //start the server
   var server = app.listen(3000, function () {

     var host = server.address().address;
     var port = server.address().port;

     console.log('Example app listening at http://%s:%s', host, port);

   });
