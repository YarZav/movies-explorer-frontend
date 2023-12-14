import './AboutMe.css';

import Content from '../../Content/Content';
import Section from '../../Section/Section'
import SectionHeader from '../../Section/SectionHeader'

import avatar from '../../../images/avatar.jpeg';

function AboutMe() {
    function onGithubHandler() {
        const URL = 'https://github.com/YarZav';
        window.open(URL, '_blank');
    }

    return (
        <Content type='about-me'>
            <Section type ={'about-me'}>
                <SectionHeader text={'Студент'} />
                <div className='about-me__container'>
                    <div>
                        <h1 className='about-me__title'>Ярослав</h1>
                        <h2 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h2>
                        <p className='about-me__description'>Учу WEB разработку.</p>
                        <button className='about-me__github highlight' onClick={onGithubHandler}>GitHub</button>
                    </div>
                    <img className='about-me__image' src={avatar} alt='Avatar image' />
                </div>
            </Section>
        </Content>
    )
}

export default AboutMe;