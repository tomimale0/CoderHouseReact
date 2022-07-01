import React, { useContext } from 'react'
import { contexto } from './CartContext'

const Cart = () => {

  const { cart, addItemCartWidget, clear, removeItem, addItem } = useContext(contexto)

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <section >
      {cart.map((product) => (
        <section className='card2' key={product.id}>
          <h3 className='texto1'>{product.nombre}</h3>
          <p className='texto2'>{product.descripcion}</p>
          <h4 className='cardPrecio3'>$ {product.precio}</h4>
          <img className='cardImage2' src={product.imagen} alt="" />
          <button className='cardBtn4' onClick={() => removeItem(product.id)}>Quitar del carrito</button>
        </section>
      ))}
      <section className='card3'>
        <p className='texto2'>Cantidad de items en carrito: {addItemCartWidget()}</p>
        <button className='cardBtn4' onClick={clear}>Vaciar carrito</button>
        <form>
          <button className='cardBtn3' onClick={handleClick}>Comprar</button>
        </form>
      </section>
    </section>
  )
}

export default Cart