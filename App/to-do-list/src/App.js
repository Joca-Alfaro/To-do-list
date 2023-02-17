
import './App.css';
import {
 BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";
// import Navbar from "../src/components/navbar/navbar"

import Filtros_Etiquetas from "../src/components/filtros_etiquetas/filtros_etiquetas"
import Home from "../src/components/Page_Home/index"
import Folders from "../src/components/Folders/index"
import ListaUsuarios from "../src/components/Usuarios/index"
import CreateUsuarios from "../src/components/Usuarios/user.create"
import Error from "../src/components/Not Found/index"
import  Favorites from "../src/components/Favorites"
import Tareas from "../src/components/Tareas"
import Navbarboostrap from "../src/components/navbar/navbarboostrap"
import UserUpdate from "../src/components/Usuarios/user.update"
import UserDelete from "../src/components/Usuarios/user.delete"

function App() {
  return (

 <Router>
      <Navbarboostrap />

  <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/FiltrosAndEtiquetas" element={<Filtros_Etiquetas/>} />
        <Route path="/Folders" element={< Folders />} />
        <Route path="/Usuarios" element={< ListaUsuarios />} />
        <Route path="/Delete/:idusuario" element={< UserDelete />} />
        <Route path="/Usuarios/Create" element={< CreateUsuarios />} />
        <Route path="/ActualizarUsuario/:idusuario" element={< UserUpdate />} />
        <Route path="/Favorites" element={< Favorites />} />
        <Route path="/Tareas" element={< Tareas />} />

        <Route path="*" element={< Error />} />
        <Route path="*" element={<Error />} />

        {/* <Route path="*" element={<Error />} /> */}

  </Routes>

      </Router>


  );
}

export default App;
