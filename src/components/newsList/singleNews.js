import React from 'react';

export default function SingleNews({data: {url, urlToImage, title, description, publishedAt}}){

    let date = new Date(publishedAt).toLocaleString();

    return(
        <div className='news-list__news-card'>
            
                <figure className='news-card-picture'>
                    <img
                        src={urlToImage}
                        className='news-card__img'
                        alt='cool Image'
                    />
                </figure>
                <h3 className='news-card__title'>
                    {title}
                </h3>
                <p className='news-card__description'>
                    {description}
                </p>
                <p className='news-card__pubsish-date'>
                    {date}
                </p>
            <a 
                href={url} 
                rel="nofollow noopener"
            >Подробнее</a>
        </div>
    );
}