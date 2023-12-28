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

    // Signup

    function submitHandler(event) {
        event.preventDefault();

        setIsLoading(true);

        unauthorisedApi.signup(name, email, password)
        .then(result => {
            navigate('/signin', { state: { email: result.email }});
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    // States

    function changeNameHandler(value) {
        setName(value);
    }

    function changeMailHandler(value) {
        setEmail(value);
    }

    function changePasswordHandler(value) {
        setPassowrd(value);
    }

    function signinHandler() {
        navigate('/signin');
    }

    return(
        <form className='signup' name='signin' onSubmit={submitHandler}>
            <div className='signup__input-container'>
                <AuthInput type='text' title='Имя' value={name} onChange={changeNameHandler} />
                <AuthInput type='email' title='E-mail' value={email} onChange={changeMailHandler} />
                <AuthInput type='password' title='Пароль' value={password} onChange={changePasswordHandler} />
            </div>
            <div className='signup__button-container'>
                <AuthMainButton value={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}/>
                <SecondaryButton description='Уже зарегистрированы?' value='Войти' onClick={signinHandler}/>
            </div>
        </form>
    )
}

export default Signup;