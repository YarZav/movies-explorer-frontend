import PortfolioLink from "./PortfolioLink";

function PortfolioLinks() {
    return (
        <div className='portfolio__links'>
           <PortfolioLink title='Статичный сайт' isSeparated={true} url='https://github.com/YarZav/russian-travel' />
           <PortfolioLink title='Адаптивный сайт' isSeparated={true} url='https://github.com/YarZav/mesto' />
           <PortfolioLink title='Одностраничное приложение' isSeparated={false} url='https://github.com/YarZav/react-mesto-api-full-gha'/>
        </div>
    )
}

export default PortfolioLinks;