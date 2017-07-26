var Todos = require('../models/todoModel');

module.exports = function (app) {
  app.get('/api/setupTodos', function (req, res) {
    // seed database with values that match the schema
    // json-generator.com will generate json seed data
    var starterTodos = [
      {
        username: 'test',
        todo: 'Buy toast',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'test',
        todo: 'Feed myself',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'test',
        todo: 'Learn Mongo',
        isDone: false,
        hasAttachment: false,
      },
    ];
    Todos.create(starterTodos, function (err, results) {
      res.send(results);
    });
  });
};

// remember this is just an API endpoint... express needs to be aware of it...
