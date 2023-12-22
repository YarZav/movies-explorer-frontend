import './MoviesCard.css';

import movie from '../../../../images/movie.png';
import cross from '../../../../images/cross.svg';

function MoviesCard(props) {
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

    return(
        <div className='movies-card'>
            <img className='movies-card__image' src={movie} alt='Movie preview'/>
            <div className='movies-card__info-container'>
                <p className='movies-card__title'>33 слова о дизайне</p>
                { getButton() }
            </div>
            <p className='movies-card__duration'>1ч42м</p>
        </div>
    )
}

export default MoviesCard;