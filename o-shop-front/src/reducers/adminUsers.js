import {
    CHANGE_ADD_USER_FIELD, UPDATE_ADMIN_USERS
} from '../store/actions';

export const initialState = {
    list:[],
    username: '',
    password: '',
    first_name:'',
    last_name:'',
    role:'',
    shop:'OSHOP',
}

const reducer = (oldState = initialState, action ={}) => {
    switch (action.type) {
        case CHANGE_ADD_USER_FIELD:
            return {
                ...oldState,
                // on copie les données de l'action dans le reducer
                [action.name]: action.value,

            };
        case UPDATE_ADMIN_USERS:
            return{
                ...oldState,
                ...action.payload,
            }
        default: 
           return {...oldState} ;
    }
}
export default reducer;