import React from 'react';
import Content from './content';
import UserProfileWidgetView from '../components/user-profiles/userProfileWidgetView';
import Filters from '../components/Filters/filters';
import WeatherWidgetView from '../components/weatherView/weatherWidgetView';
import NewsList from '../components/newsList/newsList';



export default function MainPage(props){

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