import React from 'react';

export default function Image({data, fieldName, label}){
    return  <figure className='item-details__picture'>
                <img 
                    src={data[fieldName]}
                    alt={label}
                    className='item-details__image'/>
            </figure>
}