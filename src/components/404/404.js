import React from 'react';
import {Link} from 'react-router-dom';

export default class Page404 extends React.Component{

    constructor(){
        super();

        this.containerRef = React.createRef();
    }

    componentDidMount(){
        let documentBottom = document.documentElement.getBoundingClientRect().bottom;

        //разница между краем документа и краем страницы. Если она положительная,
        // то страница меньше окна пользователя и нужно изменить размер среднего блока
        let differense = document.documentElement.clientHeight - documentBottom;
        
        if(differense > 0){
            //добавили 80px поскольку учитывается поисковая строка в header
            this.containerRef.current.style.height = differense + 80 + 'px';
        }
    }

    render(){
        return(
            <div className='container' ref={this.containerRef}>
                <h3 className='text-center'>Извините, но такой страницы нет</h3>
                <p className='text-center '>
                    <Link  
                        to='/'
                    >
                        Вернуться на главную страницу
                    </Link> 
                </p>
            </div>
            
        );
    }
}