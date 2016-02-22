
exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from categories', [], function(err, results) {
        if (err) return next(err);
    		res.render('categories', {
					//no_products : results.length === 0,
					categories : results,
    		});
      });
	});
};

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
    connection.query('SELECT * FROM categories',function(err, results) {
  		if (err) return next(err);
  		console.log(results);
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
      		//product_name : input.product_name,
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
