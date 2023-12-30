import './Page.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from './Profile/Profile';
import Movies from './Movies/Movies';

function Page(props) {
    function getContent() {
        const profile = props.type === 'profile' && <Profile />
        const isMovies = props.type === 'movies' || props.type === 'saved-movies'
        const movies = isMovies && <Movies type={props.type}/>
        return profile || movies
    }

    function getFooter() {
        const isMovies = props.type === 'movies' || props.type === 'saved-movies'
        return isMovies && <Footer />
    }

    return(
        <div className='page'>
            <Header type='page' isAuthed={true}/>
            { getContent() }
            { getFooter() }
        </div>
    )
}

export default Page;