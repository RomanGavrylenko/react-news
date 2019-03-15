import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu({prefix, items, bootCls}){
    let itemList = items.map(item=>{
        return(
        <Link
            className={`${prefix}__nav-link link`}
            key={item.name}
            to={item.path}
        >
            <li className={`${prefix}__nav-item`}
                key={item.name}
            >
                {item.name}
            </li>
        </Link>
        );
    });
    return(
        <ul className={`${prefix}__nav ${bootCls}`}>
            {itemList}
        </ul>
    );
}