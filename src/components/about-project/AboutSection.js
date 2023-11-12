import React from 'react';

function AboutSection(props) {
    return (
        <div className='about__text flex column'>
            <h2>{props.title}</h2>
            <p className='h3'>{props.subtitle}</p>
        </div>
    )
}

export default AboutSection;