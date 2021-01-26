import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import apiMiddleware from '../middlewares/api';
import adminMiddleware from '../middlewares/admin';

// rootReducer = résultat de combineReducers
import rootReducer from '../reducers';

// on crée le store
const store = createStore(
  rootReducer,
  composeWithDevTools( // devtools
    // branchement de middleware
   applyMiddleware(apiMiddleware,adminMiddleware),

  ),
);

// on l'exporte par défaut
export default store;
