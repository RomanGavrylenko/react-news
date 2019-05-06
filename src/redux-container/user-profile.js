import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserAction } from '../actions/user-actions'
import { getUser } from '../services/profileApi';
import Preloader from '../components/preload/preload';
import UserProfileView from '../redux-component/user-profile-view'



class UserProfileContainer extends Component {

    componentDidMount(){
        this.props.getUser();
    }

    render(){
        if(!this.props.loaded){
            return <Preloader />
        }
        return <UserProfileView user={this.props.user}/>
    }
}

const mapStateToProps = (state) => ({ ...state.userData})


const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUserAction(getUser)())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);