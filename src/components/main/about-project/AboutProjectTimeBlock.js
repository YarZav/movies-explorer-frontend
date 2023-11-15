import React from 'react';

function AboutProjectTimeBlock(props) {
    return (
        <div className='about-project__timeblock__container flex column'>
            <div className={`about-project__timeblock about__timeblock_${props.type} ${props.bgColor} flex center-hv`}>
                <p className={`${props.textColor}`}>{props.time}</p>
            </div>
            <p className='font-medium text-dark-grey text-center'>{props.text}</p>
        </div>
    )
}

export default AboutProjectTimeBlock;