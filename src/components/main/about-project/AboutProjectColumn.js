import React from 'react';

function AboutProjectColumn(props) {
    return (
        <div className='about-project__column flex column'>
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>
        </div>
    )
}

export default AboutProjectColumn;