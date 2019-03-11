import React, { Component } from 'react';
import Header from './components/header';
import NewsList from './components/newsList/newsList';
import WeatherWidgetView from './components/weatherView/weatherWidgetView';
import {getMainNews} from './services/newsApi';
import {getCity, getWeather} from './services/weatherApi';


class App extends Component {

  state={
    data:[],
    category: '',
    top: true,
  }

  //get data for main page
  async componentDidMount(){
    const {top, category} = this.state;
    let news = await getMainNews(top, category);
    console.log(news);

    this.setState({
      data: news,
    })
  }

  
  handleCategory = (e)=>{
    console.log(e.target.getAttribute('data-item'));
    this.setState({
      category: e.target.getAttribute('data-item'),
    }, this.getCategory);
    
  }

  getCategory = async()=>{
    const {top, category} = this.state;
    let data = await getMainNews(top, category);

    this.setState({
      data
    });
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
        <Header items={items} handle={this.handleCategory}/>
        <button >city</button>
        <NewsList data={this.state.data}/>
        <WeatherWidgetView />
      </div>
    );
  }
}

export default App;
