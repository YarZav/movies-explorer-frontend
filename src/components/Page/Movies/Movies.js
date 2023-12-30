import './Movies.css';

import React, { useState } from 'react';

import Content from '../../Content/Content';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './CardList/MoviesCardList';

function Movies(props) {
    const [onSearch, setOnSearch] = useState('');
    const [onIsShort, setOnIsShort] = useState('');

    return(
        <Content type='movies'>
            <SearchForm 
                onSearch={onSearch => setOnSearch(onSearch)}
                onIsShort={onIsShort => setOnIsShort(onIsShort)}
            />
            <MoviesCardList 
                type={props.type}
                onSearch={onSearch}
                onIsShort={onIsShort}
            />
        </Content>
    )
}

export default Movies;