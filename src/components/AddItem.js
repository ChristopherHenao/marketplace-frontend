import React from 'react'

const AddItem = () => {

    return (
        <div id="addItemFormContainer">
            <form id="addItemForm">
                <div id="itemNameDiv">
                    <label>Item name</label>
                    <input
                        name="item_name"
                        type="text"
                        placeholder="Item name" />
                </div>

                <div id="itemPriceDiv">
                    <label>Item price</label>
                    <input
                        name="item_price"
                        type="text"
                        placeholder="Item price" />
                </div>

                <div id="itemCategoryDiv">
                    <label>Item category</label>
                    <select name="item_category">
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
                    <label>Item description</label>
                    <textarea
                        placeholder="Item description"
                        name="item_description">
                    </textarea>
                </div>
            </form>
        </div>
    )
}

export default AddItem