import React, { useState } from 'react'

const ItemCount = ({stock,addToCart}) => {
    const [count, setCount] = useState(1)
    
    const suma = () => {
        if (count < stock) setCount (count + 1)
        
    }
    const resta = () => {
        if (count > 0) setCount (count - 1)
        
    }

  return (
    <div className=''>
        <div>
        <p className='font-black'>stock en almacen: {stock}</p>
        <p>Cantidad: ({count})</p>
        
        </div>
        <button className='inline-block px-6 py-2 border-2 border-blue-600 
        text-blue-600 font-medium text-lg leading-tight uppercase rounded 
        hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 
        transition duration-150 ease-in-out' onClick={suma} type='button'>+</button>
        
        <button className='inline-block px-6 py-2 border-2 border-blue-600 
        text-blue-600 font-medium text-lg leading-tight uppercase rounded 
        hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 
        transition duration-150 ease-in-out' onClick={resta} type='button'>-</button>

        <button onClick={()=>addToCart(count)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 
        text-lg px-6 focus:outline-none hover:bg-indigo-600 rounded">Añadir al carrito</button>

       

    </div>
  )
}

export default ItemCount