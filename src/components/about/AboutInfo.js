import React from 'react';

import AboutDescription from './AboutDescription';
import AboutTimeLine from './AboutTimeLine';

function AboutInfo() {
    return (
        <div className='about__info'>
            <AboutDescription />
            <AboutTimeLine />
        </div>
    )
}

export default AboutInfo;