import SportList from '../list-item/sportList';
import SportDetails from '../list-details/sportDetails';
import withData from '../hoc/get-data';
import {getNews} from '../services/newsApi';
import createSection from '../hoc/create-section';

const SportSection = createSection(SportList, SportDetails);

const info = {
    link: 'sport',
    top: true,
    count: 10,
    name: 'Спорт'
}

const SportSectionWithData = withData(SportSection, getNews, info);

export default SportSectionWithData;