import React from 'react';
import BusinessList from '../list-item/business-list';
import BusinessDetails from '../list-details/business-details';
import withData from '../hoc/get-data';
import LayoutWithAccordion from '../layout/category-layout';
import {getNews} from '../services/newsApi';

const BusinessSection =({news, name, ind, chooseInd})=>{

    const left = (<BusinessList  data={news} chooseItem={chooseInd}/>);
    const right = (<BusinessDetails news={news[ind]} />);

    return  <LayoutWithAccordion left={left} right={right} name={name}/>
}

const info = {
    link: 'business',
    top: true,
    count: 10,
    name: 'Бизнес'
}

export default withData(BusinessSection, getNews, info);
