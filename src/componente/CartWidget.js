import React from "react";
import carrito from "../assets/imagenes/carrito.png"


const CartWidget = () => {
  
    return (
    <img style={{width:20}} className="carrito" src={carrito} alt="carrito"/>)
}

export default CartWidget;