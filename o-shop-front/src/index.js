import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from "react-cookie";
import { Provider } from 'react-redux';
import store from './store';
import { Router } from 'react-router'
import { ConfirmationDialogProvider } from 'material-ui-confirmation';
import { createBrowserHistory } from "history";


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export const history = createBrowserHistory()


ReactDOM.render(
  <Router history={history}>
      <Provider store={store}>
      <CookiesProvider>
      <ConfirmationDialogProvider>
        <App />
        </ConfirmationDialogProvider>
        </CookiesProvider>
      </Provider>
  </Router>,

  document.getElementById('root')
);

reportWebVitals();
