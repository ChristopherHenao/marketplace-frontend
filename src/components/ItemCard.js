import React from 'react'

const ItemCard = (props) => {

    const { item } = props

    return (
        <div className="item-card">
            <h4>{item.item_name}</h4>
            <h5>Price: {item.item_price}</h5>
            <h5>Category: {item.item_category}</h5>
            <h5>{item.item_description}</h5>
            <button>Add to cart</button>
        </div>
    )
}

export default ItemCard