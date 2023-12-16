import './HeaderProfile.css';

import profile from '../../../images/profile.svg';

function HeaderProfile(props) {
    function clickHandler() {
        props.onClick();
    }

    return (
        <div className='header-profile'>
            <button className='header-profile__button highlight' onClick={clickHandler}>Аккаунт</button>
            <div className='header-profile__avatar'>
                <img src={profile} alt='Profile' />
            </div>
        </div>
    )
}

export default HeaderProfile;