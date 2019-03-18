import React from 'react';
import newsImg from '../../news.jpg';
import {isVisible, showVisible} from './lazy-image-load';
 
export default class SingleNews extends React.Component{
    constructor(props){
        super(props);

        this.image = React.createRef();
    }

    handleImg = ()=>{
        this.image.current.src = newsImg;
    }

    componentDidMount(){
        document.addEventListener('scroll', ()=>{
            showVisible();
        })
    }

    render(){
        const {data: {url, urlToImage, title, description, publishedAt}} = this.props;

        let date = new Date(publishedAt).toLocaleString();

        return(
            <div className='news-list__news-card'>
                <figure className='news-card__picture'>
                    
                    <img
                        
                        data-src={urlToImage}
                        className='news-card__img img-fluid'
                        alt=''
                        onError = {this.handleImg}
                        ref={this.image}
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
}