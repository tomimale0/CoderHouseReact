import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const ItemDetail = ({product }) => {

  const [cantidadProducto, setCantidadProducto] = useState()

  const onAdd = (cantidadProducto) => {
    setCantidadProducto(cantidadProducto)
  }

  if (cantidadProducto > 0){
    return (
      <section>
          <h3 className='texto1'>{product.nombre}</h3>
          <p className='texto2'>{product.descripcion}</p>
          
          <img className='cardImage2' src={product.imagen} alt="" />
          <h3 className='texto1'>Agregaste {cantidadProducto} {product.nombre}  al carrito</h3>
          <Link to={`/cart`}><button className='cardBtn'>Finalizar compra</button></Link>
      </section>
    )
  }else {
    return (
      <section className='card2'>
          <h3 className='texto1'>{product.nombre}</h3>
          <p className='texto2'>{product.descripcion}</p>
          <img className='cardImage2' src={product.imagen} alt="" />
          <h4 className='cardAhorro__precio'>$ {product.precio}</h4>
          <h4 className='cardAhorro__desc'>{product.desc}</h4>
          <h4 className='cardCondicion'>{product.condicion}</h4>
          <h4 className='cardPrecio2'>$ {product.precio2}</h4>
          <ItemCount initial={0} stock={product.stock} onAdd={onAdd} />
          <p className='cardCondicion'>Stock: {product.stock}</p>
      </section>
    )
  }

    
  }

export default ItemDetail