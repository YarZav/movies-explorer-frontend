import Content from '../../common/content/Content';
import Section from '../../common/section/Section'
import SectionHeader from '../../common/section/SectionHeader'
import AboutProjectDescription from './AboutProjectDescription';
import AboutProjectTimeLine from './AboutProjectTimeLine';

function AboutProject() {
    return (
        <Content type='about-project'>
            <Section type ={'about-project'}>
                <SectionHeader text={'О проекте'} />
                <AboutProjectDescription />
                <AboutProjectTimeLine />
            </Section>
        </Content>
    )
}

export default AboutProject;