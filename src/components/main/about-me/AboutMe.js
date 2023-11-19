import Content from '../../common/content/Content';
import Section from '../../common/section/Section'
import SectionHeader from '../../common/section/SectionHeader'
import AboutMeContainer from './AboutMeContainer';

function AboutMe(props) {
    function onGithubClick() {
        props.onGithubClick();
    }

    return (
        <Content type='about-me'>
            <Section type ={'about-me'}>
                <SectionHeader text={'Студент'} />
                <AboutMeContainer onGithubClick={onGithubClick}/>
            </Section>
        </Content>
    )
}

export default AboutMe;