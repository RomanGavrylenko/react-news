import React from 'react';
import {getWeather} from '../services/weatherApi';
import toggleOpen from '../HOC/toggleOpen';

class Weather extends React.Component {
    state={
        weather: {},
        place: 'Donetsk'
    }

    async componentDidMount(){
        let weather = await getWeather();
    
        console.log(weather);

        this.setState({
            weather
        })
    }

    handleInput = (e)=>{
        this.setState({
            place: e.currentTarget.value 
        });
    }

    handleSubmit = async (e)=>{
        e.preventDefault();
        this.props.toggleOpen();

    }

    render(){
        return this.props.children({
            weather: this.state.weather,
            place: this.state.place,
            showInput: this.props.isOpen,
            toggleOpen: this.props.toggleOpen,
            handleInput: this.handleInput,
            handleSubmit: this.handleSubmit
        })
    }
}

export default toggleOpen(Weather);