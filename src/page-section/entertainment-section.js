import React from 'react';
import EntertainmentList from '../list-item/entertainment-list';
import EntertainmentDetails from '../list-details/entertainment-details';
import withData from '../hoc/get-data';
import LayoutWithAccordion from '../layout/category-layout';
import {getNews} from '../services/newsApi';

class EntertainmentSection extends React.Component {
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

        const left = (<EntertainmentList  data={news} chooseItem={this.chooseInd}/>);
        const right = (<EntertainmentDetails news={news[ind]} />);

        return  <LayoutWithAccordion left={left} right={right} name={name}/>
    }
}

const info = {
    link: 'entertainment',
    top: true,
    count: 10,
    name: 'Развлечения'
}

export default withData(EntertainmentSection, getNews, info);
