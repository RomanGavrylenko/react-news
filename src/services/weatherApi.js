import {makeRequest} from './makeRequest'

const API_KEY='460d8a81d9c84dff338abeb4ef2b261d';


export async function getCity(){
    try{
        let cityList = await makeRequest('localhost:3000/city.list.json');
        console.log(cityList)
        let uaCity = cityList.filter(city=>{
            if(city['country'] !== 'ua') return;

            return city;
        });

        return uaCity;
    } catch(e){
        console.log(e)
    }
}


export async function getWeather(){
    try{
        let weather = await makeRequest("https://api.openweathermap.org/data/2.5/weather?q=donetsk&appid="+API_KEY);
        console.log(weather);
        let temp = parseInt(weather.main.temp - 273);
        if(temp>0){
            temp = `+${temp}°С`
        }
        
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
        console.log(e)
    }


}

//private part of module

/* get the wind direction 
 * deg - data from api which show wind direction, degrees 
*/

function getWindDirection(deg){
    let direction;
    if(deg >= 337.5 && deg <= 360 || deg<=22.5 ) {
        direction = 'C';
    } else if (deg>22.5 && deg<=67.5){
        direction = 'CВ';
    } else if (deg>=67.5 && deg<=112.5){
        direction = 'В';
    } else if (deg>112.5 && deg<157.5){
        direction = 'ЮВ';
    } else if (deg>=157.5 && deg<=202.5){
        direction = 'Ю';
    } else if (deg>202.5 && deg<247.5){
        direction = 'ЮЗ';
    } else if (deg>=247.5 && deg<=292.5){
        direction = 'З';
    } else if (deg>292.5 && deg<337.5){
        direction = 'ВЮВ';
    }

    return direction;
        
}

// get sunrise and sunset time

function getSun(ms){

    let date = new Date(ms);

    let hour = date.getHours();
    hour = hour < 10 ? `0${hour}` : hour;

    let minute = date.getMinutes();
    minute = minute < 10 ? `0${minute}` : minute;

    let time=`${hour}:${minute}`;
    
    return time;
}

// atmosphere pressure convert

function pressureConvert(data){
    let pres = (data * 0.750062).toFixed();
    return pres;
}