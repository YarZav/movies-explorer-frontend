import './AuthInput.css';

function AuthInput(props) {
    function handleChange(event) {
        props.onChange(event.target.value)
    }

    return(
        <div className='auth-input__container'>
            <p className='auth-input__title'>{props.title}</p>
            <input 
                className={`auth-input`}
                type={props.type}
                name={props.type}
                value={props.value || ''}
                onChange={handleChange}
                required
            />
        </div>
    )
}

export default AuthInput;