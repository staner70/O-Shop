import { 
    DELETE_CATEGORY_BY_ID_STORE,
    UPDATE_ADMIN_CATEGORIES 
} from '../store/actions';

export const initialState = {
    list:[],
}

const reducer = (oldState = initialState, action={}) => {
    switch (action.type) {
        case UPDATE_ADMIN_CATEGORIES:
            return{
                ...oldState,
                ...action.payload,
            }
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