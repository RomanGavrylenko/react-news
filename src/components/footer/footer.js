import React from 'react';
import Menu from '../menu/menu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faTwitterSquare, faSnapchatSquare} from '@fortawesome/free-brands-svg-icons'

export default function Footer(props){

    const items = [
        {name:'Главная', path: '/'},
        {name:'Погода', path: '/weather'},
        {name:'Профиль', path: '/profile'},
      ];

    return(
        <div className='container'>
            <footer className='footer'>
                <div className='row'>
                    <Menu 
                        items={items}
                        prefix='footer'
                        bootCls='col-sm'
                    />
                    <div className='footer__text col-sm'>
                        <p className='footer__par'>
                            Здесб находится какой-то крутой слоган. 
                            И что-то еще очень хорошее написано о нас)
                        </p>
                    </div>
                    <div className='footer__info col-sm'>
                        <h5 className='text'>
                            Подписывайтесь на нас:
                        </h5>
                        <a className='footer__icon-link' href='#'>
                            <FontAwesomeIcon  
                                className='footer__icon'
                                icon={faFacebookSquare}
                                size='2x'
                            />
                        </a>
                        <a className='footer__icon-link' href='#'>
                            <FontAwesomeIcon 
                                className='footer__icon'
                                icon={faTwitterSquare} 
                                size='2x' 
                            />
                        </a>
                        <a className='footer__icon-link' href='#'>
                            <FontAwesomeIcon
                                className='footer__icon'
                                icon={faSnapchatSquare} 
                                size='2x' 
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}