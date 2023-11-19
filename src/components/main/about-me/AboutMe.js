import Content from '../../common/content/Content';
import Section from '../../common/section/Section'
import SectionHeader from '../../common/section/SectionHeader'
import AboutMeContainer from './AboutMeContainer';

function AboutMe() {
    return (
        <Content type='about-me'>
            <Section type ={'about-me'}>
                <SectionHeader text={'Студент'} />
                <AboutMeContainer />
            </Section>
        </Content>
    )
}

export default AboutMe;