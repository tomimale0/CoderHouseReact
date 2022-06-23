import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Carrito from '../assets/icons/carrito.png'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)


    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        } else {
            alert("No puede superar el stock disponible")
        }
    }

    const bajarContador = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const confirmarContador = () => {
        onAdd(contador)
    }

    return (
        <section>
            <div className='cardContador'>
                <button className='cardContador__btn' onClick={aumentarContador}>+</button>
                <p className='cardContador__stock'> {contador}</p>
                <button className='cardContador__btn' onClick={bajarContador}>-</button>
            </div>
            <div className='cardCompra'>
                <img className='cardCarrito__icon' src={Carrito} alt="" />
                <Link to={'/cart'}><button className='cardContador__stock' onClick={confirmarContador}>Agregar al carrito</button></Link>
            </div>

        </section>
    )
}

export default ItemCount