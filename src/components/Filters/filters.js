import React from 'react';

export default function Filters({handleCount}){
    return(
        <div className='filters'>
            <div className='filters__count'>
                <p className='filter__text'>
                    Отобразить новости:
                    <button
                        className='filter__button' 
                        data-count='10'
                        onClick={handleCount}
                    >
                        10
                    </button>
                    <button
                        className='filter__button' 
                        data-count='20'
                        onClick={handleCount}
                    >
                        20
                    </button>
                    <button
                        className='filter__button' 
                        data-count='50'
                        onClick={handleCount}
                    >
                        50
                    </button>
                </p>

            </div>
        </div>
        );
}