import axios from 'axios';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    
    case 'LOGIN': {
      // ici, on va faire la requete pour le login
      // on commence par récupérer email et password
      // Double destructuration !
      const { auth: { email, password } } = store.getState();

      const config = {
        method: 'post', // verbe POST
        url: 'http://localhost:3001/login', // endpoint de login
        headers: { // header pour dire qu'on parle en JSON
          'Content-Type': 'application/json',
        },
        data: { // body de la requete (contenu du json)
          email,
          password,
        },
      };

      axios(config) // on lance la requete...
        .then((response) => { // cas de réussite
          // on envoie une action, pour sauvegarder les données dans le reducer
          // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            // on déverse tout le contenu de response.data dans notre action
            ...response.data,
          });
          console.log('Je suis dans la réponse, et response.data vaut : ', response.data);
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
