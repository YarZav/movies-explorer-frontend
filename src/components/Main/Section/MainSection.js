import './MainSection.css';

function MainSection(props) {
    return (
        <div className={`main-section main-section__${props.type}`}>
            {props.children}
        </div>
    )
}

export default MainSection;