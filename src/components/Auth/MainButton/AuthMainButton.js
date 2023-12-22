import './AuthMainButton.css';

function AuthMainButton(props) {
    return(
        <input className='auth-main-button highlight' type='submit' value={props.value} />
    )
}

export default AuthMainButton;