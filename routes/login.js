 var bcrypt = require('bcrypt');

// login function starts here!!!
exports.login = function(req, res, next){
	var input = JSON.parse(JSON.stringify(req.body));
	var username = req.body.username;
  var password = req.body.password;

req.getConnection(function(err, connection){

		connection.query('SELECT * FROM UserRoles WHERE username = ?',username, function(err,users){
		console.log(users[0]);
			if(users[0] === undefined){
				res.redirect("/");
			}
			//var users = users[0];

//var hash = bcrypt.hashSync(input.password, 8);
bcrypt.compare(password,users[0].password, function(err, pass) {
if(pass) {
	// check if user is on my database login
		req.session.user = users[0].username;

	return	res.redirect("/home");
			 	}
				else {
					return res.render("login",{layout:false});
				}
		 });
			 //redirect to the sign up page
	 		});
	 });
};
