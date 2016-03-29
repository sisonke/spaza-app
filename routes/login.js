 var bcrypt = require('bcrypt');

 // login function starts here!!!
 exports.login = function(req, res, next) {
   var input = JSON.parse(JSON.stringify(req.body));
   var username = req.body.username;
   var password = req.body.password;

   req.getConnection(function(err, connection) {

     connection.query('SELECT * FROM UserRoles WHERE username = ?', username, function(err, users) {

       console.log(users);

       if (users[0] === undefined) {
         //message : 'Incorrect username.';
         //layout : true;

         req.flash("message", "invalid username!");
         return res.redirect("/");
       }

       bcrypt.compare(password, users[0].password, function(err, pass) {
         if (pass) {
           // check if user is on my database login
           req.session.user = users[0].username;

           return res.redirect("/home");
         } else {
           req.flash("message", "invalid password");
           return res.render("login", {
             layout: false
           });
           //message: 'Incorrect password.';
         }
       });

     });
   });
 };
