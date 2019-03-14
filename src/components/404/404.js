import React from 'react';
import {Link} from 'react-router-dom';

export default function Page404(props){
    return(
        <div className='container'>
            <h3 className='text-center'>Извините, но такой страницы нет</h3>
            <p className='text-center'>
                <Link  
                    to='/'
                >
                    Вернуться на главную страницу
                </Link> 
            </p>
        </div>
        
    );
}