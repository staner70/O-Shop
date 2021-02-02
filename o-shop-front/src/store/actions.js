export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SEARCH_CHANGE_FIELD = 'SEARCH_CHANGE_FIELD';
export const CHANGE_ADD_USER_FIELD = 'CHANGE_ADD_USER_FIELD';

export const UPDATE_ADMIN_USERS = 'UPDATE_ADMIN_USERS';
export const UPDATE_ADMIN_PRODUCTS = 'UPDATE_ADMIN_PRODUCTS';
export const UPDATE_ADMIN_CATEGORIES = 'UPDATE_ADMIN_CATEGORIES';
export const UPDATE_ADMIN_ROLES = 'UPDATE_ADMIN_ROLES';

export const DELETE_PRODUCT_BY_ID_STORE = 'DELETE_PRODUCT_BY_ID_STORE;';
export const DELETE_USER_BY_ID_STORE = 'DELETE_USER_BY_ID_STORE;';
export const DELETE_CATEGORY_BY_ID_STORE = 'DELETE_CATEGORY_BY_ID_STORE;';


// ACTION POUR MIDDLEWARE : 
export const GET_USERS_FROM_API = 'GET_USERS_FROM_API';
export const GET_PRODUCTS_FROM_API = 'GET_PRODUCTS_FROM_API';
export const GET_CATEGORIES_FROM_API = 'GET_CATEGORIES_FROM_API';
export const GET_ROLES_FROM_API = 'GET_ROLES_FROM_API';
export const CHANGE_ADD_CATEGORY_FIELD = 'CHANGE_ADD_CATEGORY_FIELD';
export const CHANGE_ADD_PRODUCT_FIELD = 'CHANGE_ADD_PRODUCT_FIELD';
export const DELETE_PRODUCT_BY_ID = 'DELETE_PRODUCT_BY_ID';
export const DELETE_USER_BY_ID = 'DELETE_USER_BY_ID';
export const DELETE_CATEGORY_BY_ID = 'DELETE_CATEGORY_BY_ID';

// action creator
// une fonction pure qui renvoie une action
export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  name,
  value,
});

export const searchChangeField = (searchField, searchText) => ({
  type: SEARCH_CHANGE_FIELD,
  searchField: searchField,
  searchText: searchText,
});

export const changeAddUserField = (value, name) => ({
  type: CHANGE_ADD_USER_FIELD,
  value,
  name,
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

export const getCategoriesFromApi = () => ({
  type: GET_CATEGORIES_FROM_API,
});

export const updateCategoriesAdmin = (list) => ({
  type: UPDATE_ADMIN_CATEGORIES,
  payload: {list},
})

export const getRolesFromApi = () => ({
  type: GET_ROLES_FROM_API,
});

export const updateRolesAdmin = (list) => ({
  type: UPDATE_ADMIN_ROLES,
  payload: {list},
});


 //deleting a product
export const deleteProductById = (productId) => ({
    type: DELETE_PRODUCT_BY_ID,
    productId,
});

export const deleteProductInAdminStore = (productId) => ({
  type: DELETE_PRODUCT_BY_ID_STORE,
  productId,
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