import React from 'react';

import introImage from '../../images/intro.svg';

function IntroImage() {
    return (
        <img className='intro__image' src={introImage} alt='Intro image' />
    )
}

export default IntroImage;