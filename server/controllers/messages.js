var models = require('../models');

module.exports = {
  get: function (req, res) {

    Message.findAll({ include: [User] })
      .complete((err, results) => {
        res.json(results);
      });

    // pre-ORM code
    // models.messages.getAll((err, results) => {
    //   res.json(results);
    // });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    User.findOrCreate({ username: req.body.username })
      .complete((err, user) => {
        var info = {
          text: req.body.body,
          userid: user.id,
          roomname: req.body.roomname
        };
        Mesage.create(info)
          .complete((err, results) => {
            res.sendStatus(201);
          });
      });


    // pre-ORM code
    // var info = [req.body.body, req.body.username, req.body.roomname];
    // models.messages.create(info, (err, results) => {
    //   res.json(results);
    // });


  } // a function which handles posting a message to the database
};
