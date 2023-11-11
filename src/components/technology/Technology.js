import React from 'react';

import Section from '../section/Section'
import SectionHeader from '../section/SectionHeader'
import TechnologyInfo from './TechnologyInfo';

function Technology() {
    return (
        <Section type ={'technology'}>
            <SectionHeader text={'Технологии'}/>
            <TechnologyInfo />
        </Section>
    )
}

export default Technology;