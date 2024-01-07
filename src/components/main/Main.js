import './Main.css';

import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import { mainLocalStorage } from '../../utils/MainLocalStorage';

function Main() {
    function isAuthed() {
        return mainLocalStorage.getJwt()
    }

    return (
        <main className='main'>
            <Header type='main' isAuthed={isAuthed()} />
            <main>
                <Promo/>
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </main>
    )
}

export default Main;