import React from 'react';
import ItemList from '../components/item-list/item-list';
import withChildren from '../hoc/withChildren';


const List = withChildren(ItemList, (item)=> `${item.name}`);

export default function UserList(props){

    return  <List {...props}/>
    
}