
import carrito from "../assets/imagenes/carrito.png"
import React, { useContext } from 'react'
import CartContext from '../context/CartContext'


const CartWidget = () => {
    const { productoCart } = useContext (CartContext)
    
  
    return (
            <div>
                <img style={{width:20}} className="carrito" src={carrito} alt="carrito"/>
                <span className="carrito flex items-center justify-center font-mono ">({ productoCart.length })</span>
            </div>
    )
}

export default CartWidget;