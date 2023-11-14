import React from 'react';

import AboutMeDescription from './AboutMeDescription';
import AboutMeImage from './AboutMeImage';

function AboutMeContainer() {
    return (
        <div className='about-me__container flex'>
            <AboutMeDescription />
            <AboutMeImage />
        </div>
    )
}

export default AboutMeContainer;