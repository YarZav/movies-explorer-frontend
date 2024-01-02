import './Movies.css';

import React, { useState } from 'react';

import Content from '../../Content/Content';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './CardList/MoviesCardList';

function Movies(props) {
    const [onSearchText, setOnSearchText] = useState('');
    const [onIsShort, setOnIsShort] = useState(false);

    return(
        <Content type='movies'>
            <SearchForm 
                type={props.type}
                onSearchText={onSearchText => setOnSearchText(onSearchText)}
                onIsShort={onIsShort => setOnIsShort(onIsShort)}
            />
            <MoviesCardList 
                type={props.type}
                onSearchText={onSearchText}
                onIsShort={onIsShort}
            />
        </Content>
    )
}

export default Movies;