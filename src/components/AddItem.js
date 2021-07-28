import React from 'react'

const AddItem = () => {

    return (
        <div id="addItemFormContainer">
            <form id="addItemForm">
                <div id="itemNameDiv">
                    <label htmlFor="itemName">Item name</label>
                    <input
                        name="item_name"
                        id="itemName"
                        type="text"
                        placeholder="Item name" />
                </div>

                <div id="itemPriceDiv">
                    <label htmlFor="itemPrice">Item price</label>
                    <input
                        name="item_price"
                        id="itemPrice"
                        type="text"
                        placeholder="Item price" />
                </div>

                <div id="itemCategoryDiv">
                    <label htmlFor="itemCategory">Item category</label>
                    <select
                        id="itemCategory"
                        name="item_category">
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
                    <label htmlFor="itemDescription">Item description</label>
                    <textarea
                        placeholder="Item description"
                        id="itemDescription"
                        name="item_description">
                    </textarea>
                </div>
            </form>
        </div>
    )
}

export default AddItem