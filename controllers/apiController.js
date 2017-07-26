var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.json());

  // ^ bodyParser middleware takes a look at HTTP and parses out JSON.

  app.use(bodyParser.urlencoded({ extended: true }));

  // ^ ensures that data with certain characters can be sent nicely to our API as JSON

  app.get('/api/todos/:uname', function (req, res) {
    Todos.find({ username: req.params.uname },
    function (err, todos) {
      if (err) throw err;

      res.send(todos);
    });

    // ^ api/todos/paul is going to find all the docs where the username is paul

  });

  app.get('/api/todo/:id', function (req, res) {
    Todos.findById({ _id: req.params.id }, function (err, todo) {
      if (err) throw err;

      res.send(todo);

      //^ this end point allows me to find a todo by its automatically generated id
    });
  });

  app.post('/api/todo', function (req, res) {
    // ^post a new todo inside an HTTP req

    if (req.body.id) {
      //^ if it has an ID

      Todos.findByIdAndUpdate(req.body.id, {
        //^ find the ID in the Database and update the properties
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
        function(err, todo) {
          if (err) throw err;

          res.send('Success');
        },
      });
    } else {
      // ^ if theres no ID
      var newTodo = Todos({
        //^ Create a new Todo
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });
      newTodo.save(function (err) {
        //^ save the new todo to mongo
        if (err) throw err;
        res.send('Success');
      });
    }
  });

  app.delete('/api/todo', function (req, res) {
    Todos.findByIdAndRemove(req.body.id, function (err) {
      // ^ find by id and remove todo
      if (err) throw err;
      res.send('Success');
    });
  });

};
