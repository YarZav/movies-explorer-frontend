import './Profile.css';

import ProfileInput from './Input/ProfileInput';
import Button from '../../Button/Button';

function Profile() {
    return(
        <div className='profile'>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <div>
                <ProfileInput text='Имя' type='text' value='Виталий' />
                <div className='profile__line'></div>
                <ProfileInput text='E-mail' texpe='mail' value='pochta@yandex.ru' />
            </div>
            <div className='profile__buttons'>
                <Button text='Редактировать' type='edit' />
                <Button text='Выйти из аккаунта' type='signout' />
            </div>
        </div>
    )
}

export default Profile;