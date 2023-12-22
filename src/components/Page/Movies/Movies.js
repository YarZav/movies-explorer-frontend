import './Movies.css';

import Content from '../../Content/Content';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './CardList/MoviesCardList';

function Movies(props) {
    return(
        <Content type='movies'>
            <SearchForm />
            <MoviesCardList type={props.type}/>
        </Content>
    )
}

export default Movies;