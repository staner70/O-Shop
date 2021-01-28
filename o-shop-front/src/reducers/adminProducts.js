import { 
    UPDATE_ADMIN_PRODUCTS,
    DELETE_PRODUCT_BY_ID_STORE,
} from '../store/actions';

export const initialState = {
    list:[],
}

const reducer = (oldState = initialState, action={}) => {
    switch (action.type) {
        case UPDATE_ADMIN_PRODUCTS:
            return{
                ...oldState,
                ...action.payload,
            }
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