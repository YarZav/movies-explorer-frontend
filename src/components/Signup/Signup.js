import './Signup.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input/Input';
import MainButton from '../MainButton/MainButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

function Signup(props) {
    const navigate = useNavigate();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

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

        // TODO: Signup api
    }

    function handleSignIn() {
        navigate("/signin");
    }

    return(
        <form className="signup" name="signup" onSubmit={handleSubmit} noValidate>
            <div>
                <Input className='name' type='text' title='Имя' value={name} onChange={handleNameChange} />
                <Input className='mail' type='mail' title='E-mail' value={email} onChange={handleEmailChange} />
                <Input className='password' type='password' title='Пароль' value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <MainButton value={'Зарегистрироваться'}/>
                <SecondaryButton text='Уже зарегистрированы?' value='Войти' onChange={handleSignIn}/>
            </div>
        </form>
    )
}

export default Signup;