import React from 'react';

import AboutTimeBlock from './AboutTimeBlock';

function AboutTimeLine(props) {
    return (
        <div className='about__timeline grid'>
            <AboutTimeBlock type='backend' time='1 неделя' text='Back-end' />
            <AboutTimeBlock type='frontend' time='4 недели' text='Front-end' />
        </div>
    )
}

export default AboutTimeLine;