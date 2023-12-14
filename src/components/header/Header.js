import './Header.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Content from '../Content/Content';
import Logo from '../Logo/Logo';

import profile from '../../images/profile.svg';

function Header(props) {
    const navigate = useNavigate();

    function getContentType() {
        return props.isAuthed ? 'header-page' : 'header-main';
    }

    function signupHandler() {
        navigate('/signup');
    }

    function signinHandler() { 
        navigate('/signin');
    }

    function moviesHandler() { 
        navigate('/movies');
    }

    function savedMoviesHandler() {
        navigate('/saved-movies');
    }

    function profileHandler() {
        navigate('/profile');
     }

    function getAuthButtons() {
        return !props.isAuthed && <div className='header__auth-buttons'>
            <button className='header__signup highlight' onClick={signupHandler}>Регистрация</button>
            <button className='header__signin highlight' onClick={signinHandler}>Войти</button>
        </div>
    }

    function getMoviesButtons() {
        return props.isAuthed && <div className='header__movies-buttons'>
            <button className='header__movies highlight' onClick={moviesHandler}>Фильмы</button>
            <button className='header__movies highlight' onClick={savedMoviesHandler}>Сохранённые фильмы</button>
        </div>
    }

    function getProfileButton() {
        return props.isAuthed && <div className='header__profile-button'>
            <button className='header__profile highlight' onClick={profileHandler}>Аккаунт</button>
            <div className='header__avatar'>
                <img src={profile} alt='Profile' />
            </div>
        </div>
    }

    return (
        <Content type={getContentType()}>
            <header className='header'>
                <Logo />
                { getAuthButtons() }
                { getMoviesButtons() }
                { getProfileButton() }
            </header>
        </Content>
    )
}

export default Header;