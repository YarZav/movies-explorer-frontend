import React from 'react';

import Section from '../section/Section'
import SectionHeader from '../section/SectionHeader'
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