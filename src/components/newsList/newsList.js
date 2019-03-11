import React from 'react';
import SingleNews from './singleNews';
import './news-list.css';
import PropTypes from 'prop-types';


export default class NewsList extends React.Component{

    getNews(){
        const newsList = this.props.data.map(news=>{
            return(<SingleNews key={news.publishedAt}  data={news}/>);
        });

        return newsList;
    }

    render(){
        return(
            <div className='news-list__wrapper'>
                {this.getNews()}
            </div>
        );
    }
}

NewsList.propTypes ={
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}