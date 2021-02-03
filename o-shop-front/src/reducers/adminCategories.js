import { 
    UPDATE_ADMIN_CATEGORIES, 
    CHANGE_ADD_CATEGORY_FIELD,
    DELETE_CATEGORY_BY_ID_STORE,
    EDIT_CATEGORY_BY_ID_STORE,
    CHANGE_EDIT_CATEGORY_FIELD,

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
            console.log('change edit category field');
            return {
                ...oldState,
                [action.name]: action.value,
                    };

        case EDIT_CATEGORY_BY_ID_STORE:{
            console.log('dans mon edit category id store');     
            return{
             ...oldState,
                editCategoryName: action.payload.name,
                editCategoryColor: action.payload.color,         
            } 
        }

        case 'CATEGORY_ADD_SUCCESS':
            return {
                ...oldState,
                done: true,
                name: '',
                color: '',
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