import './Signin.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input/Input';
import MainButton from '../MainButton/MainButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

function Signin(props) {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        // TODO: Signup api
    }

    function handleSignUp() {
        navigate("/signup");
    }

    return(
        <form className="signin" name="signin" onSubmit={handleSubmit} noValidate>
            <div>
                <Input className='mail' type='mail' title='E-mail' value={email} onChange={handleEmailChange} />
                <Input className='password' type='password' title='Пароль' value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <MainButton value={'Зарегистрироваться'}/>
                <SecondaryButton text='Ещё не зарегистрированы?' value='Регистрация' onChange={handleSignUp}/>
            </div>
        </form>
    )
}

export default Signin;