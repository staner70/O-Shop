import {
    UPDATE_ADMIN_ROLES
} from '../store/actions';

export const initialState = {
    list:[]
}

const reducer= (oldState = initialState, action={}) => {
    switch(action.type) {
        case UPDATE_ADMIN_ROLES:
            return{
                ...oldState,
                ...action.payload,
            }
        default:
            return{...oldState};
    }
}

export default reducer