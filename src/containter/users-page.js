import WithData from '../hoc/getInformation';
import CategoryLayout from '../layout/category-layout';
import { getUser } from '../services/userApi';
import Accordion from '../hoc/accordion';

const  info = {
    name: "Наши представители"
}

const userPage =  WithData( CategoryLayout, 
                            getUser, 
                            info);

export default userPage;