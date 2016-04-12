
exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from categories', [], function(err, results) {
        if (err) return next(err);
    		res.render('categories', {
					categories : results,
    		});
      });
	});
};

exports.search = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var Value = '%' + req.params.value + '%';
		console.log(Value);
		connection.query('SELECT * from categories WHERE category_name like ? ',[Value], function(err, results) {
			  if (err) return next(err);
    		res.render('search_categories', {
					categories : results,
					layout: false

    		});
      });
	});
};

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
    connection.query('SELECT * FROM categories',function(err, results) {
  		if (err) return next(err);
  		//console.log(results);
  		res.render('addCategories', {
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
      		category_name: input.category_name
  	};
		connection.query('insert into categories set ?', data, function(err, results) {
  		if (err) return next(err);
			res.redirect('/categories');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM categories WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.render('editCategories',{page_title:"Edit Categories - Node.js", data : rows[0]});
		});
	});
};

exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;
  req.getConnection(function(err, connection){
			connection.query('UPDATE categories SET ? WHERE id = ?', [data,id], function(err, rows){
    			if (err) next(err);
          res.redirect('/categories');
    		});

    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM categories WHERE id = ?', [id], function(err,category){
			//console.log(category);
			if(err) return next(err);
			res.redirect('/categories');
		});
	});
};

exports.MostpopCategory = function(req ,res, next) {
	req.getConnection(function(err, connection){
		connection.query('SELECT  categories.category_name,SUM(sales_table.qty) AS qty FROM sales_table INNER JOIN products ON sales_table.product_id = products.id INNER JOIN categories ON products.category_id =  categories.id GROUP BY categories.category_name ORDER BY SUM(sales_table.qty) DESC LIMIT 0,1', [], function(err,results){
			if(err) return(err);
			res.render('MostpopCategory', {
					MostpopCategory : results
			  	});
	  	});
	});
};

exports.LeastpopCategory = function(req ,res, next){
	req.getConnection(function(err, connection){
		connection.query('SELECT  categories.category_name,SUM(sales_table.qty) AS qty FROM sales_table INNER JOIN products ON sales_table.product_id = products.id INNER JOIN categories ON products.category_id =  categories.id GROUP BY categories.category_name ORDER BY SUM(sales_table.qty) ASC LIMIT 0,1', [], function(err, results){
			if(err) return(err);
			res.render('LeastpopCategory', {
	        LeastpopCategory : results
			 });
	  });
	});
};

exports.Earnings = function(req, res, next) {
  req.getConnection(function(err,connection){
		connection.query('SELECT  categories.category_name,SUM(sales_table.qty * sales_table.price) AS Earnings FROM sales_table INNER JOIN products ON sales_table.product_id = products.id INNER JOIN categories ON products.category_id =  categories.id GROUP BY categories.category_name',[], function(err, results){
     if(err) return(err);
		 res.render('Earnings', {
			  Earnings : results
	   	 });
		});
	});
};
