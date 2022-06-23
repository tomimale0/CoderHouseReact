import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <section>
      <h1>Carrito</h1>
        <Link to='/checkout'>Finalizar compra</Link>
    </section>
  )
}

export default Cart