

exports.show = function (req, res, next) {

	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT product_name,qty,price,sales_date from sales_table INNER JOIN products ON sales_table.product_id = products.id', [], function(err, results) {
        if (err) return next(err);
    		res.render( 'sales', {
					 // : results.length === 0,
					products : results,
					
    		});
      });
	});
};

exports.addSales = function(req,res, next) {

	req.getConnection(function(err, connection){
	    connection.query('SELECT * FROM products',function(err, products){
	 		if(err)
					 return next(err);

             res.render('addSales',{
            		 products : products,
            	
             });
		});
	});

};

exports.add = function (req, res, next) {
	    req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
      		product_name : input.product_name,
     	    category_id : input.category_id
  	};
   
   connection.query('insert into products set ?', data, function(err, results) {
  		if (err) return next(err);
			res.redirect('/products');
		});
	
	});
};