import PortfolioLink from "./PortfolioLink";

function PortfolioLinks() {
    return (
        <div className='portfolio__links'>
           <PortfolioLink title='Статичный сайт' isSeparated={true} />
           <PortfolioLink title='Адаптивный сайт' isSeparated={true} />
           <PortfolioLink title='Одностраничное приложение' isSeparated={false} />
        </div>
    )
}

export default PortfolioLinks;