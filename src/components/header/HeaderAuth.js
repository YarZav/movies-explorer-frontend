import Button from "../common/button/Button"

function HeaderAuth() {
    return (
        <div className='header__auth'>
            <Button text='Регистрация' />
            <Button text='Войти' type='signin' />
        </div>
    )
}

export default HeaderAuth;