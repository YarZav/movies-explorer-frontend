import './Techs.css';

import Content from '../../Content/Content';
import Section from '../../Section/Section'
import SectionHeader from '../../Section/SectionHeader'
import TechsTag from './Tag/TechsTag';

function Techs() {
    const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

    return (
        <Content type='techs'>
            <Section type ={'techs'}>
                <SectionHeader text={'Технологии'}/>
                <div className='techs__description'>
                    <h1 className='techs__title'>7 технологий</h1>
                    <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили<br />в дипломном проекте.</p>
                </div>
                <div className='techs__tags'>
                    { technologies.map(technology => { return <TechsTag tag={technology} key={technology} /> }) }
                </div>
            </Section>
        </Content>
    )
}

export default Techs;