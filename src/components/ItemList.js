import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    

    if (items.length > 0) {
        return (
        items.map(p => 
            <Item id={p.id} nombre={p.nombre} key={p.id} precio={p.precio} stock={p.stock} descripcion={p.descripcion} imagen={p.imagen} category={p.category} />)
    )
    }else {
        return (
            <>
        <p className='cardAhorro__desc'>Cargando productos...</p>
        </>
        )
        
    }
    
}

export default ItemList