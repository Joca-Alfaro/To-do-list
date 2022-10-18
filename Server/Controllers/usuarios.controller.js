const getUsuarios = (req, res) => {
  try {
    res.json({ msg: "Hola soy el controlador de usurios" })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getUsuarios }