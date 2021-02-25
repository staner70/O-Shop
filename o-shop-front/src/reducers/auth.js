import { CHANGE_AUTH_FIELD, LOGOUT } from '../store/actions';

export const initialState = {
  username: '',
  password: '',
  token: null,
  isAdmin: '',
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_AUTH_FIELD:
      // action.name = le champ (email ou password)
      // action.value = la saisie utilisateur
      return { // nouvel objet...
        ...oldState, // copie de l'ancien state...
        [action.name]: action.value,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...oldState,
        // on copie les données de l'action dans le reducer
        token: action.token,
        isAdmin: action.isAdmin,
        // username: '',
        // password: '',
      };
    case LOGOUT:
      return {
        ...oldState,
        username: '',
        first_name:'', // Si ajout du nom et prenom dans le state au moment de la connexion
        last_name:'', // Si ajout du nom et prenom dans le state au moment de la connexion
        password: '',
        token: null,
        isAdmin: false,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
