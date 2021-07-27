import { FETCH_ITEMS, LOGGED_IN, LOG_OUT } from './../actions/actions';

const initialState = {
    items: [],
    isLoggedIn: false,

};

const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        case LOGGED_IN:
            return {
                ...state,
                isLoggedIn: (!state.isLoggedIn)
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: (!state.isLoggedIn)
            }
        default:
            return state;
    }
};

export default itemReducer