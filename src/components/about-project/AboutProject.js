import React from 'react';

import Section from '../section/Section'
import SectionHeader from '../section/SectionHeader'
import AboutContainer from './AboutContainer';

function AboutProject() {
    return (
        <Section type ={'about'}>
            <SectionHeader text={'О проекте'}/>
            <AboutContainer />
        </Section>
    )
}

export default AboutProject;