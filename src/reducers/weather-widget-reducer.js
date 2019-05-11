import {
    FETCH_ERROR_NOW_WEATHER,
    FETCH_LOADING_NOW_WEATHER,
    FETCH_SUCCESS_NOW_WEATHER,
    SET_DATA_PLACE
} from '../actions-type/weather-widget-action-type'

const initialState = {
    weather : {
        name: '',
        temp_min: '',
        temp_max:'',
        humidity: '',
        wind_speed: '',
        wind_direction: '',
        weather: '',
        weather_desc: '',
        icon: '',
        dateTime: '',
        dateTimeText: ''
    },
    error: null,
    loaded: false,
    place: 'Donetsk'
}

const weatherReducer = (state , action ) => {
    if(state ===undefined) return initialState;
    switch (action.type) {
        case FETCH_LOADING_NOW_WEATHER:
        console.log('weatherLoading',state)
            return {
                weather: {...state.weatherWidgetData.weather},
                error: null,
                loaded: false,
                place:  state.place//state.weatherWidgetData ? state.weatherWidgetData.place : initialState.place,
            };
        case  FETCH_ERROR_NOW_WEATHER: 
            console.log('weatherError',state)
            return {
                weather: {...state.weatherWidgetData.weather},
                error: action.payload,
                loaded: true,
                place:  state.place//state.weatherWidgetData ? state.weatherWidgetData.place : initialState.place,
            };
        case FETCH_SUCCESS_NOW_WEATHER: 
        console.log('weatherSuccess',state)
            return {
                weather: { ...action.payload },
                loaded: true,
                error: null,
                place: action.payload.city
            }
        case SET_DATA_PLACE: 
        console.log('weatherSet',state)
            return {
                ...state.weatherWidgetData,
                place: action.payload
            }
        default: return state.weatherWidgetData
    }
}


export default weatherReducer;