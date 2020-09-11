var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        throw 'error in controllers.users.get';
      } else {
        res.json(results);
      }

    });
  },
  post: function (req, res) {
    // debugger;

    var info = [req.body.username];

    models.users.create(info, (err, results) => {
      //debugger;
      if (err) {
        throw 'error in controllers.users.post';
      } else {
        res.sendStatus(201);
      }

      // res.json(results)
    });
  }
};
