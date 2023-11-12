import React from 'react';

function SectionHeader(props) {
    return (
        <div className='section__header'>
            <h2>{props.text}</h2>
            <div className='section__line'></div> 
        </div>
    )
}

export default SectionHeader;