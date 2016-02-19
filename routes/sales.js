

exports.show = function (req, res, next) {

	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT sales_table.id,product_name,qty,price,DATE_FORMAT(sales_date,"%d _%M_%y") AS sales_date from sales_table INNER JOIN products ON sales_table.product_id = products.id ORDER BY sales_table.sales_date DESC', [], function(err, results) {
        if (err) return next(err);
    		res.render( 'sales', {
					 // : results.length === 0,
					products : results
					
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
      		product_id : input.product_id,
     	    qty : input.qty,
     	    sales_date : input.sales_date,
     	    price : input.price
  	};
   
   connection.query('insert into sales_table set ?', data, function(err, results) {
  		if (err) return next(err);
			res.redirect('/sales');
		});
	
	});
};


exports.get = function(req, res, next){

	var product_id = req.params.id;
    var input = JSON.parse(JSON.stringify(req.body));

	req.getConnection(function(err, connection){
		connection.query('SELECT sales_table.id,product_name,qty,price,sales_date from sales_table INNER JOIN products ON sales_table.product_id = products.id WHERE sales_table.id	= ? ', [product_id], function(err,rows){
			if(err) return next(err);
			res.render('editSales',
			{page_title:"Edit Customers - Node.js",
			 data : rows[0]}
			
			 );
		});
	});
};


exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;
  req.getConnection(function(err, connection){
			connection.query('UPDATE sales_table SET ? WHERE id = ?', [data,id], function(err, rows){
    			if (err) next(err);
          res.redirect('/sales');
             editSales = {
             product_name: input.product_name,
             price: input.price,
             qty: input.qty,  
             sales_date: input.sales_date,
             product_id: input.product_id

			 }

    		});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM sales_table WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/sales');
		});
	});
};