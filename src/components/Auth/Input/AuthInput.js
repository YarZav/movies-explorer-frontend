import './AuthInput.css';

function AuthInput(props) {
    function changeHandler(event) {
        props.onChange(event.target.value)
    }

    return(
        <div className='auth-input__container'>
            <p className='auth-input__title'>{props.title}</p>
            <input 
                className={`auth-input ${props.error.length === 0 ? '' : 'auth-input_error'}`}
                type={props.type}
                name={props.type}
                value={props.value || ''}
                onChange={changeHandler}
                required
            />
            <p className='auth-input__error'>{props.error}</p>
        </div>
    )
}

export default AuthInput;