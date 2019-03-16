import React, { Component } from 'react';
import Header from './components/header';
import NewsList from './components/newsList/newsList';
import WeatherWidgetView from './components/weatherView/weatherWidgetView';
import Filters from './components/Filters/filters';
import UserProfileWidgetView from './components/user-profiles/userProfileWidgetView'
import Content from './layout/content';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WeatherPage from './components/weather/weatherPage';
import Page404 from './components/404/404';
import {NewsStore} from './context-files/news-context';
import Footer from './components/footer/footer';

import 'bootstrap/scss/bootstrap.scss';
import './index.scss';


class App extends Component {

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
            items={items}
          />
        }
        leftThree = {<WeatherWidgetView />}
        main = {<NewsList  />}
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
          <NewsStore>
          <div className="App">
            <Header 
                items={headerItems} 
            />
            <Switch>
              <Route exact path='/' render={
                ()=> this.getMainPage()
              } />
              <Route exect path='/weather' component={WeatherPage} />
              <Route component={Page404} />
            </Switch>
            <Footer />
          </div>
          </NewsStore>
        </BrowserRouter>
    );
  }
}

export default App;