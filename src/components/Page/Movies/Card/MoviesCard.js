import './MoviesCard.css';

import React from 'react';

import { moviesUrl } from '../../../../utils/MoviesApi';
import { authorisedApi } from '../../../../utils/MainApi';

import cross from '../../../../images/cross.svg';

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);

    React.useEffect(() => {
        console.log(props.movie);
        setIsLiked(props.movie.isLiked || false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Actions

    function imageHandler() {
        let url = props.movie.trailerLink;
        window.open(url, '_blank');
    }

    function likeHandler(isLiked) {
        props.movie.isLiked = isLiked;
        setIsLiked(isLiked);
    } 

    function moviesHandler() {
        if (isLiked) {
            authorisedApi.deleteMovies(props.movie._id)
            .then((result) => {
                likeHandler(false);
            });
        } else {
            const image = moviesUrl + '/' + props.movie.image.url;
            const thumbnail = moviesUrl + '/' + props.movie.image.formats.thumbnail.url;
            authorisedApi.postMovies({
                country: props.movie.country,
                director: props.movie.director,
                duration: props.movie.duration,
                year: props.movie.year,
                description: props.movie.description,
                image: image,
                thumbnail: thumbnail,
                trailerLink: props.movie.trailerLink,
                movieId: props.movie.id,
                nameRU: props.movie.nameRU,
                nameEN: props.movie.nameEN
            })
            .then((result) => {
                props.movie._id = result.data._id;
                likeHandler(true);
            });
        }
    }

    // Components

    function getCrossButton() {
        return <button className='movies-card__remove highlight'>
            <img src={cross} alt='Cross' />
        </button>
    }

    function getSelectButton() {
        return <button 
            className={`movies-card__select ${isLiked && 'movies-card_selected'} highlight`}
            onClick={moviesHandler} 
        />
    }

    function getButton() {
        const crossButton = props.type === 'saved-movies' && getCrossButton();
        const selectButton = props.type === 'movies' && getSelectButton();
        return crossButton || selectButton;
    }

    function getDuration() {
        const hours = parseInt(props.movie.duration / 60);
        const minutes = parseInt(props.movie.duration - hours * 60);

        if (hours > 0) {
            return `${hours}ч${minutes}м`
        } else {
            return `${minutes}м`
        }
    }

    return(
        <div className='movies-card'>
            <div className='movies-card__image-container highlight' onClick={imageHandler} >
                <img className='movies-card__image' src={moviesUrl + '/' + props.movie.image.url} alt='Movie preview'/>
            </div>
            <div className='movies-card__info-container'>
                <p className='movies-card__title'>{props.movie.nameRU}</p>
                { getButton() }
            </div>
            <p className='movies-card__duration'>{getDuration()}</p>
        </div>
    )
}

export default MoviesCard;