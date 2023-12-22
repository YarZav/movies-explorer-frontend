import './MoviesCardList.css';

import MoviesCard from '../Card/MoviesCard';

function MoviesCardList(props) {
    function getCountOfMovies() {
        return props.type === 'movies' ? 16 : 3
    }

    return(
        <div>
            <div className='movies-card-list'>
                {
                    Array.apply(null, { length: getCountOfMovies() }).map((e, index) => (
                        <MoviesCard type={props.type} key={index}/>
                    ))
                }
            </div>
            <div className='movies-card-list__button-container'>
                <button className='movies-card-list__load highlight'>Ещё</button>
            </div> 
        </div>
    )
}

export default MoviesCardList;