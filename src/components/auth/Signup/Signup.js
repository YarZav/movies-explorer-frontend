import './Signup.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input/AuthInput';
import MainButton from '../MainButton/AuthMainButton';
import SecondaryButton from '../SecondaryButton/AuthSecondaryButton';

function Signup(props) {
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

    function handleSignIn() {
        navigate('/signin');
    }

    return(
        <form className='signup' name='signup' onSubmit={handleSubmit}  noValidate>
            <div className='signup__input-container'>
                <Input type='text' title='Имя' value={name} onChange={handleChangeName} />
                <Input type='email' title='E-mail' value={mail} onChange={handleChangeMail} />
                <Input type='password' title='Пароль' value={password} onChange={handleChangePassword} />
            </div>
            <div className='signup__button-container'>
                <MainButton value={'Зарегистрироваться'}/>
                <SecondaryButton description='Уже зарегистрированы?' value='Войти' onClick={handleSignIn}/>
            </div>
        </form>
    )
}

export default Signup;