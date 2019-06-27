import BaseDataFunction from './base-action-function';

const { setLoading, setData, setError} = new BaseDataFunction();

export const getNewsAction = (getData,  category='', count = 20) => (dispatch) => {
    dispatch(setLoading('FETCH_NEWS_LOADING'))
    
    getData(true, category, count)
        .then( data =>  dispatch(setData('FETCH_NEWS_SUCCESS', data)))
        .catch(err => dispatch(setError( 'FETCH_NEWS_ERROR', err)))
}

export const changeCategory = (cat) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: cat
    }
}

export const changeCount = ( count ) =>{
    return {
        type: 'CHANGE_COUNT',
        payload: count
    }
}

export const changeSearch = (q) =>{
    return {
        type: 'CHANGE_SEARCH',
        payload: q
    }
}

export const SagaActionNews = (category, count) => {
    return {
        type: "FETCH_NEWS_LOADING",
        payload: {
            category, 
            count
        }
    }
}