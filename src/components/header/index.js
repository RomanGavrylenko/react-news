import React from 'react';
import toggleOpen from '../../HOC/toggleOpen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//import './index.css';

class Header extends React.Component {
    state = {
        isOpen: false
    }

    getMenuItems = ()=>{
        let itemList = this.props.items.map(item=>{
                return(
                <li className='header__nav-item'
                    key={item}
                    
                    onClick={this.props.handle}
                >
                    {item.name}
                </li>
                );
            });

        return itemList;
    }

    render(){

        const { isOpen, toggleOpen, value, handleSearch, changeVal} = this.props;

        return(
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
                        <div className='header__search'>
                            <form 
                                className='header__search'
                                name='search'
                                onSubmit={handleSearch}
                            >
                                <input 
                                    name='search'
                                    value = {value}
                                    onChange={changeVal}
                                /> 
                                <button
                                    type='submit'
                                    className='button header__search-button'
                                >
                                    Искать
                                </button>
                            </form>    
                        </div>
                    }
                </header>
            </div>
        );
    }
}

export default toggleOpen(Header);