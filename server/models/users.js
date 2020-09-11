var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var querystring = 'select * from usernames';
    db.connection.query(querystring, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }

    });
  },
  create: function (params, callback) {
    var querystring = 'insert into usernames(username) values (?)';
    db.connection.query(querystring, params, (err, results) => {
      // debugger;
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }

    });
  }
};
