import './Profile.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProfileInput from './Input/ProfileInput';

import UserContext from '../../../context/UserContext';

import { authorisedApi } from '../../../utils/MainApi';
import { mainLocalStorage } from '../../../utils/MainLocalStorage';
import { moviesLocalStorage } from '../../../utils/MoviesLocalStorage';

function Profile() {
    const navigate = useNavigate();

    const user = React.useContext(UserContext);

    const [isLoading, setIsLoading] = React.useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [isProfileUpdateEnabled, setIsProfileUpdateEnabled] = useState(false);

    const nameRegex = /^([a-zA-Zа-яА-ЯёЁ-\s])+$/;
    const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const editButton = document.getElementsByClassName('.profile__edit');

    // Use Effects

    React.useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    React.useEffect(() => {
        updateEditButton();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    React.useEffect(() => {
        updateEditButton();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    // Actions

    function updateEditButton() {
        setIsProfileUpdateEnabled(isDataValid());
        editButton.disabled = isDataValid();
    }

    function editHandler() {
        if (!isDataValid()) {
            return;
        }
        
        setIsLoading(true);

        authorisedApi.patchUsersMe(name, email)
        .then(result => {
            user.name = result.data.name;
            user.email = result.data.email;
        })
        .catch(error => {
            console.log(error);
            showError(error);
        })
        .finally(() => {
            setIsLoading(false)
        });
    }

    function showError(error) {
        if (window.confirm(error)) {
            editHandler();
        }
    }

    function isDataValid() {
        const isCorrect = nameRegex.test(name) && emailRegex.test(email);
        const isDifferent = name !== user.name || email !== user.email;
        return isCorrect && isDifferent
    }

    function signoutHandler() {
        mainLocalStorage.removeJwt();
        moviesLocalStorage.removeData();
        navigate('/signin');
    }

    // Use states

    function nameChangeHandler(value) {
        setName(value);
        updateEditButton();
     }

    function mailChangeHandler(value) { 
        setEmail(value);
    }

    return(
        <div className='profile'>
            <h1 className='profile__title'>{`Привет, ${user.name}!`}</h1>
            <div>
                <ProfileInput text='Имя' type='text' value={name} onChange={nameChangeHandler} />
                <div className='profile__line'></div>
                <ProfileInput text='E-mail' type='email' value={email} onChange={mailChangeHandler} />
            </div>
            <div className='profile__buttons'>
                <button 
                    className={`profile__edit highlight ${isProfileUpdateEnabled ? '' : 'profile__edit_disabled'}`} 
                    onClick={editHandler}>{ isLoading ? 'Редактирование...' : 'Редактировать' }
                </button>
                <button className='profile__signout highlight' onClick={signoutHandler}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default Profile;