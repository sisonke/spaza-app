exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from suppliers', [], function(err, results) {
        if (err) return next(err);
    		res.render('suppliers', {
				suppliers : results,
    		});
      });
	});
};

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
    connection.query('SELECT * FROM suppliers', [], function(err, results) {
  		if (err) return next(err);
  		res.render('addSuppliers', {
  				  suppliers: results
  			    });
		   });
	});

};


exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
      		suppliers_name : input.suppliers_name,
      		//suppliers_id : input.suppliers_id
  	};
		connection.query('insert into suppliers set ?', data, function(err, results) {
  		if (err) return next(err);
			res.redirect('/suppliers');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM suppliers WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.render('editSuppliers',{
				page_title:"Edit Customers - Node.js", data : rows[0]
			});
		});
	});
};

exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;
  req.getConnection(function(err, connection){
			connection.query('UPDATE suppliers SET ? WHERE id = ?', [data,id], function(err, rows){
    			if (err) next(err);
          res.redirect('/suppliers');
    		});

    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM suppliers WHERE id = ?', [id], function(err,products){
		//	console.log(products);
			if(err) return next(err);
			res.redirect('/suppliers');
		});
	});
};
