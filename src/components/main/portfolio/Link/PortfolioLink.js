import './PortfolioLink.css';

import link from '../../../../images/link.svg';

function PortfolioLink(props) {
    function onClick() {
        window.open(props.url, '_blank');
    }

    return (
        <div className='highlight' onClick={onClick}>
            <div className='portfolio-link'>
                <p className='portfolio-link__title'>{props.title}</p>
                <img className='portfolio-link__image' src={link} alt='link'></img>
            </div>
            {props.isSeparated && <div className='portfolio-link__line'></div>}
        </div>
    )
}

export default PortfolioLink;