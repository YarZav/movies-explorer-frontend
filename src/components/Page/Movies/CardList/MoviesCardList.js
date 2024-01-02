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
    // Всего фильмов
    let remoteMovies = [];
    // Фильмы найденные по поисковой строке И/ИЛИ по короткометражкам
    let searchedMovies = [];
    // Фильмы для отображения
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
            initMovies();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onSearchText, props.onIsShort]);

    // Init movies

    function initMovies() {
        moviesPaging.resetMoviesOffset();

        remoteMovies = [];
        searchedMovies = [];
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
        .then(([remoteMovies, savedMovies]) => {
            moviesLocalStorage.setMovies(remoteMovies);

            setMoviesToDisplay(remoteMovies, savedMovies.data);
        }) 
        .catch((error) => {
            console.log(error);
            // showError();
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    function initSavedMovies(remoteMovies) {
        setIsLoading(true);

        authorisedApi.getMovies()
        .then((savedMovies) => {
            console.log(savedMovies);
            setMoviesToDisplay(remoteMovies, savedMovies.data);
        }) 
        .catch((error) => {
            console.log(error);
            // showError();
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
            initMovies();
        });
    }

    // Draw movies

    function getSearchText() {
        return (moviesLocalStorage.getSearchText() ?? '').trim();
    }

    function getIsShort() {
        return moviesLocalStorage.getIsShort()
    }

    function setMoviesToDisplay(apiMovies, savedMovies) {
        const searchText = getSearchText().toLowerCase();
        const isShort = getIsShort();

        // Маппив фильм с сервиса фильмов и то, что лежит в серверной БД
        // Для проставления лайка и корректного айдишника из сервеной БД
        remoteMovies = apiMovies.map(apiMovie => {
            const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === apiMovie.id);
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
        remoteMovies = remoteMovies
            .filter(movie => {
                if (props.type === 'movies') {
                    return true;
                } else if (props.type === 'saved-movies' && movie.isLiked) {
                    return true;
                } else {
                    return false;
                }
            });
        
        // Все фильмы удовлетворяющие поисковой строке или чекбоксу короткометражка
        searchedMovies = remoteMovies
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
        const startIndex = moviesPaging.moviesOffset;
        moviesPaging.increaseMoviesOffset();
        const endIndex = moviesPaging.moviesOffset;

        let slicedMovies = searchedMovies.slice(startIndex, endIndex);
        setDisplayedMovies(movies => [...movies, ...slicedMovies]);
    }

    // Actions
    
    function moreHandler() {
        // Текущие фильмы для отображения
        const startIndex = moviesPaging.moviesOffset;
        moviesPaging.increaseMoviesOffset();
        const endIndex = moviesPaging.moviesOffset;

        let slicedMovies = searchedMovies.slice(startIndex, endIndex);
        setDisplayedMovies(movies => [...movies, ...slicedMovies]);
    }

    function updateMovieHandler(newMovie) {
        setDisplayedMovies((state) => state.map((oldMovie) => 
            oldMovie.movieId === newMovie.movieId ? newMovie : oldMovie
        ));
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
        const isAllMoviesDisplayed = searchedMovies.length > displayedMovies.length
        return !isAllMoviesDisplayed && <div className='movies-card-list__button-container'>
            <button className='movies-card-list__load highlight' onClick={moreHandler}>Ещё</button>
        </div> 
    }

    function getMoviesContent() {
        if (getSearchText().length === 0) {
            return <h1 className='movies__info'>Нужно ввести ключевое слово</h1>
        }

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