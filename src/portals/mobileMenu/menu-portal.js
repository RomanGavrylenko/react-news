import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../../components/menu/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function MenuMobile(props){
    return(
        ReactDOM.createPortal(
            <div className='mobile-menu__wrapper'>
                <div className='mobile-menu__icon' onClick={props.close}>
                    <FontAwesomeIcon 
                        icon={faTimes}
                        size='2x'
                        color='grey'
                    />
                </div>
                <Menu 
                    prefix='mobile-menu'
                    items={props.items}
                />
            </div>, document.body
        )
    );
}
