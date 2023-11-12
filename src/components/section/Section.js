import React from 'react';

function Section(props) {
    return (
        <div className={`section section_${props.type} text-white`}>
            <div className={`section__container section__container_${props.type}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Section;