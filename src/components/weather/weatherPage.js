import React from 'react';
import WeatherPageContainer from '../../container/werather-page';
import WeatherSearch from '../weatherView/weather-search-form';
import WeatherPortal from '../../portals/weatherPortal';

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
                   ({five, place, handleInput, handleSubmit, modal})=>{
                       return(
                            <div className='container'>
                                <div className='weather-page__title'>
                                    <h3>
                                        {place}
                                    </h3>
                                    <WeatherSearch 
                                        handleInput={handleInput}
                                        handleSubmit={handleSubmit}
                                        place={place}
                                        prefix='weather-page'
                                    />
                                </div>
                                <div className='row'>
                                    <div className='weather-page__wrapper col-9'>
                                        {
                                            five.map(item=>this.getWeatherTable(item))
                                        }
                                    </div>
                                </div>
                                {modal.show && <WeatherPortal text={modal.text}  close={modal.close}/>}
                            </div>
                       );

                   }
               }
           </WeatherPageContainer>
        );
    }
}