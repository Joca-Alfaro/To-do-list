const Filter = require('../models/filtros.model')
// aqui me quede ne la creacion de los Filter create
const CreateFilter = async (req, res) => {
  const { title, author, name, search, description, favorite } = req.body
  try {
    const CreateDataFilter = await Filter.create({ title, author, name, search, description, favorite });
    res.json({ data: CreateDataFilter })
  } catch (error) {
    console.log(error)

  }
}

const ReadFilter = async (req, res) => {
  try {
    const ViewFilter = await Filter.find({});
    res.json({ data: ViewFilter })
  } catch (error) {
    console.log(error)
  }
}

const UpdateFilter = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, author, name, search, description, favorite } = req.body
    const ActualizarFilter = await Filter.findByIdAndUpdate(id, { title, author, name, search, description, favorite });

    res.json({ msg: ActualizarFilter })
  } catch (error) {
    console.log(error)
  }
}



const DeletFilter = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id)
    //  const { estado } = req.body
    const FilterNaw = await Filter.findById(id).exec();

    if (FilterNaw.estado) {
      await Filter.findByIdAndUpdate(id, { estado: false })
      res.json({ data: 'Filtro Eliminado' })
    }
    else {
      await Filter.findByIdAndUpdate(id, { estado: true })
      res.json({ data: 'Filtro Activado' })
    }
    //cconst DeleteFilter = await Filter.findByIdAndUpdate(id, {estado});


  } catch (error) {
    console.error(error)
  }
}



module.exports =
{
  CreateFilter,
  ReadFilter,
  // UpdateFilter,
  UpdateFilter,
  DeletFilter
}
