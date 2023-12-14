import './SearchForm.css';

import rightArrow from '../../../../images/rightArrow.svg';

function SearchForm() {
    function changeHandler() { }

    return(
        <div className='search-form'>
            <div className='search-form__container'>
                <div className='search-form__input-container'>
                    <input
                        className='search-form__input'
                        type='text'
                        id='search-form__input'
                        name='search-form__input'
                        value=''
                        placeholder='Фильм'
                        onChange={changeHandler} 
                    />
                    <button className='searh-form__button highlight'>
                        <img src={rightArrow} alt='Right arrow'/>
                    </button>
                </div>
                <div className='search-form__line'></div>
                <div className='search-form__switch-container'> 
                    <label className='search-form__switch'>
                        <input className='search-form__checkbox' type='checkbox' />
                        <span className='search-form__slider round' />
                    </label>
                    <p className='search-form__short-films'>Короткометражки</p>
                </div>
            </div>
        </div>
    )
}

export default SearchForm;