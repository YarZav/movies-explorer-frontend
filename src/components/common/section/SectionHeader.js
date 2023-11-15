import React from 'react';

function SectionHeader(props) {
    return (
        <div className='section__header flex column'>
            <h2>{props.text}</h2>
            <div className='section__line bg-white'></div> 
        </div>
    )
}

export default SectionHeader;