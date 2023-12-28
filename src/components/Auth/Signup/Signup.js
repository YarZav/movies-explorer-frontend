import './Signup.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthInput from '../Input/AuthInput';
import AuthMainButton from '../MainButton/AuthMainButton';
import SecondaryButton from '../SecondaryButton/AuthSecondaryButton';

import { unauthorisedApi } from '../../../utils/MainApi';

function Signup() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [isSignupEnabled, setIsSignupEnabled] = useState(false);

    const nameRegex = /^([a-zA-Zа-яА-ЯёЁ-\s])+$/;
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    // Signup

    function submitHandler(event) {
        event.preventDefault();

        if (isDataValid) {
            signup();
        }
    }

    function signup() {
        setIsLoading(true);
        unauthorisedApi.signup(name, email, password)
        .then(result => {
            navigate('/signin', { state: { email: result.email }});
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
        if (window.confirm(error)) {
            signup();
        }
    }

    function isDataValid() {
        return nameRegex.test(name) && emailRegex.test(email) && passwordRegex.test(password)
    }

    // Actions

    function changeNameHandler(value) {
        if (!nameRegex.test(name)) {
            setNameError('Некорректное имя');
        } else {
            setNameError('');
        }

        setIsSignupEnabled(isDataValid());
        setName(value);
    }

    function changeEmailHandler(value) {
        if (!emailRegex.test(email)) {
            setEmailError('Некорректная почта');
        } else {
            setEmailError('');
        }

        setIsSignupEnabled(isDataValid());
        setEmail(value);
    }

    function changePasswordHandler(value) {
        if (!passwordRegex.test(password)) {
            setPasswordError('Некорректный пароль');
        } else {
            setPasswordError('');
        }

        setIsSignupEnabled(isDataValid());
        setPassowrd(value);
    }

    function signinHandler() {
        navigate('/signin');
    }

    return(
        <form className='signup' name='signin' onSubmit={submitHandler} noValidate>
            <div className='signup__input-container'>
                <AuthInput 
                    type='text' 
                    title='Имя' 
                    value={name} 
                    error={nameError} 
                    onChange={changeNameHandler} 
                />
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
            <div className='signup__button-container'>
                <AuthMainButton 
                    value={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                    disabled={!isSignupEnabled}
                />
                <SecondaryButton description='Уже зарегистрированы?' value='Войти' onClick={signinHandler}/>
            </div>
        </form>
    )
}

export default Signup;