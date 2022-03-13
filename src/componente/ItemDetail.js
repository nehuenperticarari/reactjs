import React, { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'
import ItemCount from './ItemCount'


function ItemDetail({product}) {
  
  const {addProducto,clearCart} = useContext(CartContext)

  const [isInCart, setisInCart] = useState(false)

  function addToCart(qty){
    addProducto(product,qty)
    setisInCart(true)

  }

  return (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.imagen} alt={product.nombre}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.nombre}</h1>
        <div className="flex mb-4">
      </div>
      <div>
        <p className="xl:pr-48 text-base font-black text-center  lg:leading-tight leading-normal text-gray-600 mt-7">{product.precio}</p>
        <p className="text-base leading-4 mt-7 text-gray-600">Aca deberia ir texto</p>
        <p className="text-base leading-4 mt-4 text-gray-600">Aca deberia ir texto</p>
        <p className="text-base leading-4 mt-4 text-gray-600">Aca deberia ir texto</p>
        <p className="text-base leading-4 mt-4 text-gray-600">Aca deberia ir texto</p>
        <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Aca tambien deberia ir texto</p>
      </div>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        <div className="flex ml-6 items-center">
            <div className="relative">
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
            </div>
        </div>
      </div>
      <div>

        {isInCart ?
        <Link to={"/cart"}>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 
          text-lg px-6 focus:outline-none hover:bg-indigo-600 rounded">Terminar compra</button>
        </Link>
        :
          <ItemCount addToCart={addToCart} stock={product.stock}/>
        }   
          <button onClick={clearCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 
          text-lg px-6 focus:outline-none hover:bg-indigo-600 rounded">Vaciar carrito</button>
      </div>
      </div>
      </div>
    </div>
  </section>  

  )
}

export default ItemDetail