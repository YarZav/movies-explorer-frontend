import './AboutProject.css';

import Content from '../../Content/Content';
import Section from '../../Section/Section'
import SectionHeader from '../../Section/SectionHeader'
import AboutProjectColumn from './Column/AboutProjectColumn';
import AboutProjectTimeBlock from './TimeBlock/AboutProjectTimeBlock';

function AboutProject() {
    return (
        <Content type='about-project'>
            <Section type ={'about-project'}>
                <SectionHeader text={'О проекте'} />
                <div className='about-project__description'>
                    <AboutProjectColumn 
                        title='Дипломный проект включал 5 этапов' 
                        subtitle='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.' 
                    />
                    <AboutProjectColumn 
                        title='На выполнение диплома ушло 5 недель'
                        subtitle='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
                    />
                </div>
                <div className='about-project__timeline'>
                    <AboutProjectTimeBlock 
                        type='backend'
                        time='1 неделя'
                        text='Back-end'
                    />
                    <AboutProjectTimeBlock 
                        type='frontend'
                        time='4 недели'
                        text='Front-end'
                    />
                </div>
            </Section>
        </Content>
    )
}

export default AboutProject;