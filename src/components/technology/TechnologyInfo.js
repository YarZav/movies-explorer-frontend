import React from 'react';

import TechnologyDescription from './TechnologyDescription';
import Tags from '../tags/Tags';

function TechnologyInfo() {
    const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

    return (
        <div className='technology__info'>
            <TechnologyDescription />
            <Tags tags={technologies}/>
        </div>
    )
}

export default TechnologyInfo;