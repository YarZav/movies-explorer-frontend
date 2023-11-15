function Button(props) {
    return (
        <button className={`button button_${props.type} highlight`}>
            {props.text}
        </button>
    )
}

export default Button;