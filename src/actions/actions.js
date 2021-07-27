
export const FETCH_ITEMS = "FETCH_ITEMS"

export const fetchItems = (items) => {
    return ({ type:FETCH_ITEMS, payload: items})
};