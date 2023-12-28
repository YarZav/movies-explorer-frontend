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

    // Use Effects

    React.useEffect(() => {
        if (location.state && location.state.email) {
            setEmail(location.state.email || '');
        }
    }, []);

    // Signin

    function submitHandler(event) {
        event.preventDefault();

        setIsLoading(true)

        unauthorisedApi.signin(email, password)
        .then(result => {
            mainLocalStorage.setJwt(result.token);
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

    function changeMailHandler(value) {
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
                <AuthInput type='email' title='E-mail' value={email} onChange={changeMailHandler} />
                <AuthInput type='password' title='Пароль' value={password} onChange={changePasswordHandler} />
            </div>
            <div className='signin__button-container'>
                <AuthMainButton value={isLoading ? 'Вход...' : 'Войти'}/>
                <SecondaryButton description='Ещё не зарегистрированы?' value='Регистрация' onClick={signupHandler}/>
            </div>
        </form>
    )
}

export default Signin;