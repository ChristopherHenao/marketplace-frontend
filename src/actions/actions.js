export const FETCH_ITEMS = "FETCH_ITEMS"
export const LOGGED_IN = "LOGGED_IN"
export const LOG_OUT = "LOG_OUT"

export const fetchItems = (items) => {
    return ({ type:FETCH_ITEMS, payload: items})
};

export const loggedIn = () => {
    return ({type: LOGGED_IN})
}

export const logOut = () => {
    return ({type: LOG_OUT})
}