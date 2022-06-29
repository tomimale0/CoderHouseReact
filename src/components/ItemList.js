import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {

    return (
        items.map(p =>
            <Item id={p.id}
                nombre={p.nombre}
                key={p.id}
                precio={p.precio}
                stock={p.stock}
                descripcion={p.descripcion}
                imagen={p.imagen}
                category={p.category} />)
    )


}

export default ItemList