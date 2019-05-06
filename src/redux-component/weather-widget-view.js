import React from 'react';
import SearchForm from '../components/search-form/search-form';
import toggleOpen from '../HOC/toggleOpen';
import WeatherPortal from '../portals/weatherPortal/weatherPortal';

const WeatherWidgetView = (props) => {
    console.log('widgetView Props',props)
    const {weather, isOpen, submit, input, value, toggleOpen, modal } = props;
    return (
        <div className='weather'>
            <h3
                className='weather__city text'
                onClick={toggleOpen}
            >
                {weather.city}
            </h3>

            {// показать блок с полем для ввода нового города
                isOpen &&
                <SearchForm
                    handleSubmit={submit}
                    handleInput={input}
                    value={value}
                    prefix='weather'
                />
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
            {modal.show && <WeatherPortal text={modal.text} close={modal.close} />
            }
        </div>
    );
}

export default toggleOpen(WeatherWidgetView);