import React from 'react';
import WeatherPageContainer from '../../container/werather-page';
import SearchForm from '../search-form/search-form';
import WeatherPortal from '../../portals/weatherPortal/weatherPortal';

export default class WeatherPage extends React.Component{
    

    getWeatherTable(item, i){

        let cls = i%2 == 0 ? 'weather-page__body_even' : '';
    
        return( 
            <div className={`weather-page__body ${cls}`}>
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
                                    <SearchForm 
                                        handleInput={handleInput}
                                        handleSubmit={handleSubmit}
                                        value={place}
                                        prefix='weather-page'
                                        placeholder='Введите интересующий вас город'
                                    />
                                </div>
                                <h3 className='text weather-page__title'>
                                    Прогноз на 5 дней
                                </h3>
                                <div className='row'>
                                    <div className='weather-page__wrapper col-9'>
                                        {
                                            five.map((item, i)=>this.getWeatherTable(item,i))
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