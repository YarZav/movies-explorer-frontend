import AboutMeDescription from './AboutMeDescription';
import AboutMeImage from './AboutMeImage';

function AboutMeContainer(props) {
    function onGithubClick() {
        props.onGithubClick();
    }

    return (
        <div className='about-me__container'>
            <AboutMeDescription onGithubClick={onGithubClick}/>
            <AboutMeImage />
        </div>
    )
}

export default AboutMeContainer;