import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../componente/ItemList";
import Loading from "../componente/Loading"
import {GetProducts} from '../firebase/FireBase'


const ItemListContainer = () => {

  const [producto,setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const {category}= useParams();
  

  const getProducto = async()=>{
    try{
        const url = "https://run.mocky.io/v3/3d0cc2b1-3a62-4ff3-9fce-9764965b8eeb"
        const res = await fetch(url);
        const data = await res.json();
        
        if(category){
          const results = data.filter (productos => productos.categoria === category)
          
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

  useEffect(()=>{ 
    GetProducts().then(data => {
      if(category){
        const results = data.filter (productos => productos.categoria === category)
        setTimeout(() => {
          setProducto(results);setLoading(false)
        }, 2000);}
      else{
        setProducto(data)
    }
    })
  }, [category])
    

  return (
    <div>
      
      <div className="grid gap-x-8 gap-y-4 grid-cols-3 ">
        {producto.length && producto.map(product=><div 
        key={product.nombre}><ItemList product={product}/></div>)}
      </div>
      { loading ? <Loading /> : null }
    </div>
     

  )
}
export default ItemListContainer
