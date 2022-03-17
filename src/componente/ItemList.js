import { NavLink } from "react-router-dom"


function ItemList({product}) {
  
  return (
    <div >
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!">
        <img className="rounded-t-lg" src={product.imagen} alt={product.nombre}/>
      </a>
      <div className="p-6">
        <NavLink to={`/productos/${product.id}`} className=" hover:text-gray-400 text-gray-700">
          <h5 className=" text-xl font-medium mb-2">{product.nombre}</h5>
        </NavLink>
        <p className="text-gray-700 text-base mb-4">
        {product.precio}
        </p>
      </div>
    </div>
  </div>
  
 
  )
}

export default ItemList