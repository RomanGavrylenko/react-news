import BusinessList from '../list-item/business-list';
import BusinessDetails from '../list-details/business-details';
import withData from '../hoc/get-data';
import {getNews} from '../services/newsApi';
import createSection from '../hoc/create-section';

const BusinessSection = createSection(BusinessList, BusinessDetails);

const info = {
    link: 'business',
    top: true,
    count: 10,
    name: 'Бизнес'
}

export default withData(BusinessSection, getNews, info);