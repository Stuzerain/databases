var models = require('../models');
var db = require('../db');

module.exports = {
  get: function (req, res) {
    db.User.findAll()
      .then((err, results) => {
        res.json(results);
      });


    // pre-ORM code
    // models.users.getAll((err, results) => {
    //   if (err) {
    //     throw 'error in controllers.users.get';
    //   } else {
    //     res.json(results);
    //   }
    // });
  },
  post: function (req, res) {

    db.User.findOrCreate({ where: { username: req.body.username } })
      .spread((user, result) => {
        res.sendStatus(result ? 201 : 200);
      });
  }

  // pre-ORM code
  // debugger;
  //   var info = [req.body.username];
  //   models.users.create(info, (err, results) => {
  //     //debugger;
  //     if (err) {
  //       throw 'error in controllers.users.post';
  //     } else {
  //       res.sendStatus(201);
  //     }
  //     // res.json(results)
  //   });
  // }
};
