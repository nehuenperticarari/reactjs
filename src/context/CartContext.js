import React, { createContext, useState } from 'react'

const CartContext = createContext();


export function CartContextProvider({children},product)  {
  const [productoCart, setProducto] = useState([]);
  const [totalCart, setTotalCart] = useState(0)
  

  function addProducto (product, qty) {
    if (isProductoInCart(product.id)){
      let index = productoCart.findIndex(i=>i.id === product.id)
      let copyCart = [...productoCart]
      copyCart[index].qty += qty
      setTotalCart(totalCart + (product.precio * qty))
      setProducto(copyCart);
    }

    else{
      const productoToAdd = {...product, qty}
      setProducto([...productoCart, productoToAdd])
      setTotalCart(totalCart + (productoToAdd.precio * productoToAdd.qty))
      
    }
    }

  const removeProducto = (id) => {
    let index = productoCart.findIndex(el => el.id === id);
    const copyCart = [...productoCart];
    copyCart.splice( index, 1 );
    setProducto([...copyCart]);
    setTotalCart(totalCart - (product.precio * product.qty))
    
}
  

  function isProductoInCart(id){
    return productoCart.some (xproducto => xproducto.id === id)
     
  }

  function clearCart(){
    setProducto([])
    setTotalCart(0)
    
  }
    

  return (
    <CartContext.Provider value={{addProducto, productoCart,
                                  clearCart, removeProducto, totalCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;

