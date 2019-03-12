import React from 'react';
import PropTypes from 'prop-types';

export default class Filters extends React.Component{

    //get count block    

    getCount = () =>{
        const {handleCount, count} = this.props;
        const arr = [10,20,50];
        let countList = arr.map(num=>{
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
        });

        return countList;
    }

    getCategory = ()=>{
        const {items, handleCategory }= this.props;

        let categoryList = items.map(item=>{
            return(
                    <div 
                        className='filters__category-item text'
                        onClick = {handleCategory}
                        data-item = {item.attr}
                    >
                        {item.name}
                    </div>
                );
        });

        return categoryList;

    }

    render(){
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
                        {this.getCount()};
                    </div>
                </div>
                <div className='filters__category'>
                    <p className='filters__text text'>
                        Категории:
                    </p>
                    {this.getCategory()}

                </div>
            </div>
        );
    }
}

Filters.propTypes={
    handleCount: PropTypes.func.isRequired,
}