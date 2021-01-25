import {
    CHANGE_ADD_CATEGORY_FIELD
} from '../store/actions';

export const initialState = {
    name: '',
    color: '',
}

const reducer = (oldState = initialState, action ={}) => {
    switch (action.type) {
        case CHANGE_ADD_CATEGORY_FIELD:
            return {
                ...oldState,
                // on copie les données de l'action dans le reducer
                [action.name]: action.value,

              };
           default: 
           return {...oldState} ;
    }
}
export default reducer;
