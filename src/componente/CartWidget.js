import React from "react";
import carrito from "../assets/imagenes/carrito.png"
import '../assets/styles/navBar.css';

const CartWidget = () => {
  
    return (
    <img className="carrito" src={carrito} alt="carrito"/>)
}

export default CartWidget;