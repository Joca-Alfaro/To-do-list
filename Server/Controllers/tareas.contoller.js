const getTareas = (req, res) => {
  try {
    res.json({msg:"Hola soy el controlador de tareas"})
  } catch (error) {
    console.log(error)
  }
 }

module.exports = { getTareas }