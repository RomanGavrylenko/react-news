import React from 'react';

export default function withItemIndex(Wrapped){
    return class extends React.Component{
        state={
            ind: null,
        }
    
        chooseInd = (ind)=>{
            this.setState({
                ind: ind
            })
        }

        render(){
            return <Wrapped 
                        {...this.state} 
                        {...this.props} 
                        chooseInd={this.chooseInd}/>
        }
    }
}