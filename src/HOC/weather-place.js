import React from 'react';
import {getDisplayName} from './getDisplayName';

export default function weatherPlace(OriginComponent){
    class WeatherPlace extends React.Component {
        state={
            place:'Donetsk',
            modal: {show: false, text: ''} 
        }

        //для показа модального окна при некорректном вводе данных горда

        setModal = (text)=>{
            this.setState({
                modal: {
                    show: true, 
                    text: text
                }
            })
        }

        
        resetModal = ()=>{
            this.setState({
                modal: {show: false, text: ''} 
            })
        }


        //обработка инпута ввода города

        handleInput = (e)=>{
            this.setState({
                place: e.currentTarget.value 
            });
        }

        render(){
            return(
                <OriginComponent 
                    {...this.state}
                    {...this.props}
                    handleInput = {this.handleInput}
                    setModal={this.setModal}
                    closeModal = {this.resetModal}
                />
            )
        }
    }

    WeatherPlace.displayName = `WeatherPlace(${getDisplayName(OriginComponent)})`;

    return WeatherPlace;
}