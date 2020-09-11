var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      res.json(results);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {

    // debugger;
    var info = [req.body.body, req.body.username, req.body.roomname];

    models.messages.create(info, (err, results) => {
      res.json(results);
    });


  } // a function which handles posting a message to the database
};
