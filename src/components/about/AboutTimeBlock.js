import React from 'react';

function AboutTimeBlock(props) {
    return (
        <div className='about__timeblock__container'>
            <div className={`about__timeblock about__timeblock_${props.type}`}>
                {props.time}
            </div>
            <p className='about__timeblock__text'>{props.text}</p>
        </div>
    )
}

export default AboutTimeBlock;