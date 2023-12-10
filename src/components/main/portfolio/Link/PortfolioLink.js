import './PortfolioLink.css';

import link from '../../../../images/link.svg';

function PortfolioLink(props) {
    function onClick() {
        window.open(props.url, '_blank');
    }

    return (
        <div className='highlight' onClick={onClick}>
            <div className='portfolio__link'>
                <p className='portfolio__link__title'>{props.title}</p>
                <img className='portfolio__link__image' src={link} alt='link'></img>
            </div>
            {props.isSeparated && <div className='portfolio__link__line'></div>}
        </div>
    )
}

export default PortfolioLink;