import { useEffect, useState } from "react"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [producto,setProducto] = useState([])

    useEffect(()=>{
        getProducto()
    },[])

    const getProducto = ()=>{
        const url = "datos.json"
            fetch(url)
             .then(res=>res.json())
             .then(res =>{
                setTimeout(() => {
                    setProducto(res.Productos)
                }, 2000);
             })
             .catch(error=>{
              console.log(error)

          })
    }
  
    return (
        <div>
            <div className="grid gap-x-3 gap-y-4 grid-cols-3 ">
            {producto.map(c=><ItemList key={producto.id} product={c}/>)}
            </div>
        </div>
    )
}

export default ItemListContainer;