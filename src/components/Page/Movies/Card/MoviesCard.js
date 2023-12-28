import './MoviesCard.css';

import { moviesUrl } from '../../../../utils/Movies';

import cross from '../../../../images/cross.svg';

function MoviesCard(props) {
    // Actions
    function imageHandler() {
        let url = props.movie.trailerLink;
        window.open(url, '_blank');
    }

    function saveMovieHandler() {

    }

    function removeMovieHandler() {

    }

    // Components

    function getCrossButton() {
        return <button className='movies-card__remove highlight'>
            <img src={cross} alt='Cross' />
        </button>
    }

    function getSelectButton() {
        return <button className='movies-card__select highlight' />
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
                <img className='movies-card__image' src={moviesUrl + "/" + props.movie.image.url} alt='Movie preview'/>
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