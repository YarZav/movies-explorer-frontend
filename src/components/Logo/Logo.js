import './Logo.css';

import logo from '../../images/logo.svg';

function Auth() {
    return(
        <img className='logo header__logo_auth' src={logo} alt='Logo' />
    )
}

export default Auth;