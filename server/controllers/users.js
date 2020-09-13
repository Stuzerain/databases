var models = require('../models');

module.exports = {
  get: function (req, res) {
    Message.findAll()
      .complete((err, results) => {
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

    User.create({ username: req.body.username })
      .complete((err, user) => {
        res.sendStatus(201);
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
