const Etiqueta = require('../models/etiquetas.model')
// aqui me quede ne la creacion de los Etiqueta create
const CreateEtiqueta = async (req, res) => {
  const { title, author, name, search, description, favorite } = req.body
  try {
    const CreateDataEtiqueta = await Etiqueta.create({ title, author, name, search, description, favorite });
    res.json({ data: CreateDataEtiqueta })
  } catch (error) {
    console.log(error)

  }
}

const ReadEtiqueta = async (req, res) => {
  try {
    const ViewEtiqueta = await Etiqueta.find({});
    res.json({ data: ViewEtiqueta })
  } catch (error) {
    console.log(error)
  }
}

const UpdateEtiqueta = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, author, name, search, description, favorite } = req.body
    const ActualizarEtiqueta = await Etiqueta.findByIdAndUpdate(id, { title, author, name, search, description, favorite });

    res.json({ msg: ActualizarEtiqueta })
  } catch (error) {
    console.log(error)
  }
}



const DeletEtiqueta = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id)
    //  const { estado } = req.body
    const EtiquetaNaw = await Etiqueta.findById(id).exec();

    if (EtiquetaNaw.estado) {
      await Etiqueta.findByIdAndUpdate(id, { estado: false })
      res.json({ data: 'Filtro Eliminado' })
    }
    else {
      await Etiqueta.findByIdAndUpdate(id, { estado: true })
      res.json({ data: 'Filtro Activado' })
    }
    //cconst DeleteEtiqueta = await Etiqueta.findByIdAndUpdate(id, {estado});


  } catch (error) {
    console.error(error)
  }
}



module.exports =
{
  CreateEtiqueta,
  ReadEtiqueta,
  // UpdateEtiqueta,
  UpdateEtiqueta,
  DeletEtiqueta
}
