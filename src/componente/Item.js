import React from 'react'
import ItemList from './ItemList'

const Item = ({product}) => {
  return (
    <div>
      <ItemList key={product.id}/>
    </div>
  )
}

export default Item


