exports.signUp = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
      	username : input.username,
        password :input.password,
				//role:"view"
    	};
		connection.query('insert into UserRoles set ?', data, function(err, data) {
  		if (err){
				console.log(err);
				return res.redirect('/signup')
			}else {
				 res.redirect('/');

			}

		});
	});
};
