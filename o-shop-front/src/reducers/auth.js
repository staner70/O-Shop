import { CHANGE_AUTH_FIELD } from '../store/actions';

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
      };
    case 'LOGOUT':
      return {
        ...oldState,
        username: '',
        password: '',
        logged: false,
        nickname: null,
        token: null,
        isAdmin: false,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
