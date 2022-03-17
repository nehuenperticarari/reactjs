import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../componente/ItemList";
import Loading from "../componente/Loading"


const ItemListContainer = () => {

  const [producto,setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const {category}= useParams();
  console.log(category);

  const getProducto = async()=>{
    try{
        const url = "https://run.mocky.io/v3/6886150c-697b-45f2-96dd-039b41a01ee6"
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        if(category){
          const results = data.filter (productos => productos.categoria === category)
          console.log(results)
          setTimeout(() => {
            setProducto(results);setLoading(false)
          }, 2000);
          
          
        }
        else{
            setProducto(data)
        }
    }
    catch(error){
      console.log(error)

    }
  }

  useEffect(()=>{ getProducto() },[category])
    

  return (
    <div>
      
      <div className="grid gap-x-8 gap-y-4 grid-cols-3 ">
        {producto.length && producto.map(product=><div 
        key={product.id}><ItemList product={product}/></div>)}
      </div>
      { loading ? <Loading /> : null }
    </div>
     

  )
}
export default ItemListContainer
