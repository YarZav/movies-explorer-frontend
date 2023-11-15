import React from 'react';

import Section from '../../common/section/Section'
import SectionHeader from '../../common/section/SectionHeader'
import TechsContainer from './TechsContainer';

function Techs() {
    return (
        <Section className='bg-green' type ={'techs'}>
            <SectionHeader text={'Технологии'}/>
            <TechsContainer />
        </Section>
    )
}

export default Techs;