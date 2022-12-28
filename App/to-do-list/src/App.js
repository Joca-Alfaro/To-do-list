
import './App.css';
import {
 BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";
import Navbar from "../src/components/navbar/navbar"

import Filtros_Etiquetas from "../src/components/filtros_etiquetas/filtros_etiquetas"
import Home from "../src/components/Page_Home/index"
import Folders from "../src/components/Folders/index"
import Usuarios from "../src/components/Usuarios/index"
import Error from "../src/components/Not Found/index"
import  Favorites from "../src/components/Favorites"
import Tareas from "../src/components/Tareas"
function App() {
  return (

 <Router>
      <Navbar />

  <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/FiltrosAndEtiquetas" element={< Filtros_Etiquetas />} />
        <Route path="/Folders" element={< Folders />} />
        <Route path="/Usuarios" element={< Usuarios />} />
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
