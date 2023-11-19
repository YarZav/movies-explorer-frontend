import link from '../../../images/link.svg';

function PortfolioLink(props) {
    return (
        <div>
            <div className='portfolio__link'>
                <p className='portfolio__link__title'>{props.title}</p>
                <img className='portfolio__link__image' src={link} alt='link'></img>
            </div>
            {props.isSeparated && <div className='portfolio__link__line'></div>}
        </div>
    )
}

export default PortfolioLink;