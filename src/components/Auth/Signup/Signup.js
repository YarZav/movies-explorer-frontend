import './Signup.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthInput from '../Input/AuthInput';
import AuthMainButton from '../MainButton/AuthMainButton';
import SecondaryButton from '../SecondaryButton/AuthSecondaryButton';

import { unauthorisedApi } from '../../../utils/MainApi';
import { mainLocalStorage } from '../../../utils/MainLocalStorage';

function Signup(props) {
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
    const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passwordRegex = /^(?=.*\d).{8,}$/

    // Life circle

    React.useEffect(() => {
        setNameError('');
        setEmailError('');
        setPasswordError('');
    }, []);

    React.useEffect(() => {
        if (name.length === 0) {
            setNameError('');
        } else {
            nameRegex.test(name) ? setNameError('') : setNameError('Некорректное имя');
        }
        setIsSignupEnabled(isDataValid());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    React.useEffect(() => {
        if (email.length === 0) {
            setEmailError('');
        } else {
            emailRegex.test(email) ? setEmailError('') : setEmailError('Некорректная почта');
        }
        setIsSignupEnabled(isDataValid());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    React.useEffect(() => {
        if (password.length === 0) {
            setPasswordError('')
        } else {
            passwordRegex.test(password) ? setPasswordError('') : setPasswordError('Некорректный пароль');
        }
        setIsSignupEnabled(isDataValid());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password]);

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
            console.log(result);
            signin();
        })
        .catch(error => {
            console.log(error);
            showError(error);
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    function signin() {
        setIsLoading(true)

        unauthorisedApi.signin(email, password)
        .then(result => {
            mainLocalStorage.setJwt(result.token);
            props.onUser(result);
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
        if (window.confirm(error)) {
            signup();
        }
    }

    function isDataValid() {
        return nameRegex.test(name) && emailRegex.test(email) && passwordRegex.test(password)
    }

    // Actions

    function changeNameHandler(value) {
        setName(value);
    }

    function changeEmailHandler(value) {
        setEmail(value);
    }

    function changePasswordHandler(value) {
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