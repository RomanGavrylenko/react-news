import React from 'react';
import SportList from '../list-item/sportList';
import SportDetails from '../list-details/sportDetails';
import withData from '../hoc/get-data';
import LayoutWithAccordion from '../layout/category-layout';
import {getNews} from '../services/newsApi';

const SportSection =({news, name, ind, chooseInd})=>{

    const left = (<SportList  data={news} chooseItem={chooseInd}/>);
    const right = (<SportDetails news={news[ind]} />);

    return  <LayoutWithAccordion left={left} right={right} name={name}/>
}

const info = {
    link: 'sport',
    top: true,
    count: 10,
    name: 'Спорт'
}

const SportSectionWithData = withData(SportSection, getNews, info);

export default SportSectionWithData;