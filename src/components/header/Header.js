import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderAuth from './HeaderAuth';

function Header() {
    return (
        <header className='header'>
            <HeaderLogo />
            <HeaderAuth />
        </header>
    )
}

export default Header;