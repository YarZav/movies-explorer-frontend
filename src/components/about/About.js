import React from 'react';

import Section from '../section/Section'
import SectionHeader from '../section/SectionHeader'
import AboutInfo from './AboutInfo';

function About() {
    return (
        <Section type ={'about'}>
            <SectionHeader text={'Технологии'}/>
            <AboutInfo />
        </Section>
    )
}

export default About;