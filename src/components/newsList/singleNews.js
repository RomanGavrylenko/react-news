import React from 'react';
import PropTypes from 'prop-types';
import newsImg from '../../news.jpg';

export default function SingleNews({data: {url, urlToImage, title, description, publishedAt}}){

    let date = new Date(publishedAt).toLocaleString();

    return(
        <div className='news-list__news-card'>
            <figure className='news-card__picture'>
                
                <img
                    src={urlToImage}
                    className='news-card__img img-fluid'
                    alt=''
                />
                <img
                    src={newsImg}
                    className='news-card__img news-card__img_reserve img-fluid'
                    alt='News'
                />
            </figure>
            <h3 className='news-card__title text'>
                {title}
            </h3>
            <p className='news-card__description text'>
                {description}
            </p>
            <div className='news-card__data-info'>
                <p className='news-card__pubsish-date'>
                    {date}
                </p>
                <a 
                    href={url} 
                    rel="nofollow noopener"
                    target='_blank'
                    className='link news-card__link'
                >
                    Подробнее
                </a>
            </div>
        </div>
    );
}

SingleNews.prototype = {
    data: PropTypes.shape({
        url: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        publishedAt: PropTypes.string.isRequired,
    }),
}