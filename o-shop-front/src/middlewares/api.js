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
        url: 'http://localhost:3500/auth/login',
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
          const { token } = response.data;
          const { role } = response.data;
          const { username } = response.data;
          const { logged } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          localStorage.setItem('logged', logged);
          localStorage.setItem('username', username);


          store.dispatch({
            type: 'LOGIN_SUCCESS',
            // on déverse tout le contenu de response.data dans notre action
            ...response.data,
          });
          const cookies = new Cookies();
          cookies.set('access_token', `Bearer: ${response.data.access_token}`, "{ path: '/' }");
          console.log(cookies.get('access_token'));
          console.log('Je suis dans la réponse, et response.data vaut : ', response.data);
          history.push('/home');


        })
        .catch((error) => { // cas d'erreur
          console.log(error);
        });
      break;
    }

    case 'SUBMIT_USER': {
      // ici, on va faire la requete pour le login
      // on commence par récupérer email et password
      // Double destructuration !
      const { adminuser: { username, password, firstname, lastname, role } } = store.getState();
      console.log('submit_user');
const token =  localStorage.getItem('token');
      const userconfig = {
        method: 'post',
        url: 'http://localhost:3500/user',
        headers: { 
          'Authorization': `${token}`, 
          'Content-Type': 'application/json'
        },
        data: { // body de la requete (contenu du json)
          username,
          password,
          firstname,
          lastname,
          role,
        },
      };

      axios(userconfig) // on lance la requete...
        .then((response) => { // cas de réussite
          // on envoie une action, pour sauvegarder les données dans le reducer
          // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
          console.log(response.data);
          console.log('inscription user');
          });
          break;
      
    }
    

    default:
      next(action);
  }
};

export default api;
