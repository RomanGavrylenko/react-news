import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompactDisc} from '@fortawesome/free-solid-svg-icons';

export default function Preload(props){
    return(
        <FontAwesomeIcon 
            className='preload'
            icon={faCompactDisc} 
            size='2x' 
            spin
        />
    );
}
