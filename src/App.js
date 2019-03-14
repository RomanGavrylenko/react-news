import React, { Component } from 'react';
import Header from './components/header';
import NewsList from './components/newsList/newsList';
import WeatherWidgetView from './components/weatherView/weatherWidgetView';
import Filters from './components/Filters/filters';
import UserProfileWidgetView from './components/user-profiles/userProfileWidgetView'
import Content from './layout/content';
import {getNews, searchNews} from './services/newsApi';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WeatherPage from './components/weather/weatherPage';
import Page404 from './components/404/404';



import 'bootstrap/scss/bootstrap.scss';
import './index.scss';



class App extends Component {

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

  //change data for showing
  //обновить данные исходя из новой категории

  getCategory = async()=>{
    const {top, category, count} = this.state;
    let data = await getNews(top, category, count);
    
    this.setState({
      data
    });
  }

  //handler for change  articles count, which show at page
  //обработчик для отображения кол-ва новостей на странице
  handleCount = (e)=>{
    this.setState({
      count: +e.currentTarget.getAttribute('data-count')
    }, this.getCategory);
  }

  //обработчики для поиска новостей

  handleSearch = async (e) =>{
    const {search, count} = this.state;
    e.preventDefault();

    let data = await searchNews(search, count);
    
    this.setState({
      data
    });
  }

  changeSearch = (e)=>{
    this.setState({
      search: e.currentTarget.value
    })
  }

  //получить отображения для главной страницы для роутинга

  getMainPage(){

    const items = [
      {name:'Главная', attr: ''},
      {name: "Бизнес", attr: 'business'},
      {name:"Спорт", attr: 'sports'},
      {name: "Технологии", attr: 'technology'},
      {name: "Наука", attr: 'science'},
      {name: "Здоровье", attr: 'headlth'},
      {name: "Развлечения", attr: "entertainment"}];

    return(
      <Content 
        leftOne = {<UserProfileWidgetView />}
        leftTwo = {
          <Filters
            handleCount = {this.handleCount}
            handleCategory = {this.handleCategory}
            count={this.state.count}
            category={this.state.category}
            items={items}
          />
        }
        leftThree = {<WeatherWidgetView />}
        main = {<NewsList  data={this.state.data}/>}
      />
    );
  }


  render() {

    

    const headerItems = [
      {name:'Главная', path: '/'},
      {name:'Погода', path: '/weather'},
      {name:'Профиль', path: '/profile'},
    ];


    return (
        <BrowserRouter>
          <div className="App">
            <Header 
                items={headerItems} 
                handle={this.handleCategory}
                handleSearch = {this.handleSearch}
                changeVal = {this.changeSearch}
                value={this.state.search}
            />
            <Switch>
              <Route exact path='/' render={
                ()=> this.getMainPage()
              } />
              <Route exect path='/weather' component={WeatherPage} />
              <Route component={Page404} />
            </Switch>
            
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
