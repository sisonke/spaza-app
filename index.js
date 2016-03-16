
var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    products = require('./routes/products'),
    sales = require('./routes/sales'),
    categories = require('./routes/categories'),
    suppliers = require('./routes/suppliers'),
    purchases = require('./routes/purchases'),
    login = require('./routes/login'),
    signUp = require('./routes/signUp'),
    session = require('express-session')

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

// Use the session middleware
app.use(session({ secret: 'keyboard', cookie: { maxAge: 60000 }, resave:true, saveUninitialized : false}))


//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app.use(function(req, res, next){
//   console.log('in my middleware!');
//   //proceed to the next middleware component
//   next();
// });

function errorHandler(err, req, res, next) {
   res.status(500);
  res.render('error', { error: err });
 }

//setup the handlers
app.get('/',function(req, res){
  res.render('login',{
    layout:false,

  });
});

app.post('/login', login.login);



//signUp routes
app.post('/signup', signUp.signUp);
app.get('/signup',function(req, res){
   res.render('signUp', {
     layout:false,
   });
});

//logOut routes
app.get('/logout', function (req, res) {
    req.session.destroy(function () {
        res.redirect('/');
    });
});

//home routes
app.get('/home', function(req, res){
  res.render('home');
});


//products routes
app.get('/products', products.show);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);
app.get('/products/add', products.showAdd);
app.post('/products/add', products.add);
app.get('/products/Mostpopularproduct', products.Mostpopularproduct);
app.get('/products/leastpopproduct', products.leastpopproduct);
//app.get('/products/Productlist', products.Productlist);

//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/products/delete/:id', products.delete);


//sales routes
app.get('/sales', sales.show);
app.get('/addSales',sales.addSales);
app.post('/sales/update/:id',sales.update);
app.get('/sales/editSales/:id',sales.get);
app.post('/sales/add/',sales.add);

//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/sales/delete/:id', sales.delete);

 //categories routes
 app.get('/categories',categories.show);
 app.get('/categories/add', categories.showAdd);
 app.post('/categories/add',categories.add);
 app.get('/categories/edit/:id',categories.get);
 app.post('/categories/update/:id',categories.update);

  //this should be a post but this is only an illustration of CRUD - not on good practices
  app.get('/categories/delete/:id', categories.delete);
  app.get('/categories/MostpopCategory', categories.MostpopCategory);
  app.get('/categories/LeastpopCategory', categories.LeastpopCategory);
  app.get('/categories/Earnings', categories.Earnings);

//suppliers routes
app.get('/suppliers',suppliers.show);
app.get('/suppliers/add', suppliers.showAdd);
app.post('/suppliers/add', suppliers.add);
app.get('/suppliers/editSuppliers/:id', suppliers.get);
app.post('/suppliers/editSuppliers/update/:id', suppliers.update);


//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/suppliers/delete/:id', suppliers.delete);

//purchases routes
app.get('/purchases',purchases.show);
app.get('/purchases/add', purchases.addPurchases);
app.post('/purchases/add', purchases.add);
// app.get('/purchases/editPurchases/:id',purchases.get);
// app.post('/purchases/editPurhcases/update/:id', purchases.update);
//
//
// //this should be a post but this is only an illustration of CRUD - not on good practices
// app.get('/purchases/delete/:id', purchases.delete);

app.use(errorHandler);

//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3001;

//start everything up
app.listen(portNumber, function () {
    console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
});
