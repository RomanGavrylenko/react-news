import React from 'react';
import PropTypes from 'prop-types';

export default function Filters({handleCount, count}){

    const arr = [10,20,50];


    return(
        <div className='filters'>
            <h5 className='filters__title text'>
                Фильтры для новостей
            </h5>
            <div className='filters__count'>
                <p className='filters__text text'>
                    Кол-во новостей:
                </p>
                <div className='filters__count-block'> 
                    {arr.map(num=>{
                        let cls;
                        if(num == count) {
                            cls = 'filters__count-button button filters__count-button_active';
                        } else {
                            cls = 'filters__count-button button';
                        }

                        return(
                            <button
                                key={num}
                                className={cls}
                                data-count={num}
                                onClick={handleCount}
                            >
                                {num}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

Filters.propTypes={
    handleCount: PropTypes.func.isRequired,
}