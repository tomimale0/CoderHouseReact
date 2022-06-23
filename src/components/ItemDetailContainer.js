import React, { useState, useEffect } from 'react'
import { traerProductoPorId } from './products' 
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(() => {
        traerProductoPorId(parseInt(id))
            .then((res) => {
                setProduct(res);
            })
            .catch((rej) => {
                console.log(rej)
            })
    }, [product])
  return (
    <div className='cardList'>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer