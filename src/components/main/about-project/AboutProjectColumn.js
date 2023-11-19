import React from 'react';

function AboutProjectColumn(props) {
    return (
        <div>
            <h3 className='about-project__title'>{props.title}</h3>
            <p className='about-project__subtitle'>{props.subtitle}</p>
        </div>
    )
}

export default AboutProjectColumn;