import React from 'react';
import WeatherPageContainer from '../../container/werather-page';


export default class WeatherPage extends React.Component{
    

    getWeatherTable(item){
        return( 
            <div className='weather-page__body'>
                    <div className='weather-page__date col text'>
                        {item.dateTimeText}
                    </div>
                    <div className='weather-page__temp'>
                        <p className='weather-page__temp-par text'>Min: {item.temp_min}</p>
                        <p className='weather-page__temp-par text'>Max: {item.temp_max}</p>
                    </div>
                    <div className='weather-page__icon col text'>
                        <p className='text'>
                            {item.weather_desc}
                        </p>
                        <figure>
                            <img 
                                src={item.icon}
                                alt={item.weather_desc}
                            />
                        </figure>
                    </div>
                    <div className='weather-page__info col'>
                        <p className='weather-page__data text'>
                            Влажность {item.humidity}%
                        </p>
                        <p className='weather-page__data text'>
                            Ветер  {item.wind_speed} м/с ({item.wind_direction})
                        </p>
                        
                    </div>
                </div>                  
            
        );
    }

    render(){
        return(
           <WeatherPageContainer>
               {
                   ({five})=>{
                       return(
                            <div className='container'>
                                <div className='row'>
                                    <div className='weather-page__wrapper col-9'>
                                        {
                                            five.map(item=>this.getWeatherTable(item))
                                        }
                                    </div>
                                </div>
                            </div>
                       );

                   }
               }
           </WeatherPageContainer>
        );
    }
}