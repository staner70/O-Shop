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

    case 'SUBMIT_USER': {
      // ici, on va faire la requete pour le login
      // on commence par récupérer email et password
      // Double destructuration !
      const { adminuser: { username, password, first_name, last_name, role, shop } } = store.getState();
      console.log('submit_user');
      const localtoken =  localStorage.getItem('token');
      console.log('token:', localtoken)
      const userconfig = {
        method: 'post',
        url: 'https://oshop-lyra.herokuapp.com/user',
        headers: { 
          'Authorization': `Bearer: ${localtoken}`, 
          'Content-Type': 'application/json'
        },
        data: { // body de la requete (contenu du json)
          username,
          password,
          first_name,
          last_name,
          role,
          shop,
        },
        
      };

      axios(userconfig) // on lance la requete...
        .then((response) => { // cas de réussite
          // on envoie une action, pour sauvegarder les données dans le reducer
          // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
          console.log(userconfig);
          console.log(response.data);
          console.log('inscription user');
          store.dispatch({ type: 'USER_ADD_SUCCESS' })

          });
          break;
      
    }
    
    case 'SUBMIT_CATEGORY': {
      // ici, on va faire la requete pour le login
      // on commence par récupérer email et password
      // Double destructuration !
      const { admincategory: { name, color } } = store.getState();
      console.log('submit_category');
      const localtoken =  localStorage.getItem('token');
      console.log('token:', localtoken)
      const categoryconfig = {
        method: 'post',
        url: 'https://oshop-lyra.herokuapp.com/category',
        headers: { 
          'Authorization': `Bearer: ${localtoken}`, 
          'Content-Type': 'application/json'
        },
        data: { // body de la requete (contenu du json)
          name,
          color,
        },
        
      };

      axios(categoryconfig) // on lance la requete...
        .then((response) => { // cas de réussite
          // on envoie une action, pour sauvegarder les données dans le reducer
          // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
          console.log(categoryconfig);
          console.log(response.data);
          console.log('Ajout de category');
          store.dispatch({ type: 'CATEGORY_ADD_SUCCESS' })

          });
          break;
      
    }
    case 'SUBMIT_PRODUCT': {
      // ici, on va faire la requete pour le login
      // on commence par récupérer email et password
      // Double destructuration !
      const { adminproduct: { name, description, price, quantity, image, shop, category } } = store.getState();
      console.log('submit_product');
      const localtoken =  localStorage.getItem('token');
      console.log('token:', localtoken)
      const productconfig = {
        method: 'post',
        url: 'https://oshop-lyra.herokuapp.com/product',
        headers: { 
          'Authorization': `Bearer: ${localtoken}`, 
          'Content-Type': 'application/json'
        },
        data: { // body de la requete (contenu du json)
          name,
          description,
          price,
          quantity,
          image,
          shop,
          category,
        },
        
      };

      axios(productconfig) // on lance la requete...
        .then((response) => { // cas de réussite
          // on envoie une action, pour sauvegarder les données dans le reducer
          // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
          console.log(response.data);
          console.log('Ajout de produit');
          console.log(store.getState());
          store.dispatch({ type: 'PRODUCT_ADD_SUCCESS' })
        });
          break;
      
    }

    default:
      next(action);
  }
};

export default api;
