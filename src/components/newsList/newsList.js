import React from 'react';
import SingleNews from './singleNews';
//import './news-list.css';
import PropTypes from 'prop-types';


export default class NewsList extends React.Component{

    getNews(){
        
        if(this.props.data.length == 0){
            return <p>Извините, ничего не найдено, посему нечего отображать</p>
        }
        
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

NewsList.defaultProps = {
    data:[]
}