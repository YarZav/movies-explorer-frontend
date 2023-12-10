import './Header.css';

import Content from '../Content/Content';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

function Header() {
    return (
        <Content type='header'>
            <header className='header'>
                <Logo />
                <div className='header__auth'>
                    <Button text='Регистрация' />
                    <Button text='Войти' type='signin' />
                </div>
            </header>
        </Content>
    )
}

export default Header;