import React, { Component } from 'react';
import Header from './components/header';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WeatherPage from './components/weather/weatherPage';
import Page404 from './components/404/404';
import {NewsStore} from './context-files/news-context';
import Footer from './components/footer/footer';
import UpButton from './portals/up-button/up-button';

import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import MainPage from './layout/main-page';




function App(props){

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
              <Route exact path='/'  component={MainPage} />
              <Route exect path='/weather' component={WeatherPage} />
              <Route component={Page404} />
            </Switch>
            <Footer />
            <UpButton scrollStepInPx="50" delayInMs="16.66"/>
          </div>
          </NewsStore>
        </BrowserRouter>
    );
  
}

export default App;