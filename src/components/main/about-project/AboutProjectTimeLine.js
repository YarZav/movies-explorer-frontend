import React from 'react';

import AboutProjectTimeBlock from './AboutProjectTimeBlock';

function AboutProjectTimeLine(props) {
    return (
        <div className='about-project__timeline'>
            <AboutProjectTimeBlock 
                type='backend'
                time='1 неделя'
                text='Back-end'
            />
            <AboutProjectTimeBlock 
                type='frontend'
                time='4 недели'
                text='Front-end'
            />
        </div>
    )
}

export default AboutProjectTimeLine;