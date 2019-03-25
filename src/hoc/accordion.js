import React from 'react';

export default function Accordion (Component){
    return class extends React.Component {
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
            return <Component 
                        {...this.state}
                        {...this.props}
                    >
                        {
                            React.Children.map(this.props.children, child=>{
                                return React.cloneElement(child, {
                                    accordionOpenTitle: this.state.openTitle,
                                    accordionOpen: this.openAccordion
                                })
                            })
                        }
                    </Component>
        }
    }
}