import Content from '../../common/content/Content';
import Section from '../../common/section/Section'
import SectionHeader from '../../common/section/SectionHeader'
import TechsDescription from './TechsDescription';
import TechsTags from './TechsTags';

function Techs() {
    return (
        <Content type='techs'>
            <Section type ={'techs'}>
                <SectionHeader text={'Технологии'}/>
                <TechsDescription />
                <TechsTags />
            </Section>
        </Content>
    )
}

export default Techs;