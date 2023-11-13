import React from 'react';

import Section from '../section/Section'
import SectionHeader from '../section/SectionHeader'
import TechsContainer from './TechsContainer';

function Techs() {
    return (
        <Section className='bg-green' type ={'technology'}>
            <SectionHeader text={'Технологии'}/>
            <TechsContainer />
        </Section>
    )
}

export default Techs;