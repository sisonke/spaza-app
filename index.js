'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    products = require('./routes/products'),
    sales = require('./routes/sales'),
    categories = require('./routes/categories'),
    suppliers = require('./routes/suppliers')



var app = express();

var dbOptions = {
      host: 'localhost',
      user: 'root',
      password: '12345',
      port: 3306,
      database: 'NelisaSpaza'
};

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
   res.status(500);
  res.render('error', { error: err });
 }

//setup the handlers
app.get('/',function(req, res){
  res.render('home')

});
//products routes
app.get('/products', products.show);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);
app.get('/products/add', products.showAdd);
app.post('/products/add', products.add);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/products/delete/:id', products.delete);
app.get('/products/Mostpopularproduct', products.Mostpopularproduct);
app.get('/products/leastpopproduct', products.leastpopproduct);


//sales routes
app.get('/sales', sales.show);
app.get('/addSales',sales.addSales);
app.post('/sales/update/:id',sales.update);
app.get('/sales/editSales/:id',sales.get);
app.post('/sales/add/',sales.add);

//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/sales/delete/:id', sales.delete);

 //categories routes
 app.get('/categories', categories.show);
 app.get('/categories/add', categories.showAdd);
 app.post('/categories/add',categories.add)
 app.get('/categories/edit/:id',categories.get);
 app.post('/categories/update/:id',categories.update);

  //this should be a post but this is only an illustration of CRUD - not on good practices
  app.get('/categories/delete/:id', categories.delete);
  app.get('/categories/MostpopCategory', categories.MostpopCategory);
  app.get('/categories/LeastpopCategory', categories.LeastpopCategory);

//suppliers routes
app.get('/suppliers',suppliers.show);




app.use(errorHandler);

//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3001;

//start everything up
app.listen(portNumber, function () {
    console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
});
