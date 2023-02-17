import React, {
  useState,
  useEffect
} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Usuarios = () => {

  const [Usuarios, Set_Usuarios] = useState([]);


  const ConsumirApiBackend  = async () => {
    const  data = await axios('http://localhost:4000/usuarios')
    Set_Usuarios(data.data.data)
  }

useEffect(()=>{
  ConsumirApiBackend();
},[])


  return (




    <div className="container">

      <h1>Lista de Usuarios</h1>
      <br /><br /><br /><br />
      {Usuarios.map((el_item, index) => (


      <div className="container">
      <table class="table table-hover">

        <tbody>
          <tr>
            <td className='col-md-3' >{el_item.user}</td>
            <td className='col-md-3' >{el_item.description} </td>
            <td className='col-md-3' >{el_item._id}  </td>
            <td className='col-md-1' >
            <Link to={`/ActualizarUsuario/${el_item._id}`} >
            <li className='btn btn-primary'>Editar</li>
            </Link> </td>
            <td className='col-md-1' >
            <Link to={`/Delete/${el_item.id}`} >
            <li className='btn btn-danger'>Borrar</li>
            </Link> </td>
          </tr>
        </tbody>
      </table>

          </div>
      ))}
    </div>
  )
}

export default Usuarios;