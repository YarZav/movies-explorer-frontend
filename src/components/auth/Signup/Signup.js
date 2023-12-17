import './Signup.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthInput from '../Input/AuthInput';
import AuthMainButton from '../MainButton/AuthMainButton';
import SecondaryButton from '../SecondaryButton/AuthSecondaryButton';

function Signup() {
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassowrd] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChangeName(value) {
        setName(value);
    }

    function handleChangeMail(value) {
        setMail(value);
    }

    function handleChangePassword(value) {
        setPassowrd(value);
    }

    function handleSignin() {
        navigate('/signin');
    }

    return(
        <form className='signup' name='signin' onSubmit={handleSubmit} noValidate>
            <div className='signup__input-container'>
                <AuthInput type='text' title='Имя' value={name} onChange={handleChangeName} />
                <AuthInput type='email' title='E-mail' value={mail} onChange={handleChangeMail} />
                <AuthInput type='password' title='Пароль' value={password} onChange={handleChangePassword} />
            </div>
            <div className='signup__button-container'>
                <AuthMainButton value={'Войти'}/>
                <SecondaryButton description='Уже зарегистрированы?' value='Войти' onClick={handleSignin}/>
            </div>
        </form>
    )
}

export default Signup;