import React from 'react';
import ItemDetails from '../components/item-details/item-details';
import NewsLook from '../components/news-view/news-view';

export default function BusinessDetails(props){

    return  <ItemDetails {...props}>
               <NewsLook />
            </ItemDetails>
}