import './AuthMainButton.css';

function AuthMainButton(props) {
    return(
        <input 
            className={`auth-main-button highlight ${props.disabled ? 'auth-main-button_disabled' : ''}`}
            type='submit' 
            value={props.value}
            disabled = {props.disabled ? "disabled" : ""}
        />
    )
}

export default AuthMainButton;