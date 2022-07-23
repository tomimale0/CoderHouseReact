import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productosDB } from "../firebase"
import { getDocs, collection, query, where } from 'firebase/firestore'


const ItemListContainer = ( {greeting} ) => {

    const [items, setItems] = useState([])
    const {category} = useParams()

    

    useEffect(() => {
        const productsCollection = collection(productosDB, "products")
        const cate = category
        ? query(productsCollection, where('category', '==', category)) : productsCollection
    
        getDocs(cate)
        .then((res)=>{
            const productsMap = res.docs.map(referencia=>{
                const productos = referencia.data()
                productos.id = referencia.id
                return productos
            })
            setItems(productsMap)
        })
        .catch((error)=>{
            console.log(error)
        })
               
    }, [category])

    

    return (
    <section>
        <h2>{greeting}</h2>
        <section className='cardList'>
          <ItemList items={items} />
        </section>
    </section>
  )  
}

export default ItemListContainer