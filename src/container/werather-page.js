import React from 'react';
import {getFiveDays} from '../services/weatherPageApi';
import WeatherPage from '../components/weather/weatherPage';


export default class WeatherPageContainer extends React.Component {
    state={
       five:[],
    }



    async componentDidMount(){
        try{
            let weather = await getFiveDays();

            console.log('weatherFiveList',weather);

            this.setState({
                five: weather,
            })
            
        } catch(e){
            console.log(e);
        }
    }
 

    render(){
        return(
           this.props.children({
               five: this.state.five,
           })
        );
    }
}
