import axios from 'axios';
import { history } from '../index';
import Cookies from 'universal-cookie';
import { toast } from "react-toastify";


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
          localStorage.setItem('token', access_token);
          localStorage.setItem('role', role);
          localStorage.setItem('username', name);
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            ...response.data,
          });
          const cookies = new Cookies();
          cookies.set(`Bearer: ${response.data.access_token}`, "{ path: '/' }");
          console.log(cookies.get('access_token'));
          console.log('Je suis dans la réponse, et response.data vaut : ', response.data);
          history.push('/home');


        })
        .catch((error) => { // cas d'erreur
          console.log(error);
        });
      break;
    }

    default:
      next(action);
  }
};

export default api;
