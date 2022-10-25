const Task = require('../models/task.model')



const CreateTasks = async (req, res) => {
      const { title, author, description} = req.body
  try {
    const CreateDataTasks = await Task.create({ title, author, description });
   res.json({ data: CreateDataTasks })
  } catch (error) {
    console.log(error)

  }
}


const ReadTasks = async (req, res) => {
  try {
    const ViewTasks = await Task.find({});
    res.json({ data: ViewTasks })
  } catch (error) {
    console.log(error)
  }
 }

// const UpdateTasks = async (req, res) => {
//   const { id, title, author, description } = req.body
//   try {
//     await Task.findByIdAndUpdate({ id, title, author, description });
//     res.json({ data: UpdateTasks })
//   } catch (error) {
//     console.log(error)
//  }
//   }

const UpdateTareas = async (req, res) => {
  try {
    const {id} = req.query;
    const { title, author, description } = req.body
   const UpdateTask = await Task.findByIdAndUpdate(id,{title, author, description });

    res.json({ msg: UpdateTask })
  } catch (error) {
    console.log(error)
  }
}



const DeletTask = async (req, res) => {
  try {
    const { id } = req.query;
      console.log(id)
  //  const { estado } = req.body
  const TaskNaw = await Task.findById(id).exec();

  if (TaskNaw.estado){
    await Task.findByIdAndUpdate(id, { estado: false })
    res.json({ data: 'Tarea Eliminada' })
  }
  else {
    await Task.findByIdAndUpdate(id, { estado: true })
    res.json({ data: 'Tarea Activada' })
  }
    //cconst DeleteTask = await Task.findByIdAndUpdate(id, {estado});


  } catch (error) {
    console.error(error)
  }
}



module.exports =
{
  CreateTasks,
  ReadTasks,
  // UpdateTasks,
  UpdateTareas,
  DeletTask
}