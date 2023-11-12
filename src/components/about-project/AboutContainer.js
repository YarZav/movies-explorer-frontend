import React from 'react';

import AboutDescription from './AboutDescription';
import AboutTimeLine from './AboutTimeLine';

function AboutContainer() {
    return (
        <div className='about__container'>
            <AboutDescription />
            <AboutTimeLine />
        </div>
    )
}

export default AboutContainer;