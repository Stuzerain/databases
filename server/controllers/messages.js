var models = require('../models');
var db = require('../db');

module.exports = {
  get: function (req, res) {

    db.Message.findAll({ include: [db.User] })
      .then((err, results) => {
        res.json(results);
      });

    // pre-ORM code
    // models.messages.getAll((err, results) => {
    //   res.json(results);
    // });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    db.User.findOrCreate({ where: { username: req.body.username } })
      .spread((user, created) => {
        db.Message.create({
          userid: user.get('id'),
          text: req.body.body,
          roomname: req.body.roomname
        })
          .then(message => {
            res.sendStatus(201);
          });
      });


    // .then((err, user) => {
    //   var info = {
    //     text: req.body.body,
    //     userid: user.id,
    //     roomname: req.body.roomname
    //   };
    //   Mesage.create(info)
    //     .then((err, results) => {
    //       res.sendStatus(201);
    //     });
    // });


    // pre-ORM code
    // var info = [req.body.body, req.body.username, req.body.roomname];
    // models.messages.create(info, (err, results) => {
    //   res.json(results);
    // });


  } // a function which handles posting a message to the database
};
