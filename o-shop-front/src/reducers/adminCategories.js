import { 
    UPDATE_ADMIN_CATEGORIES, CHANGE_ADD_CATEGORY_FIELD,
    DELETE_CATEGORY_BY_ID_STORE,

} from '../store/actions';

export const initialState = {
    list:[],
    name: '',
    color: '',
    done:false,
}

const reducer = (oldState = initialState, action={}) => {
    switch (action.type) {
        case UPDATE_ADMIN_CATEGORIES:
            return{
                ...oldState,
                ...action.payload,
            }

        case CHANGE_ADD_CATEGORY_FIELD:
            return {
                ...oldState,
                [action.name]: action.value,

            };

        case 'CATEGORY_ADD_SUCCESS':
            return {
                ...oldState,
                done: true,
                name: '',
                color: '',
            };

        case 'HIDDE_ALERT':
        return {
            ...oldState,
            done: false,
        };

        case DELETE_CATEGORY_BY_ID_STORE:{
            const list = [...oldState.list];
            return{
                ...oldState,
                list: list.filter((category) =>(category.id !== action.categoryId)),
            }
        }
        default:
            return{...oldState};   
    }
}

export default reducer;