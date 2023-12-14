import './Signin.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthInput from '../Input/AuthInput';
import AuthMainButton from '../MainButton/AuthMainButton';
import SecondaryButton from '../SecondaryButton/AuthSecondaryButton';

function Signin(props) {
    const [mail, setMail] = useState('');
    const [password, setPassowrd] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChangeMail(value) {
        setMail(value);
    }

    function handleChangePassword(value) {
        setPassowrd(value);
    }

    function handleSignUp() {
        navigate('/signup');
    }

    return(
        <form className='signin' name='signin' onSubmit={handleSubmit} noValidate>
            <div className='signin__input-container'>
                <AuthInput type='email' title='E-mail' value={mail} onChange={handleChangeMail} />
                <AuthInput type='password' title='Пароль' value={password} onChange={handleChangePassword} />
            </div>
            <div className='signin__button-container'>
                <AuthMainButton value={'Войти'}/>
                <SecondaryButton description='Ещё не зарегистрированы?' value='Регистрация' onClick={handleSignUp}/>
            </div>
        </form>
    )
}

export default Signin;