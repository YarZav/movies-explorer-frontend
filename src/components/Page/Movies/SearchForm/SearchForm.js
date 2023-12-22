import './SearchForm.css';

import React, { useState } from 'react';

import rightArrow from '../../../../images/rightArrow.svg';

function SearchForm() {
    const [searchText, setSearchText] = useState('');

    function changeHandler(event) { 
        setSearchText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <form className='search-form' name='search-form' onSubmit={handleSubmit}>
            <div className='search-form__container'>
                <div className='search-form__input-container'>
                    <input
                        className='search-form__input highlight'
                        type='text'
                        id='search-form__input'
                        name='search-form__input'
                        value={searchText || ''}
                        placeholder='Фильм'
                        onChange={changeHandler}
                        required
                    />
                    <button className='searh-form__button highlight' type='submit'>
                        <img src={rightArrow} alt='Right arrow'/>
                    </button>
                </div>
                <div className='search-form__line'></div>
                <div className='search-form__switch-container highlight'> 
                    <label className='search-form__switch'>
                        <input className='search-form__checkbox' type='checkbox' />
                        <span className='search-form__slider round' />
                    </label>
                    <p className='search-form__short-films'>Короткометражки</p>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;