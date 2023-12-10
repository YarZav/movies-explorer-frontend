import './Header.css';

import Content from '../Content/Content';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import profile from '../../images/profile.svg';

function Header(props) {
    function getType() {
        return props.isAuthed ? 'header-page' : 'header-main';
    }

    return (
        <Content type={getType()}>
            <header className='header'>
                <Logo />
                {
                    !props.isAuthed && <div className='header__auth'>
                        <Button text='Регистрация' />
                        <Button text='Войти' type='signin' />
                    </div>
                }
                {
                    props.isAuthed && <div className='header__movie-buttons'>
                        <Button text='Фильмы' type='movies' />
                        <Button text='Сохранённые фильмы' type='saved-movies' />
                    </div>
                }
                {
                    props.isAuthed && <div className='header__profile'>
                        <Button text='Аккаунт' type='profile' />
                        <div className='hedaer__profile-image-container'>
                            <img src={profile} alt='Profile' />
                        </div>
                    </div>
                }
            </header>
        </Content>
    )
}

export default Header;