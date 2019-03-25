import React from 'react';
import MainNews from '../main-news/main-news';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function MainNewsView(){
    return(
        <MainNews>
            {  
                ({prev, next, news, ind})=>{

                    let currentNews = news[ind];

                    return <div className='main-news'>
                            <div className='main-news__wrapper'>
                                <figure className='main-news__picture'>
                                    <img  
                                        src={currentNews.urlToImage}
                                        className='main-news__image'
                                        alt='Cool news'
                                    />
                                </figure>
                                <div className='main-news__info'>
                                    <p className='main-news__info-text'>
                                        Автор: {currentNews.author ? currentNews.author : 'Не указан' }
                                    </p>
                                    <p className='main-news__info-text'>
                                        Тема: {currentNews.title}
                                    </p>
                                    <a 
                                        className='link  main-news__link'
                                        href={currentNews.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        >Перейти к новости
                                    </a>
                                </div>
                                <div className='main-news__buttons'>
                                    <button 
                                        onClick = {prev} 
                                        className='btn btn-light main-news__buttons-item'
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} size='2x'/>
                                    </button>
                                    <button 
                                        onClick = {next} 
                                        className='btn btn-light  main-news__buttons-item'
                                    >
                                        <FontAwesomeIcon icon={faChevronRight} size='2x'/>
                                    </button>
                                </div>
                            </div>
                        </div>
            }}
        </MainNews>
    )
}