import React from 'react';

import Accordion from '../hoc/accordion';

class MainPageContent extends React.Component{
    render(){
        return  this.props.children;
    }
}

export default Accordion(MainPageContent);