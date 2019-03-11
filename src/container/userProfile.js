import React from 'react';
import {getUser} from '../services/profileApi';

export default class UserProfile extends React.Component {
    state = {
        user: {},
    }

    async componentDidMount(){
        let data = await getUser();

        this.setState({
            user: data.user,
        });
    }

    render(){
        return(
            this.props.children({
                user: this.state.user,
            })
        )
    }
}