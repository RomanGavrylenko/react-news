import {
    FETCH_ERROR_NOW_WEATHER,
    FETCH_SUCCESS_NOW_WEATHER,
    FETCH_LOADING_NOW_WEATHER,
    SET_DATA_PLACE
} from '../actions-type/weather-widget-action-type';
import BaseDataFunction from './base-action-function'


const { setLoading, setData, setError} = new BaseDataFunction();

export const getWeatherWidget = (getData, city, setModal, cityProps) => (dispatch)=> {

    dispatch(setLoading(FETCH_LOADING_NOW_WEATHER));
    //получаем данные о погоде, при ошибке города (после его обновления)
    //получаем старые данные
    console.log('SEE CITY', getData);
    getData(city)
        .then( data => successWeather(data, dispatch)/*dispatch(setData(FETCH_SUCCESS_NOW_WEATHER, data))*/)
        .catch( err => { 
            dispatch(setError(FETCH_ERROR_NOW_WEATHER, err))
            console.log(err)
            setModal('Такой город не найден');
            getData(cityProps)
                .then( data =>  successWeather(data, dispatch))
                .catch( error => dispatch(setError(FETCH_ERROR_NOW_WEATHER, error)))
            /*let code = err.toString().match(/\d{3}/);
            let error = code[0] || err;*/
        })
}

const successWeather = (data, dispatch) => {
    dispatch(setData(FETCH_SUCCESS_NOW_WEATHER, data));
   // dispatch(setPlace(data.place))
}

export const setPlace  = (place) => {
    return {
        type: SET_DATA_PLACE,
        payload: place
    }
}