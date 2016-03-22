var bcrypt = require('bcrypt');


exports.signUp = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
      	username : input.username,
        password :input.password,
				user_roles: "admin"
    	};
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(input.password, salt);
      data.password = hash;
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
