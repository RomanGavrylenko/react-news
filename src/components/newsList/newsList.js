import React from 'react';
import SingleNews from './singleNews';
//import './news-list.css';
import PropTypes from 'prop-types';
import {NewsContext} from '../../context-files/news-context';


export default class NewsList extends React.Component{

    getNews(data){
        
        if(data.length == 0){
            return <p>Извините, ничего не найдено, посему нечего отображать</p>
        }
        
        const newsList = data.map(news=>{
            return(<SingleNews key={news.publishedAt}  data={news}/>);
        });

        return newsList;
    }

    render(){
        return(
            <NewsContext.Consumer>
                {(({state})=>{
                    return(
                    <div className='news-list__wrapper'>
                        {this.getNews(state.data)}
                    </div>);
                })}
            </NewsContext.Consumer>
        );
    }
}

NewsList.propTypes ={
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

NewsList.defaultProps = {
    data:[]
}