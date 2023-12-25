import './Profile.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProfileInput from './Input/ProfileInput';

import UserContext from '../../../context/UserContext';

import { authorisedApi } from '../../../utils/Api';

import { jwtKey } from '../../../utils/Constants';

function Profile() {
    const navigate = useNavigate();

    const user = React.useContext(UserContext);

    const [isLoading, setIsLoading] = React.useState(false);

    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Use Effects

    React.useEffect(() => {
        setTitle(user.name);
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    // Actions

    function editHandler() {
        setIsLoading(true);

        authorisedApi.patchUsersMe(name, email)
        .then(result => {
            setTitle(result.body.name);
            setName(result.body.name);
            setEmail(result.body.email);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false)
        });
     }

    function signoutHandler() {
        localStorage.removeItem(jwtKey);
        navigate('/signin');
    }

    // Use states

    function nameChangeHandler(value) {
        setName(value);
     }

    function mailChangeHandler(value) { 
        setEmail(value);
    }

    return(
        <div className='profile'>
            <h1 className='profile__title'>{`Привет, ${title}!`}</h1>
            <div>
                <ProfileInput text='Имя' type='text' value={name} onChange={nameChangeHandler} />
                <div className='profile__line'></div>
                <ProfileInput text='E-mail' type='email' value={email} onChange={mailChangeHandler} />
            </div>
            <div className='profile__buttons'>
                <button className='profile__edit highlight' onClick={editHandler}>{ isLoading ? 'Редактирование...' : 'Редактировать' }</button>
                <button className='profile__signout highlight' onClick={signoutHandler}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default Profile;