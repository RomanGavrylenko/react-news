import WithData from '../hoc/getInformation';
import CategoryLayout from '../layout/category-layout';
import {getNews} from '../services/newsApi';

const info = {
    link: 'sport',
    top: true,
    count: 10,
    name: 'Спорт'
}



const SportPage = WithData( CategoryLayout, 
                            getNews, 
                            info);

export default SportPage;