var express = require('express');
var exphbs  = require('express-handlebars');
var productList = require('./productList');
var products = require('./mostSolditems');
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('sisonke');
});

app.get('/List', function (req, res) {
    var productName = productList.linesInFiles('./Nelisa Sales History.csv');
    res.render('productList', {product: productName});

});

app.get('/mostitems', function (req, res) {
  var productName =  products.productsSold('./Nelisa Sales History.csv');
  res.render('mostitems', {product: productName});

});
 
//start the server
   var server = app.listen(3000, function () {

     var host = server.address().address;
     var port = server.address().port;

     console.log('Example app listening at http://%s:%s', host, port);

   });