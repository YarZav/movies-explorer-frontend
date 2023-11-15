function Button(props) {
    return (
        <button className={`highlight ${props.textColor} ${props.bgColor} ${props.type}`}>
            {props.text}
        </button>
    )
}

export default Button;