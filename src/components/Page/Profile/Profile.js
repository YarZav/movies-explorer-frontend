import './Profile.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProfileInput from './Input/ProfileInput';

function Profile() {
    const navigate = useNavigate();

    const [name, setName] = useState('Виталий');
    const [mail, setMail] = useState('mail@mail.ru');

    function editHandler() { }

    function signoutHandler() {
        navigate('/signin');
    }

    function nameChangeHandler(value) {
        setName(value);
     }

    function mailChangeHandler(value) { 
        setMail(value);
    }

    return(
        <div className='profile'>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <div>
                <ProfileInput text='Имя' type='text' value={name} onChange={nameChangeHandler} />
                <div className='profile__line'></div>
                <ProfileInput text='E-mail' type='email' value={mail} onChange={mailChangeHandler} />
            </div>
            <div className='profile__buttons'>
                <button className='profile__edit highlight' onClick={editHandler}>Редактировать</button>
                <button className='profile__signout highlight' onClick={signoutHandler}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default Profile;