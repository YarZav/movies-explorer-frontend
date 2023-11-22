import React from 'react';
import { useNavigate } from 'react-router-dom';

import SignupInput from './SignupInput';

function Signup(props) {
    const navigate = useNavigate();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true)

        // TODO: Signup api
    }

    function handleSignIn(event) {
        event.preventDefault();

        navigate("/signin");
    }

    return(
        <form className="signup" name="signup" onSubmit={handleSubmit} noValidate>
            <SignupInput className='name' type='text' title='Имя' value={name} onChange={handleNameChange} />
            <SignupInput className='mail' type='mail' title='E-mail' value={email} onChange={handleEmailChange} />
            <SignupInput className='password' type='password' title='Пароль' value={password} onChange={handlePasswordChange} />
            <input className='signup__button highlight' type='submit' value='Зарегистрироваться' />
            <div className='singup__signin__container'>
                <p className="signup__signin">Уже зарегистрированы?</p>
                <input className='singup__signin__button highlight' type='submit' value='Войти' onChange={handleSignIn} />
            </div>
        </form>
    )
}

export default Signup;