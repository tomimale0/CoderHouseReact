import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CartContext'


const CartWidget = () => {

  const {cart, addItemCartWidget} = useContext(contexto)

  return (
    <>
        <Link to='/cart'><span class="material-symbols-outlined">shopping_cart</span> {addItemCartWidget() > 0 && (<span>{addItemCartWidget()}</span>)}</Link>
    </>
  )
}

export default CartWidget