import React from 'react';
import UserList from '../list-item/user-list';
import UserDetails from '../list-details/user-details';
import withData from '../hoc/get-data';
import LayoutWithAccordion from '../layout/category-layout';
import {getUser} from '../services/userApi';

class SportSection extends React.Component {
    state={
        ind: null,
    }

    chooseInd = (ind)=>{
        this.setState({
            ind
        })
    }

    render(){
        const {news, name} = this.props;
        const {ind} = this.state;

        const left = (<UserList  data={news} chooseItem={this.chooseInd}/>);
        const right = (<UserDetails users={news[ind]} />);

        return  <LayoutWithAccordion left={left} right={right} name={name}/>
    }
}

const  info = {
    name: "Наши представители"
}


const SportSectionWithData = withData(SportSection, getUser, info);

export default SportSectionWithData;