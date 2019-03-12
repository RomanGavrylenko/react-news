import React, { Component } from 'react';
import Header from './components/header';
import NewsList from './components/newsList/newsList';
import WeatherWidgetView from './components/weatherView/weatherWidgetView';
import Filters from './components/Filters/filters';
import UserProfileWidgetView from './components/user-profiles/userProfileWidgetView'
import Content from './layout/content';
import {getNews} from './services/newsApi';

import 'bootstrap/scss/bootstrap.scss';
import './index.scss';



class App extends Component {

  state={
    data:[],
    category: '',
    count: 20,
    top: true,
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

  //change data for showing

  getCategory = async()=>{
    const {top, category, count} = this.state;
    let data = await getNews(top, category, count);

    this.setState({
      data
    });
  }

  //handler for change  articles count, which show at page
  handleCount = (e)=>{
    this.setState({
      count: +e.currentTarget.getAttribute('data-count')
    }, this.getCategory);
  }


  render() {

    const items = [
      {name:'Главная', attr: ''},
      {name: "Бизнес", attr: 'business'},
      {name:"Спорт", attr: 'sports'},
      {name: "Технологии", attr: 'technology'},
      {name: "Наука", attr: 'science'},
      {name: "Здоровье", attr: 'headlth'},
      {name: "Развлечения", attr: "entertainment"}];

    return (
      <div className="App">
        <Header 
            items={items} 
            handle={this.handleCategory}
        />
        <Content 
            leftOne = {<UserProfileWidgetView />}
            leftTwo = {<Filters handleCount = {this.handleCount} count={this.state.count}/>}
            leftThree = {<WeatherWidgetView />}
            main = {<NewsList data={this.state.data}/>}
        />
      </div>
    );
  }
}

export default App;
