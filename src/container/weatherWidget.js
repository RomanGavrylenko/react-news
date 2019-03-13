import React from 'react';
import {getWeather} from '../services/weatherApi';
import toggleOpen from '../HOC/toggleOpen';

class Weather extends React.Component {
    state={
        weather: {},
        place: 'Donetsk',
        modal: {show: false, text: ''}
    }

    async componentDidMount(){
        let weather = await getWeather(this.state.place);
    
        console.log(weather);

        this.setState({
            weather
        })
    }

    //обработка инпута ввода города

    handleInput = (e)=>{
        this.setState({
            place: e.currentTarget.value 
        });
    }

    //обработка сабмита формы и осущ нового запроса к API для получения новых данных о погоде

    handleSubmit = async (e)=>{
        e.preventDefault();
        this.props.toggleOpen();
        try{
            let weather = await getWeather(this.state.place);
            console.log(weather);
            
            this.setState({
                weather,
                modal: {show: false, text: ''}
            });
        } catch(e){
            console.log('Ничего не найдено по вашему запросу');
            this.setState({
                modal: {
                    show: true, 
                    text: 'Ничего не найдено по вашему запросу'
                }
            })
            return;
        } 
    }

    //закрытие портала

    closeModal = ()=>{
        this.setState({
            modal: {show: false, text: ''}
        })
    }

    render(){
        return this.props.children({
            weather: this.state.weather,
            place: this.state.place,
            showInput: this.props.isOpen,
            toggleOpen: this.props.toggleOpen,
            handleInput: this.handleInput,
            handleSubmit: this.handleSubmit,
            modal: {
                show: this.state.modal.show,
                text: this.state.modal.text,
                close: this.closeModal,
            }
        })
    }
}

export default toggleOpen(Weather);