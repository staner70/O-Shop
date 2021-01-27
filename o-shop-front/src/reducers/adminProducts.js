import { 
    UPDATE_ADMIN_PRODUCTS, CHANGE_ADD_PRODUCT_FIELD
} from '../store/actions';

export const initialState = {
    list:[],
    name: '',
    description: '',
    price: '',
    quantity:'',
    image:'',
    shop:'OSHOP',
    done: false,
    NotDone:false,
}

const reducer = (oldState = initialState, action={}) => {
    switch (action.type) {
        case UPDATE_ADMIN_PRODUCTS:
            return{
                ...oldState,
                ...action.payload,
            }
        
        case CHANGE_ADD_PRODUCT_FIELD:
            return {
                ...oldState,
                [action.name]: action.value,
            };

        case 'PRODUCT_ADD_SUCCESS':
            return {
                ...oldState,
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
            NotDone: true,
            };

        default:
            return{...oldState};   
    }
}

export default reducer;