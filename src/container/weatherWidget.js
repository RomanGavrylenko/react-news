import React from 'react';
import {getNowWeather} from '../services/weatherApi';
import toggleOpen from '../HOC/toggleOpen';
import weatherPlace from '../HOC/weather-place';

class Weather extends React.Component {
    state={
        weather: {},
    }

    async componentDidMount(){
        
        let weather = await getNowWeather(this.props.place);

        this.setState({
            weather
        })
    }


    //обработка сабмита формы и осущ нового запроса к API для получения новых данных о погоде

    handleSubmit = async (e)=>{
        e.preventDefault();
        this.props.toggleOpen();
        try{
            let weather = await getNowWeather(this.props.place);
            console.log(weather);
            this.props.closeModal();
            this.setState({
                weather
            })

        } catch(e){
            console.log('Ничего не найдено по вашему запросу');
            
            this.props.setModal('Ничего не найдено по вашему запросу')
            return;
        } 
    }


    render(){
        return this.props.children({
            weather: this.state.weather,
            place: this.props.place,
            showInput: this.props.isOpen,
            toggleOpen: this.props.toggleOpen,
            handleInput: this.props.handleInput,
            handleSubmit: this.handleSubmit,
            modal: {
                show: this.props.modal.show,
                text: this.props.modal.text,
                close: this.props.closeModal,
            }
        })
    }
}
/*обварачиваем компонент Weather в два КВП. 
*   Первый для скрытия/показа поля инпута
*   Второй для ввода города, отображения/скрытия портала (модального окна)
*/ 
export default weatherPlace(toggleOpen(Weather));