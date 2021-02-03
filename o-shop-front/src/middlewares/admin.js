import axios from 'axios';
import { toast } from "react-toastify";

import { 
  GET_USERS_FROM_API, 
  updateUsersAdmin, 
  GET_PRODUCTS_FROM_API, 
  updateProductsAdmin,  
  GET_CATEGORIES_FROM_API, 
  updateCategoriesAdmin, 
  DELETE_PRODUCT_BY_ID, 
  deleteProductInAdminStore,
  EDIT_PRODUCT_BY_ID_STORE,
  DELETE_USER_BY_ID, 
  deleteUserInAdminStore,
  DELETE_CATEGORY_BY_ID,
  deleteCategoryInAdminStore, 
  SEARCH_CHANGE_FIELD, 
  EDIT_PRODUCT_BY_ID, 
  SUBMIT_EDIT_PRODUCT,
  SEND_PAYMENT_TO_API,
} from '../store/actions';

const admin = (store) => (next) => (action) => {
  switch (action.type) {

    case 'SUBMIT_USER': {
        const { adminuser: { username, password, first_name, last_name, role, shop } } = store.getState();
        const localtoken =  localStorage.getItem('token');
        const userconfig = {
          method: 'post',
          url: 'https://oshop-lyra.herokuapp.com/user',
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json'
          },
          data: {
            username,
            password,
            first_name,
            last_name,
            role,
            shop,
          },
          
        };
  
        axios(userconfig) 
          .then((response) => { 
            toast.success('Votre Utilisateur a bien ete ajoute', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            }).catch((error) => { 
            console.log(error);
              toast.error('Erreur dans votre ajout de utilisateur!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
            
            break;
        
      }

    case GET_USERS_FROM_API: {
        const localtoken =  localStorage.getItem('token');
        const userconfig = {
          method: 'get',
          url: 'https://oshop-lyra.herokuapp.com/user',
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
          url: 'https://oshop-lyra.herokuapp.com/product/',
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

      case SEARCH_CHANGE_FIELD: {
        const {adminproduct: {search} } = store.getState();
        console.log('search:',search);
        const localtoken =  localStorage.getItem('token');
        const searchconfig = {
          method: 'get',
          url: `https://oshop-lyra.herokuapp.com/product?search=${search}`,
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json',
          }, data:search
        };
  
        axios(searchconfig)
          .then((response) => {
              console.log(response.data)
            
          }).catch((error)=> {console.error(error);});
        break
      }

      case 'SUBMIT_PRODUCT': {
        const { adminproduct: { name, description, price, quantity, shop, category } } = store.getState();
        const localtoken =  localStorage.getItem('token');
        const productconfig = {
          method: 'post',
          url: 'https://oshop-lyra.herokuapp.com/product',
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'content-type': 'application/json'
          },
          data: { 
            name,
            description,
            price,
            quantity,
            shop,
            category,
          },
          
        };
  
        axios(productconfig)
          .then((response) => { 
            
            toast.success('Votre Produit a bien ete ajoute', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
  
          })
          .catch((error) => { // cas d'erreur
          console.log(error);
          toast.error(`${error}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        });
        break;
      }
      case SUBMIT_EDIT_PRODUCT: {
        const { adminproduct: { editName, editDescription, editPrice, editImage, editQuantity, editShop, editCategory } } = store.getState();
        const localtoken =  localStorage.getItem('token');
        console.log('API SUBMIT EDIT PRODUCT');
        console.log(editName);
        console.log(editCategory);
        const idItem = localStorage.getItem('id');
        const productconfig = {
          method: 'patch',
          url: `http://salih-taner.vpnuser.lan:3500/product/${idItem}`,
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
          },
          data: { // body de la requete (contenu du json)
            name:editName,
            description:editDescription,
            price: editPrice,
            quantity:editQuantity,
            shop: editShop,
            category: editCategory,
            image : editImage
          },
          
        };
  
        axios(productconfig) // on lance la requete...
          .then((response) => { // cas de réussite
            // on envoie une action, pour sauvegarder les données dans le reducer
            // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
            
            toast.success('Votre Produit a bien ete ajoute', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
  
          })
          .catch((error) => { // cas d'erreur
          console.log(error);
          toast.error(`${error}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        });
        break;
      }

      case SEND_PAYMENT_TO_API: {
        const { adminproduct: { cart } } = store.getState();
        const localtoken =  localStorage.getItem('token');
        console.log(cart);
        const paymentconfig = {
          method: 'patch',
          url: 'http://salih-taner.vpnuser.lan:3500/product/cart',
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json'
          },data:cart
        };
  
        axios(paymentconfig)
          .then((response) => {
            console.log(response);
            store.dispatch({type: 'PAYMENT_SUCCESS'})
            toast.success('Votre categorie a bien ete ajoute', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
            
          }).catch((error)=> {console.error(error);});
        break
      }

      case GET_CATEGORIES_FROM_API: {
        const localtoken =  localStorage.getItem('token');
        const userconfig = {
          method: 'get',
          url: 'https://oshop-lyra.herokuapp.com/category',
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

      case 'SUBMIT_CATEGORY': {
        // ici, on va faire la requete pour le login
        // on commence par récupérer email et password
        // Double destructuration !
        const { admincategory: { name, color } } = store.getState();
        const localtoken =  localStorage.getItem('token');
        
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
            
            toast.success('Votre categorie a bien ete ajoute', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
            .catch((error) => { // cas d'erreur
            console.log(error);
              toast.error(`${error}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
          break;
        
      }

      case DELETE_PRODUCT_BY_ID: {
        const localtoken =  localStorage.getItem('token');
        const userconfig = {
          method: 'delete',
          url: `https://oshop-lyra.herokuapp.com/product/${action.productId}`,
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json'
          }
        };
        axios(userconfig)
          .then((response) => {
            if(response.data.success){
              store.dispatch(deleteProductInAdminStore(action.productId));
            }else{
              console.error(new Error(`Quelque chose ne c'est pas bien passé avec l'api :https://oshop-lyra.herokuapp.com/product/${action.productId}`));
            }
          })
          .catch((error)=> {
            console.error(error);
          });          
          // TODO LOADER ON 
          return;
      }


      case EDIT_PRODUCT_BY_ID: {
        const localtoken =  localStorage.getItem('token');
        console.log('API ADMIN EDIT PRODUCT BY ID');

        const userconfig = {
          method: 'get',
          url: `https://oshop-lyra.herokuapp.com/product/${action.productId}`,
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json'
          }
        };
        axios(userconfig)
          .then((response) => {
            if(response.data.success){
              console.log('je suis dans mon MW edit product');
              console.log(response.data);
              localStorage.setItem('id', response.data.data.id)
              store.dispatch({
                type: EDIT_PRODUCT_BY_ID_STORE,
                payload : response.data.data});
            }else{
              console.error(new Error(`Quelque chose ne c'est pas bien passé avec l'api :https://oshop-lyra.herokuapp.com/product/${action.productId}`));
            }
          })
          .catch((error)=> {
            console.error(error);
          });          
          // TODO LOADER ON 
          return;
      }

      case DELETE_USER_BY_ID: {
        const localtoken =  localStorage.getItem('token');
        const userconfig = {
          method: 'delete',
          url: `https://oshop-lyra.herokuapp.com/user/${action.userId}`,
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json'
          }
        };
        axios(userconfig)
          .then((response) => {
            if(response.data.success){
              store.dispatch(deleteUserInAdminStore(action.userId));
            }else{
              console.error(new Error(`Quelque chose ne c'est pas bien passé avec l'api :https://oshop-lyra.herokuapp.com/user/${action.userId}`));
            }
          })
          .catch((error)=> {
            console.error(error);
          });          
          // TODO LOADER ON 
          return;
      }

      case DELETE_CATEGORY_BY_ID: {
        const localtoken =  localStorage.getItem('token');
        const userconfig = {
          method: 'delete',
          url: `https://oshop-lyra.herokuapp.com/category/${action.categoryId}`,
          headers: { 
            'Authorization': `Bearer: ${localtoken}`, 
            'Content-Type': 'application/json'
          }
        };
        axios(userconfig)
          .then((response) => {
            if(response.data.success){
              store.dispatch(deleteCategoryInAdminStore(action.categoryId));
            }else{
              console.error(new Error(`Quelque chose ne c'est pas bien passé avec l'api :https://oshop-lyra.herokuapp.com/category/${action.categoryId}`));
            }
          })
          .catch((error)=> {
            console.error(error);
          });          
          // TODO LOADER ON 
          return;
      }

      default:
        next(action);
    }
  };
  
  export default admin;