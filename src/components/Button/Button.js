import './Button.css';

function Button(props) {
    function onClick() {
        props.onClick();
    }

    return (
        <button className={`button button_${props.type} highlight`} onClick={onClick}>
            {props.text}
        </button>
    )
}

export default Button;