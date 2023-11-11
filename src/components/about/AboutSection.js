import React from 'react';

function AboutSection(props) {
    return (
        <div className='about__text'>
            <h2 className='about__title'>{props.title}</h2>
            <p className='about__subtitle'>{props.subtitle}</p>
        </div>
    )
}

export default AboutSection;