import './Movies.css';

import React, { useState, useEffect } from 'react';

import Content from '../../Content/Content';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './CardList/MoviesCardList';

function Movies(props) {
    const [onSearch, setOnSearch] = useState('');

    return(
        <Content type='movies'>
            <SearchForm 
                onSearch={onSearch => setOnSearch(onSearch)}
            />
            <MoviesCardList 
                type={props.type}
                onSearch={onSearch}
            />
        </Content>
    )
}

export default Movies;