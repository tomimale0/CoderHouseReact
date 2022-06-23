import React from 'react'
import { Link } from 'react-router-dom'

function Item({ id, nombre, precio, imagen }) {
  return (
    <section>
      <div className='card'>
      <h3 className='cardTitulo'>{nombre}</h3>
      
      <img className='cardImage' src={imagen} alt="" />
      <Link to={`/detail/${id}`}>
        <button  className='infoBtn'>Ver detalles</button>
      </Link>
      </div>
    </section >
  )
}

export default Item