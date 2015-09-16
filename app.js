var express = require('express');
var exphbs  = require('express-handlebars');
var productList = require('./productList');
var products = require('./mostSolditems');
var getCategory = require('./category');
var mostSolditems = require('./leastpopular');
var listprod = require('./leastpopularproduct');
var Mostpopular = require('./SoldProduct');
var Mostcategory = require('./Mostcategory');
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

app.get('/mostSolditems', function (req, res) {
  var productName =  products.productsSold('./Nelisa Sales History.csv');
  res.render('leastpopular', {product: productName});

});
 
 app.get('/category', function (req, res) {
   var productName = getCategory.popularProduct('./Nelisa Sales History.csv');
   res.render('category', {product: productName});
 });

 app.get('/leastpopCat', function (req, res) {
  var productName = mostSolditems.popularProduct('./Nelisa Sales History.csv');
  res.render('leastpopular', {product: productName});
 });

 app.get('/leastpopProd', function (req, res) {
  var productName = listprod.productsSold('./Nelisa Sales History.csv');
  res.render('leastpopularproduct', {product: productName});
 });

 app.get('/Mostpopular', function (req, res) {
   var productName = Mostpopular.popularProduct('./Nelisa Sales History.csv');
   res.render('SoldProduct', {product: productName});
 });

 app.get('/Mostcategory', function (req, res) {
  var productName = Mostcategory.findPopularProduct('./Nelisa Sales History.csv');
  res.render('mostcategory', {product: productName});

 });
//start the server
var port = process.env.PORT || 3000;
   var server = app.listen(port, function () {

     var host = server.address().address;
     var port = server.address().port;

     console.log('Example app listening at http://%s:%s', host, port);

   });