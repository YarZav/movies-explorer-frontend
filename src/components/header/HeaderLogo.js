import React from 'react';

import headerLogo from '../../images/logo.svg';

function HeaderLogo() {
    return (
        <img className='header__logo' src={headerLogo} alt='Logo'></img>
    )
}

export default HeaderLogo;