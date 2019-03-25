import WithData from '../hoc/getInformation';
import CategoryLayout from '../layout/category-layout';
import {getNews} from '../services/newsApi';
import Accordion from '../hoc/accordion';

const info = {
    link: 'entertainment',
    name: 'Развлечения'
}

const EntertainmentPage = WithData( CategoryLayout, 
                                    getNews, 
                                    info);

export default EntertainmentPage;

