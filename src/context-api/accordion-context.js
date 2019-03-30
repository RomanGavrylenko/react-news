import React from 'react';

const {Provider: AccordionProvider, Consumer: AccordionConsumer } = React.createContext();

export {
    AccordionConsumer,
    AccordionProvider
}

export default class AccordionContext extends React.Component{
    state={
        openTitle: null
    }

    openAccordion = (e)=>{
        let target = e.currentTarget.getAttribute('data-title');
        console.log(target);
        this.setState(state=>{
            if(state.openTitle === target && state.openTitle !== null){
                return{ 
                    openTitle: null,
                }
            } else {
                return {
                    openTitle: target
                }
            }
        })
    }

    render(){
        return  <AccordionProvider value={{
                    openTitle: this.state.openTitle,
                    openAccordion: this.openAccordion
                }}>
                    {this.props.children}
                </AccordionProvider>

    }
}
