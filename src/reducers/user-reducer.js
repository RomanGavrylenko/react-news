import { 
    FETCH_SUCCESS_USER, 
    FETCH_ERROR_USER, 
    FETCH_LOADING_USER 
} from '../actions-type/user-action-types';

const initialState = {
    user: {},
    loaded: true,
    error: null
}

const userReducers = (state, action) => {
    if(state ===undefined) return initialState;
    switch (action.type){
        case FETCH_LOADING_USER:
            return {
                user: {...state.user},
                loaded: false,
                error: null,
            }
        case FETCH_SUCCESS_USER: 
            return {
                user: {...action.payload},
                loaded:true,
                error: null,
            }
        case FETCH_ERROR_USER:
            return {
                user: {...state.user},
                loaded: false,
                error: action.payload,
            }
        default: return state.userData
    }
}

export default userReducers;