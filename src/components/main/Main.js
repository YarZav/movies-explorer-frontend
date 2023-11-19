import Promo from './promo/Promo'
import AboutProject from './about-project/AboutProject';
import Techs from './techs/Techs'
import AboutMe from './about-me/AboutMe';
import Portfolio from './portfolio/Portfolio';

function Main() {
    function onLearnMoreClick() {
        let element = document.querySelector('.content_about-project');
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    function onGithubClick() {
        const URL = 'https://github.com/YarZav';
        window.open(URL, '_blank');
    }

    return (
        <div>
            <Promo onLearnMoreClick={onLearnMoreClick}/>
            <AboutProject />
            <Techs />
            <AboutMe onGithubClick={onGithubClick}/>
            <Portfolio />
        </div>
    )
}

export default Main;