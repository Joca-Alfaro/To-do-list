const Favs = require('../models/favorites.model')
// aqui me quede ne la creacion de los Favs create
const CreateFavs = async (req, res) => {
  const { title, author, description } = req.body
  try {
    const CreateDataFavs = await Favs.create({ title, author, description });
    res.json({ data: CreateDataFavs })
  } catch (error) {
    console.log(error)

  }
}

const ReadFavs = async (req, res) => {
  try {
    const ViewFavs = await Favs.find({});
    res.json({ data: ViewFavs })
  } catch (error) {
    console.log(error)
  }
}

const UpdateFavs = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, author, description } = req.body
    const ActualizarFavs = await Favs.findByIdAndUpdate(id, { title, author, description });

    res.json({ msg: ActualizarFavs })
  } catch (error) {
    console.log(error)
  }
}



const DeletFavs = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id)
    //  const { estado } = req.body
    const FavsNaw = await Favs.findById(id).exec();

    if (FavsNaw.estado) {
      await Favs.findByIdAndUpdate(id, { estado: false })
      res.json({ data: 'Favorite Eliminado' })
    }
    else {
      await Favs.findByIdAndUpdate(id, { estado: true })
      res.json({ data: 'Favorite Activado' })
    }
    //cconst DeleteFavs = await Favs.findByIdAndUpdate(id, {estado});


  } catch (error) {
    console.error(error)
  }
}



module.exports =
{
  CreateFavs,
  ReadFavs,
  // UpdateFavs,
  UpdateFavs,
  DeletFavs
}
