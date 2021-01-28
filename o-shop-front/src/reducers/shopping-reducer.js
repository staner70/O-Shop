// import {ADD_TO_CART,REMOVE_FROM_CART, ADJUST_ITEM_QTY } from '../store/actions';

// export const initialState = {
//   //products: [], // PRENDRE CELUI QUON A DEJA DANS ADMINPRODUCTS
//   cart: [],
// };

// const reducer = (oldstate = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       // Great Item data from products array
//       const item = oldstate.articles.find(
//         (article) => article.id === action.payload.id
//       );
//       // Check if Item is in cart already
//       const inCart = oldstate.cart.find((item) =>
//         item.id === action.payload.id ? true : false
//       );

//       return {
//         ...oldstate,
//         cart: inCart
//           ? oldstate.cart.map((item) =>
//               item.id === action.payload.id
//                 ? { ...item, qty: item.qty + 1 }
//                 : item
//             )
//           : [...oldstate.cart, { ...item, qty: 1 }],
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...oldstate,
//         cart: oldstate.cart.filter((item) => item.id !== action.payload.id),
//       };
//     case ADJUST_ITEM_QTY:
//       return {
//         ...oldstate,
//         cart: oldstate.cart.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, qty: +action.payload.qty }
//             : item
//         ),
//       };
    
//     default:
//       return oldstate;
//   }
// };

// export default reducer;
