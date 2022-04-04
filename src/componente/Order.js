import React, { useContext, useState } from 'react'
import {addDoc, collection} from "firebase/firestore"
import CartContext from '../context/CartContext'
import {db} from '../firebase/FireBase'

const Order = () => {
 const {totalCart, productoCart, clearCart} = useContext(CartContext)

 const [comprador, setComprador] = useState({})
 const [orderId, setOrderId] = useState('');
 const [finalizo, setFinalizo] = useState(false)

 const handler = (x) => { 
   setComprador({
     ...comprador,
     [x.target.name]: x.target.value
     
   })
   
  }
  const handlerEnvio = (e) => {
    e.preventDefault();
    
    const nuevaOrder = addDoc(collection(db, 'orders'), {
      Comprador: {
        nombre: comprador.nombre,
        email: comprador.email,
        telefono: comprador.telefono
      },
      productos: productoCart,
      total: totalCart
    });

    nuevaOrder.then(data => setOrderId(data.id));
    clearCart();
    setFinalizo(true);

  }

  return (
    <>
    {
    finalizo ?
    <>
    <h2 className=' text-5xl m-12 font-sans text-center'>Gracias por su compra</h2>
        <p className='text-xl mb-12 text-center'>Guarde este numero de orden, puede servirle ante cualquier reclamo:</p> 
        <p className='title uppercase text-4xl font-sans text-center'>{orderId}</p>
    </>
    :
    <div className='p-32'>
    <p className='font-sans text-4xl'>Introduzca sus datos</p>
    <p className='font-sans text-4xl'>para finalizar la compra</p>
    <p className='font-sans text-4xl'>El monto total de la compra es $ {totalCart}</p>
    <form className="w-full max-w-sm" onSubmit={handlerEnvio}>
      <div className="flex items-center border-b border-cyan-500 py-2">
        <input onChange={handler} id='nombre' name='nombre' className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Nombre" aria-label="Full name"/>
      </div>
      <div className="flex items-center border-b border-cyan-500 py-2">
        <input onChange={handler} id='email' name='email' className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Full name"/>
      </div>
      <div className="flex items-center border-b border-cyan-500 py-2">
        <input onChange={handler} id='telefono' name='telefono' className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Telefono" aria-label="Full name"/>
      </div>
      <button className="flex-shrink-0 bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
          Finalizar Compra
        </button>
    </form>
    </div>
    }
    </>
  )
}

export default Order