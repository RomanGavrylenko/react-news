import userReducers from './user-reducer';
import weatherReducer from './weather-widget-reducer';
import newsReducer from './news-reducer';
import { combineReducers } from 'redux'

/*const rootReducer = combineReducers({
    userData: userReducers, 
    weatherWidgetData: weatherReducer,
    newsData: newsReducer
})*/

const rootReducer = (state, action ) =>{
    return {
        userData: userReducers(state, action),
        weatherWidgetData: weatherReducer(state, action),
        newsData : newsReducer(state,action)
    }
}

export default rootReducer;