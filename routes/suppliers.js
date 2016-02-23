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
    connection.query('SELECT * FROM ',function(err, results) {
  		if (err) return next(err);
  		console.log(results);
  		res.render('add', {
  				  categories: results
  			    });
		   });
	});
	
}
