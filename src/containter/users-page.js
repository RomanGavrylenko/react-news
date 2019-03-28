import WithData from '../hoc/getInformation';
import CategoryLayout from '../layout/category-layout';
import { getUser } from '../services/userApi';

const  info = {
    name: "Наши представители"
}

const userPage =  WithData( CategoryLayout, 
                            getUser, 
                            info);

export default userPage;