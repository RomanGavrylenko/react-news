import React from 'react';
import toggleOpen from '../../HOC/toggleOpen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import {NewsContext} from '../../context-files/news-context';
import SearchForm from '../search-form/search-form';
import Menu from '../menu/menu';
import MenuMobile from '../../portals/mobileMenu/menu-portal';


//import './index.css';

class Header extends React.Component {
    state = {
        openMobMenu: false
    }

    handleClose = ()=>{

        document.removeEventListener('click', this.handleClose);

        this.setState({
            openMobMenu: false
        })
    }

    handleOpen = ()=>{

        document.addEventListener('click', this.handleClose);

        this.setState(state=>({
            openMobMenu: true
        }));
    }


    render(){

        const { isOpen, toggleOpen} = this.props;

        return(
            <NewsContext.Consumer>
                {({handleSearch, changeSearch, state})=>{return(
                    <div className='container'>
                        <header className='header'>
                            <div className='header__menu-row'>
                                <Menu 
                                    items={this.props.items}
                                    prefix='header'
                                />
                                { !this.state.openMobMenu &&
                                    <div 
                                        className='header__menu-icon'
                                        onClick={this.handleOpen}
                                    >
                                        <FontAwesomeIcon icon={faBars}  size='2x' />
                                    </div>
                                }
                                <div className='header__search'>
                                    <button className='button header__search-button' onClick={toggleOpen}>
                                        <FontAwesomeIcon icon={faSearch} size="3x" border />
                                    </button>    
                                </div>
                            </div>
                            { isOpen &&
                                <div className='header__form-wrapper'>
                                    <SearchForm 
                                        handleInput={changeSearch}
                                        handleSubmit={handleSearch}
                                        value={state.search}
                                        prefix='header'
                                        placeholder = 'Какие новости вы желаете найти?'
                                    /> 
                                </div>
                            }
                            {
                                this.state.openMobMenu && 
                                <MenuMobile 
                                    items={this.props.items}
                                    close={this.handleClose}
                                />
                            }
                        </header>
                    </div>
                )}}
            </NewsContext.Consumer>
        );
    }
}

export default toggleOpen(Header);