import React from 'react'
import Item from './Item';
import ItemList from './ItemList';


const ItemListContainer = () => {
    return (
        <div className="mensaje">
            <Item/>
            <ItemList/>  
        </div>
    )
}

export default ItemListContainer;