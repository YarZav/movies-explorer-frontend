import Button from "../common/button/Button"

function HeaderAuth() {
    return (
        <div className='header__auth flex'>
            <Button text='Регистрация' type='header__button' />
            <Button bgColor='bg-green' text='Войти' type='header__button' />
        </div>
    )
}

export default HeaderAuth;