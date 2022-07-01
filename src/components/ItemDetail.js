import React from 'react'
import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { contexto } from './CartContext'
import Checkout from './Checkout'



const ItemDetail = ({ product }) => {

  const { addItem, cart } = useContext(contexto)

  const [cantidadProducto, setCantidadProducto] = useState()

  const onAdd = (cantidadProducto) => {
    setCantidadProducto(cantidadProducto)
    addItem(product, cantidadProducto)
  }
  return (
    <section className='card2'>
      <h3 className='texto1'>{product.nombre}</h3>
      <p className='texto2'>{product.descripcion}</p>
      <img className='cardImage2' src={product.imagen} alt="" />
      <h4 className='cardAhorro__precio'>$ {product.precio}</h4>
      <h4 className='cardAhorro__desc'>{product.desc}</h4>
      <h4 className='cardCondicion'>{product.condicion}</h4>
      <h4 className='cardPrecio'>$ {product.precio2}</h4>
      <section className='card2'>
        {cantidadProducto > 0 ? (<><p className='texto2'>Agregaste {cantidadProducto} {product.nombre} al carrito</p>
          <Checkout /></>) : (<><ItemCount initial={0} stock={product.stock} onAdd={onAdd} />
            <p className='texto2'>Stock:{product.stock}</p></>)}
      </section>
    </section>
  )
}




export default ItemDetail