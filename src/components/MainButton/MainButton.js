import './MainButton.css';

function MainButton(props) {
    return(
        <input className='main-button highlight' type='submit' value={props.value} />
    )
}

export default MainButton;