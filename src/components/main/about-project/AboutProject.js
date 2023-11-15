import React from 'react';

import Section from '../../common/section/Section'
import SectionHeader from '../../common/section/SectionHeader'
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