import React from 'react'
import {
  Link
} from "react-router-dom";
const Navbarboostrap = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="#">Navbar</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Inicio <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/FiltrosAndEtiquetas">Filtros y Etiquetas</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Folders">Folders</Link>
            </li>
            <Link class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Usuarios
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link class="dropdown-item" to="/Usuarios/Create">Crear Usuarios</Link>
                <Link class="dropdown-item" to="/Usuarios/Update">Actualizar Usuario</Link>
                <Link class="dropdown-item" to="/Usuarios/Delete">Eliminar Usuarios</Link>
                <Link class="dropdown-item" to="/UsuarioIndividual">Usuario Individual</Link>
                <Link class="dropdown-item" to="/Usuarios">Lista de Usuarios</Link>

              </div>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbarboostrap;