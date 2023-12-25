import './Signin.css';

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import AuthInput from '../Input/AuthInput';
import AuthMainButton from '../MainButton/AuthMainButton';
import SecondaryButton from '../SecondaryButton/AuthSecondaryButton';

import { jwtKey } from '../../../utils/Constants';
import { unauthorisedApi } from '../../../utils/Api';

function Signin(props) {
    const navigate = useNavigate();
    const location = useLocation();

    const [isLoading, setIsLoading] = React.useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');

    // Use Effects

    React.useEffect(() => {
        if (location.state && location.state.email) {
            setEmail(location.state.email || '');
        }
    }, []);

    // Signin

    function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true)

        unauthorisedApi.signin(email, password)
        .then(result => {
            localStorage.setItem(jwtKey, result.token);
            props.onUser(result);
            navigate('/movies');
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    // States

    function handleChangeMail(value) {
        setEmail(value);
    }

    function handleChangePassword(value) {
        setPassowrd(value);
    }

    function handleSignup() {
        navigate('/signup');
    }

    return(
        <form className='signin' name='signin' onSubmit={handleSubmit}>
            <div className='signin__input-container'>
                <AuthInput type='email' title='E-mail' value={email} onChange={handleChangeMail} />
                <AuthInput type='password' title='Пароль' value={password} onChange={handleChangePassword} />
            </div>
            <div className='signin__button-container'>
                <AuthMainButton value={isLoading ? 'Вход...' : 'Войти'}/>
                <SecondaryButton description='Ещё не зарегистрированы?' value='Регистрация' onClick={handleSignup}/>
            </div>
        </form>
    )
}

export default Signin;