import './MainSection.css';

function MainSection(props) {
    return (
        <div className={`main-section main-section_${props.type}`}>
            {props.children}
        </div>
    )
}

export default MainSection;