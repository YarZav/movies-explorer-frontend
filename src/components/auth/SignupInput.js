function SignupInput(props) {
    function onChange(event) {
        props.onChange(event.target.value);
    }

    return(
        <div>
            <p className='signup__input__title'>{props.title}</p>
            <input 
                className={`signup__input login__input_${props.className}`}
                type={props.type}
                id={`signup${props.className}`}
                name={`signup${props.className}`}
                value={props.value || ''}
                onChange={onChange} 
                required
            />
        </div>
    )
}

export default SignupInput;