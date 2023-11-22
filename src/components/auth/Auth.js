import Signup from "./Signup";

import logo from '../../images/logo.svg';

function Auth() {
    return(
        <div className='auth'>
            <div className='auth__container'>
                <img className='header__logo header__logo_auth' src={logo} alt='Logo' />
                <h1 className='auth__title'>Добро пожаловать!</h1>
                <Signup />
            </div>
        </div>
    )
}

export default Auth;