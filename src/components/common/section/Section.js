import React from 'react';

function Section(props) {
    return (
        <div className={`flex section_${props.type}`}>
            <div className={`flex section__container_${props.type}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Section;