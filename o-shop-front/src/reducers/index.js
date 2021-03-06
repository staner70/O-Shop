/* eslint-disable object-shorthand */

import { combineReducers } from 'redux';

import authReducer from './auth';
import shoppingReducer from './shop';
import adminUserReducer from './adminUsers';
import adminProductReducer from './adminProducts';
import adminCategoryReducer from './adminCategories';
import adminRole from './adminRole';

// combineReducers : on lui donne un objet
// en clé : le nom de la "tranche" de state
// en valeur : le reducer
// on peut utiliser la shorthand property
// shorthand : si clé = valeur, on écrit juste une fois
export default combineReducers({
  auth: authReducer,
  shop: shoppingReducer,
  adminuser: adminUserReducer,
  adminproduct: adminProductReducer,
  admincategory: adminCategoryReducer,
  adminrole: adminRole,
});
