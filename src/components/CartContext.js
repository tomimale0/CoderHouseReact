import { createContext, useState } from 'react'

export const contexto = createContext()

const Provider = contexto.Provider

export const MiProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity ) => {
        if (isInCart(item.id)) {
            const copy = cart.findIndex((copy) => (copy.id === item.id))
            const itemCopy = [...cart]
            itemCopy[copy].quantity += quantity
            setCart(itemCopy)
        } else {
            const itemAdd = {...item, quantity}
            setCart([...cart, itemAdd])
        }
    }

    const addItemCartWidget = () => {
        let quantity = 0
        cart.forEach((item) => {
            quantity = quantity + item.quantity
        })
        return quantity
    }

    const isInCart = (id) => {
        return cart.some((item) => (item.id === id))
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => (item.id !== id)))
    }

    const clear = () => {
        setCart ([])
    }


    return (
        <Provider value={{cart, addItem, addItemCartWidget, isInCart, removeItem, clear}}>
            {children}
        </Provider>
    )
}