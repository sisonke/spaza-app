exports.signUp = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
      	username : input.username,
        password :input.password
    	};
		connection.query('insert into UserRoles set ?', data, function(err, results) {
  		if (err) return next(err);
			res.redirect('/sign up');
		});
	});
};
