import React from 'react';
import {getWeather} from '../services/weatherApi';

export default class Weather extends React.Component {
    state={
        weather: {},
    }

    async componentDidMount(){
        let weather = await getWeather();
    
        console.log(weather);

        this.setState({
            weather
        })
    }

    render(){
        return this.props.children({
            weather: this.state.weather,
        })
    }
}