import React, { Component } from 'react';
import { connect } from 'react-redux';
import  * as newsAction  from '../actions/news-action';
import { getNews, searchNews} from '../services/newsApi';
import NewsView from '../redux-component/news-view';
import {bindActionCreators} from 'redux'

class NewsContainer extends Component {

    componentDidMount(){

        const { getNewsAction, category, count } = this.props; 
       
        getNewsAction(getNews, category, count)
    }

    componentDidUpdate(prevProps){

        const { getNewsAction, category, count } = this.props; 

        if(prevProps.category !== category || prevProps.count !== count){
            getNewsAction(getNews, category, count)
        }

    }

    render(){
        return <NewsView 
                    data={this.props.data}
                    loaded={this.props.loaded}/>
    }
}

const props = ({ newsData }) => ({...newsData});


const mapDispatchToProps = (dispatch) => {

    const { getNews } = bindActionCreators(newsAction, dispatch);

    return {
        getNewsAction: (getData, cat, count) => dispatch(newsAction.getNews(getData, cat, count)())
       
    }
}

export default connect(props, mapDispatchToProps)(NewsContainer);