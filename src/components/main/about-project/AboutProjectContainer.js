import React from 'react';

import AboutProjectDescription from './AboutProjectDescription';
import AboutProjectTimeLine from './AboutProjectTimeLine';

function AboutProjectContainer() {
    return (
        <div className='flex column content-space-between full-height'>
            <AboutProjectDescription />
            <AboutProjectTimeLine />
        </div>
    )
}

export default AboutProjectContainer;