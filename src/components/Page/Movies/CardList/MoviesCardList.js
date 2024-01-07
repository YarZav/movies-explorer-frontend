import './MoviesCardList.css';

import React from 'react';

import MoviesCard from '../Card/MoviesCard';

import { moviesPaging } from './MoviesPaging';

function MoviesCardList(props) {
    const [displayedMovies, setDisplayedMovies] = React.useState([]);
    const [isLoadMoreButtonVisible, setIsLoadMoreButtonVisible] = React.useState(false);

    // Life circle

    React.useEffect(() => {
        moviesPaging.resetMoviesOffset();
        displayMovies('', false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.type]);

    React.useEffect(() => {
        const searchText = props.onSearchText.trim().toLowerCase();
        const isShort =  props.onIsShort;
        displayMovies(searchText, isShort);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onSearchText, props.onIsShort]);

    // Display movies

    function displayMovies(searchText, isShort) {
        const movies = moviesPaging.movies || [];
        const moviesByType = getMoviesByType(movies, props.type);
        const searchedMovies = getMoviesBySearchTextandIsShort(moviesByType, searchText, isShort);
        const displayableMovies = getDisplayableMovies(searchedMovies);

        setDisplayedMovies(displayableMovies);
        setIsLoadMoreButtonVisible(searchedMovies.length !== displayableMovies.length);
    }

    function getMoviesByType(movies, type) {
        // Все фильмы для выбранной вкладки "Фильмы" или "Сохраненные фильмы"
        return movies
        .filter(movie => {
            if (type === 'movies') {
                return true;
            } else if (type === 'saved-movies' && movie.isLiked) {
                return true;
            } else {
                return false;
            }
        });
    }

    function getMoviesBySearchTextandIsShort(movies, searchText, isShort) {
        // Все фильмы удовлетворяющие поисковой строке или чекбоксу короткометражка        
        return movies
        .filter(movie => {
            const nameRU = movie.nameRU.trim().toLowerCase();
            const nameEN = movie.nameEN.trim().toLowerCase();
            return nameRU.includes(searchText) || nameEN.includes(searchText);
        })
        .filter(movie => {
            if (isShort) {
                return movie.duration <= 40;
            } else {
                return true;
            }
        });
    }

    function getDisplayableMovies(movies) {
        // Текущие фильмы для отображения
        return movies.slice(0, moviesPaging.moviesOffset);
    }

    // Actions
    
    function moreHandler() {
        moviesPaging.increaseMoviesOffset();

        const searchText = props.onSearchText.trim().toLowerCase();
        const isShort =  props.onIsShort;
        displayMovies(searchText, isShort);
    }

    function updateMovieHandler(newMovie) {
        if (props.type === 'movies') {
            setDisplayedMovies((state) => state.map((oldMovie) => 
                oldMovie.movieId === newMovie.movieId ? newMovie : oldMovie
            ));
        }
        if (props.type === 'saved-movies') {
            setDisplayedMovies((oldMovies) => oldMovies.filter((movie, _) => movie.movieId !== newMovie.movieId));
        }
    }

    // Prepare content

    function getMoviesCardlist() {
        return <div className='movies-card-list'>
            {
                displayedMovies
                .map((movie, index) => (
                    <MoviesCard 
                        movie={movie} 
                        type={props.type} 
                        key={movie.id}
                        onUpdate={updateMovieHandler}
                    />
                ))
            }
        </div>
    }

    function getLoadMoreButton() {
        return isLoadMoreButtonVisible && <div className='movies-card-list__button-container'>
            <button className='movies-card-list__load highlight' onClick={moreHandler}>Ещё</button>
        </div> 
    }

    function getMoviesContent() {
        if (displayedMovies.length === 0) {
            return <h1 className='movies__info'>Ничего не найдено</h1>
        }

        return <div>
            { getMoviesCardlist() }
            { getLoadMoreButton() }
        </div>
    }

    return(
        <div>
            { getMoviesContent() }
        </div>
    )
}

export default MoviesCardList;