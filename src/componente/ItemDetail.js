import React from 'react'


function ItemDetail({product}) {
  
  return (

  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.imagen} alt={product.nombre}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.nombre}</h1>
        <div className="flex mb-4">
      </div>
      <p className="leading-relaxed">Descripcion producto</p>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        <div className="flex ml-6 items-center">
          <span className="mr-3">{product.precio}</span>
            <div className="relative">
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
            </div>
        </div>
      </div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-900"></span>
        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Comprar</button>
      </div>
      </div>
      </div>
    </div>
  </section>  

  )
}

export default ItemDetail