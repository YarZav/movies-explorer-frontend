import './MainHeader.css';

function MainHeader(props) {
    return (
        <div className='main-header'>
            <h2 className='main-header__title'>{props.text}</h2>
            <div className='main-header__line'></div> 
        </div>
    )
}

export default MainHeader;