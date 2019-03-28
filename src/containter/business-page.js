import WithData from '../hoc/getInformation';
import CategoryLayout from '../layout/category-layout';
import {getNews} from '../services/newsApi';

const info = {
    link: 'business',
    name: 'Бизнес'
}

const BusinessPage =  WithData( CategoryLayout, 
                                getNews, 
                                info);

export default BusinessPage;