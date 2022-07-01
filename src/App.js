import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MiProvider } from './components/CartContext'
import Cart from "./components/Cart"

const App = () => {
    return (

        <BrowserRouter>
            <MiProvider>
                <Navbar />
                <Routes>
                    <Route path='/cart' element={<Cart />} />
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path='/detail/:id' element={<ItemDetailContainer />} />
                    <Route path='/category/:category' element={<ItemListContainer />} />
                </Routes>
            </MiProvider>
        </BrowserRouter>

    )
}

export default App 