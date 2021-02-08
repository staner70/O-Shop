import { 
    UPDATE_ADMIN_CATEGORIES, 
    CHANGE_ADD_CATEGORY_FIELD,
    DELETE_CATEGORY_BY_ID_STORE,
    EDIT_CATEGORY_BY_ID_STORE,
    CHANGE_EDIT_CATEGORY_FIELD,
    CATEGORY_ADD_SUCCESS,
    SUBMIT_EDIT_CATEGORY_SUCCESS

} from '../store/actions';

export const initialState = {
    list:[],
    name: '',
    color: '',
    done:false,
    idValue:'',
    editCategoryName:'',
    editCategoryColor:'',
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

        case CHANGE_EDIT_CATEGORY_FIELD:
            return {
                ...oldState,
                [action.name]: action.value,
                    };

        case EDIT_CATEGORY_BY_ID_STORE:{
            return{
             ...oldState,
                editCategoryName: action.payload.name,
                editCategoryColor: action.payload.color,         
            } 
        }

        case CATEGORY_ADD_SUCCESS:
            return {
                ...oldState,
                done: true,
                name: '',
                color: '',
            };

        case SUBMIT_EDIT_CATEGORY_SUCCESS:
            return {
                 ...oldState,
                done: true,
                editCategoryName:'',
                editCategoryColor:'',
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