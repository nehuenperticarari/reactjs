import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext'
import CartMap from './CartMap'


const CartView = (product) => {
  const { productoCart } = useContext(CartContext)

  return (
    
    <div>
      {productoCart.length > 0 ?
        <div className='flex justify-center'>
        <CartMap key={product.id}/>
      
        </div>
        :
        <div className='flex flex-col items-center'>
        <h2 className='text-5xl m-12 font-sans '>Su carrito esta vacío</h2>
        <p className='text-gray-500'>ir a...</p>
        <NavLink to='/categoria/playstation'><button className=" text-white bg-indigo-500 border-0 py-2 
          text-lg px-6 focus:outline-none hover:bg-indigo-600 rounded">Playstation</button></NavLink>
        <NavLink to='/categoria/xbox'><button className=" text-white bg-indigo-500 border-0 py-2 
          text-lg px-6 focus:outline-none hover:bg-indigo-600 rounded">Xbox</button></NavLink>
        </div>
    }
    </div>
    
  )
}

export default CartView 