import React from 'react';

import avatar from '../../../images/avatar.jpeg';

function AboutMeImage() {
    return (
        <img className='about-me__image' src={avatar} alt='Avatar image' />
    )
}

export default AboutMeImage;