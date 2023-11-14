import React from 'react';

function HeaderAuth() {
    return (
        <div className='header__auth flex'>
            <h6 className='highlight'>Регистрация</h6>
            <h6 className='header__signin flex center text-black bg-green highlight'>Войти</h6>
        </div>
    )
}

export default HeaderAuth;