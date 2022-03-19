import React, { useContext } from 'react'
import { FaWindowClose } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext'

const Cart = () => {
  const { productoCart, clearCart, removeProducto, totalCart } = useContext(CartContext)

 
  return (
    
    <div>
      {productoCart.length > 0 ?
        <div className='flex justify-center'>
          <div>
            {productoCart.map(product =>
              <div key={product.nombre} className="flex flex-col items-center bg-blue-200  shadow-md md:flex-row m-10">
                
                <img className="object-cover w-full h-96 md:h-auto md:w-48 " src={product.imagen} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold text-black">{product.nombre}</h5>
                  <div className='flex justify-around items-center'>
                  <button className="mx-3 px-2 " onClick={() => removeProducto(product)}><FaWindowClose/></button>
                    <p className="mx-3 font-normal text-gray-500">Cantidad: {product.qty}</p>
                    <p className="mx-3 font-normal text-gray-500">Total: ${(product.precio * product.qty)}</p>
                    
                  </div>
                </div>
              </div>
              )}
          </div>
          <div className='mx-48 sticky self-center'>
            <div>
              <span className='font-sans text-lg'>Total: ${totalCart }</span>
            </div> 
            <div className='flex flex-col items-center'>
              <button className='bg-sky-600	hover:bg-cyan-600 w-46 text-center 
              my-2.5 mx-auto rounded-3xl py-1.5 px-5 text-black border-solid border-2'onClick={clearCart}>Vaciar carrito</button>
              <button onClick={() => {alert("gracias por confiar")}} className='bg-sky-600	hover:bg-cyan-600 w-46 text-center 
              my-2.5 mx-auto rounded-3xl py-1.5 px-5 text-black border-solid border-2 '>Comprar</button>
            </div>
          </div>
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

export default Cart