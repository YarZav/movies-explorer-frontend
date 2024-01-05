import './Promo.css';

import Content from '../../Content/Content';
import Section from '../Section/MainSection'

import promo from '../../../images/promo.svg';

function Promo() {
    function learnMoreHandler() {
        let element = document.querySelector('.content__about-project');
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <Content type='promo'>
            <Section type ={'promo'}>
                <div className='promo__container'>
                    <img className='promo__image' src={promo} alt='Intro' />
                    <div className='promo__info'>
                        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                        <p className='promo__description'>Листайте ниже, чтобы узнать больше<br />про этот проект и его создателя.</p>
                        <button className='promo__button highlight' onClick={learnMoreHandler}>Узнать больше</button>
                    </div>
                </div>
            </Section>
        </Content>
    )
}

export default Promo;