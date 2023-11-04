import React from 'react';

import headerLogo from "../../images/header_logo.svg";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Header logo"></img>
            <div className="header__auth">
                <div className="header__signup">Регистрация</div>
                <div className="header__signin">
                    <span className="header__signin__text">Войти</span>
                </div>
            </div>
        </header>
    )
}

export default Header;