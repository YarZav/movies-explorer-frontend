import './Movies.css';

import React, { useState } from 'react';

import Content from '../../Content/Content';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './CardList/MoviesCardList';
import Preloader from '../../Preloader/Preloader';

import { moviesLocalStorage } from '../../../utils/MoviesLocalStorage';
import { moviesApi } from '../../../utils/MoviesApi';
import { authorisedApi } from '../../../utils/MainApi';

import { moviesPaging } from './CardList/MoviesPaging';

import { debounce } from './Debounse';

function Movies(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [onSearchText, setOnSearchText] = useState('');
    const [onIsShort, setOnIsShort] = useState(false);

    const resizeDebounse = debounce(() => {
        console.log('resized');
    });

    // Life circle

    React.useEffect(() => {
        getMovies();

        window.addEventListener("resize", resizeHandler);
    
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Fetch movies 

    function getMovies() {
        const movies = moviesLocalStorage.getMovies();
        if (movies !== null) {
            getSavedMovies(movies);
            return;
        }
    
        setIsLoading(true);

        Promise.all([
            moviesApi.getMovies(), 
            authorisedApi.getMovies()
        ])
        .then(([movies, savedMovies]) => {
            saveMovies(movies, savedMovies.data);
        }) 
        .catch((error) => {
            console.log(error);
            showError();
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    function getSavedMovies(movies) {
        setIsLoading(true);

        authorisedApi.getMovies()
        .then((savedMovies) => {
            saveMovies(movies, savedMovies.data);
        }) 
        .catch((error) => {
            console.log(error);
            showError();
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
    
    function showError() {
        window.alert('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    }

    function saveMovies(movies, savedMovies) {
        // Маппинг фильмов с сервиса фильмов и то, что лежит в серверной БД
        // Для проставления лайка и корректного айдишника из сервеной БД
        const mappedMovies = movies.map(movie => {
            const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === movies.id);
            if (savedMovie) {
                movie.isLiked = true;
                movie._id = savedMovie._id;
            } else {
                movie.isLiked = false;
                movie._id = '';
            }

            return movie;
        });

        moviesPaging.movies = mappedMovies;
        moviesLocalStorage.setMovies(mappedMovies);
    }

    // Resize 

    function resizeHandler() {
        resizeDebounse();
    }

    return(
        <Content type='movies'>
            { 
                isLoading && <Preloader /> 
            }
            { 
                !isLoading &&<div>
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
                </div>
            }
        </Content>
    )
}

export default Movies;