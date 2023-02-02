  const [datausuarios, setdataUsuarios]=useState([]);

  useEffect(() => {
  axios.get('http://localhost:4000/usuarios').then(res => {
    console.log(res.data)
    setdataUsuarios(res.data)
  }).catch(err => {
    console.log(err)
  } )

  }, [])

const listausuarios = datausuarios.map(usuario => {
  return(
    <div>
      <UsuarioIndividual usuario={usuario} />
    </div>
  )
})