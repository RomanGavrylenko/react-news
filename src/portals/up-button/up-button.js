import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default class UpButton extends React.Component {
    constructor() {
        super();
    
        this.state = {
            intervalId: 0,
            scrolled: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = ()=>{
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled>50){
            this.setState({
                scrolled: true
            })
        } else {
            this.setState({
                scrolled: false
            })
        }
    }
    
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
      }
      
    scrollToTop= ()=> {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }


    render(){
        return(
            ReactDOM.createPortal(
                <div className='up-button__wrapper' hidden={!this.state.scrolled}>
                    <button className='up-button button' onClick={this.scrollToTop}>
                        <FontAwesomeIcon 
                            icon={faArrowUp}
                            size='2x'
                        />
                    </button>
                </div>, document.body
            ) 
        );
    }
} 