import React, {
  useState,
  useEffect
} from 'react'
import axios from 'axios'


const Home = () => {

  const [Tarea, Set_Tarea] = useState([]);


  const ConsumirApiBackend  = async () => {
    const  data = await axios('http://localhost:4000/tareas')
    Set_Tarea(data.data.data)
  }

useEffect(()=>{
  ConsumirApiBackend();
},[])


  return (




    <div className="row">
      <br /><br /><br /><br />
      {Tarea.map((el_item, index) => (
        <div className="col">
          <h1>Titulo: {el_item.title}  </h1>
          <h2> Autor: {el_item.author}  </h2>
          <p> Id: {el_item._id}  </p>
          <h3> Descripcion: {el_item.description}  </h3>
          <h2> Estado: {el_item.estado}  </h2>
          <p> Fecha: {el_item.date}  </p>

          <br /><br /><br /><br /><br /><br />
            {/* <p className="texto_tarjeta7">  {el_item._id}</p>
            <p className="texto_tarjeta6">  {el_item.author}</p>
            <p className="texto_tarjeta5">  {el_item.description}</p> */}
        </div>
      ))};
    </div>
  )
}

export default Home;