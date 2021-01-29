import { 
    UPDATE_ADMIN_PRODUCTS, CHANGE_ADD_PRODUCT_FIELD,
    DELETE_PRODUCT_BY_ID_STORE,
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

        case DELETE_PRODUCT_BY_ID_STORE:{
            const list = [...oldState.list];
            return{
                ...oldState,
                list: list.filter((product) =>(product.id !== action.productId)),
            } 
        }
        default:
            return{...oldState};   
    }
}

export default reducer;