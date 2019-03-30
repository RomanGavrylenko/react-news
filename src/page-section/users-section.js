import UserList from '../list-item/user-list';
import UserDetails from '../list-details/user-details';
import withData from '../hoc/get-data';
import {getUser} from '../services/userApi';
import createSection from '../hoc/create-section';


const UserSection = createSection(UserList, UserDetails);

const  info = {
    name: "Наши представители"
}


const UserSectionWithData = withData(UserSection, getUser, info);

export default UserSectionWithData;