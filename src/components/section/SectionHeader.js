import React from 'react';

function SectionHeader(props) {
    return (
        <div className='section__header'>
            <p className='section__header__text'>{props.text}</p>
            <div className='section__header__line'></div> 
        </div>
    )
}

export default SectionHeader;