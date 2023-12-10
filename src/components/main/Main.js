import './Main.css';

import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
    function onLearnMoreClick() {
        let element = document.querySelector('.content_about-project');
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <div className='main'>
            <Header isAuthed={false} />
            <Promo onLearnMoreClick={onLearnMoreClick}/>
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Main;