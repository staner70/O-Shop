import axios from 'axios';
import { history } from '../index';
import Cookies from 'universal-cookie';


const api = (store) => (next) => (action) => {
  switch (action.type) {

    case 'LOGIN': {   
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
          store.dispatch({ type: 'SHOW_SPINNER'});

          if(response.data.success){
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
            const cookies = new Cookies();
            cookies.set(`Bearer: ${response.data.access_token}`, "{ path: '/' }");
            localStorage.setItem('role', role);
            history.push('/home/category/Accessoires');
          }else{
            console.error(new Error(`Quelque chose ne c'est pas bien passé avec l'api auth`));
          }
        })
        .catch((error) => { // cas d'erreur
          console.log(error);
        }).finally(
          // store.dispatch({ type: 'HIDE_SPINNER'})
        );
      break;
    }
    case 'LOGOUT': {
      localStorage.clear();
      window.localStorage.clear(); 
      const admin =localStorage.getItem('isAdmin');
      localStorage.removeItem(admin);
      history.push('/');

      const localtoken =  localStorage.getItem('token');
      const config = {
        method: 'get',
        url: 'https://oshop-lyra.herokuapp.com/auth/logout', // TODO VERIFIER ROUTE AVEC LE BACK
        headers: {
          'Authorization': `Bearer: ${localtoken}`, 
          'Cookie': 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtX21pY2hlbCIsImlhdCI6MTYxMTIxNjQ2NSwiZXhwIjoxNjExMjE3MDY1fQ.LltbTuINRJdgYLGHzwxVR3GeV4g-i7IAeLOxp3jKl3E'
        }
      };

      axios(config)
        .then((response) => { 
      
        })
        .catch((error) => {
          console.log(error)
          history.push('/');

        }
        );
      break;
    }

    default:
      next(action);
  }
};

export default api;
