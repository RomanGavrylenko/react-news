import React from 'react';
import SportList from '../list-item/sportList';
import SportDetails from '../list-details/sportDetails';
import withData from '../hoc/get-data';
import LayoutWithAccordion from '../layout/category-layout';

import {getNews} from '../services/newsApi';

class SportSection extends React.Component {
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

        const left = (<SportList  data={news} chooseItem={this.chooseInd}/>);
        const right = (<SportDetails news={news[ind]} />);

        return  <LayoutWithAccordion left={left} right={right} name={name}/>
    }
}


const info = {
    link: 'sport',
    top: true,
    count: 10,
    name: 'Спорт'
}

const SportSectionWithData = withData(SportSection, getNews, info);

export default SportSectionWithData;