const initialState = {
    data:[],
    category: '',
    count: 20,
    top: true,
    search: '',
    loaded: false,
    error: null,
}

const newsReducer = (state , action ) =>{
    if(state ===undefined) return initialState;
    switch(action.type){
        case 'FETCH_NEWS_LOADING':
            return {
                ...state.newsData,
               loaded: false
            };
        case 'FETCH_NEWS_SUCCESS': 
            return {
                ...state.newsData,
                loaded: true,
                data: [...action.payload]
            };
        case 'CHANGE_CATEGORY':
            return {
                ...state.newsData,
                category: action.payload
            };
        case 'CHANGE_COUNT': 
            return {
                ...state.newsData,
                count: action.payload
            };
        case 'CHANGE_SEARCH':
            return {
                ...state.newsData,
                search: action.payload,
                top: false
            };
        default: return state.newsData
    }
}

export default newsReducer;