import React from 'react'

const AddItem = () => {

    return (
        <div id="addItemFormContainer">
            <form id="addItemForm">
                <div id="itemNameDiv">
                    <label>Item name
                        <input name="item_name" type="text"></input>
                    </label>
                </div>

                <div id="itemPriceDiv">
                    <label>Item price
                        <input name="item_price" type="text"></input>
                    </label>
                </div>

                <div id="itemCategoryDiv">
                    <label>Item category
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
                    </label>
                </div>

                <div id="itemDescriptionDiv">
                    <label>Item description
                        <textarea name="item_description"></textarea>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default AddItem