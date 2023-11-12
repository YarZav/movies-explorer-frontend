import React from 'react';

import AboutProjectTimeBlock from './AboutProjectTimeBlock';

function AboutProjectTimeLine(props) {
    return (
        <div className='about-project__timeline grid'>
            <AboutProjectTimeBlock 
                type='backend' 
                time='1 неделя' 
                text='Back-end' 
                bgColor='bg-green' 
                textColor='text-black'
            />
            <AboutProjectTimeBlock 
                type='frontend' 
                time='4 недели' 
                text='Front-end' 
                bgColor='bg-grey' 
                textColor='text-white'
            />
        </div>
    )
}

export default AboutProjectTimeLine;