import axios from 'axios';
import { toast } from "react-toastify";

import { 
  GET_USERS_FROM_API,updateUsersAdmin, 
  GET_PRODUCTS_FROM_API, updateProductsAdmin,  
  GET_CATEGORIES_FROM_API, updateCategoriesAdmin, 
  GET_ROLES_FROM_API, updateRolesAdmin,
  
  EDIT_PRODUCT_BY_ID_STORE,
  EDIT_PRODUCT_BY_ID, 
  EDIT_CATEGORY_BY_ID,
  EDIT_CATEGORY_BY_ID_STORE,
  EDIT_USER_BY_ID,
  EDIT_USER_BY_ID_STORE,

  DELETE_USER_BY_ID, deleteUserInAdminStore,
  DELETE_CATEGORY_BY_ID, deleteCategoryInAdminStore, 
  DELETE_PRODUCT_BY_ID, deleteProductInAdminStore,
  SEARCH_CHANGE_FIELD, 
  
  SUBMIT_EDIT_PRODUCT,
  SUBMIT_EDIT_CATEGORY,
  SUBMIT_EDIT_USER,
  SEND_PAYMENT_TO_API,
  SUBMIT_PRODUCT,
  SUBMIT_EDIT_PRODUCT_SUCCESS,

  CATEGORY_ADD_SUCCESS,
  SUBMIT_EDIT_CATEGORY_SUCCESS,
  PRODUCT_ADD_SUCCESS,
  
  SUBMIT_CATEGORY,
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
          store.dispatch({ type: GET_USERS_FROM_API })

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
      store.dispatch({ type: 'SHOW_SPINNER'});
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
            store.dispatch({ type: 'HIDE_SPINNER'});
          }else{
            console.error(new Error("Quelque chose ne c'est pas bien passé avec l'api :http://salih-taner.vpnuser.lan:3500/user"));
          }
        }).catch((error)=> {console.error(error);});
      break
    }

    case EDIT_USER_BY_ID: {
      const localtoken =  localStorage.getItem('token');

      const userconfig = {
        method: 'get',
        url: `https://oshop-lyra.herokuapp.com/user/${action.userId}`,
        headers: { 
          'Authorization': `Bearer: ${localtoken}`, 
          'Content-Type': 'application/json'
        }
      };
      axios(userconfig)
        .then((response) => {
          if(response.data.success){
            localStorage.setItem('id', response.data.data.id)
            store.dispatch({
              type: EDIT_USER_BY_ID_STORE,
              payload : response.data.data});
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

    case SUBMIT_EDIT_USER: {
      const { adminuser: { editLastName, editFirstName, editUserName, 
        // editPassword, 
        editRole, editShop } } = store.getState();
      const localtoken =  localStorage.getItem('token');
      const idItem = localStorage.getItem('id');
      const userconfig = {
        method: 'patch',
        url: `https://oshop-lyra.herokuapp.com/user/${idItem}`,
        //url:`http://salih-taner.vpnuser.lan:3500/user/${idItem}`,
        headers: { 
          'Authorization': `Bearer: ${localtoken}`, 
        },
        data: { // body de la requete (contenu du json)
          username:editUserName,
          first_name:editFirstName,
          last_name: editLastName,
          // password:editPassword,
          role: editRole,
          shop: editShop
        },
      };

      axios(userconfig) // on lance la requete...
        .then((response) => { // cas de réussite
          // on envoie une action, pour sauvegarder les données dans le reducer
          // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
          
          store.dispatch({ type: GET_USERS_FROM_API })
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
            store.dispatch({ type: GET_USERS_FROM_API })
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

    case SUBMIT_PRODUCT: {
      const { adminproduct: { name, image, description, price, quantity, shop, category } } = store.getState();
      const localtoken =  localStorage.getItem('token');
      const productconfig = {
        method: 'post',
        // url: 'http://salih-taner.vpnuser.lan:3500/product',
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
          image,
        },
        
      };

      axios(productconfig)
        .then((response) => { 
          store.dispatch({ type: GET_PRODUCTS_FROM_API })

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

    case GET_PRODUCTS_FROM_API: {
      store.dispatch({ type: 'SHOW_SPINNER'});
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
            store.dispatch({ type: 'HIDE_SPINNER'});
          }else{
            console.error(new Error("Quelque chose ne c'est pas bien passé avec l'api :http://salih-taner.vpnuser.lan:3500/products"));
          }
        }).catch((error)=> {console.error(error);});
      break
    }

    case SEARCH_CHANGE_FIELD: {
      const {adminproduct: {search} } = store.getState();
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
          
        }).catch((error)=> {console.error(error);});
      break
    }

    case EDIT_PRODUCT_BY_ID: {
      const localtoken =  localStorage.getItem('token');

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

    case SUBMIT_EDIT_PRODUCT: {
      const { adminproduct: { editName, editDescription, editPrice, editImage, editQuantity, editShop, editCategory } } = store.getState();
      const localtoken =  localStorage.getItem('token');
      const idItem = localStorage.getItem('id');
      const productconfig = {
        method: 'patch',
        url: `https://oshop-lyra.herokuapp.com/product/${idItem}`,
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
          store.dispatch({ type: GET_PRODUCTS_FROM_API })
          store.dispatch({ type: SUBMIT_EDIT_PRODUCT_SUCCESS});
          
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
            store.dispatch({ type: GET_PRODUCTS_FROM_API })
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

    case SUBMIT_CATEGORY: {
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
          store.dispatch({ type: GET_CATEGORIES_FROM_API })
          store.dispatch({ type: CATEGORY_ADD_SUCCESS});
          
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

    case GET_CATEGORIES_FROM_API: {
      store.dispatch({ type: 'SHOW_SPINNER'});
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
            store.dispatch({ type: 'HIDE_SPINNER'});
          }else{
            console.error(new Error("Quelque chose ne c'est pas bien passé avec l'api :http://salih-taner.vpnuser.lan:3500/category"));
          }
        }).catch((error)=> {console.error(error);});
      break
    }

    case SUBMIT_EDIT_CATEGORY: {
      const { admincategory: { editCategoryName, editCategoryColor, } } = store.getState();
      const localtoken =  localStorage.getItem('token');
      const idCategoryItem = localStorage.getItem('CategoryId');
      const productconfig = {
        method: 'patch',
        url: `https://oshop-lyra.herokuapp.com/category/${idCategoryItem}`,
        headers: { 
          'Authorization': `Bearer: ${localtoken}`, 
        },
        data: { // body de la requete (contenu du json)
          name:editCategoryName,
          color:editCategoryColor
        },
        
      };

      axios(productconfig) // on lance la requete...
        .then((response) => { // cas de réussite
          // on envoie une action, pour sauvegarder les données dans le reducer
          // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
          store.dispatch({ type: GET_CATEGORIES_FROM_API });
          store.dispatch({ type: SUBMIT_EDIT_CATEGORY_SUCCESS});

          toast.success('Votre Categorie a bien ete modifiee', {
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

    case EDIT_CATEGORY_BY_ID: {
      const localtoken =  localStorage.getItem('token');

      const editconfig = {
        method: 'get',
        url: `https://oshop-lyra.herokuapp.com/category/${action.categoryId}`,
        headers: { 
          'Authorization': `Bearer: ${localtoken}`, 
          'Content-Type': 'application/json'
        }
      };
      axios(editconfig)
        .then((response) => {
          if(response.data.success){
            localStorage.setItem('CategoryId', response.data.data.id)
            store.dispatch({
              type: EDIT_CATEGORY_BY_ID_STORE,
              payload : response.data.data});
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

    case GET_ROLES_FROM_API: {
      const localtoken =  localStorage.getItem('token');
      const userconfig = {
        method: 'get',
        //url: 'http://salih-taner.vpnuser.lan:3500/role',
        url: 'https://oshop-lyra.herokuapp.com/role',
        headers: { 
          'Authorization': `Bearer: ${localtoken}`, 
          'Content-Type': 'application/json'
        }
      };

      axios(userconfig)
        .then((response) => {
          if(response.data.success){
            store.dispatch(updateRolesAdmin(response.data.data));
          }else{
            console.error(new Error("Quelque chose ne c'est pas bien passé avec l'api :http://salih-taner.vpnuser.lan:3500/role"));
          }
        }).catch((error)=> {console.error(error);});
      break
    }

    case SEND_PAYMENT_TO_API: {
      const { adminproduct: { cart } } = store.getState();
      const localtoken =  localStorage.getItem('token');
      const paymentconfig = {
        method: 'patch',
        url: 'https://oshop-lyra.herokuapp.com/product/cart',
        headers: { 
          'Authorization': `Bearer: ${localtoken}`, 
          'Content-Type': 'application/json'
        },data:cart
      };

      axios(paymentconfig)
        .then((response) => {
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

    default:
      next(action);
  }
};
  
export default admin;