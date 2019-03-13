import React from 'react';
import Weather from '../../container/weatherWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function WeatherWidgetView(props){
    return(
        <Weather>
            {
                ({weather, place, showInput, toggleOpen, handleInput, handleSubmit})=>{
                    
                    return(
                        <div className='weather'>
                            <h3
                                className='weather__city text' 
                                onClick={toggleOpen}
                            >
                                {weather.city}
                            </h3>
                            {showInput &&
                                <form className='weather__form' onSubmit={handleSubmit}>
                                    <input
                                        className='form__input weather__form-input' 
                                        type='text'
                                        name='city'
                                        value={place}
                                        onChange={handleInput}
                                    />
                                    <button
                                        className='button form__button weather__button'
                                        type='submit'
                                        
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </form>
                            }
                            <div className='weather__info'>
                                <div className='weather__temp-block'>
                                    <h3 className='weather__temp'>
                                        {weather.temp}
                                    </h3>
                                    <figure className='weather__picture'>
                                        <img 
                                            className='weather__img'
                                            src={weather.icon}
                                            alt='weatherIcon'
                                        />
                                    </figure>
                                
                                    <div className='weather__params-block'>
                                        <p className='weather__params-row'>
                                            Влажность: <span className='weather__data'>{weather.humidity} %</span>
                                        </p>
                                        <p className='weather__params-row'>
                                            Давление: <span className='weather__data'>{weather.pressure} мм</span>
                                        </p>
                                        <p className='weather__params-row'>
                                            Ветер: <span className='weather__data'>
                                                    {weather.wind} м/с ({weather.windDirection})
                                                </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='weather__day-time'>
                                    <p className='weather__time'>
                                        Время восхода солнца - {weather.sunrise}
                                    </p>
                                    <p className='weather__time'>
                                        Время захода солнца - {weather.sunset}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        </Weather>
    );
}
