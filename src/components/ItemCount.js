import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)

    
    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }else {
            alert ("No puede superar el stock disponible")
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
    <section >
        <p className='cardBtn2'> {contador}</p>
        <button className='cardBtn' onClick={aumentarContador}>+</button>
        <button className='cardBtn' onClick={bajarContador}>-</button>
        <button className='cardBtn'onClick={confirmarContador}>Sumar al carrito</button>
    </section>
  )
}

export default ItemCount