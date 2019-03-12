import React from 'react';
//import './index.css';

export default class Header extends React.Component {
    state = {
        isOpen: false
    }

    render(){

        const {items, handle} = this.props;

        return(
            <div className='container'>
                <header className='header'>
                    <ul className='header__nav'>
                        {items.map(item=>{
                            return(
                            <li className='header__nav-item'
                                key={item}
                                data-item={item.attr}
                                onClick={handle}
                            >
                                {item.name}
                            </li>
                            );
                        })}
                    </ul>
                </header>
            </div>
        );
    }
}