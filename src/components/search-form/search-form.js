import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchForm(props){

    const { handleSubmit, handleInput, value, prefix, placeholder } = props;

    return(
        <form className={`${prefix}__form`} onSubmit={handleSubmit}>
            <input
                className={`form__input ${prefix}__form-input`}
                type='text'
                name='city'
                value = {value}
                onChange={handleInput}
                placeholder={placeholder}
            />
            <button
                className={`button form__button ${prefix}__button`}
                type='submit'                        
            >
                 <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    );
}