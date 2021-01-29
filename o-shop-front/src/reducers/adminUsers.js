import {
    CHANGE_ADD_USER_FIELD, DELETE_USER_BY_ID_STORE, UPDATE_ADMIN_USERS,
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

}

const reducer = (oldState = initialState, action ={}) => {
    switch (action.type) {
        case CHANGE_ADD_USER_FIELD:
            return {
                ...oldState,
                // on copie les données de l'action dans le reducer
                [action.name]: action.value,

            };
        case 'USER_ADD_SUCCESS':
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
        default: 
           return {...oldState} ;
    }
}

export default reducer;
