import React from 'react';
import UserList from '../list-item/user-list';
import UserDetails from '../list-details/user-details';
import withData from '../hoc/get-data';
import LayoutWithAccordion from '../layout/category-layout';
import {getUser} from '../services/userApi';


const UserSection =({news, name, ind, chooseInd})=>{

    const left = (<UserList  data={news} chooseItem={chooseInd}/>);
    const right = (<UserDetails users={news[ind]} />);

    return  <LayoutWithAccordion left={left} right={right} name={name}/>
}

const  info = {
    name: "Наши представители"
}


const UserSectionWithData = withData(UserSection, getUser, info);

export default UserSectionWithData;