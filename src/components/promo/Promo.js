import React from 'react';

import Section from '../section/Section'
import IntroImage from './IntroImage';

function Promo() {
    return (
        <Section type ={'intro'}>
                <div className='intro__info'>
                    <div className='intro__text'>
                        <h1 className='intro__title'>Учебный проект студента<br />факультета<br />Веб-разработки.</h1>
                        <h2 className='intro__subtitle'>Листайте ниже, чтобы узнать больше<br />про этот проект и его создателя.</h2>
                    </div>
                    <button className='intro__more'>Узнать больше</button>
                </div>
                <IntroImage />
        </Section>
    )
}

export default Promo;