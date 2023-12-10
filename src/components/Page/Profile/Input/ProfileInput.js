import './ProfileInput.css';

function ProfileInput(props) {
    function changeHandler(event) {
        props.onChange(event.target.value);
    }

    return(
        <div className='profile-input__container'>
            <p className='profile-input__text'>{props.text}</p>
            <input 
                className='profile-input__input'
                type={`${props.type}`}
                id={`profile-input${props.type}`}
                name={`profile-input${props.type}`}
                value={props.value || ''}
                onChange={changeHandler} 
            />
        </div>
    )
}

export default ProfileInput;