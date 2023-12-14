import './Promo.css';

import Content from '../../Content/Content';
import Section from '../../Section/Section'

import promo from '../../../images/promo.svg';

function Promo(props) {
    function onLearnMoreHandler() {
        props.onLearnMoreClick();
    }

    return (
        <Content type='promo'>
            <Section type ={'promo'}>
                <div className='promo__container'>
                    <img className='promo__image' src={promo} alt='Intro image' />
                    <div className='promo__info'>
                        <h1 className='promo__title'>Учебный проект студента факультета еб-разработки.</h1>
                        <p className='promo__description'>Листайте ниже, чтобы узнать больше<br />про этот проект и его создателя.</p>
                        <button className='promo__button highlight' onClick={onLearnMoreHandler}>Узнать больше</button>
                    </div>
                </div>
            </Section>
        </Content>
    )
}

export default Promo;