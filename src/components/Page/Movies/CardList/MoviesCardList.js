import './MoviesCardList.css';

import React from 'react';

import MoviesCard from '../Card/MoviesCard';
import Preloader from '../../../Preloader/Preloader';

import { authorisedApi } from '../../../../utils/MainApi';
import { moviesApi } from '../../../../utils/MoviesApi';
import { moviesPaging } from './MoviesPaging';
import { moviesLocalStorage } from '../../../../utils/MoviesLocalStorage';

function MoviesCardList(props) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [displayedMovies, setDisplayedMovies] = React.useState([]);

    // Life circle

    React.useEffect(() => {
        initMovies();

        window.addEventListener("resize", resizeHandler);
    
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.type]);

    React.useEffect(() => {
        return () => {
            setMoviesToDisplay();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onSearchText, props.onIsShort]);

    // Init movies

    function initMovies() {
        moviesPaging.resetMoviesOffset();
        moviesPaging.remoteMovies = [];
        moviesPaging.searchedMovies = [];

        setDisplayedMovies([]);

        fetchMovies();
    }

    function fetchMovies() {
        let remoteMovies = moviesLocalStorage.getMovies();
        if (remoteMovies !== null) {
            initSavedMovies(remoteMovies);
            return;
        }
    
        setIsLoading(true);

        Promise.all([
            moviesApi.getMovies(), 
            authorisedApi.getMovies()
        ])
        .then(([apiMovies, localMovies]) => {
            moviesLocalStorage.setMovies(apiMovies);
            
            moviesPaging.remoteMovies = apiMovies;
            moviesPaging.savedMovies = localMovies.data;

            setMoviesToDisplay();
        }) 
        .catch((error) => {
            console.log(error);
            showError();
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    function initSavedMovies(apiMovies) {
        setIsLoading(true);

        authorisedApi.getMovies()
        .then((localMovies) => {
            moviesPaging.savedMovies = localMovies.data;
            moviesPaging.remoteMovies = apiMovies;

            setMoviesToDisplay();
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
        if (window.confirm('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')) {
            initMovies();
        }
    }

    // Reset movies

    function resizeHandler() {
        moviesPaging.startDebounce(() => {
            moviesPaging.resetMoviesOffset();
            setMoviesToDisplay();
        });
    }

    // Draw movies

    function getSearchText() {
        return (moviesLocalStorage.getSearchText() ?? '').trim();
    }

    function getIsShort() {
        return moviesLocalStorage.getIsShort()
    }

    function setMoviesToDisplay() {
        const searchText = getSearchText().toLowerCase();
        const isShort = getIsShort();

        // Маппив фильм с сервиса фильмов и то, что лежит в серверной БД
        // Для проставления лайка и корректного айдишника из сервеной БД
        moviesPaging.remoteMovies = moviesPaging.remoteMovies.map(apiMovie => {
            const savedMovie = moviesPaging.savedMovies.find(savedMovie => savedMovie.movieId === apiMovie.id);
            if (savedMovie) {
                apiMovie.isLiked = true;
                apiMovie.movieId = savedMovie._id;
            } else {
                apiMovie.isLiked = false;
                apiMovie.movieId = '';
            }

            return apiMovie;
        });

        // Все фильмы для выбранной вкладки "Фильмы" или "Сохраненные фильмы"
        moviesPaging.remoteMovies = moviesPaging.remoteMovies
            .filter(movie => {
                if (props.type === 'movies') {
                    return true;
                } else if (props.type === 'saved-movies' && movie.isLiked) {
                    return true;
                } else {
                    return false;
                }
            });
        
        // // Все фильмы удовлетворяющие поисковой строке или чекбоксу короткометражка
        moviesPaging.searchedMovies = moviesPaging.remoteMovies
            .filter(movie => {
                let nameRU = movie.nameRU.trim().toLowerCase();
                let nameEN = movie.nameEN.trim().toLowerCase();
                return nameRU.includes(searchText) || nameEN.includes(searchText);
            })
            .filter(movie => {
                if (isShort) {
                    return movie.duration <= 40;
                } else {
                    return true;
                }
            });

        // Текущие фильмы для отображения        
        const endIndex = moviesPaging.moviesOffset;
        let slicedMovies = moviesPaging.searchedMovies.slice(0, endIndex);

        setDisplayedMovies(slicedMovies);
    }

    // Actions
    
    function moreHandler() {
        moviesPaging.increaseMoviesOffset();

        const endIndex = moviesPaging.moviesOffset;
        let slicedMovies = moviesPaging.searchedMovies.slice(0, endIndex);
        setDisplayedMovies(slicedMovies);
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
        const isAllMoviesDisplayed = moviesPaging.moviesOffset >= moviesPaging.searchedMovies.length;

        return !isAllMoviesDisplayed && <div className='movies-card-list__button-container'>
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
            { isLoading && <Preloader /> }
            { !isLoading && getMoviesContent() }
        </div>
    )
}

export default MoviesCardList;