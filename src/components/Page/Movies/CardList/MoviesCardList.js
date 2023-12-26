import './MoviesCardList.css';

import React from 'react';

import MoviesCard from '../Card/MoviesCard';
import Preloader from '../../../Preloader/Preloader';

import { moviesApi } from '../../../../utils/Movies';
import { moviesPaging } from './MoviesPaging';

function MoviesCardList(props) {
    const [isLoading, setIsLoading] = React.useState(false);
    // Всего фильмов
    const [movies, setMovies] = React.useState([]);
    // Фильмы отфильтрованные по поисковой строке
    const [searchedMovies, setSearchedMovies] = React.useState([]);
    // Фильмы для отображения
    const [displayedMovies, setDisplayedMovies] = React.useState([]);

    // Life circle

    React.useEffect(() => {
        initMovies();

        window.addEventListener("resize", resizeHandle);
    
        return () => {
            window.removeEventListener('resize', resizeHandle);
        };
    }, []);

    React.useEffect(() => {
        moviesPaging.resetMoviesOffset();
        initSearchedMovies();
    }, [props.searchText]);

    React.useEffect(() => {
        initDisplayedMovies();
    }, [searchedMovies]);


    // Init movies

    function initMovies() {
        setIsLoading(true);
    
        moviesApi.getMovies()
        .then((result) => {
            setMovies(result);
        }) 
        .catch((error) => {
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

    function resizeHandle() {
        moviesPaging.startDebounce(() => {
            moviesPaging.resetMoviesOffset();
            initSearchedMovies();
        });
    }

    // Draw movies

    function initSearchedMovies() {
        const searchText = getSearchText();

        const filteredMovies = movies
        .filter(movie => {
            let nameRU = movie.nameRU.trim().toLowerCase();
            let nameEN = movie.nameEN.trim().toLowerCase();
            let wrappedSearchText = searchText.toLowerCase()
            return nameRU.includes(wrappedSearchText) || nameEN.includes(wrappedSearchText);
        });
        setSearchedMovies(filteredMovies);
    }

    function initDisplayedMovies() {
        let slicedMovies = searchedMovies.slice(0, moviesPaging.moviesOffset)
        setDisplayedMovies(slicedMovies);
    }

    // Actions
    
    function moreHandle() {
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
            <button className='movies-card-list__load highlight' onClick={moreHandle}>Ещё</button>
        </div> 
    }

    function getMoviesContent() {
        const searchText = getSearchText();

        if (searchText.length === 0) {
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

     // Other

    function getSearchText() {
        return props.searchText.trim()
    }

    return(
        <div>
            { isLoading && <Preloader /> }
            { !isLoading && getMoviesContent() }
        </div>
    )
}

export default MoviesCardList;