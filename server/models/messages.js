var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // set up a query string
    var querystring = 'select messages.id, usernames.username, messages.body, messages.roomname from messages \
    left outer join usernames on (messages.username = usernames.id) \
    order by messages.id desc';
    // query it with db
    // run the callback within the query
    db.connection.query(querystring, (err, results) => {
      callback(err, results);
    });

  }, // a function which produces all the messages

  create: function (params, callback) {

    var querystring = 'insert into messages(text, username, roomname) \
    values (?, (select id from users where username = ? limit 1), ?)';
    db.connection.query(querystring, params, (err, results) => {
      callback(err, results);
    });
  } // a function which can be used to insert a message into the database
};
