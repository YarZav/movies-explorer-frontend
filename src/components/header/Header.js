import React from 'react';

import Content from '../common/content/Content';
import HeaderLogo from './HeaderLogo';
import HeaderAuth from './HeaderAuth';

function Header() {
    return (
        <Content type='header'>
            <header className='header'>
                <HeaderLogo />
                <HeaderAuth />
            </header>
        </Content>
    )
}

export default Header;