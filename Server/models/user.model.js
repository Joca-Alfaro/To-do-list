const mongoose = require('mongoose');
const { Schema } = mongoose;

// const TodoList = new Schema({
//   title: { type: String, default: "No hay titulo" },
//   author:{ type: String, default: "No hay autor" },
//   description: { type: String, default: "No hay descripcion" },
//   date: { type: Date, default: Date.now },
// });


const Users = new Schema({
  user: String, // String is shorthand for {type: String}
  password: String,
  description: String,
  estado: { type: Boolean, default: true },
  fecha_creacion: { type: Date, default: Date.now },
  cargo: { type: String, default: "Usuario" },
});



//disponibilidad
module.exports = mongoose.model('Usuarios', Users)
