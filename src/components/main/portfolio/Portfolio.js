import Content from '../../common/content/Content';
import Section from '../../common/section/Section'
import PortfolioLinks from './PortfolioLinks';

function Portfolio() {
    return (
        <Content type='portfolio'>
            <Section type ={'portfolio'}>
                <h2 className='portfolio__title'>Портфолио</h2>
                <PortfolioLinks />
            </Section>
        </Content>
    )
}

export default Portfolio;