import {
    CHANGE_ADD_PRODUCT_FIELD
} from '../store/actions';

export const initialState = {
    name: '',
    description: '',
    price: '',
    quantity:'',
    image:'',
    shop:'OSHOP',
}

const reducer = (oldState = initialState, action ={}) => {
    switch (action.type) {
        case CHANGE_ADD_PRODUCT_FIELD:
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
