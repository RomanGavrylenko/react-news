import React from 'react';
import LayoutWithAccordion from '../layout/category-layout';

export default function createSection(List, Details){
    return function({data, name, ind, chooseInd}){

        const left = (<List  data={data} chooseItem={chooseInd}/>);
        const right = (<Details data={data[ind]} />);
        
        return  <LayoutWithAccordion left={left} right={right} name={name}/>
      
    } 
}