import {
    CHANGE_ADD_USER_FIELD, 
    DELETE_USER_BY_ID_STORE, 
    UPDATE_ADMIN_USERS,
    CHANGE_EDIT_USER_FIELD,
    EDIT_USER_BY_ID_STORE,
    SUBMIT_EDIT_USER_SUCCESS, //TODO
    USER_ADD_SUCCESS,
} from '../store/actions';

export const initialState = {
    list:[],
    username: '',
    password: '',
    first_name:'',
    last_name:'',
    role:'',
    shop:'OSHOP',
    done: false,
    editUserName: '',
    // editPassword: '',
    editFirstName:'',
    editLastName:'',
    editRole:'',
    editShop:'',
    showSpinner: false,

}

const reducer = (oldState = initialState, action ={}) => {
    switch (action.type) {
        case CHANGE_ADD_USER_FIELD:
            return {
                ...oldState,
                // on copie les données de l'action dans le reducer
                [action.name]: action.value,
            };

        case USER_ADD_SUCCESS:
            return {
                ...oldState,
                // on copie les données de l'action dans le reducer
                done: true,
                username: '',
                password: '',
                first_name:'',
                last_name:'',
                role:'',
                shop:'OSHOP',
            };
        case SUBMIT_EDIT_USER_SUCCESS:
             return {
                 ...oldState,
                // on copie les données de l'action dans le reducer
            done: true,
            editUsername: '',
            editPassword: '',
            editFirst_name:'',
            editLast_name:'',
            editRole:'',
            editShop:'OSHOP',
                };

        case UPDATE_ADMIN_USERS:
            return{
                ...oldState,
                ...action.payload,
            }

        case DELETE_USER_BY_ID_STORE:{
            const list = [...oldState.list];
            return{
                ...oldState,
                list: list.filter((user) => (user.id !== action.userId)),
            }
        }

        case CHANGE_EDIT_USER_FIELD:
        return {
            ...oldState,
            [action.name]: action.value,
          };
        
        case EDIT_USER_BY_ID_STORE:{
        return{
            ...oldState,
            editUserName: action.payload.username,
            editFirstName: action.payload.first_name,
            editLastName: action.payload.last_name,
            // editPassword: action.payload.password,
            editShop: action.payload.shop[0],
            editRole: action.payload.role,
            } 
        }
        case 'SHOW_SPINNER':
            return { 
                ...oldState, 
                showSpinner: true 
            };

        case 'HIDE_SPINNER':
            return { 
                ...oldState, 
                showSpinner: false 
            };

        default: 
           return {...oldState} ;
    }
}

export default reducer;
