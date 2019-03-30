import EntertainmentList from '../list-item/entertainment-list';
import EntertainmentDetails from '../list-details/entertainment-details';
import withData from '../hoc/get-data';
import {getNews} from '../services/newsApi';
import createSection from '../hoc/create-section';

const EntertainmentSection = createSection(EntertainmentList, EntertainmentDetails);

const info = {
    link: 'entertainment',
    top: true,
    count: 10,
    name: 'Развлечения'
}

export default withData(EntertainmentSection, getNews, info);