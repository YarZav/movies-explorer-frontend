import React from 'react';

import Content from '../common/content/Content';
import HeaderLogo from './HeaderLogo';
import HeaderAuth from './HeaderAuth';

function Header() {
    return (
        <Content backgroundColor='bg-dark-blue'>
            <header className='header flex center-v content-space-between'>
                <HeaderLogo />
                <HeaderAuth />
            </header>
        </Content>
    )
}

export default Header;