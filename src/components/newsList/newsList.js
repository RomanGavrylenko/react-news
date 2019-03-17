import React from 'react';
import SingleNews from './singleNews';
//import './news-list.css';
import PropTypes from 'prop-types';
import {NewsContext} from '../../context-files/news-context';


export default class NewsList extends React.Component{

    getNews(data){
        
        if(data.length == 0){
            return <p className='news-list__nothing text'>
            Извините, ничего не найдено, посему нечего отображать.
            Введите другой поисковой запрос или перейдите в одну из категорий
            </p>
        }
        
        const newsList = data.map(news=>{
            return(<SingleNews key={news.publishedAt}  data={news}/>);
        });

        return newsList;
    }

    render(){

        const {state} = this.context;

        return(
            <div className='news-list__wrapper'>
                <h3 className='news-list__title_mobile'>News</h3>
                {this.getNews(state.data)}
            </div> 
            
        );
    }
}

NewsList.contextType = NewsContext;

NewsList.propTypes ={
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

NewsList.defaultProps = {
    data:[]
}