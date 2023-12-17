import './Header.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Content from '../Content/Content';
import Logo from '../Logo/Logo';
import SideMenu from './SideMenu/SideMenu';
import HeaderProfile from './Profile/HeaderProfile';

import menu from '../../images/menu.svg';

function Header(props) {
    const navigate = useNavigate();

    const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

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
        closeSideMenuHandler();
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
            <HeaderProfile onClick={profileHandler}/>
        </div>
    }

    function getSideMenuButton() {
        return props.isAuthed && <button className='header__side-menu highlight' onClick={openSideMenuHandler}>
            <img src={menu} alt='Menu' />
        </button>
    }

    function closeSideMenuHandler() {
        setIsSideMenuOpened(false);
    }

    function openSideMenuHandler() {
        setIsSideMenuOpened(true);
    }

    return (
        <div>
            { isSideMenuOpened && <SideMenu onClose={closeSideMenuHandler}/> }
            <Content type={getContentType()}>
                <header className='header'>
                    <Logo />
                    { getMoviesButtons() }
                    { getProfileButton() }
                    { getAuthButtons() }
                    { getSideMenuButton() }
                </header>
            </Content>
        </div>
    )
}

export default Header;