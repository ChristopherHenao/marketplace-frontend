import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialValues = {
    item_name: '',
    item_price: 0,
    item_category: '',
    item_description: '',
}

const AddItem = () => {

    const [ addFormValues, setAddFormValues ] = useState(initialValues);
    const { push } = useHistory();

    const addItem = () => {
        axiosWithAuth()
        .post('/items', addFormValues)
            .then(res => {
                console.log(res.data)
                push('/')
            })
            .catch(err => {
                console.log('This did not work: ', err)
            })
    }

    const handleChanges = (e) => {
        setAddFormValues({
            ...addFormValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem()
    }


    return (
        <div id="addItemFormContainer">
            <form id="addItemForm" onSubmit={handleSubmit}>
                <div id="itemNameDiv">
                    <label>Item Name: </label>
                        <input 
                            name="item_name" 
                            type="text"
                            value={addFormValues.item_name}
                            onChange={handleChanges}
                        />
                </div>

                <div id="itemPriceDiv">
                    <label>Item Price: </label>
                        <input 
                            name="item_price" 
                            type="number"
                            value={addFormValues.item_price}
                            onChange={handleChanges}
                        />
                </div>

                <div id="itemCategoryDiv">
                    <label>Item Category: </label>
                        <select 
                            name="item_category"
                            value={addFormValues.item_category}
                            onChange={handleChanges}>
                            <option>Animal Products</option>
                            <option>Beans</option>
                            <option>Cereals - Maize</option>
                            <option>Cereals - Rice</option>
                            <option>Cereals - Other</option>
                            <option>Fruits</option>
                            <option>Peas</option>
                            <option>Roots & Tubers</option>
                            <option>Seeds & Nuts</option>
                            <option>Vegetables</option>
                            <option>Other</option>
                        </select>
                </div>

                <div id="itemDescriptionDiv">
                    <label>Item Description: </label>
                    <br/>
                        <textarea 
                            name="item_description" 
                            value={addFormValues.item_description}
                            onChange={handleChanges}
                        />
                </div>
                <button id="add-button">Add Item!</button>
            </form>
        </div>
    )
}

export default AddItem