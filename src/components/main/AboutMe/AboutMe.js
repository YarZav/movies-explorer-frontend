import './AboutMe.css';

import Content from '../../Content/Content';
import Section from '../Section/MainSection'
import MainHeader from '../Header/MainHeader';

import avatar from '../../../images/avatar.jpeg';

function AboutMe() {
    function githubHandler() {
        const url = 'https://github.com/YarZav';
        window.open(url, '_blank');
    }

    return (
        <Content type='about-me'>
            <Section type ={'about-me'}>
                <MainHeader text={'Студент'} />
                <div className='about-me__container'>
                    <div>
                        <h1 className='about-me__title'>Ярослав</h1>
                        <h2 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h2>
                        <p className='about-me__description'>Учу WEB разработку.</p>
                        <button className='about-me__github highlight' onClick={githubHandler}>GitHub</button>
                    </div>
                    <img className='about-me__image' src={avatar} alt='Avatar image' />
                </div>
            </Section>
        </Content>
    )
}

export default AboutMe;