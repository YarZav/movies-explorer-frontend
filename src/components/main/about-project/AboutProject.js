import React from 'react';

import Content from '../../common/content/Content';
import Section from '../../common/section/Section'
import SectionHeader from '../../common/section/SectionHeader'
import AboutProjectContainer from './AboutProjectContainer';

function AboutProject() {
    return (
        <Content backgroundColor='bg-dark_grey'>
            <Section type ={'about-project'}>
                <SectionHeader text={'О проекте'} />
                <AboutProjectContainer />
            </Section>
        </Content>
    )
}

export default AboutProject;