import React from 'react'

export default function Link({data, fieldName, label}){
    return  <a 
                className='link link__button item-details__link'
                href={data[fieldName]}
                target='_blank'
                rel='noopener noreferrer'
            >
                {label}
            </a>
}