import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from "react-cookie";
import { Provider } from 'react-redux'; //Gérer l'éta
import store from './store';
import { Router } from 'react-router' // Gère à changer page
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
