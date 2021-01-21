import {
    SEARCH_CHANGE_FIELD
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
           default: 
           return {...oldState} ;
    }
}
export default reducer;
