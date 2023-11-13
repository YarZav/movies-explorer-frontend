import React from 'react';

import TechsDescription from './TechsDescription';
import Tags from '../tags/Tags';

function TechsContainer() {
    const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

    return (
        <div className='techs__container flex column'>
            <TechsDescription />
            <Tags tags={technologies}/>
        </div>
    )
}

export default TechsContainer;