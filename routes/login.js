// login function
exports.login = function(req, res, next){
	var username = req.body.username;
  var  password = req.body.password;


req.getConnection(function(err, connection){
		connection.query('SELECT * FROM UserRoles WHERE username = ?',username, function(err,users){
			// check if user is on my database login
      if(password === users[0].password) {
        res.redirect("/home");
      }
			 //redirect to the sign up page
      else {
        res.redirect("/");
				
        }
		});
	});
};
