import React from 'react';
import ItemDetails from '../components/item-details/item-details';
import NewsLook from '../components/news-view/news-view';
import Image from '../components/image/image';

export default function StortDetails (props) {

    return  <ItemDetails {...props}>
                <Image fieldName={`urlToImage`} label='icon'/>
               <NewsLook />
            </ItemDetails>
}