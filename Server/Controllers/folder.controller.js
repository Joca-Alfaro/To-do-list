const Folder = require('../models/folder.model')
// aqui me quede ne la creacion de los folders create
const CreateFolder = async (req, res) => {
  const { title, author, description } = req.body
  try {
    const CreateDataFolders = await Folder.create({ title, author, description });
    res.json({ data: CreateDataFolders })
  } catch (error) {
    console.log(error)

  }
}

const ReadFolders = async (req, res) => {
  try {
    const ViewFolders = await Folder.find({});
    res.json({ data: ViewFolders })
  } catch (error) {
    console.log(error)
  }
}

const UpdateFolder = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, author, description } = req.body
    const ActualizarFolder = await Folder.findByIdAndUpdate(id, { title, author, description });

    res.json({ msg: ActualizarFolder })
  } catch (error) {
    console.log(error)
  }
}



const DeletFolder = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id)
    //  const { estado } = req.body
    const FolderNaw = await Folder.findById(id).exec();

    if (FolderNaw.estado) {
      await Folder.findByIdAndUpdate(id, { estado: false })
      res.json({ data: 'Folder Eliminado' })
    }
    else {
      await Folder.findByIdAndUpdate(id, { estado: true })
      res.json({ data: 'Folder Activado' })
    }
    //cconst DeleteFolder = await Folder.findByIdAndUpdate(id, {estado});


  } catch (error) {
    console.error(error)
  }
}



module.exports =
{
  CreateFolder,
  ReadFolders,
  // UpdateFolders,
  UpdateFolder,
  DeletFolder
}


// - CREAR UN CRUD COMPLETO DE USUARIOS (AUTENTICACION JWT AUTBASE)   COMPLETO , FALTA NADA MAS EL JWT
// CREAR CATEGORIAS CRUD (COMO LOS FOLDERS9)   COMPLETE

// - CREAR UN CRUD PARA TAREAS COMPLETO           COMPLETE
// - CREAR CRUD DE <COMPLETE>                </COMPLETE>







// CREAR LA SECCION DE ADMINISTACION (SUPER USUARIO SA)   --DESPUES DE TENER TODO

// FUNCIONABILIDAD FILTORS, HOY, SIGUIENTE, ETIQUETA, RANGO DE FECHAS
// CUANDO SE BLOQUEA LA CUENTA DEL USUARIO, ENVIAR UNA NOTIFICACION AL CORREO QUE SE TIENE REGISTRADO (NODE MALIT)
//// SUPER ADMINISTRADOR ES EL UNICCO QUE PUEDE CREAT USUARIOS
// NOTIFICACIONES
// CREAR UN DASHBOARD
// // SECCION DE REPORTERIA
//
//
//
//
//