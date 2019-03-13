import React from 'react';
import ReactDOM from 'react-dom';

export default function WeatherPortal({text, close}){
    return(
        ReactDOM.createPortal(
            <div className='weather-portal'>
                <div className='weather-portal__message'>
                    <p className='weather-portal__text text'>
                        {text}
                    </p>
                    <button
                        className='button weather-portal__button'
                        onClick={close}
                    >
                        Ok
                    </button>
                </div>
            </div>, document.body
        )
    );
}