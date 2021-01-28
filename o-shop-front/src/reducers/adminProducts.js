import { 
    UPDATE_ADMIN_PRODUCTS, CHANGE_ADD_PRODUCT_FIELD,ADD_TO_CART,REMOVE_FROM_CART, ADJUST_ITEM_QTY
} from '../store/actions';

export const initialState = {
    list:[],
    name: '',
    cart: [],
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
        case ADD_TO_CART:
            const item = oldState.list.find(
                (article) => article.id === action.payload.id
              );
              // Check if Item is in cart already
              const inCart = oldState.cart.find((item) =>
                item.id === action.payload.id ? true : false
              );

              return {
                ...oldState,
                cart: inCart
                  ? oldState.cart.map((item) =>
                      item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                  : [...oldState.cart, { ...item, qty: 1 }],
              };
          case REMOVE_FROM_CART:
            return {
              ...oldState,
              cart: oldState.cart.filter((item) => item.id !== action.payload.id),
            };
          case ADJUST_ITEM_QTY:
            return {
              ...oldState,
              cart: oldState.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: +action.payload.qty }
                  : item
              ),
            };
    

        default:
            return{...oldState};   
    }
}

export default reducer;