import React from 'react';

function Tag(props) {
    return (
        <p className='tag flex center text-white bg-grey'>{props.tag}</p>
    )
}

export default Tag;