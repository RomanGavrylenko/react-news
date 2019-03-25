import React from 'react';

export default function Field({ data, fieldName}){
    return(
        <p className='item-details__text'>
            {data[fieldName]}
        </p>
    );
}