import React from 'react';

function AboutTimeBlock(props) {
    return (
        <div className='about__timeblock__container flex column'>
            <div className={`about__timeblock about__timeblock_${props.type} flex center`}>
                {props.time}
            </div>
            <p className=''>{props.text}</p>
        </div>
    )
}

export default AboutTimeBlock;