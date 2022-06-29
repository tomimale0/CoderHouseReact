import { createContext, useState } from 'react'

export const contexto = createContext()

const Provider = contexto.Provider

export const MiProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity, price, id, imagen, ) => {
        if (isInCart(id)) {
            const identification = cart.findIndex((identification) => (identification.id == id))
            const itemCopy = [...cart]
            itemCopy[identification].quantity += quantity
            setCart(itemCopy)
        } else {
            const itemAdd = {item, quantity, price, id, imagen}
            setCart([...cart, itemAdd])
        }
    }

    const addItemCartWidget = () => {
        const quantity = 0
        cart.forEach((producto) => {
            quantity = quantity + producto.quantity
        })
        return quantity
    }

    const isInCart = (id) => {
        return cart.some((item) => (item.id == id))
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => (item.id != id)))
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
