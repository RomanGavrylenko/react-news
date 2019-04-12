import {makeRequest} from './makeRequest'
import {getTemp, pressureConvert, getSun, getWindDirection} from './weatherHandler';

const API_KEY='460d8a81d9c84dff338abeb4ef2b261d';


export async function getCity(){
    try{
        let cityList = await makeRequest('localhost:3000/city.list.json');
        console.log(cityList)
        let uaCity = cityList.filter(city=>{
            if(city['country'] !== 'ua') return false;

            return true;
        });

        return uaCity;
    } catch(e){
        console.log(e)
    }
}


export async function getNowWeather(city){
    try{
        let weather = await makeRequest("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+API_KEY);
        console.log(weather);
        let temp = getTemp(weather.main.temp);
        
        
        /*let sunrise = new Date(weather.sys.sunrise*1000).toLocaleTimeString();
        let sunset = new Date(weather.sys.sunset*1000).toLocaleTimeString();*/

        let sunriseTime = getSun(weather.sys.sunrise*1000);
        let sunsetTime = getSun(weather.sys.sunset*1000);

        let iconSRC = "http://openweathermap.org/img/w/" + weather.weather[0].icon + '.png';

        let goodPressure = pressureConvert(weather.main.pressure);

        let windowDirection = getWindDirection(weather.wind.deg);

        let info = {
            city: weather.name,
            temp: temp,
            icon: iconSRC,
            weatherDescription: weather.weather[0].description,
            pressure: goodPressure,
            humidity: weather.main.humidity,
            clouds: weather.clouds.all,
            wind: weather.wind.speed,
            windDirection: windowDirection,
            sunrise: sunriseTime,
            sunset: sunsetTime
        };

        return info;
    } catch(e){
        console.log(e);
        throw e;
    }


}