import React from 'react';
import './index.css';

export default function Header(props){
    return(
        <header className='heaeder'>
            <ul className='header__nav'>
                {props.items.map(item=>{
                    return(
                    <li className='header__nav-item'
                        key={item}
                        data-item={item.attr}
                        onClick={props.handle}
                    >
                        {item.name}
                    </li>
                    );
                })}
            </ul>
        </header>
    );
}