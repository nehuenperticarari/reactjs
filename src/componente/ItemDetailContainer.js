import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
  const [producto,setProducto] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    
      
    getProductoDetail(id)
  },[id])


  const getProductoDetail = (id)=>{
            
              const url = "datos.json"

              fetch(url)
              .then(res => res.json())
              .then(res =>{
                
                setProducto(res[id]);
              })
              .catch(error=>{
                console.warn(error)
  }) 
              




              

}
  return (
    <div>
      <div className="grid gap-x-3 gap-y-4 grid-cols-3 ">
      <ItemDetail product={producto}/>
      </div>
  
    </div>
  )
} 

export default ItemDetailContainer