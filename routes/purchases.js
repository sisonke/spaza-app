
exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from purchases', [], function(err, results) {
        if (err) return next(err);
    		res.render('purchases', {
					// : results.length === 0,
					purchases : results,
    		});
      });
	});
};
exports.addPurchases = function(req,res, next) {

	req.getConnection(function(err, connection){
	    connection.query('SELECT * FROM purchases',function(err, products){
	 		if(err)
					 return next(err);
             res.render('addPurchases',{
            		  purchases: results,

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

    connection.query('insert into purchases set ?', data, function(err, results) {
   		if (err) return next(err);
 			res.redirect('/purchases');
 		});

 	});
 };
