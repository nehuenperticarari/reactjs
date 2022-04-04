import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import Loading from "../componente/Loading"
import {GetProducts} from '../firebase/FireBase'


function ItemDetailContainer() {
  const [producto,setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const {nombre} = useParams()

  useEffect(()=>{
    GetProducts(nombre).then(res => {
      const item = res.find( x => x.nombre == nombre)
      setTimeout(() => {
        setProducto(item);setLoading(false)
      }, 2000);
    })
    },[nombre])         


  return (
    <div>
      { loading ? <Loading /> : null }
      <ItemDetail  key={producto.id} product={producto}/>
    </div>
  )
} 

export default ItemDetailContainer