import React, { useEffect } from 'react';
import axios from 'axios'

const ItemList = () => {

    const getItems = () => {
        axios.get('https://buildweekproject.herokuapp.com/api/items')
        .then(res => {
            console.log(res.data)
        })
    }

    useEffect(() => {
        getItems()
    },[])

    return (
        <div>
            This is the Item List
        </div>
    )
}

export default ItemList