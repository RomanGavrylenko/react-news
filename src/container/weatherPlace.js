import React from 'react';

export default class WeatherPlace extends React.Component{
    state={
        place:"Donetsk",
    }

    //обработка инпута ввода города

    handleInput = (e)=>{
        this.setState({
            place: e.currentTarget.value 
        });
    }

    render(){
        return (1);
    }
}