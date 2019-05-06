import React from 'react';
import * as newsAction from '../actions/news-action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewsFilterView from '../redux-component/news-filter-view';
import toggleOpen from '../HOC/toggleOpen';
import compose from '../utils/compose'

const NewsFilterContainer = (props) => {
    

    const { category, count, changeCount, 
            changeCategory, isOpen, toggleOpen, items} = props;

    const getCategory = (e) => {
        let category = e.target.getAttribute('data-item');

        changeCategory(category);
    }

    const getCount = (e) => {
        let count = +e.currentTarget.getAttribute('data-count');

        changeCount(count);
    }
    
    
    
    return <NewsFilterView
                handleCategory={getCategory}
                handleCount={getCount}
                category={category}
                count={count}
                isOpen ={isOpen}
                toggleOpen = {toggleOpen}
                items= {items}
                />
    
}

const props = (state) => {

    const { category, count } =state.newsData

    return {
        category,
        count
    }
}

const methods = ( dispatch ) => {

    const { changeCount, changeCategory } = bindActionCreators( newsAction, dispatch );

    return {
        changeCount, 
        changeCategory
    }
}

export default compose(
                    toggleOpen,
                    connect( props, methods )
                )(NewsFilterContainer)

//export default connect(props, methods )(NewsFilterContainer); 