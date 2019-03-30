import React from 'react';
import BusinessList from '../list-item/business-list';
import BusinessDetails from '../list-details/business-details';
import withData from '../hoc/get-data';
import LayoutWithAccordion from '../layout/category-layout';
import {getNews} from '../services/newsApi';

class BusinessSection extends React.Component {
    state={
        ind: null,
    }

    chooseInd = (ind)=>{
        this.setState({
            ind
        })
    }

    render(){
        const {news, name} = this.props;
        const {ind} = this.state;

        const left = (<BusinessList  data={news} chooseItem={this.chooseInd}/>);
        const right = (<BusinessDetails news={news[ind]} />);

        return  <LayoutWithAccordion left={left} right={right} name={name}/>
    }
}

const info = {
    link: 'business',
    top: true,
    count: 10,
    name: 'Бизнес'
}

export default withData(BusinessSection, getNews, info);
