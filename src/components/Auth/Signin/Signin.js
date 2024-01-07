import './Signin.css';

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import AuthInput from '../Input/AuthInput';
import AuthMainButton from '../MainButton/AuthMainButton';
import SecondaryButton from '../SecondaryButton/AuthSecondaryButton';

import { unauthorisedApi } from '../../../utils/MainApi';
import { mainLocalStorage } from '../../../utils/MainLocalStorage';

function Signin(props) {
    const navigate = useNavigate();
    const location = useLocation();

    const [isLoading, setIsLoading] = React.useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [isSigninEnabled, setIsSigninEnabled] = useState(false);

    const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passwordRegex = /^(?=.*\d).{8,}$/

    // Use Effects

    React.useEffect(() => {
        setEmailError('');
        setPasswordError('');

        if (location.state && location.state.email) {
            setEmail(location.state.email || '');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (email.length === 0) {
            setEmailError('');
        } else {
            emailRegex.test(email) ? setEmailError('') : setEmailError('Некорректная почта');
        }
        setIsSigninEnabled(isDataValid());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    React.useEffect(() => {
        if (password.length === 0) {
            setPasswordError('');
        } else {
            passwordRegex.test(password) ? setPasswordError('') : setPasswordError('Некорректный пароль');
        }
        setIsSigninEnabled(isDataValid());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password]);

    // Signin

    function submitHandler(event) {
        event.preventDefault();

        if (isDataValid()) {
            signin();
        }
    }

    function signin() {
        setIsLoading(true)

        unauthorisedApi.signin(email, password)
        .then(result => {
            mainLocalStorage.setJwt(result.token);
            props.onUser();
            navigate('/movies');
        })
        .catch(error => {
            console.log(error);
            showError(error);
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    function showError(error) {
        window.alert(error);
    }

    function isDataValid() {
        return emailRegex.test(email) && passwordRegex.test(password)
    }

    // States

    function changeEmailHandler(value) {
        setEmail(value);
    }

    function changePasswordHandler(value) {
        setPassowrd(value);
    }

    function signupHandler() {
        navigate('/signup');
    }

    return(
        <form className='signin' name='signin' onSubmit={submitHandler}>
            <div className='signin__input-container'>
                <AuthInput 
                    type='email' 
                    title='E-mail'
                    value={email} 
                    error={emailError}
                    onChange={changeEmailHandler} 
                />
                <AuthInput 
                    type='password' 
                    title='Пароль' 
                    value={password} 
                    error={passwordError} 
                    onChange={changePasswordHandler} 
                />
            </div>
            <div className='signin__button-container'>
                <AuthMainButton 
                    value={isLoading ? 'Вход...' : 'Войти'}
                    disabled={!isSigninEnabled}
                />
                <SecondaryButton description='Ещё не зарегистрированы?' value='Регистрация' onClick={signupHandler}/>
            </div>
        </form>
    )
}

export default Signin;