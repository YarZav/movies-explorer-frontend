import './AuthSecondaryButton.css';

function AuthSecondaryButton(props) {
    function handleClick(event) {
        event.preventDefault();

        props.onClick();
    }

    return(
        <div className='auth-secondary-button__container'>
             <p className='auth-secondary-button__description'>{props.description}</p>
            <input className='auth-secondary-button highlight' type='button' value={props.value} onClick={handleClick} />
        </div>
    )
}

export default AuthSecondaryButton;