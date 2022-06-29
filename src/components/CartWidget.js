import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CartContext'


const CartWidget = () => {

  const resultado = useContext(contexto)

  return (
    <div>
        <Link to='/cart'><span className="material-symbols-outlined">shopping_cart</span> {resultado.addItemCartWidget}</Link>
    </div>
  )
}

export default CartWidget