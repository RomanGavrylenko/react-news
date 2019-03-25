import React from 'react';
import {getNews} from '../../services/newsApi';

export default class MainNews extends React.Component {

    state = {
        news: null,
        ind: 3
    }

    interval = null;

    async componentDidMount(){
        let data = await getNews('');
        this.setState({
            news: data
        }, this.startChange);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    startChange = ()=>{
        this.interval = setTimeout(()=>{
            this.changeInd();
            this.interval = setTimeout(()=>{
                this.changeInd();
            }, 5000)
        }, 5000)
    }

    changeInd = ()=>{
        this.setState((state)=>{
            if(state.ind+1>= state.news.length){
                return {
                    ind: 0
                }
            } else {
                return {ind: state.ind+1}
            }
        });
    }

    next = ()=>{
        clearInterval(this.interval);
        this.setState(state=>{

            let next = state.ind + 1;
            if(next >= state.news.length){
                next=0;
            }
            return{
                ind: next,
            }
        }, this.startChange);
    }

    prev = ()=>{
        clearInterval(this.interval);
        this.setState(state=>{

            let next = state.ind - 1;
            if(next < 0){
                next= state.news.length-1;
            }
            
            return{
                ind: next,
            }
        }, this.startChange);
    }

    render(){

        const {news, ind} = this.state;

        if(this.state.news===null){
            return null;
        }

        return this.props.children({
            news,
            ind,
            next: this.next,
            prev: this.prev
        })
    }
}