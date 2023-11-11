import React from 'react';

import Tag from './Tag';

function Tags(porps) {
    return (
        <div className='about__technologies'>
            { porps.tags.map(tag => { return <Tag tag={tag}/> }) }
        </div>
    )
}

export default Tags;