import React from 'react';
import toggleOpen from '../HOC/toggleOpen';

const UserProfileView = ({user, isOpen, toggleOpen}) => {
    return (
        <div className='user-widget'>
            <figure className='user-widget__picture'>
                <img 
                    className='user-widget__img'
                    src = {user.photo}
                    onClick = {toggleOpen}
                    alt='user'
                />
            </figure>
            { isOpen &&
                <React.Fragment>
                        <h2 className='user-widget__name'>
                            {user.name}
                        </h2>
                        <p className='user-widget__email'>
                        {user.email}
                    </p>
                    <button className='button user-widget__button'>
                        В профиль
                    </button>
                </React.Fragment>
            }
        </div>
    );
}

export default toggleOpen(UserProfileView);