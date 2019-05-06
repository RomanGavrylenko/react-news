import React from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import store from './store';
import { getUserAction } from './actions/user-actions';
import { getUser } from './services/profileApi';
import UserProfileContainer from './redux-container/user-profile';
import WeatherWidget from './redux-container/weather-widget'
import NewsContainer from './redux-container/news';
import NewsFilterContainer from './redux-container/news-filter';

const items = [
    {name:'Главная', attr: ''},
    {name: "Бизнес", attr: 'business'},
    {name:"Спорт", attr: 'sports'},
    {name: "Технологии", attr: 'technology'},
    {name: "Наука", attr: 'science'},
    {name: "Здоровье", attr: 'headlth'},
    {name: "Развлечения", attr: "entertainment"}];

export default function AppSecond(){


    return (
        <Provider store={store}>
            
            <UserProfileContainer />
            <WeatherWidget />
            <NewsFilterContainer items={items}/>
            <NewsContainer />
        </Provider>
    );
}

class Some extends React.Component {

    componentDidMount(){
        this.props.getUser();
    }

    render(){
        console.table(this.props);
        return 1;
    }
    
}

const someProps = (state) => {
    return {...state}
}

const someMethod = (dispatch) => {
    return {
        getUser: () => dispatch(getUserAction(getUser)())
    }
}


const ConnectSome = connect(someProps, someMethod)(Some);
