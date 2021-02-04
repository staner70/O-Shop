import axios from 'axios';
import { history } from '../index';
import Cookies from 'universal-cookie';


const api = (store) => (next) => (action) => {
  switch (action.type) {

    case 'LOGIN': {
      // ici, on va faire la requete pour le login
      // on commence par récupérer email et password
      // Double destructuration !
      const { auth: { username, password } } = store.getState();
      const config = {
        method: 'post',
        url: 'https://oshop-lyra.herokuapp.com/auth/login',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtX21pY2hlbCIsImlhdCI6MTYxMTIxNjQ2NSwiZXhwIjoxNjExMjE3MDY1fQ.LltbTuINRJdgYLGHzwxVR3GeV4g-i7IAeLOxp3jKl3E'
        },
        data: { // body de la requete (contenu du json)
          username,
          password,
        },
      };

      axios(config) // on lance la requete...
        .then((response) => { // cas de réussite
          // on envoie une action, pour sauvegarder les données dans le reducer
          // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
          const { access_token } = response.data;
          const { role } = response.data.data;
          const { name } = response.data.data;
          const { isAdmin } = response.data.data;
          localStorage.setItem('isAdmin', isAdmin);
          localStorage.setItem('token', access_token);
          localStorage.setItem('role', role);
          localStorage.setItem('username', name);
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            ...response.data,
          });
          // Gestion de l'affichage du message de succes
          const cookies = new Cookies();
          cookies.set(`Bearer: ${response.data.access_token}`, "{ path: '/' }");
          localStorage.setItem('role', role);
          history.push('/home/category/Accessoires');


        })
        .catch((error) => { // cas d'erreur
          console.log(error);
        });
      break;
    }
    case 'LOGOUT': {
      // ici, on va faire la requete pour le login
      // on commence par récupérer email et password
      // Double destructuration !
      const localtoken =  localStorage.getItem('token');
      const config = {
        method: 'get',
        url: 'https://oshop-lyra.herokuapp.com/auth/logout', // TODO VERIFIER ROUTE AVEC LE BACK
        headers: {
          'Authorization': `Bearer: ${localtoken}`, 
          'Cookie': 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtX21pY2hlbCIsImlhdCI6MTYxMTIxNjQ2NSwiZXhwIjoxNjExMjE3MDY1fQ.LltbTuINRJdgYLGHzwxVR3GeV4g-i7IAeLOxp3jKl3E'
        }
      };

      axios(config) // on lance la requete...
        .then((response) => { // cas de réussite
          
        //On vient recuperer les valeurs qui nous interessent pour le logout et on les enleve du storage et du state
          localStorage.clear();
          window.localStorage.clear(); //try this to clear all local storage
          const admin =localStorage.getItem('isAdmin');
          localStorage.removeItem(admin);
          history.push('/');


        })
        .catch((error) => { // cas d'erreur
         
        });
      break;
    }

    default:
      next(action);
  }
};

export default api;
