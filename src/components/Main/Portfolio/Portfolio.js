import './Portfolio.css';

import Content from '../../Content/Content';
import Section from '../../Section/Section'
import PortfolioLink from "./Link/PortfolioLink";

function Portfolio() {
    return (
        <Content type='portfolio'>
            <Section type ={'portfolio'}>
                <h2 className='portfolio__title'>Портфолио</h2>
                <div className='portfolio__links'>
                    <PortfolioLink title='Статичный сайт' isSeparated={true} url='https://github.com/YarZav/russian-travel' />
                    <PortfolioLink title='Адаптивный сайт' isSeparated={true} url='https://github.com/YarZav/mesto' />
                    <PortfolioLink title='Одностраничное приложение' isSeparated={false} url='https://github.com/YarZav/react-mesto-api-full-gha'/>
                </div>
            </Section>
        </Content>
    )
}

export default Portfolio;