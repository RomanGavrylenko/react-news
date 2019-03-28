import React from 'react';

export default class ErrorBoundry extends React.Component{
    state={
        hasError: false,
    }

    componentDidCatch(){
        this.setState({
            hasError: true,
        })
    }

    render(){
        if(this.state.hasError){
            return <p className='error-boundry'>
                Извините, произошла ошибка при загрузке данных <br/>
                Мы уже работаем над исправлением данной проблемы
            </p>
        }

        return this.props.children;
    }
}