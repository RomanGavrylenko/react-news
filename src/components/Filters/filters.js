import React from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../../HOC/toggleOpen';
import {NewsContext} from '../../context-files/news-context';

class Filters extends React.Component{

    //get count block    

    getCount = (handleCount, count) =>{
        
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

    //get category block

    getCategory = (handleCategory, category)=>{
        const {items }= this.props;

        let categoryList = items.map(item=>{
            let cls;
            if(item.attr == category) {
                cls = 'filters__category-item filters__category-item_active text';
            } else {
                cls = 'filters__category-item text';
            }
            return(
                    <div 
                        className={cls}
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
            <NewsContext.Consumer>
                {({handleCount, handleCategory, state})=>{ return(
                    <div className='filters'>
                        <h5 
                            className='filters__title filters__title_clickable text' 
                            onClick={this.props.toggleOpen}
                        >
                            Фильтры для новостей
                        </h5>
                        { this.props.isOpen &&
                            <React.Fragment>
                                <div className='filters__count'>
                                    <p className='filters__text text'>
                                        Кол-во новостей:
                                    </p>
                                    <div className='filters__count-block'> 
                                        {this.getCount(handleCount, state.count)}
                                    </div>
                                </div>
                                <div className='filters__category'>
                                    <p className='filters__text text'>
                                        Категории:
                                    </p>
                                    {this.getCategory(handleCategory, state.category)}
                                </div>
                            </React.Fragment>
                        }
                        <div className='filters__show'>
                            <button 
                                className='button filters__button'
                                onClick={this.props.toggleOpen}
                            >
                                {this.props.isOpen ? 'Скрыть' : "Показать"}
                            </button>
                        </div>
                    </div>
                )}}
            </NewsContext.Consumer>
        );
    }
}

Filters.propTypes={
    handleCount: PropTypes.func.isRequired,
}

export default toggleOpen(Filters);