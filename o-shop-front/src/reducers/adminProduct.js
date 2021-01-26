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
    done: false,
    NotDone:false,
}

const reducer = (oldState = initialState, action ={}) => {
    switch (action.type) {
        case CHANGE_ADD_PRODUCT_FIELD:
            return {
                ...oldState,
                // on copie les données de l'action dans le reducer
                [action.name]: action.value,

              };
              case 'PRODUCT_ADD_SUCCESS':
      return {
        ...oldState,
        // on copie les données de l'action dans le reducer
        done: true,
        name: '',
        description: '',
        price: '',
        quantity:'',
        image:'',
        shop:'OSHOP',
      };
            case 'PRODUCT_ADD_FAILED':
      return {
        ...oldState,
        // on copie les données de l'action dans le reducer
        NotDone: true,
      };
           default: 
           return {...oldState} ;
    }
}
export default reducer;
