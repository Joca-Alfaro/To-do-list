const mongoose = require('mongoose');
const { Schema } = mongoose;

// const TodoList = new Schema({
//   title: { type: String, default: "No hay titulo" },
//   author:{ type: String, default: "No hay autor" },
//   description: { type: String, default: "No hay descripcion" },
//   date: { type: Date, default: Date.now },
// });


const Filtros = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  name: String,
  search: String,
  description: String,
  estado: { type: Boolean, default: true },
  favorite: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});



//disponibilidad
module.exports = mongoose.model('Filter', Filtros)