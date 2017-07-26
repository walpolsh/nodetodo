var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// ^ this is a mongoose Schema object which allows me to create new schemas
//  The term "schema" refers to a representation of a plan or theory in the form of an outline or model

var todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean,
});

// ^  two booleans  determine if the item is done, and if it has an attachment

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;

//^now we have a reuseable model
// I can create, delete, and find them because mongoose.model gives that to me.
