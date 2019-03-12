import React from 'react';
import UserProfile from '../../container/userProfile';

export default function UserProfileWidgetView(props){
    return(
        <UserProfile>
            {({user})=>{
                return(
                        <div className='user-widget'>
                            <figure className='user-widget__picture'>
                                <img 
                                    className='user-widget__img'
                                    src = {user.photo}
                                />
                            </figure>
                            <h2 className='user-widget__name'>
                                {user.name}
                            </h2>
                            <p className='user-widget__email'>
                                {user.email}
                            </p>
                            <button className='button user-widget__button'>
                                В профиль
                            </button>
                        </div>
                    );
                }
            }
        </UserProfile>
    );
}