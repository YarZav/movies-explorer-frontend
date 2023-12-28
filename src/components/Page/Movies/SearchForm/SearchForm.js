import './SearchForm.css';

import React, { useState} from 'react';
import { useEffect, useRef } from 'react';

import { moviesLocalStorage } from '../../../../utils/MoviesLocalStorage';

import rightArrow from '../../../../images/rightArrow.svg';

function SearchForm(props) {
    const ref = useRef(null);

    const [searchText, setSearcText] = useState(moviesLocalStorage.getSearchText() ?? '');

    // Life circle

    useEffect(() => {
        const enterPressHandler = event => {
            if (event.keyCode === 13) {
                const searchText = document.querySelector('.search-form__input').value;
                props.onSearch(searchText);        
            }
        };
        const element = ref.current;

        element.addEventListener('keyup', enterPressHandler);
    
        return () => {
            element.removeEventListener('keyup', enterPressHandler);
        };
    }, []);

    // Action

    function changeHandler(event) {
        const value = event.target.value;
        setSearcText(value);
        moviesLocalStorage.setSearchText(value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const searchText = event.target.querySelector('.search-form__input').value;
        props.onSearch(searchText);
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
                        value={searchText || ''}
                        placeholder='Фильм'
                        onChange={changeHandler}
                        required
                    />
                    <button ref={ref} className='searh-form__button highlight' type='submit'>
                        <img src={rightArrow} alt='Right arrow'/>
                    </button>
                </div>
                <div className='search-form__line'></div>
                <div className='search-form__switch-container highlight]'> 
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