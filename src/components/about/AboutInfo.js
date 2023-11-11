import React from 'react';

import Tags from '../Tags/Tags';
import AboutDescription from './AboutDescription';

function AboutInfo() {
    const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

    return (
        <div className='about__info'>
            <AboutDescription />
            <Tags tags={technologies}/>
        </div>
    )
}

export default AboutInfo;