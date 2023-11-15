import React from 'react';

import AboutProjectDescription from './AboutProjectDescription';
import AboutProjectTimeLine from './AboutProjectTimeLine';

function AboutProjectContainer() {
    return (
        <div className='about-project__container'>
            <AboutProjectDescription />
            <AboutProjectTimeLine />
        </div>
    )
}

export default AboutProjectContainer;