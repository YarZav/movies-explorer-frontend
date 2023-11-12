import React from 'react';

import AboutDescription from './AboutDescription';
import AboutTimeLine from './AboutTimeLine';

function AboutProjectContainer() {
    return (
        <div className='about-project__container'>
            <AboutDescription />
            <AboutTimeLine />
        </div>
    )
}

export default AboutProjectContainer;