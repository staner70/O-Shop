export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const LOGOUT = 'LOGOUT';
export const SEARCH_CHANGE_FIELD = 'SEARCH_CHANGE_FIELD';
export const CHANGE_ADD_USER_FIELD = 'CHANGE_ADD_USER_FIELD';
export const UPDATE_ADMIN_USERS = 'UPDATE_ADMIN_USERS';
export const UPDATE_ADMIN_PRODUCTS = 'UPDATE_ADMIN_PRODUCTS';
export const UPDATE_ADMIN_CATEGORIES = 'UPDATE_ADMIN_CATEGORIES';
export const DELETE_PRODUCT_BY_ID_STORE = 'DELETE_PRODUCT_BY_ID_STORE;';
export const DELETE_USER_BY_ID_STORE = 'DELETE_USER_BY_ID_STORE;';
export const DELETE_CATEGORY_BY_ID_STORE = 'DELETE_CATEGORY_BY_ID_STORE;';
export const EDIT_PRODUCT_BY_ID ='EDIT_PRODUCT_BY_ID';
export const EDIT_PRODUCT_BY_ID_STORE ='EDIT_PRODUCT_BY_ID_STORE';
export const SUBMIT_EDIT_PRODUCT ='SUBMIT_EDIT_PRODUCT';
export const SEND_PAYMENT_TO_API='SEND_PAYMENT_TO_API';
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';


// ACTION POUR MIDDLEWARE : 
export const GET_USERS_FROM_API = 'GET_USERS_FROM_API';
export const GET_PRODUCTS_FROM_API = 'GET_PRODUCTS_FROM_API';
export const GET_CATEGORIES_FROM_API = 'GET_CATEGORIES_FROM_API';
export const GET_CATEGORY_FROM_HOME = 'GET_CATEGORY_FROM_HOME';
export const CHANGE_ADD_CATEGORY_FIELD = 'CHANGE_ADD_CATEGORY_FIELD';
export const CHANGE_ADD_PRODUCT_FIELD = 'CHANGE_ADD_PRODUCT_FIELD';
export const CHANGE_EDIT_PRODUCT_FIELD = 'CHANGE_EDIT_PRODUCT_FIELD';
export const DELETE_PRODUCT_BY_ID = 'DELETE_PRODUCT_BY_ID';
export const DELETE_USER_BY_ID = 'DELETE_USER_BY_ID';
export const DELETE_CATEGORY_BY_ID = 'DELETE_CATEGORY_BY_ID';
export const SEND_TO_CART = 'SEND_TO_CART';

//ACTION DU SHOPIING CART
export const ADD_TO_CART = "ADD_TO_CART";
export const ADJUST_ITEM_QTY = "ADJUST_ITEM_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// action creator
// une fonction pure qui renvoie une action
export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  name,
  value,
});

export const searchChangeField = (value, name) => ({
  type: SEARCH_CHANGE_FIELD,
  value,
  name,
});

export const changeAddUserField = (value, name) => ({
  type: CHANGE_ADD_USER_FIELD,
  value,
  name,
});

export const sendPaymentToAPI = (value) => ({
  type: SEND_PAYMENT_TO_API,
  payload:value
})



export const logout = () => ({
  type: LOGOUT,
});

export const getUsersFromApi = () => ({
  type: GET_USERS_FROM_API,
});

export const updateUsersAdmin = (list) => ({
  type: UPDATE_ADMIN_USERS,
  payload: {list},
});

export const getProductsFromApi = () => ({
  type: GET_PRODUCTS_FROM_API,
});

export const updateProductsAdmin = (list) => ({
  type: UPDATE_ADMIN_PRODUCTS,
  payload: {list},
})
export const changeAddCategoryField = (value, name) => ({
  type: CHANGE_ADD_CATEGORY_FIELD,
  value,
  name,
});

export const changeAddProductField = (value, name) => ({
  type: CHANGE_ADD_PRODUCT_FIELD,
  value,
  name,
});

export const changeEditProductField = (field, text) => ({
  type: CHANGE_EDIT_PRODUCT_FIELD,
  field,
  text,
});

export const getCategoriesFromApi = () => ({
  type: GET_CATEGORIES_FROM_API,
});

export const updateCategoriesAdmin = (list) => ({
  type: UPDATE_ADMIN_CATEGORIES,
  payload: {list},
  
})
 //deleting a product
export const deleteProductById = (productId) => ({
    type: DELETE_PRODUCT_BY_ID,
    productId,
});

export const editProductById = (productId) => ({
  type: EDIT_PRODUCT_BY_ID,
  productId,
});


export const deleteProductInAdminStore = (payload) => ({
  type: DELETE_PRODUCT_BY_ID_STORE,
  payload,
});

//deleting a user
export const deleteUserById = (userId) => ({
  type: DELETE_USER_BY_ID,
  userId,
})
export const deleteUserInAdminStore = (userId) => ({
  type: DELETE_USER_BY_ID_STORE,
  userId,
});

// deleting a cateogy
export const deleteCategoryById = (categoryId) => ({
  type: DELETE_CATEGORY_BY_ID,
  categoryId,
})

export const deleteCategoryInAdminStore = (categoryId) => ({
  type: DELETE_CATEGORY_BY_ID_STORE,
  categoryId,
})

export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

