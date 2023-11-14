import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderAuth from './HeaderAuth';

function Header() {
    return (
        <header className='header flex bg-dark-blue'>
            <HeaderLogo />
            <HeaderAuth />
        </header>
    )
}

export default Header;