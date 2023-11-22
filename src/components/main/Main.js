import Header from './../header/Header'
import Promo from './promo/Promo'
import AboutProject from './about-project/AboutProject';
import Techs from './techs/Techs'
import AboutMe from './about-me/AboutMe';
import Portfolio from './portfolio/Portfolio';
import Footer from './../footer/Footer';

function Main() {
    function onLearnMoreClick() {
        let element = document.querySelector('.content_about-project');
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <div>
            <Header />
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