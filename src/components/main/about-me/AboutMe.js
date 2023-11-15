import React from 'react';

import Section from '../../common/section/Section'
import SectionHeader from '../../common/section/SectionHeader'
import AboutMeContainer from './AboutMeContainer';

function AboutMe() {
    return (
        <Section type ={'about-me'}>
            <SectionHeader text={'Студент'} />
            <AboutMeContainer />
        </Section>
    )
}

export default AboutMe;