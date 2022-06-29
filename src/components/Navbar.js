import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <h1 className="nav-link ">TiendaNube</h1>
        <div className="collapse navbar-collapse" id="navbarNav"></div>
         <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link " to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to='/category/13-12-11'>Ultimos modelos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to='/category/XR-X'>Ultimas Unidades</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link "to='/category/SE-8'>Ofertas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to={`/cart`}><CartWidget /></Link>
          </li>
         </ul>
         
      </div>
    
    </nav>
  )
}

export default Navbar