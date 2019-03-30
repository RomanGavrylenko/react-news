import React from 'react';
import Preload from '../components/Preload/preload';

//to get data for our sections. Variable data retrieval function

export default function WithData(Component, getData, dataType={}){
    return class GetData extends React.Component {
        state={
            news:null,
            loaded: false,
            ind: 2
        }

        async componentDidMount(){
            try{
                let data = await getData(dataType.link);
                this.setState({
                    news: data,
                    loaded: true
                });
            } catch(e){
                console.log(e);
            }
        }

        chooseInd = (ind)=>{
            this.setState({
                ind
            })
        }

        render(){

            if(!this.state.loaded){
                return <Preload />
            }

            return(
                <Component 
                    {...this.state}
                    {...this.props}
                    chooseInd = {this.chooseInd}
                    name={dataType.name}/>
            );
        }
    }
}