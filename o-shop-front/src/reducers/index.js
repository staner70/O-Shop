import { combineReducers } from 'redux';

import authReducer from './auth';
import shoppingReducer from './shop';
import adminUserReducer from './adminUsers';
import adminProductReducer from './adminProducts';
import adminCategoryReducer from './adminCategories';
import adminRole from './adminRole';


export default combineReducers({
  auth: authReducer,
  shop: shoppingReducer,
  adminuser: adminUserReducer,
  adminproduct: adminProductReducer,
  admincategory: adminCategoryReducer,
  adminrole: adminRole,
});
