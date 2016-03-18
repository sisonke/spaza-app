// login function starts here!!!
exports.login = function(req, res, next){

	var username = req.body.username;
  var password = req.body.password;

req.getConnection(function(err, connection){

		connection.query('SELECT * FROM UserRoles WHERE username = ?',username, function(err,users){
			console.log(users[0]);
			if(users[0] === undefined){
				res.redirect("/");
			}
			// check if user is on my database login
      else if(password === users[0].password) {
				req.session.user = users[0].username;
        res.redirect("/home");
           }
			 //redirect to the sign up page
	 		});
	 });
};
