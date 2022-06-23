import React from 'react'
import ItemCount from './ItemCount'



const ItemDetail = ({ product }) => {

  const onAdd = (cantidadProducto) => {
    console.log("desde item detail:" + cantidadProducto)
  }
    return (
      <section>
           <div className='card'>
        <div>
          <img className='cardImage' src={product.imagen} alt={product.nombre} />
          <h3 className='cardTitulo'>{product.nombre}</h3>
        </div>
        <div className='cardAhorro'>
          <p className='cardAhorro__precio'>${product.precio}</p>
          <p className='cardAhorro__desc'>{product.desc}</p>
        </div>
        <div>
          <p className='cardCondicion'>{product.condicion}</p>
          <p className='cardPrecio2'>${product.precio2}</p>
        </div>
        <div>
        <ItemCount initial={0} stock={product.stock} onAdd={onAdd} />
        </div>
        
          

      </div>
      </section>
    )
  }

export default ItemDetail