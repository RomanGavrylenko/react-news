import React from 'react';
import newsImg from '../news.jpg';
import { showVisible } from '../components/newsList/lazy-image-load';
import preload from '../images/preload.svg'
import isLoaded from '../HOC/isLoaded';

const NewsList = (props) =>{

    const  getNews = (data) => {
        
        if(data.length === 0){
            return <p className='news-list__nothing text'>
                        Извините, ничего не найдено, посему нечего отображать.
                        Введите другой поисковой запрос или перейдите в одну из категорий
                    </p>
        }
        
        const newsList = data.map(news=>{
            return(<SingleNews key={news.publishedAt}  data={news}/>);
        });

        return newsList;
    }


    return (
        <div className='news-list__wrapper'>
            <h3 className='news-list__title_mobile'>News</h3>
            {getNews(props.data)}
        </div>

    );   
}

class SingleNews extends React.Component{
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
                        src = {preload}
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
                        target='_blank'
                        rel="noopener noreferrer"
                        className='link news-card__link'
                    >
                        Подробнее
                    </a>
                </div>
            </div>
        );
    }
}

export default isLoaded(NewsList);