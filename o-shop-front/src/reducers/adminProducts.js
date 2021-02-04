import { 
  UPDATE_ADMIN_PRODUCTS, 
  CHANGE_ADD_PRODUCT_FIELD,
  CHANGE_EDIT_PRODUCT_FIELD,
  DELETE_PRODUCT_BY_ID_STORE,
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  ADJUST_ITEM_QTY, 
  SEARCH_CHANGE_FIELD,
  EDIT_PRODUCT_BY_ID_STORE,
  SEND_PAYMENT_TO_API,
  PAYMENT_SUCCESS
} from '../store/actions';

export const initialState = {
  list: [],
  name: '',
  cart: [],
  description: '',
  price: '',
  quantity: '',
  product_image: '',
  shop: 'OSHOP',
  done: false,
  NotDone: false,
  search: '',
  editName:'',
  editPrice:'',
  editQuantity:'',
  editDescription:'',
  editShop:'',
  editImage:'',

}

const reducer = (oldState = initialState, action={}) => {
  switch (action.type) {
    case UPDATE_ADMIN_PRODUCTS:
      console.log('update admin product');

        return{
            ...oldState,
            ...action.payload,
        }
    
    case CHANGE_ADD_PRODUCT_FIELD:
      console.log('change add product field');

        return {
            ...oldState,
            [action.name]: action.value,
        };

    case CHANGE_EDIT_PRODUCT_FIELD:
      console.log('change edit product field');
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

    case PAYMENT_SUCCESS:
        return {
          ...oldState,
          cart:[],
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

    case EDIT_PRODUCT_BY_ID_STORE:{
      console.log('dans mon edit product id store');

      return{
          ...oldState,
          editName: action.payload.name,
          editDescription: action.payload.description,
          editPrice: action.payload.price,
          editQuantity: action.payload.quantity,
          editShop: action.payload.shop,
          editCategory: action.payload.category[0],
          editImage: action.payload.image,
        } 
      }
  

  
    case SEARCH_CHANGE_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      }

    case SEND_PAYMENT_TO_API:
      return {
        ...oldState,
        value: action.value
      }

    case ADD_TO_CART:
      const item = oldState.list.find(
        (article) => article.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = oldState.cart.find((item) =>
        item.id === action.payload.id ? true : false,
      );
      console.log('incart:', inCart);
      console.log('item:', item);
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
      return { ...oldState };
  }
}

export default reducer;