import React from 'react';

import Section from '../section/Section'
import SectionHeader from '../section/SectionHeader'
import AboutProjectContainer from './AboutProjectContainer';

function AboutProject() {
    return (
        <Section type ={'about-project'}>
            <SectionHeader text={'О проекте'} />
            <AboutProjectContainer />
        </Section>
    )
}

export default AboutProject;