import React from 'react';
import Preloader from '../components/preload/preload';

export default function isLoaded(Wrapped){
    return class extends React.Component  {

        

        render(){
            console.log('isLoaded', this.props)
            if(!this.props.loaded){
                return <Preloader />
            }

            return <Wrapped {...this.props} />
        }
    }
}