import React from 'react'
import {Link} from 'react-router-dom'

function UsuarioIndividual({usuario}){
  return (
  <div className="container">
  <table class="table table-hover">

    <tbody>
      <tr>
        <td className='col-md-3' >{usuario.user}</td>
        <td className='col-md-3' >{usuario.description} </td>
        <td className='col-md-3' >{usuario.id}  </td>
        <td className='col-md-1' >
        <Link to={`/Usuarios/Update/${usuario.id}`} >
        <li className='btn btn-primary'>Editar</li>
        </Link> </td>
        <td className='col-md-1' >
        <Link to={`/Usuarios/Delete`} >
        <li className='btn btn-danger'>Borrar</li>
        </Link> </td>
      </tr>
    </tbody>
  </table>

      </div>
   )
}

export default UsuarioIndividual