
/***
 * A very basic CRUD example using MySQL
 */

exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT  products.id, products.product_name, categories.category_name FROM products INNER JOIN categories ON categories.id = products.category_id ORDER BY category_name', [], function(err, results) {
        if (err) return next(err);
    		res.render('productList', {
					no_products : results.length === 0,
					products : results,
    		});
      });
	});
};

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
    connection.query('SELECT * FROM categories',function(err, results) {
  		if (err) return next(err);
  		console.log(results);
  		res.render('add', {
  							categories: results
  			});
		   });
	});
	
}

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

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM products WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.render('edit',{page_title:"Edit Customers - Node.js", data : rows[0]});
		});
	});
};

exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;
  req.getConnection(function(err, connection){
			connection.query('UPDATE products SET ? WHERE id = ?', [data,id], function(err, rows){
    			if (err) next(err);
          res.redirect('/products');
    		});

    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM products WHERE id = ?', [id], function(err,products){
			console.log(products);
			if(err) return next(err);
			res.redirect('/products');
		});
	});
};
