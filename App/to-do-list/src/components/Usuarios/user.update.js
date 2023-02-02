import React from 'react'
import { useParams } from 'react-router-dom'

function UserUpdate() {

const params = useParams()


  return (
    <div>UserUpdate
 <h3> El Id del usuario es: {params.el_item.id} </h3>

 </div>
    )
}

export default UserUpdate