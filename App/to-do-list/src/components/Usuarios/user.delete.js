import React, {
    useState,
    useEffect
  } from 'react'
  import {Link} from 'react-router-dom'
  import axios from 'axios'
  import { useParams } from 'react-router'
  
  function UserDelete() {
  
  const params = useParams()
  
  const [user, set_User] = useState('');
  const [password, set_Password] = useState('');
  const [description, set_Description] = useState('');
  const [email, set_Email] = useState('');
  
  
  useEffect(() => {
      axios.get('http://localhost:4000/usuarios/', {idusuario: params.idusuario}).then(res =>{
        console.log(res.data[0])
        const datausuario =  res.data[0]
        set_Password(datausuario.user)
        set_User(datausuario.password)
        set_Description(datausuario.description)
        set_Email(datausuario.email)
  
  
        
      } )
  }, [])
  
  
  function EditarUsuario() {
  
    //Objeto Para Actualizar
    var eliminarusuario = {
      user: user,
      email: email,
      password: password,
      description: description
    }
  
  

  
  
  
  //Peticion Axios
  http://localhost:4000/usuarios/update?id=63d1d13b17dfc6eec85a7bcd
  axios.put(`http://localhost:4000/usuarios/delete?id=${params.idusuario}`, eliminarusuario)
  .then(res => {
    console.log(res.data);
    alert(`Usuario Eliminado Exitosamente`)
  })
  .then(err => {console.log(err)} )
  }
  
    return (
  
    
  <div className='container'>
  
   
  
    <div className='row'>
        <h2 className='mt-4' >Eliminar Usuario</h2>
  <h3 className='mt-4'> El Id del usario a eliminar es: {params.idusuario} </h3>

    </div>
     <div className='row'>
      <div className='col-sm-6 offset-3'>
  
     <div className='mb-3'>
      <label htmlFor='nombre' className='form-label'> Nombre </label>
      <input type="text" className='form-control' value={user}  onChange={(e) =>  {set_User(e.target.value)} } />
        </div>
  

  
  <button 
  onClick={EditarUsuario}
  
  className='btn btn-success'>Editar Usuario</button>
      </div>
  
    </div>
  
  
  
  
      </div>
      )
  }
  
  export default UserDelete