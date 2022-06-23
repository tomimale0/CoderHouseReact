import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { traerProductos, traerProductosPorCategory } from './products'
import { useParams } from 'react-router-dom'


const ItemListContainer = ( {greeting} ) => {

  const [items, setItems] = useState([])
  const {category} = useParams()

    useEffect(() => {
        
        if(!category){
            traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((rej) => {
                console.log(rej)
        })
        }else{
            traerProductosPorCategory(category)
            .then((res) => {
                setItems(res);
            })
            .catch((rej) => {
                console.log(rej)
            })
        }        
    }, [category])

    return (
    <>
    <section >
        <h2>{greeting}</h2>
        <section className='cardList'>
          <ItemList items={items} />
        </section>
    </section>
    </>
  )  
}

export default ItemListContainer