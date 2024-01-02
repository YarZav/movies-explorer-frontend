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
    const [remoteMovies, setRemoteMovies] = React.useState([]);
    // Фильмы отфильтрованные по поисковой строке
    const [searchedMovies, setSearchedMovies] = React.useState([]);
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
    }, []);

    React.useEffect(() => {
        initMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.type]);

    React.useEffect(() => {
        moviesPaging.resetMoviesOffset();
        initSearchedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onSearchText]);

    React.useEffect(() => {
        moviesPaging.resetMoviesOffset();
        initSearchedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onIsShort]);

    React.useEffect(() => {
        moviesPaging.resetMoviesOffset();
        initSearchedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [remoteMovies]);

    React.useEffect(() => {
        initDisplayedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchedMovies]);

    // Init movies

    function initMovies() {
        if (props.type === 'movies') {
            initRemoteMovies();
            return;
        }
        if (props.type === 'saved-movies') {
            initSavedMovies();
            return;
        }
    }

    function initRemoteMovies() {
        const remoteMovies = moviesLocalStorage.getMovies();
        // if (movies !== null) {
        //     setRemoteMovies(movies);
        //     initSavedMovies();
        //     return;
        // }
    
        setIsLoading(true);

        Promise.all([
            moviesApi.getMovies(), 
            authorisedApi.getMovies()
        ])
        .then(([remoteMovies, savedMovies]) => {
            mapRemoteAndSavedMovies(remoteMovies, savedMovies.data);
            moviesLocalStorage.setMovies(remoteMovies);
            setRemoteMovies(remoteMovies);
        }) 
        .catch((error) => {
            console.log(error);
            showError();
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    function initSavedMovies() {
        const remoteMovies = moviesLocalStorage.getMovies();

        setIsLoading(true);

        authorisedApi.getMovies()
        .then((savedMovies) => {
            mapRemoteAndSavedMovies(remoteMovies, savedMovies.data);
            setRemoteMovies(remoteMovies);
        }) 
        .catch((error) => {
            console.log(error);
            showError();
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    function mapRemoteAndSavedMovies(remoteMovies, savedMovies) {
        remoteMovies.forEach(remoteMovie => {
            const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === remoteMovie.id);
            if (savedMovie) {
                remoteMovie.isLiked = true;
                remoteMovie.movieId = savedMovie._id;
            } else {
                remoteMovie.isLiked = false;
                remoteMovie.movieId = '';
            }
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

    function initSearchedMovies() {
        const searchText = getSearchText().toLowerCase();
        const isShort = getIsShort();

        const filteredMovies = remoteMovies
            .filter(movie => {
                if (props.type === 'movies') {
                    return true;
                } else if (props.type === 'saved-movies' && movie.isLiked) {
                    return true;
                } else {
                    return false;
                }
            })
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

        setSearchedMovies(filteredMovies);
    }

    function initDisplayedMovies() {
        let slicedMovies = searchedMovies.slice(0, moviesPaging.moviesOffset)
        setDisplayedMovies(slicedMovies);
    }

    // Actions
    
    function moreHandler() {
        moviesPaging.increaseMoviesOffset();
        initDisplayedMovies();
    }

    // Prepare content

    function getMoviesCardlist() {
        return <div className='movies-card-list'>
            {
                displayedMovies
                .map((movie, index) => (
                    <MoviesCard movie={movie} type={props.type} key={movie.id}/>
                ))
            }
        </div>
    }

    function getLoadMoreButton() {
        const isAllMoviesDisplayed = searchedMovies.length === displayedMovies.length
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