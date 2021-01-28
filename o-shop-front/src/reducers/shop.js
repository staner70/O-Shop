import {
    SEARCH_CHANGE_FIELD, SEND_TO_CART
} from '../store/actions';

export const initialState = {
    searchInputValue: '',
}

const reducer = (oldState = initialState, action ={}) => {
    switch (action.type) {
        case SEARCH_CHANGE_FIELD:
            return {
                ...oldState,
             [action.searchField] : action.searchText,  
            };
        case SEND_TO_CART:
            return {
                ...oldState,
                ...action.product.id,
                };
           default: 
           return {...oldState} ;
    }
}
export default reducer;
