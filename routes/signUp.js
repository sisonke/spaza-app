var bcrypt = require('bcrypt');


exports.signUp = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
      username: input.username,
      user_roles: "normal user"
    };

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(input.password, salt, function(err, hash) {
        // Store hash in your password DB.
        data.password = hash;
        //console.log(data.password);
        connection.query('insert into UserRoles set ?', data, function(err, data) {
          if (err) {
            res.redirect('/signup');

          } else {

            res.redirect('/');

          }
        });
      });
    });
  });
};
