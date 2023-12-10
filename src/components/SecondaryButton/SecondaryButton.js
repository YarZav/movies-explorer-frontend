import './SecondaryButton.css';

function SecondaryButton(props) {
    function handleOnChange(event) {
        event.preventDefault();

        props.onChange();
    }

    return(
        <div className='secondary-button__container'>
             <p className="secondary-button__text">{props.text}</p>
            <input className='secondary-button highlight' type='submit' value={props.value} onChange={handleOnChange} />
        </div>
    )
}

export default SecondaryButton;