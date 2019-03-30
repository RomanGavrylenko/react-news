import React from 'react';
import ItemList from '../components/item-list/item-list';
import withChildren from '../hoc/withChildren';

const renderInfo = (item)=>{
    return `${item.title} ${item.publishedAt}`
}

const List = withChildren(ItemList, renderInfo);



export default function SportList(props){

    return  <List {...props}/>
    
}