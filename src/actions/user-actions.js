import { 
    FETCH_SUCCESS_USER, 
    FETCH_ERROR_USER, 
    FETCH_LOADING_USER 
} from '../actions-type/user-action-types';
import BaseDataFunction from './base-action-function';

const { setLoading, setData, setError} = new BaseDataFunction();

export const getUserAction = (getUser) => (dispatch) => {
    dispatch(setLoading(FETCH_LOADING_USER));
    getUser()
        .then(user => dispatch(setData( FETCH_SUCCESS_USER, user.user )))
        .catch(err => dispatch(setError( FETCH_ERROR_USER, err)))
}
// export const getUserAction = (getUser) => () => (dispatch) =>{
//     dispatch(beginUserLoad);
//     getUser()
//         .then(user => dispatch(setUser(user.user)))
//         .catch(err => dispatch(setError(err)))
// }

export const setUserAction = (user) => {
    return {
        type: FETCH_SUCCESS_USER,
        payload: user
    }
}

export const setErrorAction = (err) => {
    return {
        type: FETCH_ERROR_USER,
        payload: err
    }
}

export const beginUserLoadAction = () =>({type: FETCH_LOADING_USER})