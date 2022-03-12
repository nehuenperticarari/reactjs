import React, { createContext, useState } from 'react'

const CartContext = createContext();


export function CartContextProvider({children})  {
  const [productoCart, setProducto] = useState([]);

  function removeProducto(product, qty){
    if (isProductoInCart(product.id)){
      let index = productoCart.findIndex (i=>i.id === product.id)
      let copyCart = [...productoCart]
      copyCart.splice(index[qty])
      setProducto(copyCart);}

  } 

  function addProducto (product, qty) {
    if (isProductoInCart(product.id)){
      let index = productoCart.findIndex(i=>i.id === product.id)
      let copyCart = [...productoCart]
      copyCart[index].qty += qty
      setProducto(copyCart);
    }
    else{
      const productoToAdd = {... product, qty}
      setProducto([...productoCart, productoToAdd])
    }
    }
  

  function isProductoInCart(id){
    return productoCart.some (xproducto => xproducto.id === id)
     
  }

  function clearCart(){
    setProducto([])
  }
    


  return (
    <CartContext.Provider value={{addProducto, productoCart, clearCart, removeProducto}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;

