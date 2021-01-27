export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SEARCH_CHANGE_FIELD = 'SEARCH_CHANGE_FIELD';
export const CHANGE_ADD_USER_FIELD = 'CHANGE_ADD_USER_FIELD';
export const UPDATE_ADMIN_USERS = 'UPDATE_ADMIN_USERS';
export const UPDATE_ADMIN_PRODUCTS = 'UPDATE_ADMIN_PRODUCTS';
export const UPDATE_ADMIN_CATEGORIES = 'UPDATE_ADMIN_CATEGORIES';

// ACTION POUR MIDDLEWARE : 
export const GET_USERS_FROM_API = 'GET_USERS_FROM_API';
export const GET_PRODUCTS_FROM_API = 'GET_PRODUCTS_FROM_API';
export const GET_CATEGORIES_FROM_API = 'GET_CATEGORIES_FROM_API';
export const GET_CATEGORY_FROM_HOME = 'GET_CATEGORY_FROM_HOME';
export const CHANGE_ADD_CATEGORY_FIELD = 'CHANGE_ADD_CATEGORY_FIELD';
export const CHANGE_ADD_PRODUCT_FIELD = 'CHANGE_ADD_PRODUCT_FIELD';

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

