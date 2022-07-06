import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { productosDB } from "../firebase"
import { getDoc, collection, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(() => {
        const productsCollection = collection(productosDB, "products")
        const itemId = doc(productsCollection, id)
        getDoc(itemId)
        .then ((res)=>{
            setProduct({id: res.id, ...res.data()})
        })
    }, [id])
  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer