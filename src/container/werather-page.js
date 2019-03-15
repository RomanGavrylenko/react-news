import React from 'react';
import {getFiveDays} from '../services/weatherPageApi';
import weatherPlace from '../HOC/weather-place';


class WeatherPageContainer extends React.Component {
    state={
       five:[],
    }


    async componentDidMount(){
        try{
            let weather = await getFiveDays(this.props.place);

            this.setState({
                five: weather,
            })
            
        } catch(e){
            console.log(e);
        }
    }

    handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            let weather = await getFiveDays(this.props.place);
            console.log(weather);
            this.props.closeModal();
            this.setState({
                five: weather
            })

        } catch(e){
            console.log('Ничего не найдено по вашему запросу');
            
            this.props.setModal('Ничего не найдено по вашему запросу')
            return;
        } 
    }
 

    render(){
        return(
           this.props.children({
                five: this.state.five,
                place: this.props.place,
                handleInput: this.props.handleInput,
                handleSubmit: this.handleSubmit,
                modal: {
                    show: this.props.modal.show,
                    text: this.props.modal.text,
                    close: this.props.closeModal,
                }
           })
        );
    }
}

export default weatherPlace(WeatherPageContainer);
