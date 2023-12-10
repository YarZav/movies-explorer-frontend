import './Input.css';

function Input(props) {
    function changeHandler(event) {
        props.onChange(event.target.value);
    }

    return(
        <div className='input__container'>
            <p className='input__title'>{props.title}</p>
            <input 
                className={`input`}
                type={props.type}
                id={`${props.className}`}
                name={`${props.className}`}
                value={props.value || ''}
                onChange={changeHandler} 
                required
            />
        </div>
    )
}

export default Input;