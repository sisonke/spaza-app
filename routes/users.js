// exports.showUser = function(req, res, next){
//   req.getConnection(function(err, connection){
//     if(err) return next(err);
//     connection.query('SELECT * FROM UserRoles', [], function(err, result){
//       if(err) throw err;
//       res.render('UserRoles',{
//         user : result
//       });
//     });
//   });
// };
//
//
// exports.addUser = function(req, res, next){
//   req.getConnection(function(err,connection){
//     var input = JSON.parse(JSON.stringify(req.body));
//     var data = {
//       username : input.username,
//       password : input.password,
//       role: "viewer"
//     };
