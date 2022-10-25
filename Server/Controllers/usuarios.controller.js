const Usuarios = require('../models/user.model')



const CreateUser = async (req, res) => {
  const { user, password, description, cargo } = req.body
  try {
    const CreateDataUsers = await Usuarios.create({ user, password, description, cargo });
    res.json({ data: CreateDataUsers })
  } catch (error) {
    console.log(error)

  }
}


const ReadUser = async (req, res) => {
  try {
    const ViewUsers = await Usuarios.find({});
    res.json({ data: ViewUsers })
  } catch (error) {
    console.log(error)
  }
}

// const UpdateTasks = async (req, res) => {
//   const { id, title, author, description } = req.body
//   try {
//     await Usuarios.findByIdAndUpdate({ id, title, author, description });
//     res.json({ data: UpdateTasks })
//   } catch (error) {
//     console.log(error)
//   }
// }

const UpdateUser = async (req, res) => {
  try {
    const { id } = req.query;
    const { user, password, description, cargo, estado } = req.body
    const UpdateUser = await Usuarios.findByIdAndUpdate(id, { user, password, description, cargo, estado });

    res.json({ msg: UpdateUser })
  } catch (error) {
    console.log(error)
  }
}



const DeleteUser = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id)
    //  const { estado } = req.body
    const UserNaw = await Usuarios.findById(id).exec();

    if (UserNaw.estado) {
      await Usuarios.findByIdAndUpdate(id, { estado: false })
      res.json({ data: 'Usuario Eliminado' })
    }
    else {
      await Usuarios.findByIdAndUpdate(id, { estado: true })
      res.json({ data: 'Usuario Activado' })
    }
    //cconst DeleteTask = await Task.findByIdAndUpdate(id, {estado});


  } catch (error) {
    console.error(error)
  }
}



module.exports =
{
  CreateUser,
  ReadUser,
  // UpdateTasks,
  UpdateUser,
  DeleteUser
}

// // const getUsuarios = (req, res) => {
// //   try {
// //     res.json({ msg: "Hola soy el controlador de usurios" })
// //   } catch (error) {
// //     console.log(error)
// //   }
// // }

// // module.exports = { getUsuarios }