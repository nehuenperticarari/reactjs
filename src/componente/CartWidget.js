import React from "react";
import carrito from "../assets/imagenes/carrito.png"


const CartWidget = ({qty = 0}) => {
  
    return (
            <div>
                <img style={{width:20}} className="carrito" src={carrito} alt="carrito"/>
                <span className="carrito flex items-center justify-center font-mono ">({ qty })</span>
            </div>
    )
}

export default CartWidget;