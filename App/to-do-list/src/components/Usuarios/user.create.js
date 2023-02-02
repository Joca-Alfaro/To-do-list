import React, {
  useState,
  useEffect
} from 'react'
import axios from 'axios'



const CreateUsuarios = () => {


  // Valido los campos del formulario



function AgreagarUsuario() {





var usuario = {
  user: user,
  email: email,
  password: password,
  description: description
}
console.log(usuario)

axios.post('http://localhost:4000/usuarios/create', usuario)
.then(res => {
  alert(`Usuario Creado Exitosamente`)
})
.then(err => {console.log(err)} )
}
//Hooks
  const [user, set_User] = useState('');
  const [password, set_Password] = useState('');
  const [description, set_Description] = useState('');
  const [email, set_Email] = useState('');






  // const ConsumirApiBackend = async () => {
  //   const data = await axios('http://localhost:4000/usuarios/create')
  //   set_User(data.data.data)
  // }

  // useEffect(() => {
  //   ConsumirApiBackend();
  // },
  //  [])




  return (

<div className='container'>
  <div className='row'>
      <h2 className='mt-4' >Crear un nuevo usuario</h2>
  </div>
   <div className='row'>
    <div className='col-sm-6 offset-3'>

   <div className='mb-3'>
    <label htmlFor='nombre' className='form-label'> Nombre </label>
    <input type="text" className='form-control' value={user}  onChange={(e) =>  {set_User(e.target.value)} } />
      </div>

       <div className='mb-3'>
      <label htmlFor='cargo' className='form-label'> Correo </label>
      <input type="text" className='form-control' value={email} onChange={(e) => {set_Email(e.target.value)} } />
        </div>

       <div className='mb-3'>
      <label htmlFor='nombre' className='form-label'> Contraseña </label>
      <input type="text" className='form-control' value={password} onChange={(e) => {set_Password(e.target.value)} } />
        </div>

       <div className='mb-3'>
      <label htmlFor='descripcion' className='form-label'> Descripcion </label>
      <input type="text" className='form-control' value={description} onChange={(e) => {set_Description(e.target.value)} } />
        </div>


<button onClick={AgreagarUsuario} className='btn btn-success'>Guardar Usuario</button>
    </div>

  </div>




    </div>
  )
}

export default CreateUsuarios;