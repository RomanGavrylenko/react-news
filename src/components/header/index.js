import React from 'react';
import toggleOpen from '../../HOC/toggleOpen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {NewsContext} from '../../context-files/news-context';
import SearchForm from '../search-form/search-form';


//import './index.css';

class Header extends React.Component {
    state = {
        isOpen: false
    }

    getMenuItems = ()=>{
        let itemList = this.props.items.map(item=>{
                return(
                <Link
                    className='header__nav-link link'
                    key={item.name}
                    to={item.path}
                >
                    <li className='header__nav-item'
                        key={item.name}
                    >
                        {item.name}
                    </li>
                </Link>
                );
            });

        return itemList;
    }

    render(){

        const { isOpen, toggleOpen} = this.props;

        return(
            <NewsContext>
                {({handleSearch, changeSearch, state})=>{return(
                    <div className='container'>
                        <header className='header'>
                            <div className='row'>
                                <ul className='header__nav col-md-10'>
                                    {this.getMenuItems()}
                                </ul>
                                <div className='header__search col-md-2'>
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
                                    /> 
                                </div>
                            }
                        </header>
                    </div>
                )}}
            </NewsContext>
        );
    }
}

export default toggleOpen(Header);