import React from 'react';
import ReactDOM from 'react-dom'; 
import {getNews, searchNews} from '../services/newsApi';

export const NewsContext = React.createContext({});

export class NewsStore extends React.Component {
    state={
        data:[],
        category: '',
        count: 20,
        top: true,
        search: '',
    }

     //get data for main page
     async componentDidMount(){
        const {top, category} = this.state;
        let news = await getNews(top, category);
        console.log(news);

        this.setState({
        data: news,
        })
    }

    //change category at state and re-render component

    handleCategory = (e)=>{
        console.log(e.target.getAttribute('data-item'));
        this.setState({
        category: e.target.getAttribute('data-item'),
        }, this.getCategory);
        
    }

    //обновить данные исходя из новой категории

    getCategory = async()=>{
        const {top, category, count} = this.state;
        let data = await getNews(top, category, count);
        
        this.setState({
        data
        });
    }

    //обработчик для отображения кол-ва новостей на странице
    handleCount = (e)=>{
        this.setState({
        count: +e.currentTarget.getAttribute('data-count')
        }, this.getCategory);
    }

    //обработчики для поиска новостей

    handleSearch = async (e) =>{
        try{
            const {search, count} = this.state;
            e.preventDefault();

            let data = await searchNews(search, count);
            
            if(data === undefined) {
                data=[];
            }
            console.log('handleSearch', data);
            this.setState({
            data
            });
        } catch(e){
            console.log(e);
        }
    }

    changeSearch = (e)=>{
        this.setState({
        search: e.currentTarget.value
        })
    }

    render(){
        return(
            <NewsContext.Provider 
                value={
                    {
                        state: {...this.state},
                        props: {...this.props},
                        handleCategory: this.handleCategory,
                        getCategory :  this.getCategory,
                        handleCount : this.handleCount,
                        handleSearch : this.handleSearch,
                        changeSearch : this.changeSearch,
                    }
                }
            >
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}