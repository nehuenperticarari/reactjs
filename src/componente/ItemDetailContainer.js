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
            
              const url = "https://run.mocky.io/v3/6886150c-697b-45f2-96dd-039b41a01ee6"

              fetch(url)
              .then(res => res.json())
              .then(res =>{
                const item = res.find( x => x.id == id)
                setTimeout(() => {
                  setProducto(item);
                }, 2000);
                
              })
              .catch(error=>{
                console.warn(error)
  })           
}

  return (
    <div>
      <div>
      <ItemDetail key={producto.id} product={producto}/></div>
    </div>
  )
} 

export default ItemDetailContainer