import { NavLink } from "react-router-dom"



function ItemList({product}) {
  return (
    <div className="  bg-white w-30 h-96 shadow-md rounded m-2">
    <div className="h-3/4 w-full">
      <img className="w-full h-full object-cover rounded-t" src={product.imagen} alt={product.nombre}></img>
    </div>
    <div className="w-full h-1/4 p-3">
      <NavLink to={`/productos/${product.id}`} className=" hover:text-gray-400 text-gray-700">
        <span className="text-lg font-semibold uppercase tracking-wide ">{product.nombre}</span>
      </NavLink>
      <p className="text-gray-600 text-sm leading-5 mt-1">{product.precio}</p>
      
    </div>
 
  </div>  
   
  )
}

export default ItemList