import './Promo.css';

import Content from '../../Content/Content';
import Section from '../../Section/Section'
import Button from "../../Button/Button";

import promo from '../../../images/promo.svg';

function Promo(props) {
    function onLearnMoreClick() {
        props.onLearnMoreClick();
    }

    return (
        <Content type='promo'>
            <Section type ={'promo'}>
                <div className='promo__container'>
                    <div>
                        <h1 className='promo__title'>Учебный проект студента факультета еб-разработки.</h1>
                        <p className='promo__description'>Листайте ниже, чтобы узнать больше<br />про этот проект и его создателя.</p>
                        <Button textColor='text-white' text='Узнать больше' type='promo' onClick={onLearnMoreClick}/>
                    </div>
                    <img className='promo__image' src={promo} alt='Intro image' />
                </div>
            </Section>
        </Content>
    )
}

export default Promo;