import axios from 'axios';

import { GET_USERS_FROM_API, updateUsersAdmin, 
  GET_PRODUCTS_FROM_API, updateProductsAdmin,
  GET_CATEGORIES_FROM_API, updateCategoriesAdmin } from '../store/actions';

const admin = (store) => (next) => (action) => {
  switch (action.type) {

    case 'SUBMIT_USER': {
      
        const { adminuser: { username, password, first_name, last_name, role, shop } } = store.getState();
        console.log('submit_user');
        const localtoken =  localStorage.getItem('token');
        console.log('token:', localtoken)
        const userconfig = {
          method: 'post',
          url: 'http://salih-taner.vpnuser.lan:3500/user',
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
            });
            console.log(userconfig);
            break;
        
      }

    case GET_USERS_FROM_API: {
        const localtoken =  localStorage.getItem('token');
        const userconfig = {
          method: 'get',
          url: 'http://salih-taner.vpnuser.lan:3500/user',
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json'
          }
        };
  
        axios(userconfig)
          .then((response) => {
            if(response.data.success){
              store.dispatch(updateUsersAdmin(response.data.data));
            }else{
              console.error(new Error("Quelque chose ne c'est pas bien passé avec l'api :http://salih-taner.vpnuser.lan:3500/user"));
            }
          }).catch((error)=> {console.error(error);});
        break
      }

      case GET_PRODUCTS_FROM_API: {
        const localtoken =  localStorage.getItem('token');
        const userconfig = {
          method: 'get',
          url: 'http://salih-taner.vpnuser.lan:3500/product',
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json'
          }
        };
  
        axios(userconfig)
          .then((response) => {
            if(response.data.success){
              store.dispatch(updateProductsAdmin(response.data.data));
            }else{
              console.error(new Error("Quelque chose ne c'est pas bien passé avec l'api :http://salih-taner.vpnuser.lan:3500/products"));
            }
          }).catch((error)=> {console.error(error);});
        break
      }

      case GET_CATEGORIES_FROM_API: {
        const localtoken =  localStorage.getItem('token');
        const userconfig = {
          method: 'get',
          url: 'http://salih-taner.vpnuser.lan:3500/category',
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json'
          }
        };
  
        axios(userconfig)
          .then((response) => {
            if(response.data.success){
              store.dispatch(updateCategoriesAdmin(response.data.data));
            }else{
              console.error(new Error("Quelque chose ne c'est pas bien passé avec l'api :http://salih-taner.vpnuser.lan:3500/category"));
            }
          }).catch((error)=> {console.error(error);});
        break
      }

      default:
        next(action);
    }
  };
  
  export default admin;