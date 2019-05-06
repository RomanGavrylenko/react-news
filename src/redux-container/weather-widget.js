import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherWidget, setPlace } from '../actions/weather-widget-action';
import { getNowWeather } from '../services/weatherApi';
import WeatherWidgetView from '../redux-component/weather-widget-view';
import Preloader from '../components/preload/preload';

import weatherPlace from '../HOC/weather-place';
import compose from '../utils/compose'


class WeatherWidget extends Component {

    state ={
        place: ''
    }

    //отображение первоначального города
    componentDidMount(){
        this.props.getWeather('Donetsk');

        this.setState({
            place: this.props.place
        })
    }

    //если изменился город в глобальном сторе, то поменять его в state
    componentDidUpdate(prevProps){
        if(prevProps.place !== this.props.place ){
            this.setState({
                place: this.props.place
            })
        }
    }


    //субмит формы, где указывается город для поиска
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('prevProps', this.props.place)
        //this.props.setPlace(this.state.place);

        this.props.getWeather(this.state.place, this.props.place)

        //если город не найден, то ошибка 404 пробрасывается далеше
        // и мы обрабатываем ее здесь
        /*window.onunhandledrejection = (e)=>{
            console.log(e)
            const { setModal, getWeather, place } = this.props;
            setModal('Такого города не найдено')
            getWeather(this.props.place);
            this.setState({
                place
            })
        }*/
        
        
    }

    handleInput = (e) => {
        let place = e.target.value;
        this.setState({ place })
    }

    render(){
        console.log('WeatherWidget',this.props)
        if(!this.props.loaded){
            return <Preloader />
        }

        return <WeatherWidgetView 
                    weather={this.props.weather}
                    submit = {this.handleSubmit}
                    input = {this.handleInput}
                    value = { this.state.place}
                    modal =  {
                        {show: this.props.modal.show,
                        text: this.props.modal.text,
                        close: this.props.closeModal,}
                    }
                    />
    }
}

const mapStateToPorps = ({ weatherWidgetData }) => ({ ...weatherWidgetData })

const mapDispatchToProps = ( dispatch, ownProps ) => {
    console.log('second', ownProps)
    return {
        getWeather : (city, propsCity) => {
            return dispatch(getWeatherWidget(getNowWeather, city, ownProps.setModal, propsCity)())
        },
        setPlace: (place) => dispatch(setPlace(place))
    }
}
export default  compose(
    weatherPlace,
    connect(mapStateToPorps, mapDispatchToProps)
)(WeatherWidget)
//export default weatherPlace(connect(mapStateToPorps, mapDispatchToProps)(WeatherWidget));