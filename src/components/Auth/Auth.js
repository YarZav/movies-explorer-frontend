import './Auth.css';

import Logo from '../Logo/Logo';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';

function Auth(props) {
    function getTitle(type) {
        const signin = type === 'signin' &&'Рады видеть!'
        const signup = type === 'signup' && 'Добро пожаловать!'
        return signin || signup
    }

    function userHandler(value) {
        props.onUser(value);
    }

    function getComponent(type) {
        const signin = type === 'signin' && <Signin onUser={userHandler} />
        const signup = type === 'signup' && <Signup onUser={userHandler} />
        return signin || signup
    }

    return(
        <div className='auth'>
            <div className='auth__container'>
                <Logo />
                <h1 className='auth__title'>{getTitle(props.type)}</h1>
                { getComponent(props.type) }
            </div>
        </div>
    )
}

export default Auth;