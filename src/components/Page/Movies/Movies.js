import './Movies.css';

import React, { useState } from 'react';

import Content from '../../Content/Content';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './CardList/MoviesCardList';

function Movies(props) {
    const [searchText, setSearchText] = useState('');

    // Actions

    function searchHandle(value) {
        setSearchText(value);
    }

    return(
        <Content type='movies'>
            <SearchForm onSearch={searchHandle} />
            <MoviesCardList type={props.type} searchText={searchText}/>
        </Content>
    )
}

export default Movies;