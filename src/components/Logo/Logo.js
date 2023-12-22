import './Logo.css';

import { useNavigate } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Auth() {
    const navigate = useNavigate();

    function logoHandler() {
        navigate('/');
    }

    return(
        <button className='logo__button highlight' onClick={logoHandler}>
            <img className='logo header__logo_auth' src={logo} alt='Logo' />
        </button>
    )
}

export default Auth;