import {makeRequest} from './makeRequest';
import {getTemp,  getWindDirection, getData} from './weatherHandler';

const API_KEY='460d8a81d9c84dff338abeb4ef2b261d';
const FIVE_DAY_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export async function getFiveDays(city){
    try{
        let data = await makeRequest(`${FIVE_DAY_URL}?q=${city}&appid=${API_KEY}`);
        let weather=data.list.map(item=>{
            return({
                name: data.city.name,
                temp_min: getTemp(item.main.temp_min),
                temp_max: getTemp(item.main.temp_max),
                humidity: item.main.humidity,
                wind_speed: item.wind.speed,
                wind_direction: getWindDirection(item.wind.deg),
                weather: item.weather[0].main,
                weather_desc: item.weather[0].description,
                icon: "http://openweathermap.org/img/w/" + item.weather[0].icon + '.png',
                dateTime: item.dt,
                dateTimeText: getData(item.dt*1000)
            });
        })
        
        return weather;

    } catch(e){
        console.log(e);
        throw e;

    }

}