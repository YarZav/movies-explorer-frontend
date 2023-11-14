import React from 'react';

function HeaderAuth() {
    return (
        <div className='header__auth flex'>
            <h6>Регистрация</h6>
            <h6 className='header__signin flex center text-black bg-green'>Войти</h6>
        </div>
    )
}

export default HeaderAuth;