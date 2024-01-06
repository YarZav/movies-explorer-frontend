import './SearchForm.css';

import React from 'react';
import { useState } from 'react';

import { moviesLocalStorage } from '../../../../utils/MoviesLocalStorage';

import rightArrow from '../../../../images/rightArrow.svg';

function SearchForm(props) {
    const [error, setError] = useState('');

    React.useEffect(() => {
        setError('');
        setDefaultValue();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.type]);

    function isMoviesType() {
        return props.type === 'movies';
    }

    function setDefaultValue() {
        const input = document.querySelector('.search-form__input');
        const checkbox = document.querySelector('.search-form__checkbox');
        if (isMoviesType()) {
            input.value = moviesLocalStorage.getSearchText() || '';
            checkbox.checked = moviesLocalStorage.getIsShort() || false;
        } else {
            input.value = '';
            checkbox.checked = false;
        }

        props.onSearchText(input.value);
        props.onIsShort(checkbox.checked);
    }

    function searchTextHandler(event) {
        const value = event.target.value;
        if (isMoviesType()) {
            moviesLocalStorage.setSearchText(value);
        }

        setError(value.length > 0 ? '' : 'Нужно ввести ключевое слово');
    }

    function submitHandler(event) {
        event.preventDefault();

        const element = document.querySelector('.search-form__input');
        const value = element.value;

        props.onSearchText(value);
    }

    function checkboxHandler(event) {
        const checked = event.target.checked;
        if (isMoviesType()) {
            moviesLocalStorage.setIsShort(checked);
        }

        props.onIsShort(checked);
    }

    return(
        <form className='search-form' name='search-form' onSubmit={submitHandler} noValidate>
            <div className='search-form__container'>
                <div className='search-form__input-container'>
                    <input
                        className='search-form__input highlight'
                        type='text'
                        id='search-form__input'
                        name='search-form__input'
                        placeholder='Фильм'
                        onChange={searchTextHandler}
                        required
                    />
                    <button className='searh-form__button highlight' type='submit'>
                        <img src={rightArrow} alt='Right arrow'/>
                    </button>
                </div>
                <div className='search-form__line'></div>
                <p className='search-form__error'>{error}</p>
                <div className='search-form__switch-container highlight]'> 
                    <label className='search-form__switch'>
                        <input 
                            className='search-form__checkbox' 
                            type='checkbox'
                            onClick={checkboxHandler} 
                        />
                        <span className='search-form__slider round' />
                    </label>
                    <p className='search-form__short-films'>Короткометражки</p>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;